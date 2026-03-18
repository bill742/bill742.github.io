# Claude Guidelines for bill742.github.io

## Code Style

- **TypeScript**: Strict mode enabled, use proper typing
- **Imports**: Use `@/*` path aliases, sorted with simple-import-sort plugin
- **Quotes**: Double quotes enforced
- **Semicolons**: Required
- **Formatting**: Prettier with Tailwind plugin, trailing commas (ES5)
- **Components**: Use React.memo() for performance, export as default
- **Types**: Define in `src/types/types.ts`, use camelCase for type names
- **File naming**: kebab-case for components, camelCase for utilities
- **Console**: Warn only — avoid leaving console.log in production code

## Architecture

- Next.js 16 with App Router (static export for GitHub Pages)
- React 19, TypeScript 5, Tailwind CSS 4
- Components in `src/components/`, organized by feature/UI
- Use shadcn/ui (Radix UI) components from `src/components/ui/` — this directory is excluded from linting
- Environment variables prefixed with `NEXT_PUBLIC_`
- Tests use Playwright with accessibility testing via axe-core

## Project Structure

- `src/app/` — Next.js App Router pages (homepage, blog, resume)
- `src/components/` — Reusable components grouped by feature
  - `homeSections/` — Homepage section components (intro, about, skills, portfolio, contact)
  - `resumeSections/` — Resume page components
  - `ui/` — shadcn/ui auto-generated primitives
- `src/content/` — MDX blog posts
- `src/lib/utils.ts` — `cn()` utility (clsx + tailwind-merge)
- `src/types/types.ts` — Shared TypeScript types
- `mdx-components.tsx` — Custom MDX component mappings
- `tests/` — Playwright test suite

## Themes

Three themes are supported: `light`, `dark`, and `8-bit`. Managed via next-themes with class-based switching. Root layout uses `suppressHydrationWarning`.

## Tailwind

Custom breakpoints: `sm: 480px`, `md: 768px`, `lg: 976px`, `xl: 1440px`. Use `cn()` from `src/lib/utils.ts` to merge classes. Use CVA (Class Variance Authority) for component variants.

## Environment Variables

Feature flags and config are controlled via environment variables:

- `NEXT_PUBLIC_SITE_URL` — Base URL
- `NEXT_PUBLIC_SITE_TITLE` — Page title
- `NEXT_PUBLIC_DISPLAY_PORTFOLIO` — Toggle portfolio section
- `NEXT_PUBLIC_DISPLAY_BLOG` — Toggle blog section
- `NEXT_PUBLIC_EMAIL_ADDRESS` — Contact email
- `NEXT_PUBLIC_GH_USERNAME` — GitHub username
- `NEXT_PUBLIC_LINKEDIN_USERNAME` — LinkedIn username
- `NEXT_PUBLIC_FORMSPREE_CODE` — Formspree contact form ID

## Blog

Blog posts are MDX files in `src/content/`. Dynamic routing is handled via `src/app/blog/[slug]/`. Post metadata lives in `src/app/blog/page.tsx`.

## Testing

Playwright tests are in `tests/`. Run with `npm run test`. Tests cover:
- Accessibility (axe-core) across all three themes
- Metadata validation
- Section rendering
- Contact form interaction

## Static Export

The site is statically exported (`output: "export"` in `next.config.ts`) for GitHub Pages hosting. There is no Node.js backend. Use a custom image loader (`imageLoader.js`) — avoid Next.js `<Image>` default loader assumptions.
