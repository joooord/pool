# The AI Operations Toolkit for Hospitality

**An uncompromising, battle-tested manual for operators scaling margins, speed, and guest experience.**

---

## Introduction

AI will not replace hospitality. The fundamental contract of our industry—human connection, service, and environment—remains unchanged. But operators who know how to use AI will systematically outcompete those who do not. They will run leaner, react faster, and deliver a guest experience that feels entirely frictionless, all while maintaining wider margins. 

This is not a theoretical "prompt engineering" guide written by a tech blogger. This is an operations manual. Every automation, framework, and prompt in this document has been stress-tested in real hospitality environments—from Michelin-starred kitchens to multi-site restaurant groups, boutique hotels, and luxury heritage rail. 

If you are an owner-operator drowning in admin, a general manager losing revenue to manual errors, or a group director trying to scale consistency without chaos, this toolkit is for you.

### How to Use This Guide
Do not read this like a book. Treat it as a toolkit. 
1. **Audit your current pain points.** Are you losing time to rotas? Leaving money on the table with post-stay comms?
2. **Deploy Module 2 first.** These are the 10 core automations that yield immediate ROI.
3. **Copy, paste, and execute.** The Prompt Library (Module 5) contains over 50 ready-to-use prompts. Plug your data in and let them run.

### The 4 Operator Archetypes
- **Tier 1: Small Independent (Cafes, Takeaways, Pubs).** You are time-poor. Every saved hour is money in the till. Focus on Modules 2 and 3.
- **Tier 2: Mid-Market (Restaurants, Boutique Hotels, B&Bs).** You are leaking revenue. Money is left on the table through missed upsells and slow review responses. Focus on automated comms and inventory.
- **Tier 3: Multi-Venue & Resorts.** You need scale without chaos. Focus on the financial narrative summaries and staff briefing sheets.
- **Tier 4: Transport Hospitality (Heritage Trains, Cruise Lines, Ferries, Airline Lounges).** Fixed capacity means yield management is critical. Focus on pre-departure anticipation and dietary requirement scaling.

---

## Module 1: The AI Operations Stack

You do not need fifty different SaaS subscriptions. You need a core stack that speaks to your existing systems.

**1. Communication & Drafting (Claude 3 / ChatGPT Plus)**
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

### 2. AI-Drafted Review Responses
**The Problem:** Replying to reviews is tedious, but ignoring them kills your local SEO and trust.
**The Solution:** Batch processing reviews through an LLM trained on your exact brand voice.
**The Exact Setup:** Copy all new reviews from the past week into a single document.
**The Prompt:**
> "Here are this week's guest reviews for our venue. Write a response to each. For 5-star reviews, be warm and varied (do not repeat the same phrase). For negative reviews, be professional, take ownership without grovelling, and offer this contact email: [Email]. Maintain a premium, professional tone."
**Time Saved:** 3 hours/week.

### 3. Weekly Procurement Order Generation
**The Problem:** Over-ordering causes waste; under-ordering causes 86s. 
**The Solution:** AI analysis of upcoming covers + historical data to generate precise par levels.
**The Exact Setup:** Export next week's reservations/expected footfall and last week's sales mix. 
**The Prompt:**
> "I am providing last week's sales mix data and next week's reservation numbers. Based on the ratios of dishes sold to covers, calculate the exact raw ingredient par levels required for the next 7 days. Present this as a formatted supplier order list categorised by: Meat, Veg, Dry Goods, Dairy."
**Time Saved:** 5 hours/week.

### 4. Staff Rota Optimisation
**The Problem:** Rotas based on 'how we always do it' lead to overstaffing on quiet shifts and understaffing during rushes.
**The Solution:** Dynamic scheduling based on AI footfall prediction.
**The Exact Setup:** Paste your reservation data, local weather forecast, and staff availability matrix.
**The Prompt:**
> "Analyse this upcoming week's reservations, the local weather forecast, and historical walk-in rates. Generate an optimised staff rota for Front of House and Kitchen. We need a minimum of [X] staff at all times, scaling up to a ratio of 1 staff per [Y] covers during peak hours. Highlight any shifts where we are dangerously understaffed."
**Time Saved:** 4 hours/week.

### 5. Delivery Platform Menu Sync & Pricing Optimisation
**The Problem:** UberEats, Deliveroo, and Just Eat take massive commissions. Your pricing needs constant tweaking to maintain margin without killing volume.
**The Solution:** AI margin calculation and bundle generation.
**The Exact Setup:** Input your raw ingredient costs, packaging costs, and platform commission percentages.
**The Prompt:**
> "Here are the raw costs of my menu items, packaging costs, and the 30% commission rate of our delivery platform. Calculate the minimum selling price required for each item to maintain a 65% Gross Profit. Then, suggest 3 high-margin 'Bundle Deals' that look like a bargain to the customer but actually increase our blended margin."
**Time Saved:** 2 hours/week.

### 6. Post-Stay Upsell & Loyalty Sequence
**The Problem:** A guest leaves and you never speak to them again unless they initiate. 
**The Solution:** Automated, intelligent follow-up that drives direct re-bookings (bypassing OTAs).
**The Exact Setup:** Export departed guests. 
**The Prompt:**
> "Draft a post-stay email sequence for guests who checked out yesterday. Email 1 (Send today): A simple, warm thank you, asking for a direct reply if anything was less than perfect. Email 2 (Send in 30 days): A highly exclusive offer for a direct re-booking. Use the term 'loyalty invitation', never use the word 'discount'. Tone: premium, club-like."
**Time Saved:** 2 hours/week.

### 7. Social Media Content Calendar
**The Problem:** Staring at a blank screen trying to write Instagram captions while the kitchen is on fire.
**The Solution:** A 30-day content matrix generated in 10 minutes.
**The Exact Setup:** Feed the AI your menu, upcoming events, and supplier stories.
**The Prompt:**
> "Act as a luxury hospitality marketing director. I will give you our current menu, our supplier list, and our venue ethos. Generate a 30-day social media content calendar. I do not want generic 'Happy Friday' posts. Focus on: ingredient provenance, staff expertise, behind-the-scenes preparation, and atmosphere. Provide the exact caption and the visual brief for each."
**Time Saved:** 6 hours/month.

### 8. Complaint Triage & Escalation Drafts
**The Problem:** Angry emails trigger emotional, defensive responses from stressed managers.
**The Solution:** AI acts as a cool-headed buffer, drafting perfectly pitched de-escalation emails.
**The Exact Setup:** Paste the angry email.
**The Prompt:**
> "Read this guest complaint. Extract the core factual issues, ignoring the emotion. Then, draft a response from the General Manager. The tone must be intensely professional, empathetic but not weak. Validate their frustration, explain the operational reality briefly without making excuses, and offer [Specific Resolution] as a gesture of goodwill."
**Time Saved:** 1 hour/week (and countless saved relationships).

### 9. Dietary Requirement Briefing Sheets
**The Problem:** Scrappy notes about allergies lead to front-of-house panic and kitchen chaos.
**The Solution:** Perfect, formatted daily briefing sheets.
**The Exact Setup:** Export daily bookings with dietary notes.
**The Prompt:**
> "Here are the reservations for tonight's service, including all dietary requirements. Generate a clear, bulleted briefing sheet for the Kitchen and Front of House. Group by table number. For severe allergies, highlight them in bold and suggest which menu items are safe or easily modified."
**Time Saved:** 1.5 hours/day.

### 10. End-of-Week Financial Narrative Summary
**The Problem:** Owners look at P&L spreadsheets and miss the actual story of the week.
**The Solution:** AI turns raw data into a CEO-level executive summary.
**The Exact Setup:** Export weekly revenue, wage percentage, and COGS.
**The Prompt:**
> "Act as a fractional CFO for a hospitality group. Analyse this week's revenue, wage cost percentage, and food cost percentage. Write a 300-word narrative summary of the week's performance. Highlight the biggest drag on margin, the most profitable day, and give me 3 specific operational directives for next week to improve profitability."
**Time Saved:** 3 hours/week.


---

## Module 3: Segment Playbooks

### The Cafe / Takeaway Playbook
You are a solo operator or a tiny team. Time is your enemy. 
1. **The Daily Rota Hack:** Use the prompt from Module 2 to balance shifts against the local weather and historical weekend spikes. 
2. **The Deliveroo Optimiser:** Stop letting delivery platforms dictate your margin. Run the Pricing Optimisation prompt weekly to adjust for fluctuating raw ingredient costs. 
3. **The Supplier Email Generator:** Stop writing late-night texts to your butcher. Use a prompt to generate formal weekly par orders.
4. **The "Sorry We're Closed" Auto-responder:** A polite but firm template for out-of-hours enquiries that captures their email for a newsletter.
5. **The Local Collab Pitch:** A generated pitch to local offices offering bulk corporate lunch orders to guarantee baseline revenue.

### The Boutique Hotel Playbook
You sell an experience, not a bed. Pre- and post-stay comms are where the magic happens.
1. **The Pre-Arrival Concierge:** Use AI to send hyper-personalised 72-hour pre-arrival emails. Include local secret spots, not TripAdvisor top 10s.
2. **The In-Stay "Magic Touch":** A prompt that takes guest preferences noted at check-in (e.g., they mentioned they like gin) and generates a handwritten-style note for the room with a small amenity.
3. **The Loyalty Sequence:** The 30-day post-checkout email offering a direct booking incentive ("loyalty", never "discount").
4. **The Maintenance Tracker:** AI summaries of daily maintenance logs to spot recurring issues before a guest complains.
5. **The Housekeeping Daily Brief:** Generating exact room turnaround priorities based on early check-ins and late check-outs.

### The Restaurant Group Playbook
You need consistency across multiple sites without sounding like a corporate drone.
1. **The Head Chef Weekly Summary:** A prompt for each Head Chef to input their weekly food cost and waste numbers, generating a clean report for the Area Manager.
2. **The Standard Operating Procedure (SOP) Writer:** Turn a messy voice note about how to close the bar into a perfectly formatted, 10-step SOP manual.
3. **The Cross-Site Rota Balancer:** An AI prompt to suggest staff swaps between venues to avoid paying overtime at Site A while Site B is overstaffed.
4. **The Group Review Digest:** A weekly AI summary of all reviews across all sites, highlighting the common threads (e.g., "Site C has a recurring issue with cold sides").
5. **The Menu Matrix:** Analysing the sales mix of the entire group to identify the "Stars" (high volume, high margin) and "Dogs" (low volume, low margin).

### The Experience / Heritage Transport Playbook
Fixed capacity. High ticket price. Zero room for error on dietary requirements.
1. **The Passenger Manifest Analyser:** An AI prompt to group passengers by booking value, highlighting VIPs and repeat travellers for special attention from the Train Manager or Cruise Director.
2. **The Pre-Departure Anticipation Builder:** A sequence of emails educating the guest on the history of the carriage/vessel before they arrive, increasing the perceived value of the ticket.
3. **The Yield Management Adjuster:** Analysing booking velocity to suggest when to release dynamic pricing offers for unsold inventory without cannibalising full-price sales.
4. **The Dietary Matrix:** The most critical prompt. Turning 300 passenger dietary requests into a foolproof grid for the galley kitchen.
5. **The Onboard Upsell Script:** Generating natural, non-pushy dialogue for staff to upsell champagne or merchandise during the journey.

---

## Module 4: Implementation Roadmap

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

## Module 5: The Prompt Library (50+ Core Operations)

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

## Appendix: Tools, Glossary & Resources

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

### Final Word
Do not try to automate everything tomorrow. 
Start with the workflows that either:
1. Save you the most time immediately (e.g., Review Responses).
2. Generate immediate revenue (e.g., Post-Stay Upsells).

You are in the hospitality business. AI simply buys you the time to be hospitable again.

