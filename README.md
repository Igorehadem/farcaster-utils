
# 🧩 Farcaster Utils

Shared utility functions and helpers for **Farcaster** / **Neynar** integrations.  
Lightweight, framework‑agnostic, and reusable across Remix, Next.js, or Node scripts.

---

## ⚙️ Setup

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env` and fill in your keys before testing.

---

## 🔧 Provided Utilities

| Function | Description |
|-----------|--------------|
| `nowISO()` | Returns UTC timestamp in ISO format |
| `sleep(ms)` | Delays execution for given ms |
| `truncate(text, n)` | Shortens text and appends ellipsis |

Example:
```bash
npm run dev
```
---

## 🌐 Neynar Client

A minimal wrapper is available under `src/neynarClient.ts`.

Functions:
- `fetchCasts(fid?)` — get latest Farcaster casts
- `publishCast(text)` — post a new cast (simulated)
- `getReactions(castHash)` — fetch likes and recasts

---

## 📚 Docs

See [`docs/overview.md`](./docs/overview.md) for detailed descriptions and examples.

---

## 🧭 Roadmap

- [ ] Add API helper for Neynar client  
- [ ] Add text normalization helpers (for bots)  
- [ ] Add mock tests for truncate and sleep  

---

## 🪪 License

MIT © 2025 Igorehadem
