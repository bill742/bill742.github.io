# Agent Guidelines for bill742.github.io

## Build/Test/Lint Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Production build
- `npm run lint` - ESLint check
- `npm test` - Run all Playwright tests
- `npx playwright test tests/home.spec.ts` - Run single test file
- `npx playwright test -g "test name"` - Run specific test by name

## Code Style

- **TypeScript**: Strict mode enabled, use proper typing
- **Imports**: Use `@/*` path aliases, sorted with simple-import-sort plugin
- **Quotes**: Double quotes enforced
- **Formatting**: Prettier with Tailwind plugin, trailing commas (ES5)
- **Components**: Use React.memo() for performance, export as default
- **Types**: Define in `src/types/types.ts`, use camelCase for type names
- **File naming**: kebab-case for components, camelCase for utilities

## Architecture

- Next.js 15 with App Router, React 19, TypeScript, Tailwind CSS
- Components in `src/components/`, organized by feature/UI
- Use Radix UI components from `src/components/ui/`
- Environment variables prefixed with `NEXT_PUBLIC_`
- Tests use Playwright with accessibility testing via axe-core
