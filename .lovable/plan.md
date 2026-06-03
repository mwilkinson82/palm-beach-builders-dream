Four focused changes to make the Renovations page sing.

## 1. Wow-factor entrances for the cinematic moment + the slider

**Cinematic moment (renovation hero image)**
- Replace the plain `fade-up` with a layered cinematic reveal:
  - Image starts at `scale(1.12)` and slowly drifts down to `scale(1)` over ~1.6s as it enters view (Ken Burns).
  - A thin brass hairline sweeps in from the left, then the eyebrow caption fades up underneath it on a 250ms delay.
  - A subtle vignette mask animates from `opacity(0)` → final state over the same duration so the photo "develops" instead of pops in.
- All driven by an IntersectionObserver firing once; uses CSS transforms + opacity (no library needed).

**Before/After slider section**
- New entrance choreography that runs as one composition once the section enters view (~70% threshold):
  1. The brass eyebrow rule grows from 0 → full width (~600ms).
  2. The slider frame rises 24px while a clip-path wipes from top to bottom (~900ms, ease-out).
  3. The intro handle sweep (already there at 0→55%) starts only after the frame finishes mounting, so it now reads as a deliberate "reveal the transformation" beat instead of competing with the lift.
  4. The Scope / Building Type footer row fades up last with a 200ms stagger.
- Add a faint navy drop shadow that animates in with the lift to give the slider weight.

Both sequences use existing tokens; no new dependencies.

## 2. Reimagine the "Palm Beach's finest renovation specialists" section

The current grid pairs a soft headline + body copy on the left with a Credentials / Experience / Office stat ledger on the right. The user is right — those stats feel borrowed from a corporate "About" block and don't belong this close to the slider.

**Replacement: a tighter editorial band that bridges the slider into the credentials moment.**

- Tighten the vertical rhythm: drop the top padding from `py-20 md:py-28` to `pt-10 md:pt-14 pb-20 md:pb-24` so it sits closer to the slider's footer row.
- Two-column layout becomes a single asymmetric editorial composition:
  - Left (7 cols): brass eyebrow `THE STANDARD`, the Cormorant headline `Palm Beach's finest renovation specialists.`, one tightened paragraph (combine the two existing paragraphs into one ~3-line piece — cut filler).
  - Right (5 cols): **replaced**. Instead of the Credentials/Experience/Office stat ledger, show three discreet numerical proof points stacked with brass hairlines between them:
    - `30+` · Years building Palm Beach
    - `0` · Disciplinary actions, FCMB record
    - `1` · Master builder leading every project
  - These are presented as oversized Cormorant numerals with tiny Fira Sans labels beneath — visual rhythm, no clunky office-address line, and it carries the discretion theme.
- No address shown (already a mem constraint anyway).

## 3. Merge & visualize the "Full-Service Renovations / A complete range of work" + "Condo Expertise" sections

Right now there are two separate heavy sections (six service cards in two columns, then a navy band with HOA copy + property types + areas + process). It's too much reading.

**Restructure into one unified "Scope of Work" section, in two visually distinct halves:**

**Half A — Services as an editorial index, not card paragraphs**
- Replace the six descriptive cards with a single elegant ledger:
  - One column on mobile, two on desktop.
  - Each row: numeral `01–06`, service title in Cormorant, a single tight sub-line (max 8 words) — no paragraph, no keyword tag string.
  - Hovering a row underlines the title in brass and reveals the keywords as a quiet caption.
- Reduces ~700 words of copy to ~80 while keeping the SEO via JSON-LD schema (already in place).
- Add a small renovation-detail image to the left side (kitchen/bath close-up crop) so the section has visual weight, not just type.

**Half B — Condo expertise becomes a horizontal navy strip, not a full band**
- Collapse the navy section from full text walls + boxed property/area/process panel into a tight three-column navy strip:
  - Col 1: short headline `Built for Palm Beach's towers.` + one sentence on condo expertise (3 lines max).
  - Col 2: `Property Types` as a clean two-line list (no box, no border).
  - Col 3: `Areas Served` as a clean two-line list.
- Drop the redundant `Our Process` mini-list (it duplicates the `/process` page; keep just the existing "View Our Process" link logic via the closing CTA area).
- The HOA capabilities list (5 bullets) becomes a single rotating-style inline line: `HOA navigation · Building management · Schedule compliance · Logistics · Neighbor-conscious build`.

**Add an editorial photo bridge between the two halves**
- A single full-bleed thin strip image (~25vh) of a craftsman detail (millwork, marble seam, or hardware close-up) — cropped tall and cinematic, with the eyebrow `CRAFT IN THE DETAILS` floating top-left.
- Generated via image gen, brand-consistent (light, ivory/marble tones), uploaded as a Lovable Asset.

This collapses two heavy sections into one cohesive arc: words → image → numbers/lists.

## 4. Small consistency cleanup

- Reduce gap between the slider footer row and the "renovation specialists" section so they feel like one continuous editorial spread.
- Keep all reveal animations stagger-aware (Card B doesn't start until Card A is ~70% revealed) so the scroll feels orchestrated, not chaotic.

---

### Files

- `src/pages/Renovations.tsx` — restructure sections 245–527, tighten paddings, swap stat ledger for numeric proof points, collapse services + condo into one section with the new layouts, remove `processSteps` array (or keep but unused if process bullets stay elsewhere).
- `src/components/RevealAnimation.tsx` — add a new `cinematic` animation option (scale-down + masked reveal) for the cinematic image.
- New: `src/components/CinematicReveal.tsx` (small wrapper that handles the scale-down + sweep entrance for the cinematic moment) — keeps the slider's bespoke choreography inline in `BeforeAfterSlider`'s parent section.
- `src/components/BeforeAfterSlider.tsx` — add an optional `delayIntroSweep` prop (number, ms) so the existing intro sweep waits until the frame's clip-path lift finishes.
- 1 new generated image (craft-detail strip) uploaded via `lovable-assets`.

### What I'm explicitly NOT doing

- Not touching the FCMB + NAHB credentials band (you said it's good).
- Not changing the hero video, slider mechanics, or navigation.
- Not adding any social icons, addresses, or brass-fill buttons (mem rules).
- Not adding new CTAs — the existing two CTAs continue to do the work.
