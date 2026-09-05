# Alex Morrow Photography Portfolio

## Purpose and visual principles

An editorial React portfolio for human/documentary and landscape photography. Keep the experience calm, image-led, tactile, and original: warm white paper, near-black type, local photography, generous space, restrained motion, and no templated card chrome.

## Stack and map

- React + TypeScript + Vite + React Router; plain CSS in `src/styles.css`.
- `src/content/site.ts` is the single typed content source for identity, projects, journal, tags, and archive metadata.
- `src/main.tsx` contains the route views and shared layout.
- `public/images/` contains local JPEGs; `public/robots.txt` and `public/sitemap.xml` contain crawl metadata.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Content and images

Edit `src/content/site.ts` to replace the fictional `ALEX MORROW` identity, copy, projects, journal entries, and archive metadata. Add four images per project as `<slug>-01.jpg` through `<slug>-04.jpg` in `public/images/`; use descriptive English alt text and local, optimized JPEG/WebP assets. Keep source photographs outside the repository and never hotlink them.

## Accessibility and responsive expectations

Maintain semantic landmarks, one `h1` per page, skip link, visible focus, meaningful alt text, keyboard-operable filters and mobile menu, Escape-to-close and focus return, reduced-motion support, WCAG AA contrast, and no horizontal overflow. Preserve aspect ratios to avoid layout shift and lazy-load non-hero images.

## Documentation and Git

Update README.md for meaningful features or workflow changes, and update this file when durable project instructions change. Preserve unrelated changes, never commit secrets or force-push, and push only after checks pass. Feature work uses `codex/` branches.
