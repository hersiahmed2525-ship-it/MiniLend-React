# MiniLend

MiniLend is a React app for keeping track of items lent to other people. You can
record an item, its borrower, category, and date; search existing lent items; view
lent item details; and remove a lent item when it is returned.

The interface uses Bootstrap 5 and Bootstrap Icons. Lent item data is provided by
JSON Server and stored in `db.json`.

## Requirements

- Node.js and npm

## Getting started

Install dependencies:

```sh
npm install
```

Start the API and Vite development server together:

```sh
npm run dev:all
```

Open `http://localhost:5173`. The JSON Server API runs at
`http://localhost:3001`.

You can also run the processes in separate terminals:

```sh
npm run server
npm run dev
```

The app loads lent items from `http://localhost:3001/cards`. The initial records,
along with category data, are in `db.json`.

## Features

- Home page with a current count of lent items.
- Lent items page with a form to add an item and cards for existing lent items.
- Search by item name, borrower, or category using the navbar search field.
- Lent item detail pages with the item, borrower, category, and date.
- Delete action for lent items.
- Responsive navigation and Bootstrap-based layouts.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/lends` | Lend list and add-lend form |
| `/lends/:id` | Lend details |
| `/about` | About MiniLend |
| Any other path | Not-found page |

## Project structure

```text
src/
  App.jsx                       Router and shared page layout
  main.jsx                      React entry point and Bootstrap imports
  components/
    Footer.jsx                  Shared footer
    LendCard.jsx                Lend summary card and actions
    LendForm.jsx                Form for creating a lend
    Navbar.jsx                  Navigation and lend search
    PageHeader.jsx              Shared page heading
  context/
    AppContext.jsx              Lend state and JSON Server requests
    AppContextValue.js           App context definition
    useApp.js                    Hook for reading app context
  pages/
    AboutPage.jsx                About page
    HomePage.jsx                 Home page
    LendDetailsPage.jsx          Lend detail route
    LendsPage.jsx                Lend list and form page
  utils/
    objectHelpers.js             Object validation and helper functions
db.json                         JSON Server data
```

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run server` | Start JSON Server on port 3001 |
| `npm run dev:all` | Start Vite and JSON Server together |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
