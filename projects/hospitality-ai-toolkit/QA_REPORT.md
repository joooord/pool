# Hospitality Pro — QA / UX Report (Mar 19, 2026)

## Summary
- Focus areas per brief: landing-page polish (liquid-glass aesthetic, typography, layout), venue profile modal UX, Review Responder / Recipe Costing / Rota Optimizer functionality, and accessibility/responsiveness/copy accuracy.
- Repository reviewed: `/home/openclaw/.openclaw/workspace/hospitality-pro` (landing page + tools).
- Overall: Core tooling concepts are strong, but cross-tool profile context is broken, rota generation cannot succeed reliably, and several UI/spec alignment gaps keep the experience from matching the redesign brief.

## Findings & Recommendations

### High Severity

1. **Venue profile contract is broken for all tools**  
   - **Evidence:** `assets/scripts/venue-profile.js` exposes `window.VenueProfile` with `getProfile`, `subscribe`, `clear` only. Tools (e.g., `tools/review-responder/index.html`) call `profileModule?.getActiveProfile?.()` and `buildPromptContext()`, which do not exist, so they silently fall back to hardcoded copy. No tool can load or share the saved profile context.  
   - **Impact:** Every AI prompt ignores the operator’s venue tone/non-negotiables, defeating the “set once, use everywhere” differentiator. Review Responder shows “Hidden Café Bar Social” even when the user sets their own data; other tools will also regress if/when they try to consume shared context.  
   - **Fix:** Expand `VenueProfile` to expose the APIs tools expect (`getActiveProfile`, `buildPromptContext`, `openModal`, event emitter), or refactor tools to consume `VenueProfile.getProfile()`/`subscribe()`. Add a shared module so all tools hydrate/sync consistently and remove hardcoded venue fallbacks.

2. **Rota Optimizer cannot return valid data because prompts conflict**  
   - **Evidence:** `tools/rota-optimizer/index.html` sends system prompt instructing Claude to output a human-readable table, while the user prompt simultaneously demands “Return ONLY minified JSON that matches this schema exactly”. The parser then forces JSON via `parseModelResponse`, throwing `Failed to parse model response` when Claude obeys the system prompt.  
   - **Impact:** Rota generations frequently fail; when they succeed, the JSON/table mismatch produces malformed results or no output, blocking one of the flagship workflows.  
   - **Fix:** Decide on one output format. Either: (a) request JSON only (update system prompt + streaming) and keep the parser, or (b) drop the JSON parser and parse markdown tables. Update UI copy to reflect the final output format and add guardrails (retry with temperature adjustments, validation of required keys).

3. **Venue profile modal can’t be opened from tools & lacks accessible dialog semantics**  
   - **Evidence:** `review-responder/index.html`’s “Edit profile” button calls `profileModule?.openModal()`, but `venue-profile.js` never exposes `openModal`, so the button silently does nothing unless the DOM modal happens to be open on the landing page. Additionally, the modal markup lacks `role="dialog"`, `aria-modal="true"`, focus trapping, and labelled-by hooks — failing the “should never block” + accessible keyboard dismissal requirement in the brief.  
   - **Impact:** Operators can’t edit their profile from tool pages; keyboard users can tab into the obscured page content even when the modal is open, and screen readers don’t know a modal appeared.  
   - **Fix:** Export an `openModal` method (or dispatch a custom event) so tools can programmatically open the shared modal. Add proper dialog semantics (`role="dialog"`, `aria-modal`, `aria-labelledby`), trap focus within the modal while open, and restore focus on close. Ensure Escape/backdrop dismissal continues to work.

### Medium Severity

4. **Review Responder shows inaccurate default venue copy when profile unset**  
   - **Evidence:** Static text in `review-responder/index.html` (`Hidden Café Bar Social…`) is displayed even after clearing the profile; because issue #1 prevents hydration, most users will see another venue name, location, and story.  
   - **Impact:** Breaks trust/copy accuracy; operators may paste replies referencing the wrong venue details.  
   - **Fix:** Replace hardcoded content with neutral placeholders (“Set your venue profile to personalize tone”) and only render venue-specific prose when valid profile data exists.

5. **Recipe Costing yields zero costs when yield% field cleared**  
   - **Evidence:** `computeIngredientNetCost` treats blank yield input as `0`, multiplying the ingredient cost by `0`, so deleting the field zeroes the cost until retyped.  
   - **Impact:** Easy to produce understated batch costs / GP, leading to incorrect pricing decisions.  
   - **Fix:** Default blank yield to `100%` (factor `1`) or enforce min 1 in validation. Surface inline validation and highlight rows where cost was skipped due to invalid yield, so totals stay trustworthy.

6. **Accessibility gaps on landing + modal per redesign brief**  
   - **Evidence:** Landing uses only Inter (no Playfair display pairing), no liquid-glass layering/photography, and multiple sections rely solely on colour to convey emphasis. Modal lacks `aria-*` semantics (see High #3). Buttons rely on colour contrast alone (secondary buttons < WCAG AA on dark background). Trust strip logos presented as plain text spans with no semantic grouping.  
   - **Impact:** Page doesn’t hit the “editorial, liquid-glass” spec, and there are colour contrast + semantic issues for screen-reader users.  
   - **Fix:** Implement the redesign brief: add Playfair for hero/tool headers, introduce glassmorphic panels with blurred backgrounds/photography, ensure button contrast ≥ 4.5:1, and add semantic landmarks (`<section aria-labelledby>`). Update modal semantics as above.

7. **Rota Optimizer UI missing expected safeguards**  
   - **Evidence:** Form allows submission with zero staff or covers (only `required` on venue name/date); there’s no validation for availability coverage vs minimum roles, nor tooltip guidance. `collectFormData` accepts empty arrays, but generator simply errors out.  
   - **Impact:** Operators get opaque “Add at least one team member” messages after full form completion, and the tool can’t warn about obvious understaffing before calling the API.  
   - **Fix:** Add client-side validation for staff count, availability coverage per day vs minimums, and inline warnings before API calls. Pre-fill a realistic example per brief to demonstrate expected data density.

### Low Severity / Polish

8. **Landing page not yet aligned with liquid-glass aesthetic & Playfair typography**  
   - **Evidence:** `index.html` + `landing.css` rely solely on solid dark panels and Inter; there’s no photography, glassmorphism, or Playfair headings specified in `REDESIGN_BRIEF.md`.  
   - **Impact:** Page reads like an MVP, undermining the premium positioning laid out in the brief.  
   - **Fix:** Introduce the specified hero imagery/blur layers, wire up Playfair Display for hero/tool headers, and apply the updated palette/token system.

9. **Guide download CTA links directly to raw Markdown**  
   - **Evidence:** Both hero and playbook CTAs point to `guide.md`, which renders as raw text in most browsers. Brief calls for “Download the PDF or read the Markdown source,” but only Markdown is provided.  
   - **Impact:** Feels unfinished and reduces perceived polish/value of the “9,000+ word field guide.”  
   - **Fix:** Provide both formats — add a zipped/hosted PDF (or HTML viewer) and keep Markdown as secondary CTA.

10. **Minor responsiveness nits**  
    - **Evidence:** Hero action buttons wrap awkwardly below ~360px (due to `min-width: 180px`), forcing horizontal scrolling. Tool cards don’t add extra spacing between categories on narrow screens, making the page feel cramped.  
    - **Impact:** Mobile-first experience feels less intentional than brief requires.  
    - **Fix:** Adjust button min-width for mobile, add vertical rhythm between tool categories, and consider sticky CTA for “Explore tools” on mobile per redesign guidance.

---

## Next Steps
1. **Patch the shared venue profile module** (expose needed methods, align contract, update tools to consume it) — unblocks brand-consistent AI output.
2. **Rewrite Rota Optimizer prompt + parser** for deterministic JSON output, add validation before API calls, and design the visual schedule grid.
3. **Tackle modal/accessibility polish + landing aesthetic** in line with the redesign brief (Playfair, photography, glassmorphism), then sweep medium/low issues as part of the shared CSS system rollout.
