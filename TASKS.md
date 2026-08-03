# Project Task Board

| ID | Description | Agent | Status | Branch | Files affected | Dependencies | Acceptance criteria |
|---|---|---|---|---|---|---|---|
| P0-01 | Repository assessment and owner-decision capture | Codex | Completed | local foundation | Project documents | Master prompt and owner answers | Current state and confirmed rules documented |
| P0-02 | Collaboration and handoff documentation | Codex | Completed | local foundation | `AGENTS.md`, `CLAUDE.md`, `TASKS.md`, `DECISIONS.md`, `HANDOFF.md` | P0-01 | Codex ownership and future contributor workflow are explicit |
| P0-03 | Application scaffold and quality baseline | Codex | Completed | local foundation | Application/config files | P0-02 | Strict TypeScript app installs; lint, type check, and build pass |
| P0-04 | Architecture, domain, security, privacy, and risk documents | Codex | Completed | local foundation | `docs/*` | P0-01 | Phase 0 plans agree with business decisions |
| P0-05 | Connect GitHub and establish `main`/`develop` workflow | Owner + Codex | Completed | `codex/github-ci` | Git metadata, `.github/workflows/ci.yml`, `TASKS.md`, `HANDOFF.md` | Owner approval received | Verified project published to `main` and `develop`; CI workflow is present |
| P1-01 | Visual design tokens and global shell | Codex | Ready | `codex/design-system` | UI styles/components | P0-03 and asset placement | Responsive accessible header/footer and brand tokens |
| P1-02 | English home page | Codex | Backlog | `codex/home-page` | Home page components | P1-01, owner images | Approved sections work on mobile and desktop |
| P1-03 | Seed catalogue and dress detail experience | Codex | Backlog | `codex/catalogue` | Catalogue UI/data | Owner catalogue images and names | Filterable fictional/owner-approved catalogue with no invented policies |
| P2-01 | Supabase authentication and roles | Codex | Backlog | `codex/auth-roles` | Auth and database files | Supabase project approval | Server-enforced CUSTOMER/STAFF/ADMIN/SUPER_ADMIN roles |
| P4-01 | Availability and rental-request engine | Codex | Backlog | `codex/availability` | Domain services/tests | Inventory schema and owner rental policy | Overlap, buffer, cancellation, and concurrency tests pass |

Allowed statuses: Backlog, Ready, In Progress, Blocked, Review, Completed.
