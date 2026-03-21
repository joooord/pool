# Hospitality AI Tools — Strategic Roadmap
**Author:** Jim | **Date:** 2026-03-19

---

## Full Landscape (Everything We Could Build)

### Finance & Margin
- GP & Recipe Costing Calculator
- Menu Engineering Analyzer (Stars/Dogs/Ploughhorses matrix)
- Weekly Financial Narrative Generator (P&L → plain English)
- Event Profitability Calculator
- Utility Cost Tracker & Negotiation Scripter
- Cash Flow Forecasting Tool

### Operations & Kitchen
- Smart Procurement Order Generator
- Food Waste Audit Tracker
- Dietary & Allergen Matrix Builder
- Kitchen Prep List Generator
- SOP Generator (text/voice → formatted procedure)
- Opening/Closing Checklist Builder
- Equipment Maintenance Log

### People & HR
- AI Rota Optimizer
- Job Description Generator
- Onboarding Checklist Builder
- Interview Question Bank Generator
- Exit Interview & Staff Survey Tool
- Disciplinary Letter Generator
- Staff Incentive Campaign Builder

### Guest Experience & Communications
- Pre-Arrival Email Sequence Builder
- Post-Stay Loyalty Sequence Generator
- AI Review Responder (TripAdvisor, Google, Booking.com)
- Complaint Triage & Escalation Drafter
- VIP Guest Profile Builder
- In-Stay Upsell Script Generator

### Marketing & Sales
- 30-Day Social Media Content Calendar
- PR Pitch & Press Release Generator
- Corporate Account Pitch Builder
- OTA vs Direct Booking Margin Calculator
- Email Campaign Builder (seasonal, events, promotions)
- SEO Blog Topic & Outline Generator

### Revenue Management & Yield
- Dynamic Pricing Advisor (booking velocity → price suggestions)
- Yield Management Dashboard (capacity vs booking pace)
- Bundle Deal & Upsell Margin Calculator
- Delivery Platform Pricing Optimizer (commissions → real GP)

### Events & Functions
- Function Sheet Generator (event details + dietary → complete brief)
- Event Enquiry Response Builder
- Post-Event Debrief & Profit Analyzer

### Sustainability & Compliance
- Allergen Compliance Checker
- Food Safety Document Generator
- Sustainability Impact Report Builder
- Carbon & Waste Reporting Template

---

## The 10 First Builds (Priority Order)

Selection criteria: Highest cross-segment utility + Fastest to build + Clearest ROI demonstration.

### Tool 1: GP & Recipe Costing Calculator ⭐ BUILD FIRST
**Why first:** Every single hospitality operator needs this. From a solo cafe owner to a Michelin kitchen. Immediate, tangible value. Simple enough to launch in days.
**What it does:** Input ingredients + quantities + costs → get dish cost, GP%, recommended selling price at target margin. Flag if allergens detected.
**Stack:** React + Tailwind. Pure frontend. No backend needed for MVP.
**Monetization:** Free with 3 recipes → £9/mo for unlimited. Leadgen for everything else.

### Tool 2: AI Review Responder
**Why:** Every operator drowns in reviews. 3 hours/week saved on day one.
**What it does:** Paste review + select platform (Google/TripAdvisor/Booking.com) + set tone (luxury/casual/pub) → AI-generated response, brand-voice trained.
**Stack:** React frontend + Node.js API calling Claude.
**Monetization:** Free 5/month → £19/mo unlimited.

### Tool 3: Smart Procurement Order Generator
**Why:** Over-ordering = waste. Under-ordering = 86s. This solves a daily pain point.
**What it does:** Input expected covers + menu → AI generates formatted par order by supplier category. Export as CSV or email to supplier.
**Stack:** React + Node.js + Claude API.
**Monetization:** £29/mo or per-venue SaaS.

### Tool 4: Pre-Arrival Email Sequence Builder
**Why:** Every hotel is leaving upsell revenue on the table pre-arrival. This directly generates money.
**What it does:** Input guest name, occasion, booking type, venue details → generates 2-email personalised pre-arrival sequence.
**Stack:** React + Claude API.
**Monetization:** Free 10/month → £19/mo unlimited.

### Tool 5: Menu Engineering Analyzer
**Why:** Most operators have no idea which dishes are making them money. This is a strategy tool.
**What it does:** Input menu items + units sold + GP per dish → output Stars/Dogs/Ploughhorses/Puzzles matrix with actionable recommendations.
**Stack:** React + Tailwind. Pure frontend calculation + visual chart output.
**Monetization:** £29/mo or one-time £49 report.

### Tool 6: AI Rota Optimizer
**Why:** Overstaffing and understaffing cost hospitality operators a fortune weekly.
**What it does:** Input staff list + availability + covers/reservations → AI generates optimised rota. Flag overtime risks and understaffed shifts.
**Stack:** React + Node.js + Claude API.
**Monetization:** £39/mo per venue.

### Tool 7: Weekly Financial Narrative Generator
**Why:** Owners and investors can't read spreadsheets. This makes data speak.
**What it does:** Input revenue, wage %, food cost %, covers → AI generates a 300-word executive summary with 3 action directives.
**Stack:** React + Claude API.
**Monetization:** Part of a premium tier bundle.

### Tool 8: SOP Generator
**Why:** Every venue has tribal knowledge that lives in people's heads. This gets it on paper.
**What it does:** Type or paste rough notes/process → AI generates a formatted, numbered, print-ready Standard Operating Procedure.
**Stack:** React + Claude API. Export to PDF.
**Monetization:** £19/mo or per-doc.

### Tool 9: Dietary & Allergen Matrix Builder
**Why:** Compliance is non-negotiable. Getting it wrong is a legal liability.
**What it does:** Input menu + ingredients → auto-generate a 14-allergen compliance table. Export as print-ready PDF for kitchen and FOH.
**Stack:** React + Tailwind. Frontend-heavy with allergen database.
**Monetization:** Freemium. Upsells to full compliance suite.

### Tool 10: Delivery Platform Pricing Optimizer
**Why:** Uber Eats/Deliveroo take 25-35%. Most operators don't know their real GP on delivery.
**What it does:** Input dish cost + platform commission % → real GP calculation. Bundle suggestion engine to increase blended margin.
**Stack:** React + Tailwind. Pure frontend.
**Monetization:** Free tool. Traffic/leadgen for broader suite.

---

## Architecture Decision

**Option A: Standalone micro-tools** — Each tool as its own page/URL. Fast to ship, easy to share.
**Option B: Unified platform (HospitalityOS / similar)** — All tools under one dashboard with login.

**Recommendation: Start with Option A, migrate to Option B.**
Ship Tool 1 as a standalone free tool this week. Validate. Then build the platform around proven tools.

---

## Next Actions
- [ ] Build Tool 1: GP & Recipe Costing Calculator (target: 48 hours)
- [ ] Build Tool 2: AI Review Responder (target: 72 hours)
- [ ] Name the platform / brand
- [ ] Set up Gumroad/Lemon Squeezy for guide + tool bundle
- [ ] jordanpitts.com landing page for the suite
