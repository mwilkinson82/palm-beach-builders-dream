## About page — luxury redesign

Strip the dark/gradient hero and the inverted "Our Philosophy" slab, and rebuild About to match the ivory & ocean system we used on Home, Services, and Process. Light-mode first, Cormorant headlines, Fira Sans UI, brass hairlines only, seafoam as whisper.

### New AJ photo
Please drop the new AJ image into this chat as an attachment. I'll wire it into `src/assets/` and replace the existing `aj-hoover.png` reference. (If you want me to keep the old file as a fallback, say the word.)

### Section-by-section

**1. Hero — "The Maker"**
- Remove `bg-gradient-to-b from-black/50` and the centered marketing copy.
- Editorial split: left column is an oversized `font-wordmark` "Beau Monde" treatment with an eyebrow "The House Of —" and a single-line subhead ("Built by AJ Hoover. Held to one standard."); right column is the new AJ portrait in a tall 4/5 frame with a thin brass hairline border and a faint seafoam wash behind it.
- Scroll-driven parallax: wordmark drifts up, portrait drifts down a few percent, brass hairline grows into the eyebrow on mount.
- No CTA in the hero — the page earns the CTA later.

**2. The Story — long-form editorial**
- Replace the two-column "AJ Hoover / CEO & Founder" block with a single narrow column of Cormorant body (max-w-2xl), drop-cap first paragraph, ornamental brass hairline rule between movements.
- Rewrite the four paragraphs into three movements with section labels in the margin:
  - I. Origin (Upstate roots, every trade learned by hand)
  - II. The Standard (why he built Beau Monde — relationships with Florida's best artisans)
  - III. Today (still on every job, still answering the phone)
- Pull-quote in italic Cormorant between II and III.
- Stagger each movement with `RevealAnimation` fade-up; pull-quote scales in.

**3. Philosophy — flip from dark to light**
- Delete `bg-foreground text-background` and the SVG dot pattern. Use ivory background with a faint seafoam top wash.
- Keep the three pillars (Excellence / Integrity / Innovation) but render as a 3-column editorial grid with hairline dividers between columns, brass numerals, Cormorant italic titles, Fira body.
- Each column reveals in sequence on scroll; brass numeral counts in.

**4. Certifications — refined, not glowing**
- Remove the `bg-accent/10 blur-3xl` halo and the heavy gradient background.
- Two badges sit on ivory inside thin sand-bordered frames, captions in Fira small-caps.
- Replace the four "rounded-lg border" requirement cards with a clean 2×2 hairline grid (no rounded corners, no card chrome), brass icons at strokeWidth 1.25.
- Replace the pill "verification badges" row with a single inline brass-hairline list ("Background verified · 5+ years licensed · Fully insured · Board approved").

**5. The Team**
- Keep John, Michelle, Linda. Switch portraits from 3/4 muted boxes to 4/5 ivory frames with sand hairline border.
- Remove the brass hover overlay (it reads as a click affordance — non-interactive per portfolio rule).
- Names in Cormorant, role in brass small-caps, one-line experience in Fira light.

**6. Closing CTA — new**
- Add a quiet closing band before the footer: brass hairline, eyebrow "Begin a conversation," Cormorant line "Every Beau Monde home starts at the same table.", primary navy button "Talk to Beau Monde" → `/contact`. No seafoam fill, no gradients.

### Animation system
- All sections use `RevealAnimation` (fade-up / luxury-reveal) with the staggered delays the rest of the site uses.
- Hero gets scroll-driven parallax (wordmark, portrait, seafoam wash) wired off a shared `scrollY` like Process.
- No card hover scales, no glow halos, no dark overlays anywhere on the page.

### Files
- `src/pages/About.tsx` — full rebuild of the page composition.
- `src/assets/aj-hoover-v2.{jpg|png}` — added when you upload the new photo; old file kept unless you say otherwise.
- No new components unless the closing CTA gets reused elsewhere (then I'll lift it into `src/components/ClosingCTA.tsx`).

### One thing I need from you
Drop the new AJ photo in the chat and I'll wire it in as part of the build. If you want, also tell me whether the hero should lead with "Beau Monde" (house-first) or "AJ Hoover" (founder-first) — my default in this plan is house-first with AJ owning the portrait + story.