# Yokesh KS — Agent Guidance

## Project overview

Yokesh KS is a static personal website built with Astro 5, TypeScript, Tailwind
CSS v4, and selective React islands. It publishes pages and content for blog
posts, guides, experience, memories, projects, jobs, and resources.

- **Framework**: Astro 5 with static output, MDX, RSS, sitemap generation,
  Partytown, and React integration.
- **Styling**: Tailwind CSS v4 and project CSS under `src/styles/`.
- **Content**: Astro Content Layer collections defined in
  `src/content.config.ts`.
- **Site URL**: `https://www.yokesh.in`.

## Repository layout

- `src/pages/`: file-based route entry points, including content routes and
  `rss.xml.js`.
- `src/layouts/`: shared Astro layouts and SEO head composition.
- `src/components/`: reusable UI, layout, cards, and page-section components.
- `src/content/`: Markdown source for blog, guides, experience, memories,
  and projects.
- `src/content.config.ts`: collection loaders and frontmatter schemas.
- `src/config/`, `src/lib/`, `src/utils/`: site configuration, helpers,
  data access, and SEO utilities.
- `src/styles/`: global styles.
- `public/`: static public assets. Do not edit generated build output such as
  `.astro/` or `dist/`.

## Front door

For any meaningful engineering request, start with front-door triage:

- **Change work**: Use `agent-sop` for implementation, bug fixing,
  refactoring, or changes to architecture, tests, or QA expectations. Select
  the appropriate workflow: `codebase-summary`, `pdd`,
  `code-task-generator`, or `code-assist`.
- **Astro work**: Read and follow
  [`.agents/astro-framework/AGENTS.md`](.agents/astro-framework/AGENTS.md)
  before changing Astro components, routing, rendering, content collections,
  images, middleware, hydration, server islands, sessions, i18n, styling, or
  view transitions.
- **UI and UX work**: Use `web-design-guidelines` for requested UI, UX,
  accessibility, or web-interface reviews. Fetch the current guideline source
  before reviewing and report actionable `file:line` findings.
- **Improvement planning**: Use `improve` for codebase audits, improvement
  opportunities, product-direction exploration, or handoff plans. It is
  read-only on source code and must not implement a requested fix.
- **Review work**: Start review-first; prioritize functional regressions,
  content-schema changes, accessibility, SEO, and missing validation.
- **All other requests**: Use normal conversational or investigative behavior
  without forcing an SOP workflow.

If the request is ambiguous, ask one concise clarification.

## Development and validation

Run commands from the repository root with pnpm:

- `pnpm dev` — start the Astro development server.
- `pnpm check-types` — run TypeScript without emitting files.
- `pnpm lint` — run ESLint.
- `pnpm biome:ci` — run Biome checks.
- `pnpm build` — create a production build; run this when a production build
  is relevant to the change.

There is no configured test script. Do not claim a test suite ran unless one is
introduced or an explicit test command is supplied.

## Implementation rules

- Prefer Astro's server-first islands architecture. Add a `client:`
  directive only when browser-side interactivity requires it.
- Define component props with TypeScript interfaces, and use `class:list` for
  conditional classes in Astro components.
- Keep content collection changes synchronized: update the collection schema in
  `src/content.config.ts` whenever the corresponding Markdown frontmatter
  changes.
- Use Astro asset imports and `astro:assets` for local images; provide
  meaningful alt text.
- Follow Biome conventions: two-space indentation, single quotes, no
  semicolons, and a 120-character line width.
- Preserve the static deployment model unless an explicit task requires a
  rendering-mode or adapter change.

## Agent SOP outputs

Treat `output/` as transient workflow material. It is Git-ignored and must
not contain source-controlled project documentation:

- `output/summary/` — repository summaries and generated documentation.
- `output/planning/{project_name}/` — PDD research, design, and plans.
- `output/tasks/{project_name}/` — generated code task files.
- `output/scratchpad/{project_name}/` — code-assist working notes.
