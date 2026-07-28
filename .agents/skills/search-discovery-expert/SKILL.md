---
name: search-discovery-expert
description: Audit, plan, and safely implement technical SEO and AI-search discoverability for websites and web apps. Use for metadata, canonicals, robots.txt, sitemaps, structured data, crawlability, rendered content, performance, answer-engine optimization (AEO), AI-crawler policy, or LLM citation readiness.
---

# Search Discovery Expert

Improve the likelihood that people, search engines, and AI search products can find, understand, and accurately represent a site. Do not promise rankings, indexing, citations, crawler access, rich results, or model use: those outcomes depend on dynamic, partly undisclosed systems.

Use this skill for discovery-focused work; do not use it as a substitute for general copywriting, analytics implementation, or a broad frontend refactor with no discovery outcome. Pair it with the repository's frontend or backend guidance when changing application code.

## Route the request

- **Audit or review:** inspect first; do not modify source files unless the user also asks for implementation.
- **Plan:** identify verified defects, assumptions, ownership-dependent decisions, and a prioritized smallest-change path.
- **Implementation:** inspect the deployed/rendered behavior first, change only the requested scope, and validate the final output.
- **Crawler permissions, Search Console, legal/privacy posture, or external platform settings:** identify the exact target and trade-offs, then request explicit authorization before changing anything.

## Workflow

1. Establish the target audience, URLs, framework, canonical host, locale strategy, queries, ownership, and whether the work is an audit, plan, or implementation.
2. Establish the current behavior from rendered responses and configuration—not only source components. Check status and redirects, `<head>`, canonical/indexing directives, robots.txt, sitemap, semantic content, internal links, JSON-LD, performance, and entity/author information.
3. Classify findings as indexing/crawlability, technical SEO, content comprehension, trust/entity signals, performance, or AI-discovery hypotheses. Mark each as verified, inferred, or hypothesis.
4. Make the smallest truthful and compatible change. Preserve established URL and metadata conventions unless an intentional migration is designed and tested.
5. Validate in the rendered output, run project checks, and use current first-party documentation/tools for platform-specific claims. Define monitoring rather than treating a one-off search response as proof.

## Reference

Read [references/discovery-checklists.md](references/discovery-checklists.md) before auditing or implementing SEO, structured data, rendering/performance, or AI-crawler changes. It supplies the detailed checklist and validation sequence; use current first-party documentation when a requirement may have changed.

## Audit output

Report each finding with:

| Priority | Evidence | Discovery effect | Smallest safe action | Proof |
| --- | --- | --- | --- | --- |
| Critical / High / Medium / Low | URL, rendered markup, or file:line | Indexing, comprehension, trust, performance, or measurement | Specific change | Exact validation or monitoring step |

State whether each conclusion is verified, inferred, or a hypothesis. Do not label ordinary SEO gains as proven AI-discovery gains. For an audit-only request, stop after the report.

For implementation requests, finish with:

```markdown
## Discovery changes
- [file:line] What changed and why.

## Validation
- Passed: exact local checks and rendered-response checks.
- Pending: owner-only or deployed checks, with the exact tool/query.

## Expected outcome
Probabilistic discovery benefit; no ranking, citation, or indexing guarantee.
```

## Common requests

- **“Add metadata to this Next.js route.”** Inspect inherited metadata and the rendered `<head>`; implement route-level metadata; verify the canonical URL and social preview values.
- **“Can AI search cite our docs?”** Audit access, answer-first structure, source quality, entities, and rendered content; report hypotheses separately from verified defects.
- **“Allow an AI crawler.”** Identify the exact bot, current first-party policy, existing directives, and authorization; make no change until the trade-offs are explicit.

## Guardrails

- Never fabricate citations, testimonials, expert credentials, research, update dates, hidden content, or schema properties.
- Never use cloaking, deceptive structured data, keyword stuffing, or automated low-value content generation.
- Respect copyright, consent, privacy, paywalls, robots policies, and user authorization.
