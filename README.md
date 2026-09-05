# Alex Morrow — Human & Landscape Photography

An editorial React portfolio for documentary photographs of people, landscape, and everyday life. The current identity and all photographs are fictional placeholders designed to be replaced from one content module.

## Stack

React, TypeScript, Vite, React Router, and plain CSS. No UI framework or remote font dependency.

## Setup

```bash
npm install
npm run dev       # local development
npm run lint      # TypeScript check
npm run build     # production build
npm run preview   # preview the build
```

## Routes

`/` portfolio grid · `/projects/:slug` series gallery · `/journal` notes index · `/journal/:slug` article · `/archive` filterable index · `/about` biography/contact · `*` not-found.

## Directory map

```text
src/content/site.ts  typed identity, projects, journal, archive
src/main.tsx         routes, shared layout, accessible interactions
src/styles.css       responsive editorial design system
public/images/       local project and portrait JPEGs
public/robots.txt    crawler rules
public/sitemap.xml   known public routes
```

## Replacing the placeholder identity

Edit the `site` object in `src/content/site.ts` to replace `ALEX MORROW`, descriptor, metadata, email, Instagram URL, and description. Update the About page copy in the same file/component and remove the placeholder note once the real identity is supplied. The `.example` email is intentionally fictional.

## Replacing photographs

Replace the files in `public/images/` without changing their predictable names, or update the image objects in `src/content/site.ts`. Use efficient local JPEG or WebP derivatives, preserve aspect ratios, and write specific English alt text describing the visible subject and context. Keep original source files outside the repository. A cover should be portrait-friendly (roughly 9:13); gallery images can be landscape or portrait.

## Adding content

Add one project object to `projects` with a unique slug, four image objects, category, year, location, tags, introduction, and alt text. Routing, previous/next links, and archive results derive from that data. Add journal entries to `journal` with their date, year, tags, summary, and body paragraphs.

## Accessibility and performance

The app includes a skip link, semantic landmarks, visible keyboard focus, an accessible mobile dialog with Escape handling and focus return, keyboard-operable archive filters, live result counts, reduced-motion support, lazy-loaded non-hero images, fixed aspect ratios, and local metadata assets. Check the public routes at narrow and wide widths before shipping.

## Deployment and Git workflow

The repository includes `.github/workflows/deploy-pages.yml`. Enable GitHub Pages in repository Settings → Pages with **GitHub Actions** as the source; every push to `main` builds and deploys `dist/` automatically. The workflow sets the `/example/` base path and copies `index.html` to `404.html` so client-side routes remain usable on refresh. For another static host, run `npm run build` and deploy `dist/` with SPA fallback; set `VITE_BASE=/` if it is served at a domain root. Work on a `codex/` feature branch, review `git diff`, stage only task files, run lint/build, commit with a focused message, and push with upstream tracking. Never force-push or commit credentials.
