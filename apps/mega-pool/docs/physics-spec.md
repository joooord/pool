# Physics Harness Spec (Draft)

## Recommendation
- **Engine:** [matter-js](https://brm.io/matter-js/) for 2D rigid-body simulation (lightweight, React-friendly, deterministic enough for cue/ball interactions).
- **Renderer:** Custom canvas/WebGL (Pixi later). Initially keep physics headless and render positions in React.

## Data Model
```ts
interface BallState {
  id: string
  position: { x: number; y: number }
  velocity: { x: number; y: number }
  spin: { x: number; y: number }
  radius: number
  mass: number
}

interface ShotInput {
  cueAngle: number // radians
  power: number // 0-1, mapped to initial velocity magnitude
  spin: { x: number; y: number } // cue offset normalized
}
```

## Pipeline
1. **Setup**: Create Matter engine + world sized to table dimensions (inches -> px scale). Add cushions as static bodies.
2. **Shot**: Convert controls → impulse vector. Apply to cue ball body with angular velocity from spin.
3. **Loop**: Step engine @ 120hz inside `requestAnimationFrame` or worker; throttle UI render to 60hz.
4. **Events**: Listen for collisions to produce telemetry (impact speed, contact order).
5. **Playback**: Store state snapshots for cinematic replay.

## Next Actions
- [ ] Install `matter-js` and prototype cue/target interaction in isolated hook.
- [ ] Build `useShotSimulation` hook returning playback frames.
- [ ] Connect to `ShotPreview` once UI spec is ready.
