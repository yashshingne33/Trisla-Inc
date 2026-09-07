# Trisla Inc Exports — React App

A React (Vite) rebuild of the Trisla Inc Exports B2B tobacco trading site,
preserving all content, styling, and functionality from the static HTML version,
including your local image swaps in `public/assets/` and your CSS/copy edits.

## Getting started in VS Code

1. Open this folder in VS Code (`File → Open Folder`).
2. Open a terminal (`Ctrl+\``) and install dependencies:
   ```
   npm install
   ```
3. Start the dev server:
   ```
   npm run dev
   ```
4. Open the URL it prints (usually `http://localhost:5173`).

The dev server hot-reloads on save — no "Go Live" button needed, and no
directory-listing issue like Live Server had, since Vite always serves the
app directly at the root.

## Building for production (the "dist" folder)

When you're ready to deploy:
```
npm run build
```
This generates a `dist/` folder containing the final static site (HTML, CSS,
JS, and assets) — that `dist/` folder is what you upload to your host
(Netlify, Vercel, GitHub Pages, cPanel, etc.). Re-run `npm run build` any
time you make changes and want to update the live site; it always
regenerates `dist/` fresh, so just re-upload it.

To preview the production build locally before deploying:
```
npm run preview
```

## Project structure

```
src/
  components/     Header, Footer, AgeGate, ProductCard, AnimatedStat, Layout
  context/        RfqContext — shared Request-for-Quote list across pages
  data/           products.js — single source of truth for all 6 product categories
  pages/          Home, About, Products, ProductDetail, Quality, Exports,
                  Contact, Onboarding, Rfq, NotFound
  utils/          cookie.js — age-gate persistence (30-day cookie, same as before)
  index.css       your full stylesheet, including your dark-select-option fix
public/
  assets/         your local product photography (beedi.jpg, smoking-mixture.jpg,
                  chewing-tobacco.jpg, tobacco-leafs.jpg)
```

## What's preserved from your version

- Your hero headline edit ("Sssecuring the global tobacco supply chain...")
- Your local image swaps (smoking mixture, beedi, chewing tobacco, and the
  tobacco-leaf image reused for both the homepage story section and the
  Tobacco Extract product)
- Your CSS fix for dark dropdown option text in the age gate
- The age gate, RFQ add/remove flow, multi-step onboarding form, and
  animated stats all work the same as before — just via React state instead
  of vanilla DOM manipulation.

## Notes

- Product detail pages are now one dynamic route (`/products/:slug`) driven
  by `src/data/products.js` instead of six separate HTML files — edit specs,
  capabilities, or images for any product in one place.
- Forms (Contact, Onboarding, RFQ) still only simulate submission in the
  browser. Wire them to a real email/CRM endpoint before going live.
- `meta name="robots" content="noindex, nofollow"` is still a placeholder —
  update it before this goes to a real domain.
