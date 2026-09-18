# Backend Development Notes — Node.js, Express, Databases & Production Backends

A complete, beginner-friendly **textbook + lab manual + project guide + interview
prep resource** for backend development with JavaScript.

You start knowing JavaScript. You finish able to design, build, test, containerise,
and deploy production-style REST APIs backed by MongoDB, MySQL or PostgreSQL.

Everything in this repository is written to answer eleven questions for every
concept:

> What is this? · Why do I need it? · How does it work? · How do I write it? ·
> Where do I write it? · How do I run it? · What output should I get? ·
> What happens internally? · When should I use it? · What mistakes should I avoid? ·
> How is it used in a real project?

---

## Table of contents

Legend: `[x]` written · `[ ]` planned/in progress. This index is the single source
of truth for what exists in the repository.

### 00 — Web & Backend Fundamentals (start here)

- [x] [01 — What Is Backend Development?](00-web-fundamentals/01-what-is-backend-development.md)
- [x] [02 — How the Web Works](00-web-fundamentals/02-how-the-web-works.md)
- [x] [03 — HTTP Basics](00-web-fundamentals/03-http-basics.md)
- [x] [04 — URLs, Endpoints and Routing](00-web-fundamentals/04-urls-endpoints-and-routing.md)
- [x] [05 — REST and API Design](00-web-fundamentals/05-rest-and-api-design.md)
- [x] [06 — JSON and Data Formats](00-web-fundamentals/06-json-and-data-formats.md)
- [x] [07 — Cookies, Sessions and State](00-web-fundamentals/07-cookies-sessions-and-state.md)
- [x] [08 — The Full Request Lifecycle](00-web-fundamentals/08-full-request-lifecycle.md)

### 01 — Node.js

- [x] [01 — Introduction to Node.js](01-nodejs/01-introduction.md)
- [x] [02 — JavaScript Prerequisites](01-nodejs/02-javascript-prerequisites.md)
- [x] [03 — Node.js Basics](01-nodejs/03-nodejs-basics.md)
- [x] [04 — Modules: CommonJS and ESM](01-nodejs/04-modules.md)
- [x] [05 — npm and package.json](01-nodejs/05-npm.md)
- [x] [06 — The fs Module](01-nodejs/06-filesystem.md)
- [x] [07 — The path Module](01-nodejs/07-path.md)
- [x] [08 — Events](01-nodejs/08-events.md)
- [x] [09 — Streams](01-nodejs/09-streams.md)
- [x] [10 — Buffers](01-nodejs/10-buffers.md)
- [x] [11 — The http Module](01-nodejs/11-http-module.md)
- [x] [12 — Asynchronous Programming](01-nodejs/12-async-programming.md)
- [x] [13 — Promises, async and await](01-nodejs/13-promises.md)
- [x] [14 — The Event Loop](01-nodejs/14-event-loop.md)
- [x] [15 — Environment Variables](01-nodejs/15-environment-variables.md)
- [x] [16 — Error Handling](01-nodejs/16-error-handling.md)
- [x] [17 — Debugging and Tooling](01-nodejs/17-debugging.md)
- [x] [18 — Project: JSON File CRUD API](01-nodejs/18-nodejs-project.md)

### 02 — Express.js

- [x] [01 — Introduction to Express](02-express/01-introduction.md)
- [x] [02 — Project Setup](02-express/02-project-setup.md)
- [x] [03 — Routing](02-express/03-routing.md)
- [x] [04 — HTTP Methods](02-express/04-http-methods.md)
- [x] [05 — Request and Response](02-express/05-request-response.md)
- [x] [06 — Params, Query and Body](02-express/06-params-query-body.md)
- [x] [07 — Middleware](02-express/07-middleware.md)
- [x] [08 — Error Handling](02-express/08-error-handling.md)
- [x] [09 — Routers](02-express/09-routers.md)
- [x] [10 — Controllers](02-express/10-controllers.md)
- [x] [11 — Services](02-express/11-services.md)
- [x] [12 — Validation](02-express/12-validation.md)
- [x] [13 — Authentication](02-express/13-authentication.md)
- [x] [14 — JWT](02-express/14-jwt.md)
- [x] [15 — Cookies and Sessions](02-express/15-cookies-sessions.md)
- [x] [16 — CORS](02-express/16-cors.md)
- [x] [17 — File Uploads](02-express/17-file-upload.md)
- [x] [18 — Security](02-express/18-security.md)
- [x] [19 — Testing](02-express/19-testing.md)
- [x] [20 — Production Architecture](02-express/20-production-architecture.md)
- [x] [21 — Project: Complete Express API](02-express/21-complete-express-project.md)

### 03 — Databases

**01-database-fundamentals**

- [x] [01 — Database Basics](03-databases/01-database-fundamentals/01-database-basics.md)
- [x] [02 — SQL vs NoSQL](03-databases/01-database-fundamentals/02-sql-vs-nosql.md)
- [x] [03 — CRUD, Queries and Transactions](03-databases/01-database-fundamentals/03-crud.md)
- [x] [04 — Relationships and Normalization](03-databases/01-database-fundamentals/04-relationships.md)
- [x] [05 — Transactions and ACID](03-databases/01-database-fundamentals/05-transactions.md)

**02-mongodb**

- [x] [01 — MongoDB Basics](03-databases/02-mongodb/01-mongodb-basics.md)
- [x] [02 — Installation and Setup](03-databases/02-mongodb/02-installation.md)
- [x] [03 — The MongoDB Shell](03-databases/02-mongodb/03-mongodb-shell.md)
- [x] [04 — Databases, Collections, Documents](03-databases/02-mongodb/04-databases-collections-documents.md)
- [x] [05 — CRUD Operations](03-databases/02-mongodb/05-crud.md)
- [x] [06 — Querying](03-databases/02-mongodb/06-querying.md)
- [x] [07 — Indexes](03-databases/02-mongodb/07-indexes.md)
- [x] [08 — Aggregation](03-databases/02-mongodb/08-aggregation.md)
- [x] [09 — Relationships and Schema Design](03-databases/02-mongodb/09-relationships.md)
- [x] [10 — MongoDB + Node.js Driver](03-databases/02-mongodb/10-mongodb-nodejs.md)
- [x] [11 — Introduction to Mongoose](03-databases/02-mongodb/11-mongoose.md)
- [x] [12 — Mongoose Models and Schemas](03-databases/02-mongodb/12-mongoose-models.md)
- [x] [13 — Mongoose Validation](03-databases/02-mongodb/13-mongoose-validation.md)
- [x] [14 — Mongoose Populate](03-databases/02-mongodb/14-mongoose-populate.md)
- [x] [15 — Mongoose Middleware and Virtuals](03-databases/02-mongodb/15-mongoose-middleware.md)
- [x] [16 — Mongoose Indexes](03-databases/02-mongodb/16-mongoose-indexes.md)
- [x] [17 — Project: MongoDB + Express API](03-databases/02-mongodb/17-mongodb-express-project.md)

**03-mysql**

- [x] [01 — MySQL Basics](03-databases/03-mysql/01-mysql-basics.md)
- [x] [02 — Installation and Setup](03-databases/03-mysql/02-installation.md)
- [x] [03 — Databases and Tables](03-databases/03-mysql/03-databases-tables.md)
- [x] [04 — SQL Basics](03-databases/03-mysql/04-sql-basics.md)
- [x] [05 — CRUD Statements](03-databases/03-mysql/05-crud.md)
- [x] [06 — Joins](03-databases/03-mysql/06-joins.md)
- [x] [07 — Subqueries](03-databases/03-mysql/07-subqueries.md)
- [x] [08 — Indexes and Query Performance](03-databases/03-mysql/08-indexes.md)
- [x] [09 — Constraints](03-databases/03-mysql/09-constraints.md)
- [x] [10 — Transactions](03-databases/03-mysql/10-transactions.md)
- [x] [11 — MySQL + Node.js Driver](03-databases/03-mysql/11-mysql-nodejs.md)
- [x] [12 — Connection Pooling](03-databases/03-mysql/12-connection-pooling.md)
- [x] [13 — ORM Introduction](03-databases/03-mysql/13-orm-introduction.md)
- [x] [14 — Sequelize](03-databases/03-mysql/14-sequelize.md)
- [x] [15 — Prisma](03-databases/03-mysql/15-prisma.md)
- [x] [16 — Project: MySQL + Express API](03-databases/03-mysql/16-mysql-express-project.md)

**04-postgresql**

- [x] [01 — PostgreSQL Fundamentals](03-databases/04-postgresql/01-postgresql-basics.md)
- [x] [02 — PostgreSQL vs MySQL](03-databases/04-postgresql/02-postgresql-vs-mysql.md)
- [x] [03 — PostgreSQL + Node.js](03-databases/04-postgresql/03-postgresql-nodejs.md)

**05-redis**

- [x] [01 — Redis Fundamentals](03-databases/05-redis/01-redis-basics.md)
- [x] [02 — Caching, TTL and Sessions](03-databases/05-redis/02-caching.md)
- [x] [03 — Rate Limiting, Queues and Pub/Sub](03-databases/05-redis/03-rate-limiting-queues-pubsub.md)

### 04 — Authentication & Security

- [x] [01 — Authentication Basics](04-authentication/01-authentication-basics.md)
- [x] [02 — Password Hashing](04-authentication/02-password-hashing.md)
- [x] [03 — JWT](04-authentication/03-jwt.md)
- [x] [04 — Access and Refresh Tokens](04-authentication/04-access-refresh-tokens.md)
- [x] [05 — OAuth 2.0](04-authentication/05-oauth.md)
- [x] [06 — Role-Based Access Control](04-authentication/06-role-based-access.md)

### 05 — Testing

- [x] [01 — Testing Basics](05-testing/01-testing-basics.md)
- [x] [02 — Jest and Vitest](05-testing/02-jest.md)
- [x] [03 — Supertest](05-testing/03-supertest.md)
- [x] [04 — API and Integration Testing](05-testing/04-api-testing.md)

### 06 — Docker

- [x] [01 — Docker Basics](06-docker/01-docker-basics.md)
- [x] [02 — Dockerising Node.js](06-docker/02-node-docker.md)
- [x] [03 — Express + Database with Compose](06-docker/03-node-express-db-docker.md)

### 07 — Deployment

- [x] [01 — Production Basics](07-deployment/01-production-basics.md)
- [x] [02 — Environment Variables and Secrets](07-deployment/02-environment-variables.md)
- [x] [03 — Deployment Walkthrough](07-deployment/03-deployment.md)
- [x] [04 — Production Checklist](07-deployment/04-production-checklist.md)

### 08 — Projects

- [x] [01 — REST API Without a Database](08-projects/01-rest-api/README.md)
- [x] [02 — Authentication API](08-projects/02-auth-api/README.md)
- [x] [03 — MongoDB + Express API](08-projects/03-mongodb-express/README.md)
- [x] [04 — MySQL + Express API](08-projects/04-mysql-express/README.md)
- [x] [05 — Full Production API](08-projects/05-full-production-api/README.md)

### 09 — Interview Preparation

- [x] [Node.js Interview Questions](09-interview/nodejs-interview.md)
- [x] [Express Interview Questions](09-interview/express-interview.md)
- [x] [MongoDB Interview Questions](09-interview/mongodb-interview.md)
- [x] [MySQL Interview Questions](09-interview/mysql-interview.md)
- [x] [Backend Scenario Questions](09-interview/backend-scenarios.md)

### Cheat sheets

- [x] [HTTP](cheatsheets/http-cheatsheet.md) · [x] [Node.js](cheatsheets/nodejs-cheatsheet.md) · [x] [npm](cheatsheets/npm-cheatsheet.md)
- [x] [Express](cheatsheets/express-cheatsheet.md) · [x] [MongoDB](cheatsheets/mongodb-cheatsheet.md) · [x] [MySQL](cheatsheets/mysql-cheatsheet.md)
- [x] [PostgreSQL](cheatsheets/postgresql-cheatsheet.md) · [x] [Redis](cheatsheets/redis-cheatsheet.md) · [x] [Docker](cheatsheets/docker-cheatsheet.md) · [x] [Git for backend work](cheatsheets/git-backend-cheatsheet.md)

### Reference

- [x] [Common Errors and How to Fix Them](common-errors/README.md)

---

## Version baseline used by these notes

Backend tooling moves fast, so every version-sensitive statement in these notes was
checked against the official sources in **September 2026**. When you follow along,
verify with `node --version` / `npm view <package> version` — but the *concepts* in
these notes stay valid across major versions.

| Tool | Version used in these notes | Status at time of writing | Notes |
| --- | --- | --- | --- |
| Node.js | **24.x** (Active LTS) | 22.x = Maintenance LTS, 26.x = Current | Odd majors 21/23/25 were never LTS. From v27 the odd/even split goes away — one major per year, every release becomes LTS. |
| npm | 11.x (bundled with Node 24) | — | Ships with Node; `npm init -y`, workspaces, `npm ci`. |
| Express | **5.2.x** | `latest` on npm since 5.1.0 (Mar 2025) | 4.x is in maintenance only. Express 5 adds async error handling, removes deprecated APIs, requires Node 18+. |
| MongoDB Server | **8.0 LTS** | 8.3 is the newest line | Driver supports servers 4.4+. |
| MongoDB Node.js driver | **7.x** | `latest` | Requires Node 20.19+. |
| Mongoose | **9.x** | `latest` | Built on driver 7.x. |
| mongosh | 2.x | `latest` | The modern shell; `mongo` is long gone. |
| MySQL | **8.4 LTS** | 9.x releases are "Innovation" (short-lived) | Use 8.4 LTS in production. |
| PostgreSQL | **18.x** | 18.0 Sept 2025, 19 in beta | |
| Redis | **8.x** | 8.2+ recommended | |
| Prisma | **6.x** | 7.x in development | v6.16+ ships the ESM-first `prisma-client` generator and a Rust-free engine. |
| Sequelize | 6.x | — | Still the classic ActiveRecord-style ORM for SQL. |
| Zod | **4.x** | Stable | `joi` remains a fine alternative. |
| Jest | **30.x** | — | Vitest 4.x is the modern alternative, especially for ESM projects. |
| Vitest | **4.x** | `latest` | | 
| Docker | Engine 27+/Compose v2 | — | `docker compose` (v2 syntax, no hyphen). |

**Deprecated things you will see in older tutorials** — these notes avoid them and
explain why:

- Callback-style APIs where a promise version exists (`fs.readFile` vs
  `fs.promises.readFile`).
- `request` and `request-promise` npm packages (unmaintained since 2020) — use the
  built-in `fetch`, `undici`, or `axios`.
- `body-parser` as a separate install — Express 5 has `express.json()` built in.
- `mongoose.connect(uri, { useNewUrlParser: true })` — those options were removed in
  Mongoose 6+.
- `mongo` shell → `mongosh`.
- `npm install --save` — saving is the default since npm 5.
- `bcrypt` compiled bindings issues → `bcryptjs` (pure JS) or better, `argon2`.
- `jsonwebtoken` "none" algorithm pitfalls and long-lived access tokens — see the
  auth section for the modern access + refresh pattern.

---

## How to use these notes

### If you are learning from zero

Read in folder order. Do not skip `00-web-fundamentals` — most beginner confusion in
backend development is actually confusion about HTTP, not about code. Type every
example by hand into a file, run it, and break it on purpose. Every chapter ends with
exercises and solutions in a collapsed section.

### If you already know some Node.js

Skim `01-nodejs/01`–`03`, then work through modules, async, the event loop, and error
handling carefully. Those four topics are where interviews and production bugs live.

### Suggested 12-week study plan

| Week | Focus |
| --- | --- |
| 1 | Web fundamentals, HTTP, REST, JSON (`00-*`) |
| 2–3 | Node.js basics, modules, npm, fs/path/events (`01-*` 01–08) |
| 4 | Streams, buffers, http module, build a server by hand |
| 5 | Async programming, promises, event loop, errors, debugging |
| 6 | Node.js project: JSON file CRUD API |
| 7–8 | Express: routing, middleware, validation, error handling, MVC |
| 9 | Databases: fundamentals + MongoDB + Mongoose |
| 10 | MySQL: SQL, joins, indexes, transactions, driver, Prisma |
| 11 | Authentication, security, testing, Redis |
| 12 | Docker, deployment, final project, interview questions |

### Conventions used throughout

- Code blocks are complete and runnable unless marked `// ...`.
- `$` starts a shell command; do not type the `$`.
- File paths are shown before the code, e.g. `src/server.js`.
- Lines marked `// ←` in examples are line-by-line annotations and are not something
  you must reproduce.
- Exercises are followed by a `Solution` block. Try first; the value is in failing
  once and understanding why.
- "Internally" boxes describe what the runtime/database actually does, which is what
  separates memorised answers from understanding.

---

## Repository verification

These notes are checked mechanically, not just proofread:

```bash
npm run verify          # syntax-check every JavaScript block + validate internal links
```

`scripts/verify-docs.mjs` walks every Markdown file in the repository and:

1. extracts each ```` ```js ````/```` ```javascript ````/```` ```jsx ```` style block,
2. syntax-checks it with `node --check` (ESM blocks are checked as `.mjs`,
   CommonJS blocks as `.cjs`), and
3. verifies that every relative Markdown link points at a file that exists.

This catches the most common documentation defect: code that looks right but would
throw `SyntaxError` on the reader's machine.

---

## License

Educational content. Use it, fork it, teach with it.
