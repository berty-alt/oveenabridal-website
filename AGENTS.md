# Agent Collaboration Rules

These rules apply to Codex and any future contributor working in this repository. Codex is currently the sole implementation agent.

## Source of truth

- GitHub becomes the shared source of truth once the remote repository is connected.
- `main` is stable and production-ready.
- `develop` is the integration branch.
- Codex uses `codex/<feature-name>` branches.
- Do not push experiments directly to `main`.

## Before editing

1. Read `README.md`, `AGENTS.md`, `TASKS.md`, `DECISIONS.md`, and `HANDOFF.md`.
2. Confirm the task owner and affected files in `TASKS.md`.
3. Preserve unrelated and uncommitted work.
4. Avoid editing files owned by another contributor's in-progress task.
5. Record architectural or business-policy decisions in `DECISIONS.md`.

## Quality and safety

- Use strict TypeScript and validate data at every trust boundary.
- Enforce authentication and authorization on the server.
- Never commit credentials, customer photos, measurements, or `.env` files.
- Do not activate paid services without owner approval.
- Use fictional sample customer data only.
- Run relevant formatting, lint, type, and test checks before handoff.
- Update `TASKS.md` and `HANDOFF.md` after meaningful work.

## Business rules that must not be changed silently

- Every rental requires administrator approval.
- Customers collect and return dresses at the Hanwella shop; delivery is disabled.
- Initial payment methods are cash and bank transfer only.
- English is the initial UI language, with Sinhala and Tamil support planned.
- Rental policy amounts and deadlines remain unconfirmed until the owner supplies them.
