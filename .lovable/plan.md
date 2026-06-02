## Palm Beach Refinement + Phase 2 Home Rebuild

Palm Beach is the flagship. Space Coast bends to this later. Before rebuilding Home sections, refine the typographic and palette system to match Worth Avenue restraint — then build Phase 2 on the corrected foundation.

### Locked refinements (your agreement)

**Typography — swap to Cormorant Garamond as display**
- `font-display` and `font-serif` → Cormorant Garamond (already loaded in `index.html`, weights 300/400/500 + italics)
- DM Serif Display demoted to rare brand moments only (kept loaded for the "Beau Monde" wordmark in hero/footer if we want occasional weight contrast — otherwise removed entirely)
- Fira Sans stays as `font-sans` for UI, body, captions, buttons
- Effect: "engraved invitation" instead of "magazine cover." Thinner strokes, more breathing room, italic accents that feel handwritten.

**Brass discipline**
- Brass `#b08a4a` restricted to: hairline dividers, small uppercase eyebrows, icon strokes, hover underlines
- Never brass button fills, never brass large type, never brass blocks
- Navy and ivory carry all the weight. Brass whispers.
- Audit Navigation, Footer, Walkthrough, Delivery for any current brass overuse and pull back.

**Atlantic Navy stays** — `#0f2a3d` is the right depth. Deeper and warmer than Space Coast cobalt. Ocean-at-dusk vs ocean-at-noon differentiation is intentional.

### Third tonal whisper — my recommendation

You didn't explicitly weigh in on the seafoam vs coral vs austere question. My recommendation: **soft seafoam** `#dce8e4` (very pale ocean green, ~5% saturation). Used only in:
- Section divider bands between editorial blocks
- Subtle image tints on portfolio thumbnails on rest state
- Hover wash on cards
- Never in type, never in buttons

Coastal warmth without flash. If you'd rather stay austere (ivory/navy/brass only), say the word and I drop it from the plan.

### Phase 2 — Home editorial rebuild

After the foundation refinement above ships, rebuild Home sections below the Delivery showcase as editorial bands. Current structure replaced:

**Sections to rework** (Home page only — interior pages come in Phase 3):
1. "Bespoke Luxury Redefined" + capabilities grid
2. Stats / numbers band
3. Closing CTA section

**New editorial system:**
- Asymmetric image + text rows (60/40 splits, alternating sides)
- Oversized Cormorant statements (single sentences, generous line-height)
- Brass hairlines instead of Lucide icon grids
- Eyebrows in Fira Sans uppercase, tracking-wide, brass color, very small
- Section transitions use the seafoam divider band (if approved)
- Full-bleed image moments between text bands for pacing

**Three rendered design directions** generated via the design tool — all three lock the refined Cormorant + Fira Sans + Ivory/Navy/Brass(+Seafoam) system. They vary only in:
- Composition rhythm (dense editorial vs. spacious gallery vs. cinematic full-bleed)
- Image-to-type ratio
- Where the "Talk to Beau Monde" CTA lands

You pick one. I build it.

### Execution order

1. **Refinement pass** (one focused build): swap fonts in `tailwind.config.ts`, update `index.css` tokens (add seafoam if approved), audit brass usage across Nav/Footer/Walkthrough/Delivery, update `mem://style/visual-aesthetic` and `mem://index.md` so the new system locks in for future sessions.
2. **Pause** — you scroll, confirm the new tone reads correctly.
3. **Phase 2 directions** — generate 3 rendered Home rebuild options, you pick.
4. **Phase 2 build** — implement the chosen direction.
5. **Phase 3** — interior pages, one at a time, using the now-locked system.

### Preserved (untouched)

Splash, VideoHero, WalkthroughShowcase, DeliveryShowcase structure, all copy, contact info, FCMB cert, portfolio images and rules, contact form, all routes, SEO, legal pages.

### What I need to start

Just confirm: **seafoam yes or stay austere?** Then I ship the refinement pass.
