# Studio template: Nuxt (Vue)

The starter Universal App Studio copies when someone picks **Nuxt (Vue)** while setting up a new project.

It's Nuxt's minimal starter (`npm create nuxt@latest -- --template minimal`) with type checks. It has one change: **the look comes from `design/tokens.json`**.

- `design/tokens.json` holds the colours, fonts, corners and spacing. Studio replaces it with the project's own design straight after copying this template.
- `design/adapters/` reads those tokens in this stack's own language. See `design/adapters/README.md` once Studio has added it, or the comments at the top of each adapter.
- Style everything from the tokens. Change the look in Studio, never by typing colours into the code.

## Running it

```
npm install
npm run dev
```

Open http://localhost:3000.

## Checks

```
npm run typecheck
npm run build
```

The same checks run on GitHub for every push and pull request (`.github/workflows/checks.yml`).
