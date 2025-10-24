# Farcaster Utils — Overview

This folder contains helper functions and constants used for Farcaster / Neynar API integrations.

## Core helpers
- `fetchUserCasts(userId)` — retrieves all casts for a given user.
- `publishCast(text)` — posts a new cast via Neynar.
- `getReactions(castId)` — fetches likes and recasts.

---

### Notes
These utilities are designed to stay framework-agnostic, so they can be reused in both Remix and Next.js apps.
