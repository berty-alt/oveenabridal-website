# Risk Register

| Risk | Impact | Mitigation | Status |
|---|---|---|---|
| Rental policies are incomplete | Incorrect charges or legal wording | Keep policy fields configurable; do not publish invented terms | Open |
| Catalogue content is incomplete | Generic or inaccurate storefront | Use clearly marked seed data, then replace with owner-approved records and images | Open |
| Two agents edit the same files | Lost or conflicting work | Claim files in `TASKS.md`; use separate feature branches and PR review | Open |
| Concurrent approval causes double booking | Operational and financial loss | Transactional server recheck, constraints/locking strategy, and concurrency tests | Planned |
| Customer photos or measurements leak | Serious privacy harm | Private storage, least privilege, signed URLs, audit access, short retention | Planned |
| AI preview is treated as a fitting guarantee | Misleading customer expectations | Mandatory disclaimer and physical fitting recommendation | Planned |
| External services increase cost | Unexpected business expense | Local mocks and free/local development first; owner approval before activation | Controlled |
| Three-language rollout expands scope | Delayed first release | English-first UI with localization-ready architecture | Controlled |

