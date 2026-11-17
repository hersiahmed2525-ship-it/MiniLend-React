# MiniLend

MiniLend is a small React app for organizing borrowed items by category.

## Run locally

Install dependencies once:

```sh
npm install
```

Start the app and its JSON Server API together:

```sh
npm run dev:all
```

Vite serves the app at `http://localhost:5173`, and JSON Server serves the
database at `http://localhost:3001`. The starter data is in `db.json`.

Useful checks:

```sh
npm run lint
npm run build
```

## Project structure

```text
src/
  app/                 Application layout, navigation, and route table
  pages/               Home, About, not-found, and route-error pages
  features/
    home/              Home page sections
    categories/        Category pages, UI, hooks, and API operations
    cards/             Card pages, UI, hooks, and API operations
  shared/
    api/               Common HTTP request handling
    components/        UI shared between features and pages
    hooks/             Generic data-loading behavior
```

Feature-specific code lives with the feature that owns it. Shared code belongs
in `src/shared` only when it is actually reused. Read operations use feature
hooks; create, update, and delete operations use that feature's API module.
`apiClient.js` centralizes HTTP status handling so API errors reach the UI
instead of being silently treated as successful requests.

Cards currently reference their category by its name in `db.json`. As a result,
renaming a category also updates its cards, and deleting a category removes its
cards first.
