# Technical and Product Decisions

## 2026-08-03 - Codex is the sole implementation agent

- **Decision:** Codex owns UI/UX, frontend, backend, security, testing, and deployment. Claude will not participate.
- **Reason:** The owner explicitly requested that Codex complete the project alone.
- **Alternatives:** Split frontend and backend work between Claude and Codex.
- **Agent:** Owner.
- **Consequences:** Task ownership and branch names use Codex only; reviews rely on automated checks and explicit self-review checkpoints.

## 2026-08-03 - Build a production-oriented platform in phases

- **Decision:** Build a real, expandable application rather than a disposable visual demo, beginning with a small public-site milestone.
- **Reason:** The roadmap includes inventory, availability, customer accounts, administration, sensitive uploads, and audit requirements.
- **Alternatives:** A static prototype or the entire platform in one pass.
- **Agent:** Codex, based on owner direction.
- **Consequences:** Phase boundaries, tests, and documentation are required; later capabilities must not force a rewrite.

## 2026-08-03 - Next.js and Supabase-oriented architecture

- **Decision:** Use Next.js App Router with strict TypeScript for the application. Plan for Supabase-managed PostgreSQL, authentication, and private storage, with Vercel as the preferred production host.
- **Reason:** This keeps the first production architecture compact while supporting SSR, relational data, authentication, row-level controls, and private media.
- **Alternatives:** Separate backend services; self-managed PostgreSQL; a static-only site.
- **Agent:** Codex.
- **Consequences:** External projects are not created until the owner approves account setup. Local mocks and environment templates are used first.

## 2026-08-03 - Administrator-approved rentals

- **Decision:** Customers submit rental requests; an administrator must approve each request before it can become confirmed.
- **Reason:** Owner requirement and the need to review fitting, inventory, and dates.
- **Alternatives:** Instant booking.
- **Agent:** Owner.
- **Consequences:** Availability shown to customers is provisional until the server rechecks it during approval and confirmation.

## 2026-08-03 - Shop-only fulfilment

- **Decision:** Dresses are collected and returned at the Hanwella shop. Delivery is disabled.
- **Reason:** Owner requirement.
- **Alternatives:** Delivery or courier fulfilment.
- **Agent:** Owner.
- **Consequences:** Checkout and operations must provide pickup/return instructions rather than addresses or delivery fees.

## 2026-08-03 - Initial payments are cash and bank transfer

- **Decision:** Do not integrate online card payments in the initial release.
- **Reason:** Owner selected cash and bank transfer.
- **Alternatives:** Online payment gateway.
- **Agent:** Owner.
- **Consequences:** Staff records and verifies payments. Bank account details remain private configuration/content until supplied.

## 2026-08-03 - English-first localization

- **Decision:** Ship English first while keeping routing, content, typography, and database structures ready for Sinhala and Tamil.
- **Reason:** Owner wants all three languages eventually without delaying the first milestone.
- **Alternatives:** Three complete languages in the initial release; English-only architecture.
- **Agent:** Owner and Codex.
- **Consequences:** No hard-coded assumptions that prevent later localization; untranslated Sinhala/Tamil pages are not exposed initially.
