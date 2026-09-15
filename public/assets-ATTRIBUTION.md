# Asset attribution

Licenses and sources for third-party / generated motion and 3D assets used on trevyk.in.

## HDRI

| File | Source | License |
|------|--------|---------|
| `hdr/studio_small_03_1k.hdr` | Poly Haven *Studio Small 03* (1k), distributed via the drei/react-three-fiber asset CDN mirror | **CC0** (public domain) — commercial use OK |

Used only on the home Hero R3F canvas (`Environment`), not as a full-screen background plate.

## Lottie (custom brand JSON)

| File | Notes | License |
|------|--------|---------|
| `lottie/signal-rings.json` | Brand abstract signal rings (plum / lavender / blush) | Original for Trevyk — free to use with the site |
| `lottie/nodes-pulse.json` | Node pulse for Kiduart journey | Original for Trevyk |
| `lottie/progress-token.json` | Process token travel | Original for Trevyk |
| `lottie/module-dock.json` | Services module dock icons | Original for Trevyk |
| `lottie/brand-pulse.json` | About / Contact Y pulse | Original for Trevyk |

These are lightweight JSON animations authored for brand fit (not stock SaaS kits). Runtime: `lottie-react`.

## Spline

| Surface | Scene | Notes |
|---------|-------|--------|
| Technology page (`SplineMount`) | Default: public Spline demo scene URL, or override with `VITE_SPLINE_TECH_SCENE` | Lazy-loaded via `@splinetool/react-spline`; falls back to SVG `WowAccent` on error / `prefers-reduced-motion` |

Replace the default URL with a brand-authored abstract stack scene when ready; credit the Spline author in this file when swapped.

## Rive

Not shipped in this round (Lottie-only for process / teasers).

## Runtime libraries

- `@react-three/fiber` / `@react-three/drei` — Hero core + Environment
- `lottie-react` — section micro-motion
- `@splinetool/react-spline` + `@splinetool/runtime` — single Technology wow scene
