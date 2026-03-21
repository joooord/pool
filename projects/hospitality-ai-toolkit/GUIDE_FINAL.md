# The AI Operations Toolkit for Hospitality

**An uncompromising, battle-tested manual for operators scaling margins, speed, and guest experience.**

---

## About the Author: Jordan Pitts

I didn't learn hospitality in a boardroom, and I didn't learn automation in Silicon Valley. My standards were forged on the pass at Anthony’s, a Michelin-starred kitchen in Leeds. If you’ve ever worked a Saturday night service where the printer never stops, the extractor fan is deafening, and every plate has to be perfect, you know what operational pressure actually feels like. You understand exactly what happens when a kitchen runs badly, when communication breaks down, and when standards slip. There is no hiding. 

From the kitchen, I moved into the mechanics of revenue. As Head of Marketing at DPP Publicity, I built the email and SMS automation systems that scaled UK automotive dealership revenue from under £1M to £12M. I was building these automated communication funnels long before AI was a buzzword. I learned how to capture attention, nurture leads, and force conversion at scale. 

Later, I managed hospitality operations across 23 properties in Italy. When the pandemic hit, the industry cratered. I had to furlough 80% of my portfolio overnight. But by implementing intelligent guest communication and retention systems, we retained 100% of our revenue through the pandemic. Through relentless systemisation, we also achieved a 22% year-on-year reduction in procurement costs. 

Today, I work as a Growth & Performance Consultant. I build and deploy AI systems for hospitality businesses that want to scale their margins, speed, and guest experience without losing their soul. I see operators drowning in admin, general managers losing revenue to manual errors, and group directors trying to scale consistency without chaos. 

This guide is the exact playbook I use to fix those problems. It is built for the reality of a 14-hour shift. It is built to make you leaner, faster, and more profitable. 

---

## Introduction

AI will not replace hospitality. The fundamental contract of our industry—human connection, service, and environment—remains unchanged. A language model cannot pour a perfect pint, it cannot read the room when a couple is arguing over dinner, and it cannot replace the warmth of a genuine welcome. But operators who know how to use AI will systematically outcompete those who do not. They will run leaner, react faster, and deliver a guest experience that feels entirely frictionless, all while maintaining wider margins. 

This is not a theoretical "prompt engineering" guide written by a tech blogger who thinks a restaurant runs on an app. This is an operations manual. Every automation, framework, and prompt in this document has been stress-tested in real hospitality environments—from Michelin-starred kitchens to multi-site restaurant groups, boutique hotels, and luxury heritage rail. This is a practitioner's manual—written by someone who has managed service during a Michelin inspection AND had to furlough 80% of a 23-property portfolio in the same career. I know what it means to bleed margin on a Tuesday afternoon, and I know how to stop it.

If you are an owner-operator drowning in admin, a general manager losing revenue to manual errors, or a group director trying to scale consistency without chaos, this toolkit is for you. It covers the entire operational spectrum: marketing, revenue management, HR, procurement, events, and compliance. It is the command manual for every department in your business.

### How to Use This Guide
Do not read this like a book. Treat it as a toolkit. 
1. **Audit your current pain points.** Are you losing time to rotas? Leaving money on the table with post-stay comms?
2. **Deploy Module 2 first.** These are the 10 core automations that yield immediate ROI.
3. **Copy, paste, and execute.** The Prompt Library (Module 6) contains over 50 ready-to-use prompts. Plug your data in and let them run.

### The 4 Operator Archetypes
- **Tier 1: Small Independent (Cafes, Takeaways, Pubs).** You are time-poor. Every saved hour is money in the till. Focus on Modules 2 and 3.
- **Tier 2: Mid-Market (Restaurants, Boutique Hotels, B&Bs).** You are leaking revenue. Money is left on the table through missed upsells and slow review responses. Focus on automated comms and inventory.
- **Tier 3: Multi-Venue & Resorts.** You need scale without chaos. Focus on the financial narrative summaries and staff briefing sheets.
- **Tier 4: Transport Hospitality (Heritage Trains, Cruise Lines, Ferries, Airline Lounges).** Fixed capacity means yield management is critical. Focus on pre-departure anticipation and dietary requirement scaling.

---

## Module 1: The AI Operations Stack

You do not need fifty different SaaS subscriptions. You need a core stack that speaks to your existing systems.

**1. Communication & Drafting (Claude 3.5 Sonnet / ChatGPT Plus)**
Your heavy lifters. Use Claude for nuanced, brand-aligned copywriting (emails, menus, complaint handling). Use ChatGPT Plus for data analysis (uploading Excel rotas or sales figures).

**2. Scheduling & Rotas (AI-Assisted)**
Tools like 7shifts or Deputy are beginning to integrate AI, but you can build your own predictive rotas by feeding historical sales data and weather forecasts into ChatGPT.

**3. Inventory & Procurement Prediction**
Do not rely on gut feel for ordering. Export your POS data, feed it into your LLM, and ask for a 14-day par level prediction based on upcoming reservations.

**4. Review Management**
Tools like MARA or simply a well-crafted Claude prompt can turn 2 hours of responding to TripAdvisor/Google reviews into a 15-minute weekly task, while maintaining your specific brand voice.

**5. Financial Reconciliation Assistants**
AI cannot replace your accountant, but it can read supplier invoices, extract line items, and format them for Xero/Quickbooks without manual data entry.

---

## Module 2: The Daily Ops Automations (10 Core Workflows)

These 10 workflows are the engine of this guide. Implement one per week. 

### 1. Automated Pre-Arrival Guest Emails
**The Problem:** Generic booking confirmations do not build anticipation or drive pre-arrival upsells (wine upgrades, spa bookings, window seating).
**The Solution:** AI-drafted, highly personalised pre-arrival sequences that feel written by a dedicated concierge.
**The Exact Setup:** Export your guest list for the next 7 days. Note any special occasions. Run the prompt below to generate individual emails.
**The Prompt:** 
> "I am running a [Hotel/Restaurant Type]. Here is a list of guests arriving next week, their booking details, and any notes (anniversaries, dietary). Write a short, warm, premium pre-arrival email for each. Tone: authoritative, welcoming, understated luxury. Do not sound salesy. Casually offer our [Upsell Item] as a way to enhance their experience."
**Time Saved:** 4 hours/week. **Revenue Gained:** 10-15% increase in pre-arrival upgrades.
**Field Note:** *When we rolled this out across our Italian properties, we stopped selling "room upgrades" and started offering "balcony guarantees." The AI matched the tone perfectly. Our pre-arrival revenue jumped 18% in the first month just from changing the framing.*

### 2. AI-Drafted Review Responses
**The Problem:** Replying to reviews is tedious, but ignoring them kills your local SEO and trust.
**The Solution:** Batch processing reviews through an LLM trained on your exact brand voice.
**The Exact Setup:** Copy all new reviews from the past week into a single document.
**The Prompt:**
> "Here are this week's guest reviews for our venue. Write a response to each. For 5-star reviews, be warm and varied (do not repeat the same phrase). For negative reviews, be professional, take ownership without grovelling, and offer this contact email: [Email]. Maintain a premium, professional tone."
**Time Saved:** 3 hours/week.
**Field Note:** *I used to spend my Sunday mornings drinking bad coffee and fighting with TripAdvisor reviewers. Now, Claude drafts 50 responses in 2 minutes, strips out the emotion, and leaves me to just hit approve.*

### 3. Weekly Procurement Order Generation
**The Problem:** Over-ordering causes waste; under-ordering causes 86s. 
**The Solution:** AI analysis of upcoming covers + historical data to generate precise par levels.
**The Exact Setup:** Export next week's reservations/expected footfall and last week's sales mix. 
**The Prompt:**
> "I am providing last week's sales mix data and next week's reservation numbers. Based on the ratios of dishes sold to covers, calculate the exact raw ingredient par levels required for the next 7 days. Present this as a formatted supplier order list categorised by: Meat, Veg, Dry Goods, Dairy."
**Time Saved:** 5 hours/week.
**Field Note:** *When I was coordinating purchasing across 23 properties in northern Italy, the biggest variable wasn't the menu — it was the weather. A cold front would kill outdoor covers by 40% overnight. AI can now predict this.*

### 4. Staff Rota Optimisation
**The Problem:** Rotas based on 'how we always do it' lead to overstaffing on quiet shifts and understaffing during rushes.
**The Solution:** Dynamic scheduling based on AI footfall prediction.
**The Exact Setup:** Paste your reservation data, local weather forecast, and staff availability matrix.
**The Prompt:**
> "Analyse this upcoming week's reservations, the local weather forecast, and historical walk-in rates. Generate an optimised staff rota for Front of House and Kitchen. We need a minimum of [X] staff at all times, scaling up to a ratio of 1 staff per [Y] covers during peak hours. Highlight any shifts where we are dangerously understaffed."
**Time Saved:** 4 hours/week.
**Field Note:** *Labour is your biggest controllable cost. I've seen GMs blow their monthly margin in the first two weeks just by copying and pasting the rota from last year without looking at the forecast.*

### 5. Delivery Platform Menu Sync & Pricing Optimisation
**The Problem:** UberEats, Deliveroo, and Just Eat take massive commissions. Your pricing needs constant tweaking to maintain margin without killing volume.
**The Solution:** AI margin calculation and bundle generation.
**The Exact Setup:** Input your raw ingredient costs, packaging costs, and platform commission percentages.
**The Prompt:**
> "Here are the raw costs of my menu items, packaging costs, and the 30% commission rate of our delivery platform. Calculate the minimum selling price required for each item to maintain a 65% Gross Profit. Then, suggest 3 high-margin 'Bundle Deals' that look like a bargain to the customer but actually increase our blended margin."
**Time Saved:** 2 hours/week.
**Field Note:** *Delivery platforms will eat you alive if you let them. We used AI to constantly rebuild our "meal deals" based on whatever dry goods were cheapest that week. The customer got a deal, we kept our 70% GP.*

### 6. Post-Stay Upsell & Loyalty Sequence
**The Problem:** A guest leaves and you never speak to them again unless they initiate. 
**The Solution:** Automated, intelligent follow-up that drives direct re-bookings (bypassing OTAs).
**The Exact Setup:** Export departed guests. 
**The Prompt:**
> "Draft a post-stay email sequence for guests who checked out yesterday. Email 1 (Send today): A simple, warm thank you, asking for a direct reply if anything was less than perfect. Email 2 (Send in 30 days): A highly exclusive offer for a direct re-booking. Use the term 'loyalty invitation', never use the word 'discount'. Tone: premium, club-like."
**Time Saved:** 2 hours/week.
**Field Note:** *At DPP Publicity, I learned that the most profitable customer is the one you already have. We used this exact sequence to bypass Booking.com and drive direct returns. Never discount. Reward loyalty.*

### 7. Social Media Content Calendar
**The Problem:** Staring at a blank screen trying to write Instagram captions while the kitchen is on fire.
**The Solution:** A 30-day content matrix generated in 10 minutes.
**The Exact Setup:** Feed the AI your menu, upcoming events, and supplier stories.
**The Prompt:**
> "Act as a luxury hospitality marketing director. I will give you our current menu, our supplier list, and our venue ethos. Generate a 30-day social media content calendar. I do not want generic 'Happy Friday' posts. Focus on: ingredient provenance, staff expertise, behind-the-scenes preparation, and atmosphere. Provide the exact caption and the visual brief for each."
**Time Saved:** 6 hours/month.
**Field Note:** *Social media should document, not create. The AI takes the raw truth of what happens in your kitchen and turns it into compelling copy. Stop trying to be an influencer and start being an operator.*

### 8. Complaint Triage & Escalation Drafts
**The Problem:** Angry emails trigger emotional, defensive responses from stressed managers.
**The Solution:** AI acts as a cool-headed buffer, drafting perfectly pitched de-escalation emails.
**The Exact Setup:** Paste the angry email.
**The Prompt:**
> "Read this guest complaint. Extract the core factual issues, ignoring the emotion. Then, draft a response from the General Manager. The tone must be intensely professional, empathetic but not weak. Validate their frustration, explain the operational reality briefly without making excuses, and offer [Specific Resolution] as a gesture of goodwill."
**Time Saved:** 1 hour/week (and countless saved relationships).
**Field Note:** *When a guest complains, your ego wants to fight back. The AI doesn't have an ego. It writes the email you should send, not the one you want to send.*

### 9. Dietary Requirement Briefing Sheets
**The Problem:** Scrappy notes about allergies lead to front-of-house panic and kitchen chaos.
**The Solution:** Perfect, formatted daily briefing sheets.
**The Exact Setup:** Export daily bookings with dietary notes.
**The Prompt:**
> "Here are the reservations for tonight's service, including all dietary requirements. Generate a clear, bulleted briefing sheet for the Kitchen and Front of House. Group by table number. For severe allergies, highlight them in bold and suggest which menu items are safe or easily modified."
**Time Saved:** 1.5 hours/day.
**Field Note:** *A severe allergy miss isn't a bad review; it's a lawsuit. In Michelin kitchens, dietary notes are treated like religious texts. The AI ensures the translation from booking system to the pass is flawless.*

### 10. End-of-Week Financial Narrative Summary
**The Problem:** Owners look at P&L spreadsheets and miss the actual story of the week.
**The Solution:** AI turns raw data into a CEO-level executive summary.
**The Exact Setup:** Export weekly revenue, wage percentage, and COGS.
**The Prompt:**
> "Act as a fractional CFO for a hospitality group. Analyse this week's revenue, wage cost percentage, and food cost percentage. Write a 300-word narrative summary of the week's performance. Highlight the biggest drag on margin, the most profitable day, and give me 3 specific operational directives for next week to improve profitability."
**Time Saved:** 3 hours/week.
**Field Note:** *Spreadsheets tell you what happened. Narratives tell you why. When I managed 23 hotels, I didn't want 23 spreadsheets on a Monday morning. I wanted the AI to tell me exactly where we were bleeding cash.*

---

## Module 3: Segment Playbooks (Expanded)

### The Cafe / Takeaway Playbook
You are a solo operator or a tiny team. Time is your enemy. You wear every hat: barista, accountant, marketing manager, and cleaner. A typical week involves 60+ hours on your feet, fighting fires, managing stock shortages, and trying to figure out why Tuesday was dead. Your goal is maximum leverage for minimum effort.
1. **The Daily Rota Hack:** You cannot afford to pay staff to stand around. Use the AI to balance shifts against the local weather and historical weekend spikes. If rain is forecast, cut the afternoon shift immediately. 
2. **The Deliveroo Optimiser:** Stop letting delivery platforms dictate your margin. Run the Pricing Optimisation prompt weekly to adjust for fluctuating raw ingredient costs. If tomato prices spike, your AI recalculates your pizza bundle deals.
3. **The Supplier Email Generator:** Stop writing late-night texts to your butcher. Use a prompt to generate formal weekly par orders. It builds a paper trail and stops you forgetting the blue roll.
4. **The "Sorry We're Closed" Auto-responder:** A polite but firm template for out-of-hours enquiries that captures their email for a newsletter. Never miss a lead just because you are asleep.
5. **The Local Collab Pitch:** A generated pitch to local offices offering bulk corporate lunch orders to guarantee baseline revenue. The AI writes the pitch, you drop off the samples.
**Quick Win:** Implement the Deliveroo Optimiser today. It instantly repairs broken margins on your highest-volume channel.

### The Boutique Hotel Playbook
You sell an experience, not a bed. Pre- and post-stay comms are where the magic happens. A typical day involves managing VIP arrivals, handling housekeeping logistics, and trying to claw back bookings from OTAs. Your guests expect perfection, and your margins depend on direct relationships.
1. **The Pre-Arrival Concierge:** Use AI to send hyper-personalised 72-hour pre-arrival emails. Include local secret spots, not TripAdvisor top 10s. Set the tone before they even arrive.
2. **The In-Stay "Magic Touch":** A prompt that takes guest preferences noted at check-in (e.g., they mentioned they like gin) and generates a handwritten-style note for the room with a small amenity. This drives 5-star reviews.
3. **The Loyalty Sequence:** The 30-day post-checkout email offering a direct booking incentive ("loyalty", never "discount"). This is how you build a moat against Booking.com.
4. **The Maintenance Tracker:** AI summaries of daily maintenance logs to spot recurring issues before a guest complains. If Room 12 has reported a slow drain three times, the AI flags it.
5. **The Housekeeping Daily Brief:** Generating exact room turnaround priorities based on early check-ins and late check-outs. Stop your head housekeeper running around with a clipboard.
**Quick Win:** The Loyalty Sequence. Export your last 30 days of checkouts and send the direct re-booking email. 

### The Restaurant Group Playbook
You need consistency across multiple sites without sounding like a corporate drone. A typical week involves area management visits, standardising recipes, and trying to figure out why Site A is 5% down on food margin compared to Site B. Scale breaks things; AI fixes them.
1. **The Head Chef Weekly Summary:** A prompt for each Head Chef to input their weekly food cost and waste numbers, generating a clean report for the Area Manager. Standardised reporting across all venues.
2. **The Standard Operating Procedure (SOP) Writer:** Turn a messy voice note about how to close the bar into a perfectly formatted, 10-step SOP manual. Ensure every site closes the exact same way.
3. **The Cross-Site Rota Balancer:** An AI prompt to suggest staff swaps between venues to avoid paying overtime at Site A while Site B is overstaffed. 
4. **The Group Review Digest:** A weekly AI summary of all reviews across all sites, highlighting the common threads (e.g., "Site C has a recurring issue with cold sides").
5. **The Menu Matrix:** Analysing the sales mix of the entire group to identify the "Stars" (high volume, high margin) and "Dogs" (low volume, low margin). Trim the fat across the entire estate.
**Quick Win:** The Group Review Digest. Stop reading 100 individual reviews; let the AI tell you the macro trends.

### The Experience / Heritage Transport Playbook
Fixed capacity. High ticket price. Zero room for error on dietary requirements. A typical week involves managing passenger manifests, dealing with last-minute cancellations, and ensuring the onboard experience feels luxurious despite operational constraints.
1. **The Passenger Manifest Analyser:** An AI prompt to group passengers by booking value, highlighting VIPs and repeat travellers for special attention from the Train Manager or Cruise Director.
2. **The Pre-Departure Anticipation Builder:** A sequence of emails educating the guest on the history of the carriage/vessel before they arrive, increasing the perceived value of the ticket.
3. **The Yield Management Adjuster:** Analysing booking velocity to suggest when to release dynamic pricing offers for unsold inventory without cannibalising full-price sales.
4. **The Dietary Matrix:** The most critical prompt. Turning 300 passenger dietary requests into a foolproof grid for the galley kitchen.
5. **The Onboard Upsell Script:** Generating natural, non-pushy dialogue for staff to upsell champagne or merchandise during the journey.
**Quick Win:** The Dietary Matrix. It eliminates the biggest point of friction between your booking team and your galley kitchen.

---

## Module 4: Implementation Roadmap & ROI

### The Automation ROI Calculator

| Automation | Hours Saved/Week | Est. Revenue Impact/Month | Priority |
| :--- | :--- | :--- | :--- |
| 1. Pre-Arrival Guest Emails | 4 hours | £1,200 (Upsells) | High |
| 2. AI-Drafted Review Responses | 3 hours | Brand Trust / SEO | High |
| 3. Weekly Procurement Orders | 5 hours | £800 (Waste Reduction) | Medium |
| 4. Staff Rota Optimisation | 4 hours | £1,500 (Labour Efficiency) | High |
| 5. Delivery Platform Pricing | 2 hours | £600 (Margin Repair) | Medium |
| 6. Post-Stay Loyalty Sequence | 2 hours | £2,500 (Direct Bookings) | High |
| 7. Social Media Calendar | 1.5 hours | Brand Awareness | Low |
| 8. Complaint Triage | 1 hour | Retained Value | Medium |
| 9. Dietary Briefing Sheets | 7 hours | Risk Mitigation | High |
| 10. Financial Narrative Summary | 3 hours | Executive Clarity | Medium |

### Week 1: Quick Wins (Zero Cost, Immediate ROI)
- Set up a free ChatGPT or Claude account.
- Implement the Pre-Arrival Guest Email automation (Workflow 1). 
- Run the Weekly Procurement Order Generation (Workflow 3) alongside your manual method to test accuracy.
- **ROI:** 4-6 hours saved. Increase in pre-arrival upsells.

### Month 1: Core Stack Installed
- Transition your entire review response process to AI (Workflow 2).
- Begin using the AI for daily dietary briefing sheets (Workflow 9).
- Generate your first 30-day social media calendar (Workflow 7).
- **ROI:** 15+ hours saved across the management team. 

### Month 3: Review and Iterate
- Implement the End-of-Week Financial Narrative Summary (Workflow 10).
- Begin tracking the exact hours saved and reallocate that time to staff training or direct guest interaction.
- **The ROI Equation:** Hours Saved per Week × Your Hourly Rate = Pure Profit.

---

## Module 5: Comprehensive Department Playbooks (Scope Expansion)

Every department already knows their problems. This module gives them the exact workflows, prompts, and operating cadence to solve them. Each playbook is written for busy operators: skim the situational cues, copy the prompts, and run. Track the gains, then standardise.

### 1. Marketing Playbook
Your marketing function exists to reduce acquisition cost while increasing direct control of your guest relationship. Stop scattering random posts across channels. Build a pipeline that takes OTA discovery, converts it into direct loyalty, and keeps your list buying season after season.

**Acquisition Strategy: OTAs vs Direct**  
Run the maths quarterly. If Booking.com is taking 18% and your ADR is £240, each OTA booking costs you £43. Use AI to pull last quarter’s OTA reservations, calculate the commission burn, and rank guests by lifetime value so you know who to migrate first. Task your marketing assistant with exporting OTA booking emails (where terms allow) or capturing them at check-in, then feed the list into an LLM with your tone-of-voice guide to draft a four-touch conversion series that swaps “discount” language for “loyalty access.”

**Seasonal Campaign Planning**  
Every venue has eight key trading spikes a year: Valentine’s, Mother’s Day, Easter, Summer, Back-to-School lull, Autumn tasting menus, Christmas, NYE. Use ChatGPT to build a fully-resourced campaign calendar that layers email, paid social, and in-venue upsell prompts. Hook it to live weather data plus your booking pace to see if you’re ahead or behind target and reallocate spend instantly—e.g., pause Meta ads if the AI flags that you’re already 90% full for the final two Saturdays before Christmas.

**Email Marketing & CRM**  
Segmentation rules: recency (last visit), frequency (visits per 12 months), and value (average spend). Export the raw data from SevenRooms or Airtable, paste it into Claude, and ask it to design drip sequences per segment: VIP nurture, OTA migration, dormant re-engagement, event launch. Build re-engagement cascades that escalate the offer: first email is storytelling, second is value-add (chef’s table access), third is a “we’ll reopen your preferred date” concierge follow-up routed via Front for a personal reply.

**Social & UGC Pipelines**  
Pick four content pillars: provenance, people, process, product. Run a Sunday-night AI session where you feed the next week’s reservations plus any notable guests (micro-influencers, regulars happy to be featured) and it spits out a shot list and captions. Batch record B-roll on Monday morning, drop clips into CapCut templates, and have GPT write the copy variations per channel. AI also grades your UGC inbox: it tags high-quality guest posts in Iconosquare and drafts DM replies asking for permission/licensing within two minutes of upload.

**PR & Influence**  
You do not need a retainer. Build an AI-scraped list of food editors, luxury freelancers, and micro-creators within 30 miles. Feed their latest work into the model and have it draft personalised angles (chef heritage, regenerative farm partnership, backstage wine cellar access). Align award submissions with your seasonal campaigns so press hits land during your highest-ADR weeks. Run influencer ROI tracking in a Notion database scored by average cheque from their referrals; have AI summarise quarterly performance and cut dead weight aggressively.

**Copy-Paste Prompts**
> **Campaign Brief Generator**  
> "Act as Marketing Director for [Venue]. Here is last year’s revenue by channel, this year’s booking targets, and our planned spend. Create a 6-week omnichannel campaign brief for [Season/Event]. Include objectives (CPA, ADR lift), channel-by-channel tactics, creative hooks, required assets, and the daily KPI dashboard we should monitor in Looker Studio."
>
> **OTA Migration Email**  
> "Write Email 2 in a four-part ‘loyalty invitation’ sequence for guests who first found us on Booking.com. Tone: discreet, club-like. Offer: guaranteed late checkout + private concierge line for direct bookings. Reference their last stay date and mention the commission hit we take without sounding desperate."
>
> **Seasonal Launch Email**  
> "Draft a 250-word email announcing our [Season] menu. Structure: 1) sensory hook tied to weather shift, 2) chef quote about hero supplier, 3) limited booking window with experiential add-on (e.g., kitchen counter seats). CTA: ‘Reserve direct – loyalty holds 48 hours.’"
>
> **Press Pitch**  
> "Write a punchy 180-word pitch to [Publication/Editor] about our collaboration with [Local Producer]. Include chef credentials (Michelin background), the data point that 72% of our menu is sourced within 25 miles, and invite them to a tasting on [Date] with two time options."

### 2. Revenue Management & Yield Playbook
Yield discipline is the difference between a beautiful operation and an unprofitable one. AI lets you run airline-grade revenue management even if you’re a 20-room townhouse or a 60-cover dining room.

**Dynamic Pricing Fundamentals**  
Load three data streams weekly: booking pace vs same time last year (STLY), on-the-books revenue, and comp-set pricing scraped via OTA Insight or Rate360. Feed them into ChatGPT (CSV upload) and ask for variances over 14, 30, and 60-day windows. For rooms: set guardrails (e.g., never drop below £185 ADR, never exceed £420 without GM approval). For restaurants with fixed menus, apply surge pricing on peak slots only (Friday/Saturday 7:30 PM) while offering value-led add-ons midweek (chef meets table, cellar pours) rather than slashing price.

**Booking Velocity Analysis**  
Velocity tells you where demand is softening. Build a simple Looker Studio report but let AI write the commentary. Paste the raw reservations export and ask for heatmaps by daypart, lead time, channel mix, and party size. Set trigger thresholds: if OTA share exceeds 45% for any arrival month, AI flags it and drafts a direct push for that cohort the same day. For fixed departures (heritage trains, supper clubs), track seats sold per week; the AI can back-calc whether you’ll sell out by departure and recommend releasing scarcity emails or targeted paid ads.

**AI-Driven Price Recommendations**  
Claude can digest cancellation curves, weather shifts, and major local events faster than your revenue manager. Feed it: “Current pickup for 12-14 July is 35% behind STLY, there’s a city marathon announced, competitor ADR is trending +12%.” It will output rate moves per room type, suggest fenced offers (non-refundable with breakfast), and highlight which packages to boost on Google Hotel Ads.

**OTA Arbitrage**  
First OTA booking is a paid lead. Train front desk to collect personal email and note preferences. After check-out, AI auto-writes a gratitude note with a unique rebooking code tied to your CRM so finance can measure campaign ROI. Use OTA stay data to build lookalike audiences inside Meta Ads: feed the AI a list of top-spending OTA guests, have it define psychographic traits, then generate creative lines that speak to those needs but push direct booking benefits (room selection, personal sommelier, loyalty tastings).

**Copy-Paste Prompts**
> **Booking Velocity Report**  
> "Analyse this reservations CSV (fields: arrival date, channel, ADR, lead time). Produce: 1) heatmap of booking pace vs STLY, 2) list of dates where pickup is ±15% variance, 3) channel mix commentary, 4) action list (rate rise or promo) ranked by urgency. Format for Monday revenue stand-up."
>
> **Yield Management Briefing**  
> "Act as Revenue Director. Here is next month’s on-the-books revenue, competitor rate shop, citywide event calendar, and weather forecast. Write a 400-word briefing for the GM covering: which dates to yield up, which to defend with value adds, required length-of-stay restrictions, and any OTA inventory throttling."
>
> **Dynamic Pricing Recommendation**  
> "Given: Suite ADR £380, target ADR £420, current pickup 12 rooms ahead of STLY for Bank Holiday weekend. Suggest a tiered pricing plan (3 rate steps) with launch dates, fences, and upsell hooks. Include contingency if pickup slows after rate increase."

### 3. HR & People Playbook
Hospitality dies when hiring slips. AI gives you leverage to attract better people, onboard them fast, coach with clarity, and keep top performers without breaking payroll.

**Recruiting for Culture Fit**  
Stop recycling generic job ads. Feed the AI your brand manifesto, service standards, and three examples of staff who thrive vs fail. It will spit out ads that speak directly to the behaviours you need (precision, warmth, hustle). Layer in screening questions scored automatically via Typeform + Zapier + Claude so your managers only interview candidates who demonstrate scenario thinking, not just pretty CVs.

**Onboarding & Tribal Knowledge**  
Every operator says “shadow Jean for a week” and calls it onboarding. Export your SOPs, WhatsApp advice, and head-chef rants into a shared Notion. Ask AI to distil it into a structured 90-day programme: week 1 basics (PMS logins, tone of service), weeks 2-4 product deep dives, months 2-3 leadership reps. Include micro-quizzes generated by the model; pipe scores into BambooHR so you know who actually read the manual.

**Performance Management**  
Weekly check-ins need structure. Have managers jot bullet notes (wins, misses, blockers) in a Google Form. Claude summarises each meeting, aligns it to core KPIs (upsell rate, table turn time, review mentions), and tracks trendlines. When someone slips, the AI drafts a performance review doc referencing exact incidents, mitigating HR risk. For difficult conversations, prompt it for scripts that balance firmness with support so your managers stop ad-libbing under stress.

**Retention Mechanics**  
Money isn’t the only lever. Use AI to scan exit interviews, anonymous feedback, and rota data to spot patterns—maybe 60% of departures cite chaotic scheduling or zero progression. Generate quarterly retention experiments: mentorship pairings, four-day blocks for chefs, wellness stipends tied to measurable outcomes (sickness days, productivity). AI also designs pulse surveys that staff actually answer in under 60 seconds via WhatsApp.

**Copy-Paste Prompts**
> **Culture-Fit Job Ad**  
> "Write a job ad for a Floor Manager at [Venue]. Inputs: our service ethos (precision, warmth, zero-theatre), weekly covers (~900), key responsibilities (briefing, upsell coaching, conflict handling). Tone: confident, no fluff. Include 3 knockout screening questions that test judgement."
>
> **90-Day Onboarding Plan**  
> "Build a 90-day onboarding roadmap for a new Sous Chef. Structure by weeks. Include shadow shifts, documented SOP reviews, skills assessments, supplier farm visits, and a final practical where they run a full service with KPIs (GP %, waste, pacing). Provide manager checklists."
>
> **Performance Review Framework**  
> "Create a performance review template for quarterly FOH check-ins. Sections: metrics (conversion, guest feedback, upsell), behaviours (coaching, calm under pressure), development plan, and manager support actions. Provide question prompts to pull real examples."
>
> **Retention Strategy Brainstorm**  
> "Analyse anonymised staff feedback (paste below) plus rota data showing average weekly hours. Propose 4 retention experiments with expected impact, cost estimate, and success metric (e.g., churn %, eNPS). Rank by speed to deploy."

### 4. Procurement & Supply Chain Playbook
Your suppliers determine your margin. AI lets you negotiate like a national group, enforce standards, and tie purchasing to menu engineering in real time.

**Cost Reduction Framework**  
Step 1: Data integrity. Export 12 months of invoices from Xero into CSV. Feed into Claude and ask for unit price variances, hidden fees, and items bought from multiple suppliers. Step 2: Benchmark. Scrape public wholesale lists or use an industry co-op price sheet, paste into the model, and ask it to highlight where you’re 8%+ above market. Step 3: Negotiate. Have AI draft multi-year volume commitments with tiered pricing so suppliers see you as predictable revenue, not random drops.

**Local Supplier Advantage**  
Guests buy provenance. Build a living supplier dossier: farm history, distance, seasonal peaks, media angles. Let the AI automatically produce QR-linked cards for each table or menu section telling the story succinctly. Cross-train procurement and marketing by having the model suggest collab content (farm visits, live streams) every quarter. Use AI sentiment analysis on guest reviews to quantify how often provenance is mentioned; report it back to suppliers as proof their story sells.

**Waste Reduction & Data Loops**  
Waste journals die in clipboards. Digitise via Google Forms; pipe entries to Sheets, and let AI categorise root causes (prep error, overproduction, supplier quality). Weekly, it suggests menu tweaks or batch size changes. Pair it with KDS data so, for instance, if fries are dumped nightly between 9-10 PM, AI recommends par-cooking less or pushing a late-night bar snack offer.

**Seasonal Menu & Procurement Sync**  
Feed the model the upcoming menu draft and suppliers’ seasonal availability calendar. It maps which dishes stress certain ingredients simultaneously (e.g., three dishes leaning on asparagus). AI proposes staggered launch dates or substitute garnishes to avoid overbuying. It also creates purchase orders aligned to delivery cycles, flagging when Bank Holidays will disrupt logistics so you can pre-load storage or negotiate temporary cold-chain support.

**Copy-Paste Prompts**
> **Supplier Audit Email**  
> "Compose a firm but respectful email to [Supplier] summarising the last quarter’s spend, delivery errors, and price drift. Attach the variance table (pasted below) and request a review meeting next week. State that we’re benchmarking new bids but would like to keep the partnership if we realign on price and service SLAs."
>
> **Waste Reduction Audit**  
> "Here is our food waste log for the past 14 days (fields: item, qty, reason, shift). Analyse the patterns, quantify cost impact, and recommend operational changes (prep batch sizes, menu edits, training) that could reduce waste by at least 20% without hurting service speed."
>
> **Seasonal Procurement Plan**  
> "Given this spring menu draft and supplier availability calendar, build a procurement plan for March–May. Include order cadence per ingredient, preferred supplier, price targets, storage requirements, and contingency suppliers if crop yields drop. Highlight any items that should be menu-limited due to volatility."

### 5. Events & Functions Playbook
Events are margin rocket fuel when the pipeline is tight and the execution flawless. AI keeps speed high from enquiry to debrief.

**Enquiry-to-Confirmation Pipeline**  
Set a SLA: every enquiry replied to within 15 minutes during trading hours. Connect your web form or Instagram DMs to Zapier; whenever a lead lands, AI drafts a personalised reply referencing their event type, budget signals, and desired vibe. Include a Calendly link for site visits and a Loom walkthrough of the space. Track conversion inside HubSpot; AI summarises weekly pipeline health, highlighting where prospects drop (pricing stage, menu negotiation, contract).

**Function Sheet (BEO) Generation**  
Banquet Event Orders should be gospel. Feed the entire client email chain + any phone call notes into Claude. It extracts timelines, dietary flags, AV needs, payment schedules, and staff ratios, then outputs a kitchen version (mise, batch cook timings) and an FOH version (room layout, service sequence, speech cues). Pipe the BEO into Google Drive with version control; AI can highlight changes between drafts so chefs don’t miss that the client swapped the dessert the night before.

**Dietary & Allergen Coordination**  
Large weddings create chaos when half the tables have unique needs. Use AI to build table-level allergen maps and cross-reference them with your prep list. It can tell you which sauces must stay 100% nut-free and generate colour-coded tags or QR codes for service trays. Pair with your supplier audit so you have traceability documents ready if the local authority walks in mid-event.

**Post-Event Analysis & Upsell**  
Within 12 hours, drop revenue, labour hours, consumption data (wine by the glass vs bottle), and guest feedback into ChatGPT. It produces a profitability summary, highlights variance vs quoted GP, and drafts a thank-you plus rebooking offer (anniversary dinner, corporate loyalty). Feed net promoter comments into the AI to identify testimonial lines you can reuse.

**Copy-Paste Prompts**
> **Event Enquiry Response**  
> "Respond to this enquiry for a 70-guest wedding breakfast in September. Tone: warm, efficient, premium. Include: congratulatory line, confirmation of preferred date availability, outline of three package tiers with starting prices, invite to book a site visit via Calendly link, and attach our digital brochure link."
>
> **Function Sheet Generator**  
> "Here is the full email thread and notes for the [Client Name] corporate dinner. Create a Banquet Event Order with sections: event overview, timeline, guest counts, menu (incl. dietary notations), beverage plan, staffing matrix, rental/AV requirements, payment milestones, and contingency notes. Output kitchen + FOH versions."
>
> **Post-Event Feedback Email**  
> "Draft a next-day follow-up to [Client] thanking them for their event. Include: gratitude, request for 3-minute feedback form, highlight of one personalised moment we delivered, soft upsell for anniversary/next corporate event with a loyalty perk. Keep it under 180 words."

### 6. Sustainability & Compliance Playbook
Compliance failures kill reputations. Sustainability now sits on the same P&L line as marketing because guests spend more with operators who can prove their credentials. AI makes the paperwork painless and the storytelling sharp.

**Commercial Case for Sustainability**  
Quantify it. AI links your waste reduction to actual GP lift: “Composting programme cut veg waste 18%, equivalent to £1,140 margin last month.” It also scans guest reviews for sustainability mentions, so you can attribute revenue to those initiatives when pitching investors or partners.

**Allergen Compliance**  
Legislation is unforgiving (Natasha’s Law in the UK). Build a single source of truth. Feed recipes, supplier spec sheets, and prep methods into an LLM; it outputs allergen matrices, label text, and FOH crib sheets. When a recipe changes, re-run the prompt and archive the PDF with timestamp for EHO inspections. AI can also generate staff quiz questions weekly to keep allergen knowledge sharp.

**Food Safety Documentation**  
Use digital checklists (Trail, iAuditor) but let AI write the SOPs and interpret exceptions. Paste daily fridge logs; it flags temperature excursions, recommends corrective actions, and drafts the incident report automatically. For HACCP reviews, have the model generate updated flow diagrams and hazard tables whenever you add a new menu process (e.g., sous-vide programme) so you’re inspection-ready.

**Carbon & Waste Reporting**  
Feed supplier invoices and utility bills into ChatGPT. It estimates scope 1/2 emissions, builds quarterly dashboards, and suggests realistic reduction projects (switch to closed-loop keg system, LED retrofits). Tie each initiative to cost savings and marketing narratives. AI also drafts grant or accreditation submissions (SRA, B Corp) using your metrics, saving tens of hours.

**Copy-Paste Prompts**
> **Allergen Compliance Statement**  
> "Using these recipes and supplier specs, produce an allergen matrix plus a guest-facing statement outlining how we manage the 14 allergens. Include our protocol for severe allergy notifications and escalation steps for FOH. Tone: professional, reassuring."
>
> **HACCP Template Generator**  
> "We are adding a sous-vide programme for beef short rib. Generate the updated HACCP plan section: process flow, CCPs, critical limits, monitoring procedure, corrective action, verification, and record-keeping requirements. Format for insertion into our existing manual."
>
> **Sustainability Report Intro**  
> "Write the opening section of our quarterly sustainability report. Inputs: waste down 12% QoQ, renewable energy tariff now covers 80% of usage, 65% of suppliers within 50 miles, staff sustainability training completion 94%. Tone: confident, no greenwash. Include one quote from our GM."

### 7. Sales & Business Development Playbook
Waiting for inbound enquiries is not a strategy. Treat sales like a daily discipline. AI arms a single BD manager (or you) with the research, targeting, and follow-up rigour normally reserved for enterprise teams.

**Corporate Account Strategy**  
Map the top 50 businesses within 20 miles by employee count, spend potential, and cultural fit. Use LinkedIn Sales Navigator exports, feed to AI, and ask it to score which ones host client dinners, offsites, or team awards nights. Build tiered outreach cadences: call + email + curated mailer. AI drafts bespoke decks referencing their recent news (funding round, expansion) and aligns your offer (private dining, preferential room blocks) to their pain (impress investors, house relocating staff).

**Partnership Development**  
Tourism boards, local galleries, event planners—all leverage multipliers. AI can write partnership MOUs in plain English, define co-marketing calendars, and ensure attribution tracking is baked in (unique booking codes). For example, pair with a luxury florist: AI designs the campaign (joint photoshoot, pop-up install, VIP workshop) and outlines revenue splits plus lead capture workflows.

**Press & Media Systems**  
Maintain a living media list richer than any PR freelancer’s. AI monitors journalist social feeds, notes what they’re covering, and alerts you when they request stories matching your angle. It also crafts op-eds or founder interviews within your tone so you can respond to opportunities inside an hour. Keep a Notion gallery of high-res assets; the model links to the correct ones in every pitch.

**Gift Vouchers & Experience Packaging**  
Package excess capacity into irresistible experiences: “Chef’s Library Lunch,” “Steam & Cellar Journey,” “Sommelier Black Book Nights.” Feed revenue data into AI to see which experiences convert best and what the redemption liability looks like. Let the model script upsell flows for voucher purchasers (e.g., after they buy, they receive a concierge email offering to pre-order flowers or arrange transport). Tie vouchers into corporate gifting by having AI generate outbound decks aimed at HR teams planning employee rewards.

**Copy-Paste Prompts**
> **Corporate Account Pitch**  
> "Draft a concise outreach email to [Company]’s People Director. Reference their recent [news item], propose a corporate hospitality partnership (private dining + quarterly room block), outline 3 specific perks, and include a CTA to book a 15-minute strategy call next week."
>
> **Partnership Proposal**  
> "Create a one-page proposal for a joint campaign with [Local Luxury Partner]. Include campaign concept, timeline, deliverables from each side, revenue split, data-sharing plan, and KPIs (leads generated, bookings). Tone: polished, decisive."
>
> **Gift Experience Package Description**  
> "Write product copy for a £285 ‘Chef’s Library Lunch’ voucher. 4 courses, library nook seating, sommelier pairing, signed menu. Tone: evocative, premium. Include one paragraph for website, one for voucher PDF, and bullet points of inclusions."

---

## Module 6: The Prompt Library (50+ Core Operations)

Stop staring at a blinking cursor. Copy these, fill in the brackets `[like this]`, and execute.

### Section 1: Guest Communications (Pre, In-Stay, Post)
**1. The "VIP Welcome" Email:**
> "Write a highly personalised, warm welcome email for a VIP guest named [Guest Name] staying at our [Hotel/Venue Name] for their [Occasion, e.g., 10th Anniversary]. Tone: luxury, understated, club-like. Mention that our concierge has secured a window table for dinner."

**2. The Pre-Arrival Upsell (Subtle):**
> "Draft a pre-arrival email for guests checking in to [Venue Name] next week. Casually mention our [Spa Treatment/Wine Flight] as a way to unwind after travel. Do not sound like a salesman. Keep it under 150 words."

**3. The Direct Rebooking Incentive (No Discounts):**
> "Write a post-stay email to guests who checked out 30 days ago. Thank them for choosing [Venue Name]. Offer them a direct booking 'loyalty invitation' which includes complimentary [Amenity, e.g., breakfast or late checkout], not a percentage discount."

**4. The Local Secret Recommendation:**
> "I run a boutique hotel in [City/Neighbourhood]. Generate a list of 3 'local secret' coffee shops, bars, or walks that are NOT on the usual tourist trails, and format it as a stylish one-page PDF guide I can send to guests."

**5. The Lost Property Notification:**
> "Draft a polite, professional email to a guest who left their [Item] in Room [Number]. Explain that we have found it and offer a link to a courier service for them to arrange collection."

**6. The Weather-Specific Pre-Arrival:**
> "The forecast for this weekend in [City] is heavy rain. Rewrite our standard pre-arrival email to be cosy and inviting, highlighting our [Indoor Amenity, e.g., open fire, library, board games]."

**7. The Large Group Booking Confirmation:**
> "Draft a confirmation email for a group of [Number] people dining with us. Clearly outline our cancellation policy, the requirement for a pre-order by [Date], and the deposit amount of [Amount]. Keep it friendly but legally clear."

**8. The Event/Wedding Enquiry Response:**
> "A couple has enquired about hosting their wedding at our venue for [Number] guests. Write a congratulatory, premium response that outlines our starting packages and includes a link to book a show-around call. Tone: aspirational."

**9. The Apology for Service Failure:**
> "Draft a sincere apology email to a guest whose [Specific Issue, e.g., main course was 45 minutes late]. Take full responsibility, explain the kitchen issue briefly without making excuses, and offer a [Resolution, e.g., complimentary bottle of wine on their next visit]."

**10. The Waitlist Notification:**
> "Write an email to a guest on our waitlist for [Date]. Inform them a table has become available, but they only have [Time Limit, e.g., 2 hours] to confirm before we pass it to the next person."

### Section 2: Marketing & Social Media
**11. The 30-Day Instagram Grid Planner:**
> "Act as a luxury hospitality social media manager. Create a 30-day Instagram grid plan for our [Type of Venue]. Alternate between food/drink shots, behind-the-scenes staff highlights, interior design details, and user-generated content prompts."

**12. The "Meet the Chef" Post:**
> "Write an Instagram caption introducing our Head Chef, [Name], who previously worked at [Previous Venue]. Highlight their passion for [Specific Cuisine/Ingredient] and their signature dish on our new menu."

**13. The Supplier Spotlight:**
> "Write a short, engaging Facebook post highlighting our local supplier, [Supplier Name], who provides our [Ingredient]. Focus on food miles, quality, and supporting local business."

**14. The Last-Minute Availability Push:**
> "We have a sudden cancellation for a table of 4 tonight at 8 PM. Write an urgent but premium Instagram Story caption to fill it immediately. Create a sense of exclusivity, not desperation."

**15. The Menu Launch Teaser:**
> "Draft a teaser email to our mailing list about our upcoming [Season] menu. Highlight three new dishes, including [Dish 1] and [Dish 2], without revealing the full menu. Include a 'book first' call to action."

**16. The TripAdvisor Review Request (Post-Stay):**
> "Write a short, non-pushy email asking a guest who had a great time to leave a review on [Platform]. Provide the direct link and explain how much it helps our independent business."

**17. The PR Pitch to Local Press:**
> "Draft a 150-word pitch email to the food editor of [Local Publication]. We are launching a new [Concept/Menu] next month. Invite them for a complimentary tasting and highlight what makes our concept unique in the city."

**18. The Festive Season Corporate Pitch:**
> "Write an email pitch to local office managers offering our venue for their Christmas party. Highlight our dedicated events coordinator, bespoke menus, and early-bird booking perk (e.g., free arrival drinks if booked by October)."

**19. The SEO-Optimised Blog Post Idea Generator:**
> "Give me 5 SEO-optimised blog post titles for my hotel in [Location] that target keywords like 'best places to eat', 'romantic weekend', and 'hidden gems'."

**20. The TikTok Script for Behind-the-Scenes:**
> "Write a 30-second TikTok script showing the morning prep routine of our barista. Include hook, visual cues, and a call to action to visit us for morning coffee."

### Section 3: Kitchen & Menu Engineering
**21. The Recipe Costing Calculator Prompt:**
> "Here are the raw ingredient prices for my [Dish Name]. [List ingredients and costs]. Calculate the total cost price, and suggest a selling price to achieve a 70% Gross Profit margin."

**22. The Allergen Matrix Generator:**
> "Take this list of menu items and their ingredients. Generate a clear table highlighting which dishes contain the 14 major allergens (e.g., Dairy, Nuts, Gluten). Format for easy printing."

**23. The Menu Description Polisher:**
> "Rewrite these basic menu descriptions to sound more appetising and premium. For example, change 'Roast Chicken with Carrots' to something suitable for a high-end brasserie."

**24. The 'Specials' Brainstormer:**
> "My supplier has a surplus of [Ingredient A] and [Ingredient B] on discount. Suggest 3 high-margin 'Specials' I can run this weekend to use them up creatively."

**25. The Food Waste Audit Template:**
> "Create a 7-day food waste audit template for my kitchen. Include columns for Date, Item Wasted, Weight/Volume, Reason (e.g., prep error, spoilage, plate waste), and Cost Value."

**26. The Kitchen Closing Checklist:**
> "Write a comprehensive closing checklist for a commercial kitchen. Cover equipment switch-off, sanitisation protocols, labelling, and secure storage."

**27. The Supplier Negotiation Script:**
> "Draft an email to my main food supplier. I have been with them for 2 years, but a competitor has offered me a 10% discount on dry goods. Ask them to match it politely but firmly."

**28. The Vegan Alternative Suggester:**
> "Take my current meat-heavy menu [Paste Menu] and suggest high-quality, non-processed vegan alternatives for 3 of the main courses."

**29. The Prep List Organiser:**
> "Here is my menu and expected covers for tomorrow. Generate a chronological morning prep list for a single chef working from 8 AM to 12 PM."

**30. The Equipment Maintenance Log:**
> "Create a monthly maintenance log template for kitchen equipment, including fryers, extraction hoods, walk-in fridges, and dishwashers."


### Section 4: HR, Training & Operations
**31. The Job Description Generator:**
> "Draft a compelling job description for a Head Bartender in a premium, high-volume venue in [City]. Focus on cocktail development, team leadership, and stock control. Do not use corporate jargon."

**32. The Interview Question Bank:**
> "Give me 10 situational interview questions for a Front of House Manager. I don't want 'what is your greatest weakness?' I want scenarios about handling angry guests, comps, and slow service."

**33. The Staff Handbook Intro:**
> "Write the introduction to our new staff handbook. Our venue ethos is 'Professional but Unpretentious'. Make it clear that we expect high standards but will support and train them relentlessly."

**34. The Weekly Rota Template:**
> "Generate a weekly rota template for a team of 10. Include columns for Name, Role, Monday-Sunday, Total Hours, and a section for Manager Notes (e.g., specific tasks for quiet periods)."

**35. The Disciplinary Invitation Letter:**
> "Draft a formal, legally compliant letter inviting an employee to an investigatory meeting regarding [Specific Issue, e.g., persistent lateness]. State the time, date, and their right to be accompanied."

**36. The Exit Interview Form:**
> "Create a 5-question exit interview form for departing staff. Focus on why they are leaving, what we could do better, and their honest feedback on management."

**37. The 'Taster' Shift Briefing:**
> "Write a briefing document for a candidate doing a 2-hour trial shift as a server. Outline exactly what we are looking for (e.g., eye contact, pace, initiative) and what they should focus on."

**38. The Onboarding Checklist (First 7 Days):**
> "Generate a day-by-day onboarding checklist for a new receptionist at a 20-bedroom hotel. Cover PMS training, key handling, emergency procedures, and local area knowledge."

**39. The Staff Incentive Pitch:**
> "Draft an email to the team announcing a weekend sales incentive. The target is to sell 50 portions of [High Margin Item]. The prize is [Prize, e.g., £50 voucher]. Make it competitive but fun."

**40. The Cleaning Schedule Matrix:**
> "Create a comprehensive daily, weekly, and monthly cleaning schedule for front of house, including floors, windows, till points, and guest toilets."

### Section 5: Finance, Reviews & Management
**41. The TripAdvisor Response (5 Star):**
> "Write a warm, non-generic reply to a guest who left a 5-star review mentioning our excellent [Dish/Service]. Thank them and mention we look forward to welcoming them back."

**42. The TripAdvisor Response (1 Star - Legitimate):**
> "Draft a professional reply to a 1-star review where the guest complains about [Specific Issue]. Apologise, explain briefly that this is not our standard, and provide the GM's email address to discuss further."

**43. The TripAdvisor Response (1 Star - Unfair/Abusive):**
> "Write a firm, professional reply to a guest who left an abusive review. State calmly the facts of the situation from our perspective, wish them well, and state that we will not tolerate abuse of our staff."

**44. The End-of-Week Financial Summary (Prompt 10 Expanded):**
> "Act as a fractional CFO. Here are my weekly figures: Revenue [£X], Labour [£Y], COGS [£Z]. Write a 300-word analysis. Calculate the wage and food cost percentages. Identify any red flags."

**45. The Utility Negotiation Script:**
> "Draft an email to my energy broker. My current contract ends in 3 months. Tell them I have received a quote from a competitor for [Amount] per kWh and ask them to beat it."

**46. The Event Profitability Calculator:**
> "I am hosting a ticketed event for 50 people at £50 a head. The food cost per head is £15, staffing is £300, and entertainment is £200. Calculate the total profit and margin percentage."

**47. The Supplier Invoice Discrepancy Email:**
> "Write an email to a supplier regarding invoice number [Number]. They have charged me for 10 units of [Item], but only 8 were delivered. Request a credit note."

**48. The Bank Loan Pitch Deck Outline:**
> "Create a 10-slide outline for a pitch deck to secure a £50,000 loan to refurbish my restaurant. Include slides on current performance, market opportunity, and projected ROI."

**49. The KPI Tracker Template:**
> "Generate a list of the 5 most important Key Performance Indicators (KPIs) a restaurant manager should track weekly, and provide a short description of how to calculate each."

**50. The Owner's Weekly Update to Investors:**
> "Draft a concise, bulleted email from the operator to silent investors. Summarise last week's revenue, highlight one major win (e.g., a great review or a new menu launch), and note one operational challenge we are solving."

**51. The "Ghost Kitchen" Launch Pitch:**
> "I want to launch a delivery-only brand from my existing kitchen using current inventory. Draft a one-page concept note detailing how it won't impact core operations, the expected margin, and the branding."

---


---

## Appendix: Extended Tools, Glossary & Advanced Resources

### The Hospitality Tech Stack (2026 Edition)
- **Claude 3.5 Sonnet / Opus:** The gold standard for copywriting and email sequences. It sounds far less robotic than ChatGPT. ($20/mo)
- **ChatGPT Plus (GPT-4o):** Essential for data analysis. Drop your Excel rotas or sales figures here. ($20/mo)
- **SevenRooms / Resy:** For robust guest data capture. Crucial for feeding your AI the context it needs for targeted comms. 
- **MARA Solutions:** AI specifically built for handling hotel and restaurant reviews at scale.
- **7shifts:** Rota software that is increasingly building predictive AI into its core product.
- **Dext / AutoEntry:** Essential for automating invoice capture directly into Xero. 

### Glossary for Operators
- **LLM (Large Language Model):** The engine behind tools like ChatGPT. Think of it as a very fast, very well-read intern.
- **Prompt:** The instructions you give the AI. A bad prompt gets a bad answer. A good prompt gets a £500-value result.
- **Context Window:** How much information the AI can "remember" in one conversation. (E.g., pasting an entire month's sales data).
- **Par Level:** The minimum amount of stock you need to hold to meet expected demand without over-ordering.
- **OTA (Online Travel Agent):** Booking.com, Expedia, etc. They take your margin. AI comms help you convert OTA guests into direct bookers next time.
- **BEO (Banquet Event Order):** The master document for any function. It dictates everything from the bar tab limit to the exact time the canapés are served.
- **Yield Management:** Adjusting prices dynamically based on demand to maximise revenue from fixed capacity (e.g., hotel rooms, train seats).

### Final Word
Do not try to automate everything tomorrow. 
Start with the workflows that either:
1. Save you the most time immediately (e.g., Review Responses).
2. Generate immediate revenue (e.g., Post-Stay Upsells).

You are in the hospitality business. AI simply buys you the time to be hospitable again.


---

