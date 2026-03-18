---
name: business-intel-harvest
description: Collect, normalize, and track business intelligence for Jordan’s ventures. Use when you need baseline data (brand decks, KPIs, tooling access, exports) or ongoing telemetry for Northern Belle, DP Publicity, trading accounts, or new ventures.
---

# Business Intelligence Harvest Protocol

## 1. Scope the Request
- Clarify which business line or pillar the intel supports (e.g., Northern Belle bookings, DP Publicity campaigns, trading desk).
- Identify the decision or automation that will consume the data so you only ask for what matters.

## 2. Inventory Existing Sources
- Search `docs/`, `memory/`, and prior deliverables for relevant material before re-asking Jordan.
- Log findings in `docs/enablement/capability-roadmap.md` or a dedicated sub-file for that pillar.

## 3. Prepare the Ask
- Use the [Data Request Template](references/data-request-template.md) to structure outbound questions.
- Bundle requests by pillar to reduce back-and-forth; note urgency and preferred formats (CSV, PDF, dashboard access).
- Highlight why each item unlocks a capability (e.g., "booking export → automations + KPI alerts").

## 4. Intake & Storage
1. Save received files in `media/<business>/<date>-<slug>` or link to shared drives.
2. Summarize key metrics + metadata inside an enablement doc (e.g., `docs/enablement/<pillar>-intel.md`).
3. Record source, freshness, and any access constraints.

## 5. Normalize & Model
- Define data models (entities, metrics, refresh cadence).
- Capture schema notes + transformations in the relevant enablement doc.
- Flag automation or skill dependencies (APIs, cron jobs, connectors needed).

## 6. Feedback Loop
- After using the data, log outcomes so future asks can cite ROI.
- Maintain a running gaps list (missing exports, stale dashboards, permissions).

## Output Checklist
- Updated roadmap/intel files reflecting new data.
- Task list or cron plan for ongoing ingestion.
- Any sensitive files stored in the correct location with notes on handling.

## References
- [Data Request Template](references/data-request-template.md)
- Capability roadmap (`docs/enablement/capability-roadmap.md`)
- Pillar-specific intel files as they are created.
