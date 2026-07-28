# Discovery Checklists

Read this reference when auditing or changing discovery behavior. Verify current platform-specific rules in first-party documentation; this file supplies durable implementation checks, not guarantees.

## Technical SEO baseline

First establish the preferred URL, response status, and indexability. Then, for each indexable canonical page, verify:

- A unique, human-readable title, useful meta description, clear primary heading, correct viewport/language, and a canonical URL that resolves successfully.
- `hreflang` only for genuine localized equivalents, with reciprocal mappings and `x-default` where appropriate.
- Alignment between robots directives, `noindex`, sitemap entries, and canonicalization. Do not restrict crawling or canonicalize speculatively.
- Accurate Open Graph metadata and a stable absolute social image where sharing matters.
- Readable stable paths, descriptive internal-link anchors, and meaningful image `alt` text without keyword stuffing.
- An XML sitemap limited to canonical, indexable URLs and referenced from `robots.txt`.

## Content and entity readiness

- Place a concise, accurate answer or definition immediately below the relevant heading; then explain evidence, scope, limitations, and next steps.
- Use logical headings and semantic HTML (`article`, `header`, `nav`, `main`, `section`), accessible links, useful lists, and genuinely comparable tables.
- Publish original research, primary data, implementation detail, expert analysis, or clearly attributed synthesis when appropriate. Cite credible sources with dates.
- Show genuine publication/modification dates and material update notes; never fabricate freshness.
- Build focused topic hubs with meaningful links rather than thin pages that target near-duplicate prompts.
- Provide accurate about/author pages, credentials, methodology, disclosures, and consistent organization/product names.

## Structured data

- Use JSON-LD as an accurate machine-readable representation of visible content.
- Select a type matching the page, such as `Organization`, `Person`, `WebSite`, `BreadcrumbList`, `Article`, `Product`, or `LocalBusiness`.
- Use stable `@id` values and only verifiable properties. Never invent credentials, affiliations, reviews, ratings, availability, prices, authors, dates, or FAQs.
- Keep JSON-LD server-rendered when practical and serialize it safely.
- Check syntax, Schema.org validity, and rich-result eligibility independently. Do not assume a schema type earns a rich result or AI citation.

## Rendering and performance

- Measure the actual bottleneck before optimizing LCP, INP, or CLS. Reserve media/embed dimensions, optimize the true LCP asset, and avoid unnecessary hydration or late layout changes.
- Keep important answers and links in accessible rendered HTML. Investigate client-only content, blocked resources, soft 404s, errors, redirects, and robots directives that impede discovery.
- In Next.js, prefer the Metadata API and route metadata files (`robots.ts`, `sitemap.ts`, `opengraph-image.*`). Inspect final route output because nested metadata can compose or override it.

## AI-crawler and answer-engine policy

Treat crawler access as a product, legal, privacy, and infrastructure decision—not a default optimization.

- Separate ordinary web-search access, named AI-crawler access, model-training use, and user-initiated retrieval/search; they can have distinct policies and controls.
- Before editing `robots.txt`, identify the exact user agent, verify current first-party documentation, understand existing directives, and obtain explicit authorization. Allowing a crawler does not guarantee inclusion or citation.
- Treat `llms.txt` as an emerging, non-universal convention. Offer it only as optional navigation/documentation, never as a replacement for accessible HTML, sitemap, robots.txt, or core SEO.
- Do not publish sensitive material or change crawler permissions, legal/privacy posture, or Search Console settings without authorization.

## Validation and monitoring

- Check representative status codes, redirect chains, rendered `<head>`, canonical URLs, robots directives, sitemap inclusion, semantic HTML, and indexability. Test both the preferred URL and at least one non-preferred URL when canonicalization or redirects change.
- Parse changed JSON-LD and use current official Google/Schema validators where relevant. Use real performance data before claiming Core Web Vitals improvements.
- Run the build, typecheck, lint, and relevant tests after implementation.
- For AI discovery, record a query set with date, locale, platform, answer, cited sources, and limitations; repeat over time to identify trends.
- Browse current primary documentation before stating platform-specific requirements, crawler names, bot behavior, or eligibility rules.
