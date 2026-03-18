# Mega – Mobile-First English Pool

A high-polish, single-player English pool experience built for the browser but designed mobile-first. Mega focuses on cinematic camera work, tactile controls, and accurate Blackball/UK 8-ball rules.

## Vision
- **Touch-first controls** with one-hand cueing, precision wheel, and cue-ball contact targeting.
- **Adaptive camera system** inspired by Apple Arcade sports titles (shot previews, follow cams, highlight replays).
- **Accurate physics + rules** tuned specifically for English pool (reds/yellows, two-shot carry options, black-ball fouls).
- **Replayable modes**: free practice, AI match play, and “Mega Moments” scenario ladder.

## Tech Stack
| Layer | Choice |
| --- | --- |
| Build tooling | Vite + TypeScript + SWC React plugin |
| UI framework | React 18 + Zustand for state, Framer Motion for gestures/animation |
| Rendering | PixiJS (WebGL-first, Canvas fallback) + custom physics/shot solver |
| Input | `@use-gesture/react` for drag/gesture orchestration, pointer events fallback |
| Audio | Placeholder (Howler planned) |

## Directory Layout
```
mega-pool/
├── public/              # Static assets, app icon, PWA manifest (later)
├── src/
│   ├── app/             # Route shell, layout, providers
│   ├── components/      # Reusable UI pieces (HUD, controls, overlays)
│   ├── core/            # Physics engine, rules logic, camera state machine
│   ├── scenes/          # Gameplay screens (Home, Table, Challenges)
│   ├── styles/          # Global styles, tokens
│   └── main.tsx         # Entry point
├── package.json
└── README.md
```

## Getting Started
```bash
npm install
npm run dev    # Starts Vite dev server (defaults to http://localhost:5173)
```

Additional scripts will be added as the engine + tooling land (tests, lint, build preview, etc.).

## Roadmap
1. **Interaction prototypes** – Implement control sandbox + camera transitions on mobile viewport.
2. **Physics kernel** – Deterministic ball simulation, cushion response, pocket detection.
3. **Rules/turn manager** – English 8-ball logic, foul handling, scoring, tutorial overlays.
4. **AI + scenarios** – Adaptive opponent + “Mega Moments” challenge data.
5. **Polish + deploy** – Audio, haptics, install prompt, Hostinger deployment pipeline.

Feedback + feature requests welcome via issues in this repo.
