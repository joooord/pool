# Mega Pool Roadmap (v0)

## Phase 0 – Control Sandbox Polish (Current)
1. **Visual feedback loop** – Cue trajectory + cue-ball vector overlay inside ShotPreview.
2. **Preset management** – Persist user tweaks, allow saving custom presets.
3. **Camera rail mock** – Animate transitions + timeline scrubber.

## Phase 1 – Physics Harness
1. Integrate lightweight 2D physics (Matter.js or custom) for cue/ball simulation.
2. Connect controls to physics model (aim, power, spin → velocity + angular momentum).
3. Render table + balls with cinematic camera states.

## Phase 2 – Game Loop Foundations
1. Rack setup + turn system.
2. Basic AI opponent stub for pacing.
3. Telemetry hooks (shot metrics, accuracy, session stats).

## Phase 3 – Productionization
1. Asset polish (lighting, shaders, SFX hooks).
2. Deployment hardening + analytics.
3. Monetisation experiments (cosmetics, season pass, etc.).

---

**Immediate Tasks**
- [ ] Build cue-path overlay + camera motion cues.
- [ ] Spec physics integration (pick library, define data model).
- [ ] Prepare telemetry schema for Structoris (events, payloads).
