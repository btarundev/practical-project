# Practical Web Development Lab

A hands-on collection of HTML, CSS, JavaScript, database, backend, and cloud experiments. The project is organized into focused folders so each topic can be opened and studied independently.

## Explore the project

| Collection | What it contains |
| --- | --- |
| [HTML exercises](html/index.html) | Headings, lists, tables, forms, media, iframes, semantic HTML, Bootstrap, responsive CSS, and portfolio examples |
| [CSS exercises](CSS/index.html) | CSS foundations, selectors, layouts, animation, SaaS components, dashboards, AI interfaces, and responsive UI |
| [JavaScript exercises](java/javascript/index.html) | 67 programming exercises plus DOM, events, forms, browser storage, and mini projects |
| [Java collection hub](java/index.html) | Entry point for JavaScript, MySQL, Node.js, and Supabase experiments |
| [MySQL code](java/mysql/schema.sql) | Database creation, constraints, CRUD, joins, views, procedures, triggers, and transactions |
| [Node.js API](java/nodejs/server.js) | Express server with middleware, validation, routing, and student CRUD endpoints |
| [Supabase schema](java/supabase/schema.sql) | PostgreSQL tables, row-level security, policies, and audit triggers |

## Quick start

1. Clone the repository:

   ```bash
   git clone https://github.com/btarundev/practical-project.git
   cd practical-project
   ```

2. Open the main [project index](index.html) in a browser.
3. Choose a collection and open its index page.

The HTML, CSS, and JavaScript pages work as static files. Some examples use external media, Bootstrap, Google Fonts, or public APIs, so an internet connection may be required for those features.

## Run the Node.js example

```bash
cd java/nodejs
npm install
npm start
```

The API starts at `http://localhost:3000` and includes:

- `GET /api/students`
- `GET /api/students/:id`
- `POST /api/students`
- `PUT /api/students/:id`
- `DELETE /api/students/:id`

## Use the MySQL examples

Open [schema.sql](java/mysql/schema.sql) in MySQL Workbench or the MySQL command-line client. The script demonstrates schema design, relationships, constraints, queries, joins, views, indexes, stored procedures, triggers, and transactions.

## Use the Supabase examples

1. Create a Supabase project.
2. Run [schema.sql](java/supabase/schema.sql) in the Supabase SQL Editor.
3. Configure the project URL and anon key through local environment variables.
4. Use [client.js](java/supabase/client.js) for CRUD, authentication, storage, and realtime examples.
5. Deploy [edge-function.ts](java/supabase/edge-function.ts) with the Supabase CLI when ready.

Never commit passwords, service-role keys, API keys, or other secrets.

## Project structure

```text
practical-project/
|- index.html                 Main project launcher
|- html/                      HTML practical exercises
|- CSS/                       CSS and modern SaaS UI exercises
|- java/
   |- index.html              Technology collection hub
   |- javascript/             JavaScript programs and browser labs
   |- mysql/                  SQL schema and database examples
   |- nodejs/                 Express backend example
   |- supabase/               Supabase SQL, client, and Edge Function examples
```

## License

This repository is intended for learning and practical experimentation.
