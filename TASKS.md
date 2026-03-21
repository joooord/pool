# TASK QUEUE

## P1 — Hospitality Pro (Autonomous Master Plan)
- [x] Review `hospitality-pro/MASTER_PLAN.md` and define the next sub-task.
- [x] Sub-task 1: Build out the ultimate Cocktail Calculator (ROI, ABV%, dilution, costing).
- [x] Sub-task 2: Polish the Rota Optimizer and make it production-ready for "Hidden".
- [x] Sub-task 3: Build the Inventory & Supplier Ordering module.
- [x] Sub-task 4: Build the Daily Prep & Operations module.
- [ ] Sub-task 5: Assemble into a unified, clean, premium dashboard application.

## Operating Rules for Hospitality Pro:
- DO NOT ask permission to move to the next task.
- ALWAYS commit and push to main.
- ALWAYS trigger Vercel deploy.
- Work continuously on a 10-minute heartbeat.
- Focus on making it "super simple" but deep (e.g. ROI and ABV% for the cocktail calc).

## P2 — Model Reliability
- [x] Add `scripts/model-router.sh` (Anthropic → Google → OpenAI cycle)
- [x] Establish daily quota check routine + logging so we swap before hitting zero
