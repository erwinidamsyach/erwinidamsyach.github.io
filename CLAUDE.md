# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev           # Start dev server at localhost:3000
pnpm build         # Build for production
pnpm preview       # Preview production build
pnpm lint          # Run ESLint
pnpm typecheck     # Run TypeScript type checking
pnpm generate:deploy  # Generate static site and deploy to GitHub Pages
```

## Architecture

This is a **Nuxt 4 portfolio site** deployed as a static site to GitHub Pages. SSR is disabled (`ssr: false`), targeting static output with `nitro` preset `github-pages`.

### Key modules
- **@nuxt/content** — content management via Markdown + YAML files in `content/`
- **@nuxt/ui** — UI component library; primary color is `lime`, neutral is `neutral` (configured in `app/app.config.ts`)
- **@nuxt/image** — image handling (provider set to `none` for static hosting)
- **nuxt-studio** — Nuxt Studio integration

### Content structure (`content/`)
Content is organized into collections queried via `queryCollection()`:
- `content/data.yaml` — site-wide metadata: owner info, section labels, contact details
- `content/works/*.md` — featured/professional work projects
- `content/personal/*.md` — personal side projects
- `content/blog/*.md` — blog posts

Each work/personal Markdown file uses frontmatter fields: `title`, `client`, `tech` (array), `image` (optional).

### App structure (`app/`)
- `app/app.vue` — root component with SEO/head setup via `useHead` and `useSeoMeta`
- `app/layouts/default.vue` — wraps all pages; max-width `3xl`, centered, with `AppNavbar`
- `app/pages/index.vue` — home page; fetches `data`, `works`, and `personal` collections; renders work cards with a `UModal` using `ContentRenderer` for markdown body
- `app/pages/blog/index.vue` — blog listing
- `app/pages/blog/[...slug].vue` — individual blog post
- `app/components/AppNavbar.vue` — sticky floating pill-style navbar with Home/Blog links and dark mode toggle

### Styling conventions
- Tailwind via `@nuxt/ui`; dark mode supported throughout
- Global CSS in `assets/css/main.css`
- Icons use Iconify sets: `lucide` and `simple-icons` (referenced as `i-lucide-*` / `i-simple-icons-*`)

### Deployment
Static site generated and deployed to GitHub Pages via `gh-pages`. The `generate:deploy` script handles both steps.
