# Security and Privacy Plan

## Access control

- Roles: CUSTOMER, STAFF, ADMIN, SUPER_ADMIN.
- Every protected action checks authorization on the server.
- Sensitive administrative changes produce audit events.
- Customer measurements and private images are accessible only to the owner and authorized staff.

## Data and uploads

- Public catalogue media and private customer media use separate storage policies.
- Private media uses random keys and short-lived signed URLs.
- Upload validation includes file signatures, MIME checks, size and dimension limits, re-encoding, and metadata removal.
- Secrets remain server-side and are never committed.

## AI photo privacy

- AI try-on remains disabled until the core system is stable and a provider is approved.
- Explicit consent, processor disclosure, retention, deletion status, and expiry are recorded.
- Source photos should be deleted after processing or within 24 hours by default, subject to owner approval.
- AI previews must include a clear non-accuracy disclaimer.

## Payments

- Initial payments are cash and bank transfer.
- Only authorized staff can mark a payment as verified.
- Every payment-status change is auditable.
- No card data is collected or stored.

