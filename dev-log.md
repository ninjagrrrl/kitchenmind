# Development Log

## Day 1 — Project Reassessment

The project originally started as a bootcamp assignment and was revisited with the goal of turning it into a portfolio-quality application.

---

### Architecture Stabilization

- removed duplicated / unused Supabase client instances
- cleaned up dependencies
- resolved TypeScript build issues

A successful production build (`npm run build`) confirmed a stable baseline.

---

### Structure Review

The existing component structure was analyzed to understand how UI and feature logic are organized.

Key observation:

- inconsistent separation between UI components and feature logic

---

### Data Layer Assessment

The project currently mixes:

- direct Supabase calls (`useEffect`)
- TanStack Query

This leads to inconsistent data handling and will be unified in a later step.

---

### Product Direction

The project was reframed from a simple recipe manager into an **AI-assisted cooking decision system**.

Focus:

- reduce decision friction
- generate one concrete recipe suggestion at a time
- build a personal recipe knowledge base

---

## Key outcome of Day 1:

Stabilized the architecture and clarified the product direction.

## Day 2 — Supabase Reconnection & Infrastructure Setup

The original Supabase project had been paused and could not be restored.

A new project was created to establish a clean backend foundation.

---

### Backend Setup

- new Supabase project initialized
- environment variables configured (`.env.local`)
- `.env.example` added for reproducibility
- Supabase client reconnected

A missing table (`recipes`) caused initial 404 errors, which were resolved by:

- creating the table
- enabling Row Level Security (RLS)
- adding a temporary read policy

---

### Data Layer Reset

Instead of reusing the previous schema, a simplified `recipes` table was introduced.

This reflects a shift away from a traditional recipe listing (e.g. ratings) toward a decision-focused cooking system aligned with the KitchenMind concept.

---

### Frontend Adjustment

- simplified data fetching to a single query
- removed outdated assumptions (e.g. rating-based sorting)
- aligned UI with current schema

---

### Build Verification

The project builds successfully:

`npm run build`

---

## Key outcome of Day 2:

Re-established a working backend connection and a minimal, stable data flow.

## Day 3 — CI Setup

A minimal CI pipeline was added using GitHub Actions.

The workflow runs on every push and pull request and performs:

- dependency installation (`npm ci`)
- production build (`npm run build`)

Environment variables are provided via GitHub repository secrets.

---

## Key outcome of Day 3:

The project now has a reproducible build process with automated validation.
