# Legio Machinatorum (Builder Legion)

**Legatus Legionis:** TBD (Praefectus acting)
**Mandate:** Design and construct all digital and physical systems—starting with web/app builds, expanding into hardware, energy, transport, and habitat projects.

## Mission Objectives
1. Deliver production-ready software surfaces on demand (apps, tools, automations).
2. Maintain reusable engineering kits (frontend, backend, infra, AI, robotics).
3. Incubate advanced projects (energy systems, aerospace, fabrication) as you green-light them.

## Cohortes & Tribuni (initial)
| Cohors | Focus |
| --- | --- |
| **Cohors Codicis** | Software engineering: web/app stacks, APIs, automation scripts.
| **Cohors Structoris** | Infrastructure + DevOps: hosting, pipelines, cloud/on-prem, security.
| **Cohors Inventrix** | R&D + advanced tech: robotics, energy, aerospace prototypes.
| **Cohors Designii** | Industrial + experience design: UI systems, industrial design, human factors.
| **Cohors Metalli** | Fabrication + hardware integration (activated when needed).

## Centuriae Seeds
- *Centuria Frontis* – reusable frontend scaffolds (Next.js, Vite, design system).
- *Centuria Nexus* – backend/API boilerplates, auth, data layers.
- *Centuria Fabricarum* – CI/CD, container stacks, monitoring.
- *Centuria Energia* – research pods for power/energy tech.
- *Centuria Astrum* – future aerospace/spaceframe explorations.

## Guardrails
- Enforce shared coding standards + security baselines.
- Track resource/budget usage per mission to stay within £20/day global cap unless authorised.
- Prioritise reusable assets so every build accelerates the next.

## Org Structure & Agent Archetypes
### Command Stratum
- **Legatus Legionis – "Architectus" (AG-001)**
  - Mandate: Own full-stack delivery charter, approve legion-level priorities, arbitrate resource conflicts.
  - Inputs: Curia directives, Praefectus priorities, cohort status packets.
  - Outputs: Weekly war brief, campaign OKRs, activation orders.
- **Praefectus Operis – "Forge Marshal" (AG-002)**
  - Mandate: Translate Legatus intent into staffed missions, run daily stand-to, enforce guardrails.
  - Inputs: Architectus priorities, cohort telemetry, budget ledger.
  - Outputs: Staffing decisions, risk escalations, spend approvals.
- **Quaestor Machinae – "Ledger" (AG-003)**
  - Mandate: Track kit inventory, budget, vendor/API usage, procurement queue.
  - Inputs: Cohort requisitions, vendor telemetry.
  - Outputs: Budget burndown, unlock approvals, vendor scorecards.

### Acting Assignments (18 Mar 2026)
- **Architectus:** Jim (OpenClaw) until Praefectus names a human/hybrid successor.
- **Forge Marshal:** AutoPraefectus (automation orchestrator) reporting directly to Architectus.
- **Quaestor Machinae:** Ledger agent (AI) synced with Jordan for spend approvals >£20/day.

### Cohort Command (Agent Templates)
Each cohort spins up an acting Tribunus + two specialist agents to start. Names are codenames until a human/AI is permanently bound.

#### Cohors Codicis
- **Tribunus Codicis – "Pulse" (AG-C01)**
  - Scope: Owns software kit roadmap, code review doctrine, release readiness sign-off.
- **Agent "Forge-Front" (Centuria Frontis Lead)**
  - Inputs: UX specs, design tokens, integration contracts.
  - Outputs: Frontend scaffold updates, storybook drops.
- **Agent "Forge-Core" (Centuria Nexus Lead)**
  - Inputs: Data models, API contracts, security policies.
  - Outputs: Backend templates, auth modules, API skeletons.

#### Cohors Structoris
- **Tribunus Structoris – "Anchor" (AG-S01)**: Platform + infra governance.
- **Agent "Pipeline" (Centuria Fabricarum)**
  - Inputs: Repo manifests, deployment targets.
  - Outputs: CI/CD blueprints, IaC modules, monitoring baselines.
- **Agent "Shield" (Security/Compliance)**
  - Inputs: Threat intel, dependency scans.
  - Outputs: Hardening guides, policy packs, incident runbooks.

#### Cohors Inventrix
- **Tribunus Inventrix – "Vector" (AG-I01)**: Advanced tech pipeline, experiment review board.
- **Agent "Energia" (Centuria Energia)**: Energy systems research, prototype designs, partner scans.
- **Agent "Astrum" (Centuria Astrum)**: Aerospace studies, simulation environments, materials research.

#### Cohors Designii
- **Tribunus Designii – "Forma" (AG-D01)**: Cross-surface design language + industrial integration.
- **Agent "Interface"**: Design token library, motion kit, accessibility guardrails.
- **Agent "Machina"**: Industrial chassis, enclosure specs, ergonomic studies.

#### Cohors Metalli *(activate when hardware build is green-lit)*
- **Tribunus Metalli – "Anvil" (AG-M01)**: Fabrication planning, vendor alignment.
- **Agent "Fabricator"**: CAM files, BOMs, assembly SOPs.
- **Agent "Integrator"**: Electronics + firmware integration patterns.

## Agent Handbooks
Every agent dossier includes:
1. **Mandate & Definition of Done** – what “complete” looks like per cycle.
2. **Inputs** – artefacts, data, or approvals required to engage.
3. **Outputs** – tangible deliverables handed off to other cohorts or legions.
4. **Cadence & Rituals** – stand-ups, demo slots, review boards.
5. **Escalation Paths** – who gets pinged when red lines trip.

Initial templates live under `docs/legiones/legio-machinatorum/agents/` (to be populated in Phase 1).

## Operating Playbook
- **Daily**
  - 09:00 UTC: Forge Marshal hosts 15-minute stand-to (all Tribuni + Quaestor).
  - Tribuni push status + blockers into legion channel using `/machina-log` format.
- **Twice Weekly**
  - Architectus sync with Praefectus Maximus on priorities, budget, inter-legion requests.
  - Cohors pairings: Codicis ↔ Structoris (Tuesday), Inventrix ↔ Designii (Thursday) for kit alignment.
- **Weekly Rituals**
  - Demo & Kit Review: Every Friday, each centuria shows latest artefact; ledger updated with reusable components.
  - Advanced Project Council: Inventrix agents pitch/triage new R&D missions before backlog entry.
- **Activation & Handoffs**
  - New mission request → Architectus issues Campaign Order → Forge Marshal assigns cohort leads → Agent dossiers instantiate (with resource/timebox) → Completion review by originating legion or Praefectus.

## Spawn Checklist (Phase 0 → Phase 1)
1. **Ratify Roles** – Confirm acting owners for Architectus, Forge Marshal, Quaestor (even if AI placeholders).
2. **Instantiate Agent Dossiers** – Generate markdown cards for each agent template with the handbook structure.
3. **Stand Up Comms Surface** – Legion channel + `/machina-log` slash template + archive for demos.
4. **Inventory Existing Kits** – Import Mega scaffolds + any prior assets into Codicis/Structoris catalogues.
5. **Backlog Intake** – Seed Inventrix advanced project backlog with at least 5 candidate missions (energy, robotics, aerospace, automation, habitat).

## Immediate Orders (Adjusted)
1. **Complete Phase 0 Spawn Checklist** – owners assigned, dossier directory scaffolded, comms ritual live.
2. **Publish Cohort Handbooks** – minimum viable handbooks for Codicis and Structoris (Inventrix next).
3. **Resource Register** – Quaestor to log current tools/APIs/vendors + budget caps, and flag gaps needing procurement.
4. **Kit Migration** – Move Mega project scaffolds into Centuria Frontis/Nexus catalogs with documentation links.
5. **Advanced Backlog Draft** – Inventrix to log first wave of R&D candidates, each tagged with prerequisites + decision gate.
