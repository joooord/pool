# Hospitality Pro — Redesign Brief
**Status:** Research Complete · March 2026  
**Author:** Jim (Research + Design Lead)  
**For:** Jordan Pitts  
**Live Site:** https://hospitality-pro.vercel.app  

---

## Executive Summary

The market is full of tools that are either enterprise-weight overkill (Apicbase, MarketMan) or SaaS subscription traps with bloated feature sets. **Nobody has built the elegant, fast, browser-native toolkit for the independent operator who knows what they're doing and just needs the AI to do the grinding.** Hospitality Pro is that product in embryonic form. The current site proves the concept but the UI, UX, and presentation are leaving 80% of the potential on the table. This brief drives the rebuild.

The single most important insight: **independent operators will pay (in attention, referrals, and eventually money) for tools that feel like they were built by someone who has actually worked a service**. Jordan has. That's the moat. The redesign must make that evident in every pixel.

---

## Part 1 — Competitive Analysis

### 1.1 MARA Solutions (mara-solutions.com)
**What they do:** AI review response platform for hotels. Named #1 Reputation Management Solution 2025 (Hotel Tech Report).

**What they do well:**
- Centralised review inbox across Google, Booking.com, TripAdvisor — single pane of glass
- "Smart Snippets" — learns brand voice, stores tone guidelines, produces personalised responses
- Clean, modern SaaS UI that feels nothing like legacy hospitality software
- 3x faster response rates. Concrete, measurable value proposition
- Onboarding is frictionless — paste a review, get a response, value demonstrated in under 60 seconds

**Where they fail:**
- Hotel-focused, not restaurant/mixed hospitality
- Requires subscription and login — no zero-friction try-before-commit
- AI responses can feel polished but generic without serious prompt discipline
- No understanding of UK hospitality norms, tone, or platform-specific character

**What a small independent would love:** The simplicity and speed  
**What they'd hate:** The price point, the enterprise positioning, the "book a demo" friction  

**Lesson for Hospitality Pro:** Our review responder already beats MARA on the free/friction-zero axis. The gap is in UI sophistication and the "Smart Snippets"-style brand memory feature.

---

### 1.2 Guestline / Rezlynx
**What they do:** Hotel PMS — reservations, front desk, channel management, light ops tooling.

**What they do well:**
- Deep integration with OTAs and hotel ops workflows
- Trusted by independent UK properties — familiar brand in the market
- Reliable if unglamorous

**Where they fail:**
- UI is dated — early 2010s enterprise design language, dense tables, grey interfaces
- Mobile is an afterthought
- Setup takes weeks, requires vendor training
- No AI features of note as of 2025
- Actively hostile to self-service — everything requires a call to sales

**What a small independent would love:** The integrations (if they already use it)  
**What they'd hate:** Everything about the UI; the lock-in; the cost; the learning curve  

**Lesson for Hospitality Pro:** Guestline's users are our users. They're used to ugly. Show them something beautiful and they'll remember it forever. The bar to impress is genuinely low.

---

### 1.3 7shifts (7shifts.com)
**What they do:** Restaurant scheduling, time clocking, payroll, team comms.

**What they do well:**
- Genuinely intuitive scheduling UI — drag-and-drop, colour-coded, fast
- Mobile-first — staff can view rota, swap shifts, request time off on phone
- Labour cost forecasting integrated into schedule view
- Strong brand voice: warm, approachable, clearly restaurant-native
- Task management and manager logbook as companion features
- Great free tier — converts via genuine product value

**Where they fail:**
- Advanced features (payroll, compliance) locked behind higher tiers creates frustration
- Admin view gets cluttered with large teams
- Separate time tracking app (7Punches) adds friction
- Customer support quality has reportedly declined
- Pricing transparency issues for growing teams

**What a small independent would love:** The scheduling UI; the mobile app; the free tier  
**What they'd hate:** Discovering payroll is a separate tier; the calendar view cluttered at scale  

**Lesson for Hospitality Pro:** The rota optimizer is the closest tool to 7shifts territory. 7shifts proves that scheduling tools live and die by their drag-and-drop scheduling interface. Our current text-form approach is the weak point — for rota in particular, a visual output matters more than any other tool.

---

### 1.4 Apicbase (apicbase.com)
**What they do:** F&B management platform — recipe costing, menu engineering, inventory, procurement. Aimed at multi-site groups and hotel chains.

**What they do well:**
- Genuinely deep recipe costing — sub-recipe explosion, yield factors, live ingredient costs
- Menu engineering built in (BCG matrix approach similar to our tool)
- Centralised ingredient database — change a price once, it updates everywhere
- Allergen and nutritional compliance built in
- Designed to scale across multiple sites

**Where they fail:**
- Built for enterprise, not independent operators — interface reflects multi-site origin
- Setup is laborious: you need to input your entire ingredient database before you get value
- Initial learning curve is steep — "takes time to exploit all features"
- Monthly cost is significant for a single-site operator
- Occasional bugs can corrupt data — unacceptable for compliance-critical tools
- Desktop-only in practice

**What a small independent would love:** The recipe costing depth (if they ever got it set up)  
**What they'd hate:** Everything about getting it set up; the enterprise feel; the cost  

**Lesson for Hospitality Pro:** Apicbase is what Hospitality Pro's recipe costing tool would look like at 50x the scope. We beat them on zero-setup friction. The gap is in depth — yield factors, sub-recipes, multi-portion scaling. These are the upgrades that matter for recipe costing v2.

---

### 1.5 MarketMan (marketman.com)
**What they do:** Restaurant inventory management, procurement, recipe costing, COGS.  
**Pricing:** $199/mo (Starter) to $249/mo (Growth) to Enterprise.

**What they do well:**
- 15,000+ restaurants globally — proven at scale
- Solid recipe costing + real-time COGS reporting
- AI ordering (demand-based purchase suggestions) — genuinely useful
- Mobile inventory counting — phone-native counting on the floor
- POS integrations reduce manual entry

**Where they fail:**
- $199/month is steep for a single independent operator
- Interface feels functional but not beautiful — utility-focused, cluttered dashboard
- "Book a demo" friction wall — no self-service trial
- Procurement workflow is complex to set up
- The marketing (constant "March into Margin Control!" promotions) feels cheap

**What a small independent would love:** The mobile counting; the AI ordering suggestions  
**What they'd hate:** The price; the demo wall; the onboarding burden  

**Lesson for Hospitality Pro:** Our procurement tool replaces MarketMan's core value for zero cost with zero setup. The positioning angle writes itself: "What MarketMan charges £200/month for, you can do in 2 minutes here."

---

### 1.6 Toast POS (toasttab.com)
**What they do:** Restaurant POS with inventory, recipe costing, payroll, and reporting.

**What they do well:**
- Purpose-built for restaurants — UI speaks restaurant language
- Real-time inventory depletion as sales flow through POS
- xtraCHEF integration is genuinely powerful for invoice automation
- App-based inventory counting (works offline)
- Comprehensive reporting suite

**Where they fail:**
- Proprietary hardware lock-in
- Long-term contracts (2 years), high termination fees
- Advanced recipe costing requires an additional paid integration (xtraCHEF)
- Learning curve on advanced features
- Expensive at full feature set — pricing complexity confuses buyers
- Support quality is inconsistent

**What a small independent would love:** The POS-to-inventory integration (genuinely saves time)  
**What they'd hate:** The hardware lock-in; the contract; the pricing complexity  

**Lesson for Hospitality Pro:** Toast solves a different problem (live POS + inventory flow). We can't replace POS integration. But we can be the "before you're ready for Toast" tool, and the "alongside Toast for things it does badly" tool (AI-generated SOPs, review responses, pre-arrival emails, financial narrative).

---

### 1.7 Sunday (sundayapp.io)
**What they do:** QR payment and review collection at the table. Guest-facing tool.

**What they do well:**
- Radical simplicity — single action, frictionless payment
- Beautiful mobile-first design — clean, minimal, high-contrast
- Solves a specific, painful problem (waiting for the bill) perfectly
- Zero training required for guests
- Review prompt after payment — smart conversion of satisfied customers

**Where they fail:**
- Extremely narrow scope — does one thing, nothing else
- Limited to countries/regions where QR payment has cultural traction
- No operator-side tooling or analytics depth

**Lesson for Hospitality Pro:** Sunday is the design archetype. That level of visual restraint and purposeful simplicity is what every individual tool should aspire to. One clear action. Obvious next step. Beautiful output.

---

### 1.8 Tock (exploretock.com)
**What they do:** Premium reservation and experience platform for fine dining and events.

**What they do well:**
- Brand positioning is impeccably premium — they feel like the kind of tool a Michelin restaurant would use
- Experiential booking (prepaid dining experiences, chef's table, tasting menus) — adds genuine revenue
- Clean, editorial design language — high-quality restaurant photography, sophisticated typography
- Reduces no-shows via prepayment mechanic
- Guest data capture and CRM-lite features

**Where they fail:**
- Pricing is enterprise — small independents struggle to justify
- Feature set is very reservation-specific; doesn't touch ops tooling
- Fine dining bias — doesn't speak to casual dining, pubs, cafés

**Lesson for Hospitality Pro:** Tock's aesthetic is the visual target. That editorial, premium-restaurant feel is exactly what Hospitality Pro's design language should aspire to. Study their typography, their use of white space, their photography approach.

---

### 1.9 Hostaway / Guesty
**What they do:** Vacation rental / short-term rental property management platforms.

**Hostaway — What they do well:**
- Clear, outcome-focused homepage: "60 minutes saved per reservation", "25% more revenue per listing"
- AI automation of guest communication (90% automated)
- 300+ integrations — breadth of ecosystem
- 97% customer satisfaction — support is genuinely a differentiator
- Dynamic pricing built in

**Guesty — What they do well:**
- Feature breadth is unmatched in the STR space
- Unified inbox for all channels — reduces context switching
- Enterprise features (Trust Accounting, damage protection) for professional operators

**Where they fail (both):**
- Overkill for anyone with fewer than 5-10 properties
- Feature menus are overwhelming — the list of add-ons in Guesty's nav is a UX failure in itself
- Designed for property managers, not hospitality-focused owner-operators
- No AI tools for the operator's own brand — only for guest-facing automation

**Lesson for Hospitality Pro:** Hostaway's homepage headline structure is worth studying: lead with a concrete outcome metric, not a feature. "Save X. Earn Y." We need the same clarity on the landing page.

---

## Part 2 — UX Gap Analysis

### 2.1 The Seven Deadly UX Sins of Hospitality Tools

**1. The Demo Wall**  
Every enterprise tool hides behind "Book a Demo." This is a conversion filter that eliminates exactly the independent operators who would benefit most. Zero-friction try-before-commit is a competitive weapon, not a risk.

**2. The Setup Tax**  
Tools that require you to input all your ingredients, suppliers, staff, and venues before you see any value will lose 80% of potential users before they ever experience the product. Apicbase, MarketMan, and Guestline all have this problem. Hospitality Pro's browser-native, zero-setup approach is a genuine structural advantage that must be protected and amplified.

**3. The Feature Graveyard**  
Navigation menus with 40+ items. Dashboards with 12 widgets. Settings pages with 200 options. Independent operators don't have time to explore a product — they need to arrive at value in under 2 minutes.

**4. The Mobile Afterthought**  
The hospitality operator's office is the kitchen, the dining room, the car. Most of these tools are desktop-only in practice, built for someone sitting at a back-office computer. The ones that get mobile right (7shifts, Sunday) are rewarded with high daily engagement.

**5. The Empty State Abyss**  
Open a new tool and you see: nothing. A blank table. A greyed-out chart. No sense of what it will feel like when it works. Best-in-class tools show you a populated example or guide you through a first action immediately.

**6. Jargon Over Context**  
COGS, PAR levels, yield factors, BCG matrix, RevPAR. These are real concepts that operators understand — but when the UI leads with jargon before demonstrating value, it creates anxiety rather than confidence. Language should feel like it's coming from a trusted colleague, not a textbook.

**7. Generic AI Output**  
The tools that have added AI (MarketMan AI Ordering, Guesty AI Messaging) have done so by bolting a generic LLM onto a legacy interface. The output feels obviously machine-generated. The brand voice is absent. The context is shallow. Operators sense this immediately.

---

### 2.2 What Best-in-Class Looks Like

**First 60 seconds:** Tool opens to an example already populated with realistic, contextually appropriate data. The operator immediately sees what good output looks like. One clear CTA: "Try with your own data."

**Input:** Forms that feel like a conversation, not a database entry screen. Sensible defaults. Inline help text that sounds human. Progressive disclosure — don't show all fields at once.

**AI Output:** Displayed as structured, scannable text. Clear hierarchy: headline finding → supporting detail → specific action. Output should feel like it came from a senior colleague, not a bot.

**Export/Action:** One click to copy, print, or download. No login required. No email capture (until they want to save or share).

**Success State:** A moment of celebration. Not a confetti explosion — a subtle but unmistakable signal that something valuable just happened. "Your SOP is ready. That took 90 seconds."

---

### 2.3 Top 5 Unmet Needs in the Market Today

**1. A Zero-Setup, Beautiful AI Operations Toolkit for Independent Operators**  
This is the hole. Enterprise tools are too heavy. Generic AI tools aren't hospitality-native. There is no elegant, fast, browser-native suite designed for the owner-operator who knows what they're doing. Hospitality Pro is this product. It needs to look and feel the part.

**2. AI That Knows Your Brand Voice**  
Every AI tool produces generic output. The tools that will win are the ones that remember: your venue's name, your tone of voice, your non-negotiables. A "venue profile" that persists across tools (in localStorage) and informs every AI call is a killer feature that no competitor has cracked for independent operators.

**3. Mobile-First Ops Tools**  
7shifts proved that scheduling done right on mobile becomes the primary way operators interact with the tool. No one else has applied that thinking to recipe costing, allergen management, or SOP generation. The chef who wants to cost a new dish is standing in the kitchen, not sitting at a desk.

**4. Plain-Language Financial Intelligence**  
Every operator has a weekly P&L. Almost none have someone who can translate it into action. The Financial Narrative Generator is the most undervalued tool in the suite — it solves a real, expensive problem. It needs to be positioned and designed as the flagship.

**5. Cross-Tool Workflow**  
The operator's real workflow is: cost a dish → engineer the menu → write the SOP → update the allergen matrix → build the procurement order. These are connected steps, not isolated tools. A "send to next tool" flow between related tools would be genuinely novel and deeply useful.

---

## Part 3 — Design Brief for Hospitality Pro Redesign

### 3.1 Visual System

#### Typography

**Primary: [Inter](https://fonts.google.com/specimen/Inter)**  
Inter is the choice. It's neutral, reads at every size, has been optimised for screens by some of the best type engineers alive, and it signals precision without pretension. Used for all body copy, inputs, labels, data.

**Display / Headings: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display)**  
Playfair is the editorial foil to Inter's utility. It signals premium, crafted, quality — the visual equivalent of a well-plated dish. Used for hero headlines, tool names, and section titles. Italic weight adds character.

**Mono (optional, for data/output): [JetBrains Mono](https://www.jetbrains.com/legalnotices/monospace_typeface/)**  
For displaying generated SOPs, email copy, and AI output — the monospace treatment signals "this is ready to copy/use" and adds polish to the output state.

**Scale:**
- Display: 48–64px / Playfair Display SemiBold or Bold
- H1: 32–40px / Playfair Display Regular or SemiBold  
- H2: 24–28px / Inter SemiBold
- H3: 18–20px / Inter SemiBold
- Body: 15–16px / Inter Regular (line-height 1.6)
- Label/Caption: 12–13px / Inter Medium, tracking +0.02em
- Mono output: 14px / JetBrains Mono Regular

---

#### Colour System

**Keep the core black. Refine everything else.**

The existing `#0f0f0f` + `#d4a85a` pairing is strong in principle — dark editorial base, warm gold accent. The problem is execution: the gold reads cheap and the dark surface needs more depth and nuance.

**Revised Palette:**

```
--color-base:        #0d0d0d   /* Near-black — deep, not flat */
--color-surface:     #141414   /* Card background */
--color-surface-2:   #1a1a1a   /* Elevated card / active state */
--color-border:      #2a2a2a   /* Subtle dividers */
--color-border-soft: #1f1f1f   /* Very soft dividers */

--color-gold:        #c9993f   /* Richer, less yellow — aged bronze */
--color-gold-light:  #e8c070   /* Hover / highlight state */
--color-gold-muted:  rgba(201, 153, 63, 0.15)  /* Fill / background tint */

--color-text-primary:   #f5f0e8   /* Warm white — not pure #fff */
--color-text-secondary: #a09880   /* Muted warm grey */
--color-text-tertiary:  #6b6456   /* Very muted — labels, placeholders */

--color-success:     #4a9e6a   /* Green — confirms, saves, exports */
--color-warning:     #d4884a   /* Amber — allergen flags, cost warnings */
--color-error:       #c0453a   /* Red — only for genuine errors */
--color-info:        #4a7ec0   /* Blue — informational only */
```

**Why this works:**
- The `#c9993f` gold is darker and richer than `#d4a85a` — it reads like burnished bronze, not canteen brass
- The warm white (`#f5f0e8`) on near-black avoids the cold sterile feel of pure white-on-black
- The surface steps (`#141414` → `#1a1a1a`) create depth without going garish
- The status colours are desaturated enough to feel considered, not traffic-light cheap

**For landing page only:** Consider an off-white light mode section (hero background `#faf9f5`) to break the all-dark monotony and give the page rhythm.

---

#### Spacing & Component System

**Grid:** 8px base unit. Everything is a multiple of 8.

**Border Radius:**
- Cards: `radius: 12px`
- Buttons: `radius: 8px`
- Inputs: `radius: 8px`
- Tags/badges: `radius: 4px`
- Toasts/alerts: `radius: 10px`

**Input height:** 48px (comfortable touch target, premium feel — not the cramped 36px common in utility tools)

**Button system:**
- Primary: Gold fill (`#c9993f`) + dark text, 48px height, SemiBold, 16px font
- Secondary: Transparent + gold border + gold text, same dimensions
- Ghost: Transparent + `--color-text-secondary` text, no border (for tertiary actions)
- Destructive: `--color-error` border + text, never filled red
- Icon button: 40×40px, `--color-surface-2` background, gold icon on hover

**Cards:**
- Background: `--color-surface`
- Border: `1px solid --color-border`
- Padding: 24px
- Shadow: `0 1px 3px rgba(0,0,0,0.4)` (subtle depth, not floating)
- Active/hover: background transitions to `--color-surface-2`, border to `--color-border-soft` (lighter)

**Icons:** [Lucide](https://lucide.dev/) — consistent, geometric, clean. 20px in context, 16px in compact. Never use emoji in UI chrome.

**Form labels:** Always above inputs (not placeholder-only). `12px / Inter Medium / --color-text-secondary / tracking 0.06em / uppercase`. Placeholder text is for example values only, never labels.

**Input focus state:** `border-color: --color-gold` + `box-shadow: 0 0 0 3px --color-gold-muted`. Unmistakable but not aggressive.

**Select dropdowns:** Custom styled — match input aesthetics. Native selects look broken in the dark theme.

---

#### Motion & Micro-interactions

The goal is "precision instrument, not animation showreel."

**Loading states:**
- Skeleton screens (not spinners) for tool output areas
- AI generation: a subtle line-by-line text reveal (each paragraph fades in with a 50ms stagger) — signals that AI is working, makes the output feel considered not instant-dumped

**Button states:**
- Press: 2px translateY on mousedown — tactile
- Loading: spinner icon replaces button label, button stays the same size (no layout shift)
- Success: brief checkmark flash (300ms) before returning to label

**Card hover:** `translateY(-2px)` + slight shadow increase — 150ms ease-out. Minimal but present.

**Input focus:** Smooth border-color transition — 150ms. The focus ring feels like it "arrives."

**Result appearance:** Generated content fades in at `opacity: 0 → 1`, `translateY: 8px → 0`, 250ms ease-out. Not a pop — a smooth arrival.

**Page transitions (if SPA-ified):** Crossfade, 200ms. Never slide — too much movement for a tool.

**Never animate:** Table rows, labels, error messages, required markers. Animation should feel earned.

---

### 3.2 Landing Page Redesign

#### The Single Most Powerful Hook

> **"10 AI tools that would have cost you £200/month. Yours, free, in the browser."**

Or the more evocative version:
> **"The operations toolkit built by someone who's actually done the service."**

Or the conversion version:
> **"Stop guessing. Start costing, scheduling, and writing like you have a back-office team."**

**Recommendation:** Lead with the second (credibility/human angle), support immediately with the practical proof (10 tools, free, no login).

---

#### Page Architecture

**Hero (full viewport)**
- Dark background, Playfair headline (large), Inter subheadline
- Headline: *"The AI Operations Toolkit for Hospitality Operators"*
- Sub: *"10 browser-based tools for recipe costing, rota optimisation, review management, and more. Built on 20 years of Michelin-standard operations. No login. No subscription."*
- Primary CTA: `Explore the Tools →` (scrolls to tool grid)
- Secondary CTA: `Download the Playbook` (lighter treatment)
- Visual: A subtle, dark photo (elegantly plated dish, or kitchen detail shot — no generic stock) OR a live demo preview of one of the tools in action (much more compelling)

**Trust bar (below hero fold)**
- 3–4 operator proof points in a horizontal strip
- Minimal text: "No login required · Browser-native · Built for independent operators · 10 tools included"
- If testimonials exist, one powerful quote here. If not, leave as feature strip for now.

**Tools Overview (the grid)**
- 2×5 or a category-grouped layout (see below)
- Each card: Tool icon + name + one-line description + `Launch →`
- Hover: card lifts, brief description expands
- Group into 3 categories for cognitive ease:
  - **Kitchen & Menu** (Recipe Costing, Menu Engineering, Allergen Matrix, Delivery Pricing)
  - **Ops & People** (Rota Optimizer, SOP Generator, Procurement Generator)
  - **Guest & Revenue** (Review Responder, Pre-Arrival Email, Financial Narrative)

**The Playbook section**
- Brief standalone section — what it is, what's in it, download CTA
- Don't bury this — it's a high-value lead magnet

**About Jordan section**
- Short, confident, first-person. Not a CV — a brief statement of credibility.
- "I've cooked in Michelin kitchens, run multi-venue operations, and built marketing systems that scaled to eight figures. These are the tools I wish I'd had."
- Photo if Jordan is comfortable with it — human face dramatically increases trust/conversion

**Footer CTA**
- "Need these systems tailored to your venues?" → link to jordanpitts.com
- Simple footer: links, copyright, Jordan's name

---

#### Hero Visual Direction

The hero background should be **photography, not illustration or abstract gradients**. Dark, atmospheric, high-quality. Options:
1. A beautifully lit mise en place shot (chef's preparation counter, ingredients arranged)
2. An empty dining room at dusk — tables set, ambient light
3. A close-up of a handwritten recipe card with a digital screen beside it (craft meets technology)

Use `mix-blend-mode: overlay` or dark gradient overlay at 70% to keep the headline legible.

**The hero live demo concept (higher effort, high conversion impact):** Embed a small, non-interactive "preview" of one tool (e.g., the Review Responder with a sample review already loaded) as an interactive element in the hero. Let visitors see the AI output before they even click a tool. This is the "show don't tell" principle at its most powerful.

---

#### How to Present the 10 Tools

**Categorised grid, not alphabetical list.** The operator's brain organises around their day, not alphabetical order. Three clear categories work better than ten undifferentiated cards.

Each tool card:
```
[Icon]
Tool Name
One-sentence description (max 12 words)
[Launch Tool →]
```

On hover: a 2–3 sentence description of what it actually does appears.
Add a subtle "Most Used" or "Start Here" badge to Review Responder and Recipe Costing (the two most broadly useful tools) to guide first-time visitors.

---

### 3.3 Tool UX Patterns (Shared System)

#### Empty States

The current empty state for most tools is a blank form. This is a missed opportunity.

**New approach:** Every tool loads with a realistic, pre-populated example state. The example should be industry-specific and UK-relevant (not American defaults). For example:
- Recipe Costing: "Pan-seared duck breast with cherry jus — a sample recipe already loaded with 6 ingredients, target GP pre-set at 68%"
- Review Responder: A sample Google review (positive but vague) already in the text area

Below the example state: `"Clear and use your own data"` CTA — small, unobtrusive.

**The principle:** Show me what success looks like before asking me to work.

---

#### Onboarding: Venue Profile (Persistent)

Every tool should offer an optional "Venue Profile" that persists in `localStorage`:
- Venue name
- Type (restaurant / hotel / pub / café / heritage experience)
- Tone (formal / relaxed / premium / friendly)
- Key non-negotiables (e.g., "We never offer discounts. Loyalty only.")

This profile injects context into every AI prompt automatically. The operator sets it once. Every tool remembers it. This is the "Smart Snippets" equivalent — and it's currently completely absent.

Implementation: A subtle "Set venue profile" CTA in the top-right of every tool page. Takes 90 seconds. Transforms every output.

---

#### Input Design Principles

1. **One section at a time.** Don't dump all inputs on screen. Use progressive disclosure — first ask the essential inputs, then reveal advanced options behind an `Advanced settings ▾` toggle.

2. **Labels above, always.** Never rely on placeholder-as-label. Placeholders are for example values: `e.g., "Pan-seared duck breast"`.

3. **Inputs should suggest.** Where relevant, offer quick-fill buttons for common values. For tone in Review Responder: `[Warm] [Formal] [Relaxed]` as visual pill options, not a plain dropdown.

4. **Validation is instant, not on submit.** Inline validation at field level. Never let the operator fill in a long form and hit Generate only to see 4 errors.

5. **Tab order is deliberate.** The operator should be able to fill in a tool entirely with keyboard. Tab → fill → Tab → fill → Enter to generate.

6. **Number inputs with units.** "Cost per unit" should have a `£` prefix baked into the input chrome, not added as a separate label.

---

#### Output Design

**Structure of every AI output:**
1. **Summary line** — one sentence. Scannable at a glance.
2. **Primary content** — the main generated text, structured with appropriate headers.
3. **Key actions / callouts** — pulled out in a distinct style (e.g., a gold left-border callout for warnings, recommendations, or flags).
4. **Meta info** — tokens used, cost, timestamp (toggleable — show only if operator wants it).

**Visual treatment:**
- Output appears in a distinct panel/card — visually separate from the input form
- Background: `--color-surface-2` (slightly lighter than card background)
- Left border: `2px solid --color-gold` — signals "this is the result"
- Line-by-line text reveal animation (see Motion section)

**Copy button:** Persistent, top-right of output panel. One click copies all output to clipboard. Shows `Copied ✓` for 2 seconds.

**Print/export:** Where relevant (Recipe Cards, Allergen Matrix, SOPs), a "Print / Export PDF" button. Use `window.print()` with a clean print stylesheet. Zero friction.

---

#### Export & Sharing Affordances

| Tool | Primary Export | Secondary |
|------|---------------|-----------|
| Recipe Costing | Print-ready card (A4) | Copy as text |
| Review Responder | Copy to clipboard | Session log (last 5) |
| Procurement | CSV download | Print-ready order sheet |
| Pre-Arrival Email | Copy HTML | Copy plain text |
| Menu Engineering | Print PDF (matrix) | Copy insights |
| Rota Optimizer | Print-ready schedule | Copy as text |
| Financial Narrative | Copy to clipboard | Print PDF |
| SOP Generator | Print PDF (numbered) | Copy as text |
| Allergen Matrix | Print PDF (A3-ready) | CSV export |
| Delivery Pricing | Copy bundle pricing | Print PDF |

No tool should require login to export. That's a core principle.

---

#### Mobile Priority

**Mobile-first tools (redesign priority for mobile):**
1. **Review Responder** — operators check reviews on phones. Response happens there.
2. **Rota Optimizer** — managers view and adjust schedules on the go
3. **Pre-Arrival Email** — often written in transit
4. **Financial Narrative** — reviewed on mobile with a coffee
5. **SOP Generator** — often created in response to an incident, wherever you are

**Desktop-acceptable tools** (complex data entry benefits from larger screen):
- Recipe Costing (multi-ingredient table entry)
- Allergen Matrix (multi-dish × multi-allergen grid)
- Procurement Generator (multi-item ordering)
- Menu Engineering (BCG matrix requires screen real estate)
- Delivery Pricing (multi-item pricing table)

Mobile-first tools must: large touch targets (48px min), single-column layout, sticky Generate button at bottom of screen, output that fits on a phone screen without horizontal scrolling.

---

#### Success States

The operator must feel "that just saved me time" at the moment of completion. Mechanisms:

**1. The time signal:** After generating, show a subtle tag: `Generated in 4 seconds`. This is a humble brag that calibrates expectations and signals speed.

**2. The value signal:** Where calculable, show the ROI. After Recipe Costing: *"At £26.50 selling price, you're running a 71.4% GP. That's £2.30 more than your target."* Not just data — interpretation.

**3. The continuity nudge:** After completing a tool, suggest the natural next tool: *"You've priced the dish. Want to add it to your menu engineering matrix? →"*. Cross-tool workflow prompts are a killer feature that no competitor has.

**4. The save/share moment:** A brief "Save this output" prompt after generation — stores to localStorage, no login required. Allows the operator to return to it.

---

### 3.4 Per-Tool Priority Improvements

**Rating:** 1 = minor polish, 5 = fundamental rebuild needed

---

**1. Recipe Costing Calculator — Priority: 4/5**

Current state: Functional, but the ingredient entry is a sparse table with no visual hierarchy.

**Top improvements:**
- Add **yield factor** and **sub-recipe** support. A chicken breast costs X per kg, but after trimming it costs Y per usable portion. This is the gap between "toy" and "professional" recipe costing.
- **Visual GP dial/gauge**: Replace the "Actual GP% 0%" text with a visual indicator (a semicircular gauge, or simply a large number in gold with a subtle background colour shift from red → amber → green). Operators need to feel the GP, not just read it.
- Pre-populated example dish on load.
- Inline allergen detection with the 14-allergen icons (not just a text list).

---

**2. AI Review Responder — Priority: 3/5**

Current state: Already one of the better-designed tools. Core functionality works.

**Top improvements:**
- **Venue Profile integration**: The tone/brand settings should pre-populate from the venue profile. An operator shouldn't re-enter their venue type every session.
- **Response variants**: Generate 2–3 variations with one click (Short / Formal / Warm). Let the operator pick. Reduces editing time to near zero.
- **Session persistence**: The "Session Log (Last 5)" is a great feature — make it more prominent. Show the last response in a sidebar, not buried below.

---

**3. Smart Procurement Generator — Priority: 4/5**

Current state: Unclear from the rendered text alone — this tool likely requires significant UX work.

**Top improvements:**
- **Intelligent item library**: Allow operators to save their standard order items (with usual quantities and supplier names). The tool then becomes "here are your upcoming covers, here's the pre-filled order." First-run friction disappears.
- **Supplier-split output**: Orders formatted by supplier (one table per supplier = one email per supplier). Currently a single list is likely the output — that's not usable as-is.
- **10% buffer visual**: Make the buffer logic visible and adjustable. "10% safety buffer added to all quantities. Adjust: [slider 5–20%]"

---

**4. Pre-Arrival Email Builder — Priority: 3/5**

Current state: Functional. The concept is strong.

**Top improvements:**
- **Multi-step flow**: Break this into stages. Step 1: Guest info (name, booking type, date). Step 2: Upsells to mention. Step 3: Tone and venue context. Output appears at the end — not as one overwhelming form.
- **Email preview with real formatting**: The output should render as an email preview (proper font, spacing, signature block) — not just a text dump. One-click "Copy as formatted email" for HTML-capable email clients.

---

**5. Menu Engineering Analyzer — Priority: 4/5**

Current state: BCG matrix categorisation (Stars/Ploughhorses/Puzzles/Dogs) is the right framework.

**Top improvements:**
- **Visual BCG matrix chart**: The output should be an actual 2×2 visual matrix with dish names plotted by margin × popularity. Text descriptions of categories are fine as support, but the chart IS the deliverable.
- **AI action plan by category**: For each category, a specific AI-generated action. "Your Ploughhorses are [X, Y, Z]. These are high popularity but low margin. Suggested actions: [specific, not generic]."

---

**6. Rota Optimizer — Priority: 5/5**

Current state: Text-form input, almost certainly text output. This tool has the biggest gap between concept and execution.

**Top improvements:**
- **Visual rota output**: The output must be a weekly visual grid (days across the top, staff down the side), not a paragraph of text. This is table stakes for a scheduling tool in 2026.
- **Minimum redesign**: An interactive HTML/CSS table that renders the generated schedule. Staff rows, 7-day columns, shift blocks in colour. Print-ready.
- This tool is the highest-effort rebuild, and it's worth it — scheduling is the highest-frequency operator task.

---

**7. Financial Narrative Generator — Priority: 2/5**

Current state: Input P&L figures → get 300-word executive summary. This is genuinely valuable and likely working reasonably well.

**Top improvements:**
- **Structured input form**: Revenue / Labour / Food Cost / Overheads as distinct labeled inputs with £ prefixes — not a freeform text dump. Calculates GP% and labour% automatically as you type.
- **Narrative with red-flag formatting**: In the output, financial warnings (labour over 35%, GP below 60%) should be visually flagged in amber/red inline. Not just mentioned in prose.

---

**8. SOP Generator — Priority: 2/5**

Current state: Dump notes → numbered SOP with scope, equipment, sign-off.

**Top improvements:**
- **SOP template type selector**: "What type of SOP?" — Opening Procedure / Closing Procedure / Food Safety / Service Standard / Equipment. This pre-seeds the AI prompt with the right structure.
- **Print layout is the product**: The PDF output format matters enormously. A well-formatted, branded SOP document (with venue name from venue profile, version number, date, sign-off box) is what gets laminated and posted in the kitchen. Invest in the print CSS.

---

**9. Allergen Matrix Builder — Priority: 4/5**

Current state: 14 allergens, auto-detect, manual overrides, CSV + print.

**Top improvements:**
- **The matrix IS the product**: An A3-ready visual allergen matrix (dishes as rows, allergens as columns, filled cells with a distinct symbol + colour code) is what operators need to legally display. The current output (if text-based) needs to become a proper grid.
- **Confidence/source indicators**: For each allergen detection, show "auto-detected" vs "manually confirmed" — critical for legal compliance. The operator needs to know what the AI inferred vs what they verified.
- This tool has legal compliance implications — accuracy confidence signals are non-negotiable.

---

**10. Delivery Pricing Optimizer — Priority: 3/5**

Current state: Shows real GP after commission + VAT; generates high-margin bundles.

**Top improvements:**
- **Platform commission presets**: A toggle for Deliveroo (35%) / Uber Eats (30%) / JustEat (25%) / Own website (0%). Pre-fill the commission rate from the selected platform. Obvious UX improvement.
- **Before/after visual**: Show the GP comparison as a visual — original GP% vs post-commission GP% as a side-by-side bar. The shock of "you thought you were running 65% GP, but after Deliveroo you're at 42%" is the core insight. Make it visceral.

---

## Part 4 — Build Roadmap

### 4.1 Three Tools to Rebuild First

**Priority order:**

**1. Review Responder (Quick Win + High Visibility)**  
Lowest rebuild complexity, highest immediate value. This is the tool most likely to get shared ("I just got an amazing AI-written response to a bad TripAdvisor review"). Add venue profile integration, response variants, and a polished output card. Ship in 1–2 days.

**2. Recipe Costing Calculator (Core Credibility + Most Used)**  
Every hospitality operator costs recipes. This is the tool that proves the suite is serious. Add yield factors, the GP gauge, the allergen icon display, and a polished print card. Ship in 3–4 days.

**3. Rota Optimizer (Highest Differentiation + Most Needed Rebuild)**  
The gap between current execution and what this could be is largest here. A visual rota output is completely absent from the free-tool market. This is the showpiece. Invest more time (5–7 days) and deliver something that makes operators screenshot it and send it to their GM.

---

### 4.2 Shared CSS Framework Spec

All 10 tools should adopt a shared `hospitality-pro.css` loaded from a CDN path or relative import.

**Framework contents:**

```css
/* ==============================
   HOSPITALITY PRO — SHARED DESIGN SYSTEM
   v2.0 | March 2026
   ============================== */

/* 1. CSS Custom Properties (tokens) */
/* All colours, typography, spacing, radius as described in Part 3.1 */

/* 2. Typography base */
/* @import Inter from Google Fonts */
/* @import Playfair Display from Google Fonts */
/* body, h1-h6, p, label, input base styles */

/* 3. Layout system */
/* .tool-container — max-width: 860px, centred, padding: 0 24px */
/* .tool-header — title + back navigation */
/* .tool-body — main content area */
/* .input-panel — left/top panel for inputs */
/* .output-panel — right/bottom panel for output */

/* 4. Component library */
/* Buttons: .btn, .btn-primary, .btn-secondary, .btn-ghost */
/* Inputs: .input-group, .input-label, .input-field, .input-prefix */
/* Cards: .card, .card-elevated */
/* Badges: .badge, .badge-warning, .badge-success */
/* Alerts: .alert, .alert-warning, .alert-error */
/* Output panel: .output-block, .output-highlight */

/* 5. Utilities */
/* Spacing, display, flex, grid helpers */
/* .visually-hidden for accessibility */

/* 6. Print styles */
/* @media print — clean rendering for all print-targeted tools */
/* Hide: nav, input panel, buttons, CTA sections */
/* Show: output content, tool title, venue name, date */
```

**Delivery format:** A single `hospitality-pro.css` file (~15KB minified). Every tool page links it. All tools immediately look consistent.

Additionally: a shared `hospitality-pro.js` for:
- LocalStorage venue profile read/write
- API key management (stored securely in localStorage)
- OpenRouter fetch wrapper (handles loading state, error handling, streaming)
- Copy-to-clipboard utility
- Print trigger utility
- Toast notification system (success/error/info)

---

### 4.3 Landing Page — Immediate Changes

**Do these now, in order of impact:**

1. **Rewrite the hero headline.** Current: generic and long. New: `"The AI operations toolkit built for operators who actually know their craft."` — sub: `10 browser-based tools. No login. No subscription. No bullshit.`

2. **Add the three tool categories.** Replace the flat list with Kitchen & Menu / Ops & People / Guest & Revenue groupings. Immediate cognitive clarity.

3. **Add visual weight to the hero.** The current landing page renders as text-heavy. Add a full-viewport background image (dark kitchen/dining photography) with gradient overlay. Transforms the premium feel immediately.

4. **Add a "Start here" signal.** Two or three tools should be marked as the recommended entry point. This removes paralysis for new visitors.

5. **Add the venue profile prompt.** In the navigation or below the hero: `"First visit? Set your venue profile in 60 seconds for better AI outputs →"`. This drives quality of experience from first touch.

6. **Replace the generic tool descriptions.** Each tool's description should lead with the operator's problem, not the tool's features. "Stop losing money on every Deliveroo order" not "Delivery Pricing Optimizer."

7. **Add a testimonial or social proof element.** Even one strong quote from an operator transforms conversion. Jordan's network should produce this.

---

### 4.4 New Tools — Obvious Market Gaps

**1. Venue Profile / Brand Voice Manager** *(internal tool, not standalone)*  
Not a standalone tool but a system layer. Builds the persistent context that makes every other tool better. Priority: build with the v2 CSS framework rollout.

**2. Guest Complaint Handler**  
Different from Review Responder — this is for live complaints (in-person or email). Input: what happened, who was involved, what they want. Output: a management response script, a recovery offer recommendation, and an internal incident record. No competitor has this as a standalone tool.

**3. Menu Description Writer**  
Input: dish name, key ingredients, cooking method. Output: 2–3 menu description variants (formal tasting menu style / casual bistro style / delivery menu style). Every operator rewrites menu descriptions when menus change. Constant friction. Apicbase doesn't touch this. Tock doesn't. Nobody does.

**4. Staff Briefing Generator**  
Pre-service briefing notes from: tonight's specials, key allergen updates, VIP guests, table notes. Input takes 2 minutes; output is a print-ready briefing sheet the head waiter reads from. This is 7shifts territory but ops-focused not scheduling-focused.

**5. Revenue Pacing Report**  
Input: target weekly revenue, covers booked by day, average spend. Output: a day-by-day pacing chart showing whether the week is on track, plus AI-generated recommendations if behind pace (run a lunch special on Thursday, promote walk-ins on quiet Tuesday). Lightweight revenue management for operators who can't afford SevenRooms.

---

## Appendix: Design Principles (Non-Negotiable)

1. **Zero friction to value.** A new visitor must see what good output looks like within 30 seconds of arriving.

2. **No login required, ever.** The moment you add a login wall, you lose 60% of the independent operators who are the target audience.

3. **Everything runs in the browser.** No server-side processing except the AI API call. No data stored externally. This is both a technical constraint and a trust signal.

4. **Jordan's voice is in the product.** Every empty state, every label, every tooltip should sound like a knowledgeable colleague who's worked the service — not a generic SaaS product. Irreverent where appropriate. Precise where it counts.

5. **Print is a first-class output.** Chefs print things. Managers post things on walls. PDFs get emailed to GMs. The print stylesheet for every tool is part of the product, not an afterthought.

6. **One action per screen.** Progressive disclosure, not feature dumping. The operator should always know what to do next.

7. **The AI output is the product.** The input form is infrastructure. Design the output state first — that's what the operator takes away.

---

*Prepared March 2026 · For questions or build prioritisation, reference this document in all briefings.*
