# portilla

A modern, responsive portfolio for IT development professionals, built with **Next.js (App Router)** and React.

> **About the name**: _Portilla_ means "small door" or "gateway" in Spanish, symbolizing the entry point to my professional profile and career journey in IT development.

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://herissonneves.github.io/portilla/)
[![GitHub Release](https://img.shields.io/github/v/release/herissonneves/portilla?style=for-the-badge)](https://github.com/herissonneves/portilla/releases)
[![License](https://img.shields.io/github/license/herissonneves/portilla?style=for-the-badge)](LICENSE)

**[View live demo](https://herissonneves.github.io/portilla/)**

## Features

- **Material Design 3** design tokens (CSS variables)
- **BEM** naming for maintainable styles
- **Responsive** layout and mobile navigation
- **i18n**: English, Portuguese (BR), Spanish (client-side switching)
- **Themes**: light / dark / system, with standard / medium / high contrast; preferences stored in `localStorage` and sync with system when no override is saved
- **SEO**: Next.js `metadata`, Open Graph, and Twitter cards (`app/layout.tsx`)
- **Fonts**: Roboto via `next/font/google`

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router)
- React 19
- TypeScript
- Global CSS (existing modular BEM styles under `css/`)

## Project structure

```text
portilla/
├── app/
│   ├── layout.tsx          # Root layout, metadata, global CSS imports, Roboto
│   └── page.tsx            # Home page → PortfolioApp
├── components/portfolio/   # Section components + client shell (PortfolioApp)
├── lib/
│   ├── i18n/               # Translation messages
│   └── theme/              # Theme helpers (contrast, system detection)
├── css/                    # Legacy modular stylesheets + MD3 theme variants
├── public/                 # Static files (e.g. og-image.png)
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Getting started

### Prerequisites

- Node.js 20+ (recommended)

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build (Node server or preview)

```bash
npm run build
npm start
```

### Static export (GitHub Pages)

This repo can be built as a static site with `basePath` set for the `/portilla` GitHub Pages URL.

```bash
npm run build:github-pages
```

The output is in `out/`. Publish the contents of `out/` to the `gh-pages` branch (or your Pages source).

Set `NEXT_PUBLIC_SITE_URL` to your real origin if it differs from the default in `app/layout.tsx` (used for `metadataBase` and social preview URLs).

**Vercel (default):** run `npm run build` without `GITHUB_PAGES`; leave `next.config.ts` as-is (no `output: 'export'`, no `basePath`).

## Customization

- **Copy and content**: React components in `components/portfolio/`
- **Strings**: `lib/i18n/translations.ts`
- **Colors / MD3 tokens**: `css/theme/*.css` and `css/base.css`
- **Social preview image**: add `public/og-image.png` (referenced in metadata)

## License

MIT — see [LICENSE](LICENSE).

## Author

**Herisson Neves**

- GitHub: [@herissonneves](https://github.com/herissonneves)
- Email: [herisson.carvalho96@gmail.com](mailto:herisson.carvalho96@gmail.com)
