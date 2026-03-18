# Telemetry Schema (Draft)

| Event | When | Payload |
| --- | --- | --- |
| `shot:init` | Player locks aim/power and triggers shot. | `{ shotId, angleDeg, power, spinX, spinY, presetId }` |
| `shot:impact` | Cue ball contacts first object. | `{ shotId, targetId, impactSpeed, contactPoint }` |
| `shot:result` | Shot resolution (pots, fouls, positions). | `{ shotId, pots: BallResult[], foul, remainingBalls }` |
| `sandbox:preset-save` | User saves custom preset. | `{ presetId, power, spin, aim }` |
| `camera:mode-change` | Camera rail selection. | `{ mode, shotId }` |

`BallResult`:
```ts
{
  id: string
  pocket?: string
  finalPosition: { x: number; y: number }
}
```

**Ingestion Plan**
1. Capture events client-side → analytics queue (PostHog or Segment).
2. Mirror critical events to backend for replay storage + coaching insights.
3. Provide Structoris with event catalog + retention policy.
