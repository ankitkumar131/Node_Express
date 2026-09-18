#!/usr/bin/env node
/**
 * verify-docs.mjs — mechanical quality gate for the backend notes repository.
 *
 * It performs three checks:
 *   1. JavaScript syntax check for every ```js / ```javascript / ```mjs / ```cjs
 *      code block in every Markdown file (using `node --check`).
 *   2. Broken relative link check for every Markdown link to a local file.
 *   3. A summary report: files, lines, code blocks checked.
 *
 * Usage:
 *   node scripts/verify-docs.mjs              # all checks
 *   node scripts/verify-docs.mjs --links-only # only links
 *   node scripts/verify-docs.mjs --code-only  # only code
 *
 * Exit code 1 when problems are found, so it can be used in CI.
 */

import { readdir, readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import path from 'node:path';
import os from 'node:os';

const execFileAsync = promisify(execFile);

const ROOT = process.cwd();
const IGNORED_DIRS = new Set(['.git', 'node_modules', '.arena', 'dist', 'build']);
const CODE_LANGS = new Set(['js', 'javascript', 'mjs', 'cjs']);
const TMP_DIR = path.join(os.tmpdir(), `notes-verify-${process.pid}`);

const args = new Set(process.argv.slice(2));
const CODE_ONLY = args.has('--code-only');
const LINKS_ONLY = args.has('--links-only');

/** Recursively collect every Markdown file, newest-friendly ordering. */
async function collectMarkdownFiles(dir, acc = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (IGNORED_DIRS.has(entry.name)) continue;
      await collectMarkdownFiles(path.join(dir, entry.name), acc);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      acc.push(path.join(dir, entry.name));
    }
  }
  return acc;
}

/** Split a Markdown document into fenced code blocks with their start line. */
function extractCodeBlocks(markdown) {
  const lines = markdown.split('\n');
  const blocks = [];
  let inside = false;
  let fenceLang = '';
  let fenceMarker = '';
  let startLine = 0;
  let buffer = [];

  lines.forEach((line, index) => {
    const fence = line.match(/^\s*(`{3,}|~{3,})\s*([\w-]*)/);
    if (!inside && fence) {
      inside = true;
      fenceMarker = fence[1][0];
      fenceLang = (fence[2] || '').toLowerCase();
      startLine = index + 2; // 1-based line of the first code line
      buffer = [];
      return;
    }
    if (inside && fence && fence[1][0] === fenceMarker) {
      inside = false;
      blocks.push({ lang: fenceLang, code: buffer.join('\n'), line: startLine });
      return;
    }
    if (inside) buffer.push(line);
  });

  return blocks;
}

/**
 * Some snippets are deliberately partial (they are fragments such as a single
 * function signature or an object literal). They are marked with
 * `// snippet: partial` in the first line, or they are shorter than 3 lines.
 * Those are skipped for the syntax check but still counted.
 */
function isPartialSnippet(block) {
  const firstLine = block.code.trimStart().split('\n')[0] ?? '';
  return (
    /snippet:\s*partial/i.test(block.code) ||
    /^\s*\/\/\s*\.\.\.\s*$/.test(firstLine) ||
    block.code.split('\n').filter((l) => l.trim()).length < 3
  );
}

/**
 * A snippet may be either CommonJS or ESM, and the fence language does not always
 * say which (a `js` block may legitimately use `import` or top-level `await`).
 * So we try the plausible module formats and accept the block if ANY of them
 * parses. This mirrors reality: the reader can save the block either way.
 */
function candidateExtensions(block) {
  if (block.lang === 'mjs') return ['.mjs'];
  if (block.lang === 'cjs') return ['.cjs'];
  const usesEsmSyntax = /^\s*(import|export)\s/m.test(block.code);
  const usesTopLevelAwait = /^(?!.*\bfunction\b)[\s\S]*^\s*(?:const|let|var)?.*\bawait\b/m.test(
    block.code
  );
  return usesEsmSyntax || usesTopLevelAwait ? ['.mjs', '.cjs'] : ['.cjs', '.mjs'];
}

async function checkCodeBlocks(files) {
  await mkdir(TMP_DIR, { recursive: true });
  const problems = [];
  let checked = 0;
  let skipped = 0;
  let total = 0;

  for (const file of files) {
    const markdown = await readFile(file, 'utf8');
    const blocks = extractCodeBlocks(markdown);
    let blockIndex = 0;

    for (const block of blocks) {
      if (!CODE_LANGS.has(block.lang)) continue;
      total += 1;
      blockIndex += 1;

      if (isPartialSnippet(block)) {
        skipped += 1;
        continue;
      }

      const candidates = candidateExtensions(block);
      const errors = [];
      let passed = false;

      for (const ext of candidates) {
        const tmpFile = path.join(
          TMP_DIR,
          `${path.basename(file)}-${blockIndex}${ext}`
        );
        await writeFile(tmpFile, block.code, 'utf8');
        try {
          await execFileAsync(process.execPath, ['--check', tmpFile], {
            timeout: 10_000,
          });
          passed = true;
          break;
        } catch (error) {
          const message = String(error.stderr || error.message)
            .split('\n')
            .filter((l) => l.trim())
            .slice(0, 3)
            .join(' ')
            .trim();
          errors.push(`${ext}: ${message}`);
        }
      }

      if (passed) {
        checked += 1;
      } else {
        problems.push({
          file: path.relative(ROOT, file),
          line: block.line,
          message: errors.join(' | '),
        });
      }
    }
  }

  await rm(TMP_DIR, { recursive: true, force: true });
  return { problems, checked, skipped, total };
}

/** Validate that relative links point to files/directories that exist. */
async function checkLinks(files) {
  const problems = [];
  let checked = 0;

  for (const file of files) {
    const markdown = await readFile(file, 'utf8');
    const dir = path.dirname(file);
    const lines = markdown.split('\n');

    lines.forEach((line, index) => {
      const linkRegex = /\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
      let match;
      while ((match = linkRegex.exec(line)) !== null) {
        const target = match[1];
        if (/^(https?:|mailto:|#|\/)/.test(target)) continue; // external or anchor
        const clean = target.split('#')[0].split('?')[0];
        if (!clean) continue;
        checked += 1;
        const resolved = path.resolve(dir, decodeURIComponent(clean));
        if (!existsSync(resolved)) {
          problems.push({
            file: path.relative(ROOT, file),
            line: index + 1,
            message: `broken link -> ${target}`,
          });
        }
      }
    });
  }

  return { problems, checked };
}

function report(title, problems) {
  if (problems.length === 0) {
    console.log(`  ✅ ${title}: no problems`);
    return;
  }
  console.log(`  ❌ ${title}: ${problems.length} problem(s)`);
  for (const problem of problems.slice(0, 40)) {
    console.log(`     ${problem.file}:${problem.line} — ${problem.message}`);
  }
  if (problems.length > 40) {
    console.log(`     ...and ${problems.length - 40} more`);
  }
}

async function main() {
  const started = Date.now();
  const files = (await collectMarkdownFiles(ROOT)).sort();
  console.log(`\nVerifying ${files.length} Markdown files in ${ROOT}\n`);

  let failed = false;

  if (!LINKS_ONLY) {
    const { problems, checked, skipped, total } = await checkCodeBlocks(files);
    console.log(
      `Code blocks: ${total} found, ${checked} syntax-checked, ${skipped} skipped (partial)`
    );
    report('JavaScript syntax', problems);
    if (problems.length) failed = true;
  }

  if (!CODE_ONLY) {
    const { problems, checked } = await checkLinks(files);
    console.log(`Links: ${checked} relative link(s) checked`);
    report('Relative links', problems);
    if (problems.length) failed = true;
  }

  const elapsed = ((Date.now() - started) / 1000).toFixed(1);
  console.log(`\nDone in ${elapsed}s — ${failed ? 'FAILED' : 'ALL CHECKS PASSED'}\n`);
  process.exit(failed ? 1 : 0);
}

main().catch((error) => {
  console.error('verify-docs failed to run:', error);
  process.exit(1);
});
