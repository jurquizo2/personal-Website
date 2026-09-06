# Jacqueline Urquizo — Personal Website

Brand and portfolio site: Technology, Finance & Development Strategist.

## Structure

- `content/` — typed data for stats, the five-stage career timeline, case studies, thought-leadership themes, the "How I Think" framework, and advisory positioning. Edit these files to change copy — pages read from them, nothing is hardcoded into components.
- `app/` — Next.js App Router pages: `/`, `/work`, `/work/[slug]`, `/thinking`, `/thinking/[slug]`, `/how-i-think`, `/advisory`, `/about`.
- `components/` — shared UI (Nav, Hero, StatBar, Timeline, cards, Footer).
- `docs/strategy.md` — the full content & architecture strategy document this site is built from, kept as the source of record.

## Open items

See "13. Open items before I build the prototype" in `docs/strategy.md`. Several figures are marked ⚠ CONFIRM in `content/*.ts` (search for `confirm:`) — resolve those before treating the copy as final/public.

## Running it

This project deploys automatically on push once connected to Vercel (Import Project → select this repo — no local setup needed). To run locally instead:

```
npm install
npm run dev
```
