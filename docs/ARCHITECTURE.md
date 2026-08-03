# Phase 0 Architecture

## Application boundary

Use a single Next.js App Router application for the public website, customer area, administrator area, server-rendered content, and application endpoints. Keep domain logic independent of UI components and external providers.

## Proposed layers

1. **Presentation:** Server Components by default; Client Components only for interactive controls.
2. **Application:** use cases for appointments, rental requests, approvals, returns, and payment recording.
3. **Domain:** availability, pricing, booking state transitions, permissions, and retention rules.
4. **Data:** managed PostgreSQL accessed through a typed ORM and protected by database constraints.
5. **Providers:** interfaces for storage, email, WhatsApp, AI try-on, and future online payments.

## Deployment recommendation

- Local development first.
- GitHub for collaboration and reviews.
- Vercel for Next.js preview and production deployments.
- Supabase for managed PostgreSQL, authentication, and private object storage.
- No paid plan or external integration is activated without owner approval.

## Initial route groups

- `(public)`: home, collection, dress details, about, how it works, FAQ, contact, book a fitting.
- `(auth)`: sign-in, sign-up, password recovery.
- `(account)`: customer dashboard and private customer functions.
- `(admin)`: protected staff and administrator functions.
- `api`: webhooks and integration boundaries only where route handlers are appropriate.

## Domain boundaries

- Identity and access
- Catalogue and inventory
- Appointments
- Availability and rental bookings
- Payments and refunds
- Returns and inspections
- Media and private uploads
- Notifications
- AI virtual try-on
- Audit and compliance

## Availability invariant

A variant is unavailable when:

`requestedStart < existingEnd && requestedEnd > existingStart`

The server must recheck this rule within a transaction during approval and confirmation. Cleaning and preparation buffers extend the blocked interval.

