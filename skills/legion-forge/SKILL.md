---
name: legion-forge
description: Forge new OpenClaw legions or refactor existing ones. Use when you need to draft a legion charter, cohorts, agent archetypes, cadences, guardrails, and immediate orders for any mission set.
---

# Legion Forge Playbook

Follow this sequence whenever spawning or overhauling a legion. Work from top (mandate) down to activation orders so nothing gets missed.

## 1. Gather Context
- Pull prior directives (user brief, Curia notes, related legion docs).
- Capture mission scope (business line, budget, tech stack, external dependencies).
- Note constraints: spending caps, compliance, timelines, required integrations.

## 2. Draft the Charter
1. **Mandate** – One sentence covering purpose + scope boundaries.
2. **Mission Objectives** – 3-5 measurable outcomes.
3. **Guardrails** – Budget, security, policy lines.
4. **Relationships** – Who this legion supports or depends on (other legions, humans, vendors).

> Use `references/legion-template.md` for a copy/paste scaffold.

## 3. Shape Cohortes & Centuriae
- Define 3-5 cohorts max to keep command load manageable.
- For each cohort: describe scope, acting Tribunus, and how it interfaces with others.
- Seed centuriae (specialist pods) that map to reusable kits (frontend, infra, analytics, etc.).
- Call out activation conditions for dormant cohorts (e.g., hardware legions).

## 4. Engineer Agent Archetypes
- Command stratum: Legatus, Praefectus, Quaestor equivalents.
- Cohort-level agents: Tribunus + 1-2 specialists each.
- For every agent create a dossier with: mandate, Definition of Done, inputs, outputs, cadence, escalation.
- Reference shared tooling (repos, APIs, automations) and note secret storage IDs—never inline credentials.

Store finished dossiers under `docs/legiones/<legion>/agents/AG-XXXX.md`.

## 5. Operating Playbook
Document the rhythm that keeps the legion alive:
- Daily stand-to (time, attendees, format).
- Weekly rituals (demo, backlog triage, kit rotation).
- Cross-legion syncs and escalation paths.
- Activation flow: request → order → staffing → close-out review.

## 6. Immediate Orders & Spawn Checklist
- Convert the first tranche of work into 3-5 numbered orders.
- Prepend with a spawn checklist that lists the mechanical steps (assign acting owners, stand up comms, migrate kits, etc.).
- Tie each order to a responsible agent and due signal (date, dependency, or condition).

## 7. QA Before Publishing
- Ensure naming consistency (Latin-style labels optional but consistent).
- Cross-link to related legions or enablement docs.
- Run `git status` (or equivalent) to confirm only intentional files changed.

## Output Expectations
- `docs/legiones/<legion>.md` updated with the sections above in this order.
- `docs/legiones/<legion>/agents/` populated with dossier files.
- Any supporting enablement docs (roadmaps, tool inventories) referenced explicitly.

## References
- [Legion Charter Template](references/legion-template.md)
- Reuse best-in-class examples (e.g., Legio Machinatorum, Legio Mega).
