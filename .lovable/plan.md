## Refine three generic sections

The Bespoke → Stats → Emblem → Philosophy sequence is now editorial and restrained. The three sections directly below it haven't caught up — they still read as generic luxury template: glowing rings, glassmorphism cards, brass buttons, blurred radial gradients, rounded icon chips, full-width navy slabs. They break the engraved-invitation tone we just established.

This plan rebuilds all three on the same editorial system, plus a small fix to the closing CTA so the page ends in the same voice it now opens in.

### What's wrong with each (specifics)

**Florida Certified Master Builder**
- Glowing blur halo + rounded white badge frame on the logo reads marketing-stock, not credential.
- 4-up icon-chip requirements grid with rounded-lg accent boxes is identical to every SaaS feature grid.
- Bottom row of "Background Verified / 5+ Years Licensed / Fully Insured / Board Approved" badges is decorative repetition.
- Lives on a full navy slab with dot-pattern texture — visually competing with the navy DeliveryShowcase video and the upcoming navy CTA.

**Luxury Renovations**
- Two blurred radial gradient "decorative" blobs (brass + navy) are generic.
- Brass-filled `EXPLORE RENOVATIONS` CTA violates brass discipline (CTAs must be navy).
- Right-side "Condo Specialists" navy card with check-list bullets + Shield/Award badge chips with rounded borders is the most template-y element on the page.
- Two parallel checklists (left grid + right card) say the same thing twice.

**The Beau Monde Difference**
- Full navy slab + radial dot pattern + 3 glassmorphism cards with hover glow rings, oversized translucent "01/02/03" numerals, rounded icon chips, and `w-12 → w-20` underline-grow hover effects — pure 2022 SaaS card grid.
- Headlines `BESPOKE DESIGN / PRECISION EXECUTION / LIFETIME COMMITMENT` set in uppercase sans serif fight the Cormorant editorial voice established above.

**Closing CTA (folded in for consistency)**
- Brass-outline `SCHEDULE YOUR CONSULTATION` button on navy violates brass discipline.
- Headline still uses brass italic accent on large type.

### Locked system reminder (no drift)

Ivory background by default. Navy reserved for one or two intentional editorial moments per page (we already have DeliveryShowcase + closing CTA — that's the budget). Brass = hairlines / eyebrows / hover underlines only, never fills, never large type. Cormorant for display + italics; Fira Sans for UI/eyebrows/body. Seafoam only as section wash, never in type. Icons strokeWidth 1.25, muted.

### Rebuild — three editorial bands

**Band A · Florida Certified Master Builder** — asymmetric editorial pair on ivory.
- Left 5/12: the FCMB logo at full size, no halo, no rounded frame, no backdrop — sitting in negative space with a single brass hairline running underneath it and a small Fira Sans eyebrow "Florida Certified · Master Builder · 2024".
- Right 7/12: Cormorant statement "An elite designation. Held by the few." Italic on line two. One short paragraph of copy below.
- Beneath the paragraph: four single-line credentials separated by brass hairlines (no icon chips, no boxes) — "7+ Years Experience / Clean Regulatory Record / Verified Client & Subcontractor References / Written Warranty Minimum 1 Year". Each line is a row: 8-char tracked label on the left, plain body on the right.
- No bottom badge cluster (Background Verified / Licensed / Insured / Board Approved). Those are implied by FCMB.

**Band B · Luxury Renovations** — editorial pair, image-led, ivory background.
- Eyebrow "Now Offering" + Cormorant statement "Renovations, at the same standard."
- One short paragraph. Below it, a single brass-hairline list of four offerings: Condominium Transformations / Kitchen & Bath / Whole-Home Remodels / Turnkey Packages. No checkmarks, no parallel right-side card.
- Primary CTA `Explore Renovations` (navy fill, ivory text — matches the new system).
- Right column: a single ivory-bordered image moment (use an existing project photo or the hero asset) — quiet, no overlay, no hover.
- Removes the duplicate "Condo Specialists" right card entirely. The trust signals (Insured / Licensed / FCMB) already live in the FCMB band above.

**Band C · The Beau Monde Difference** — three-row editorial list on ivory (not a navy card grid).
- Eyebrow "Our Approach" + Cormorant statement "Three commitments, one standard." centered.
- Below: a single column of three numbered rows separated by brass hairlines. Each row is one line: small navy "01 / 02 / 03" + Cormorant sub-headline (`Bespoke Design` / `Precision Execution` / `Lifetime Commitment`) + one Fira Sans sentence below.
- No cards, no glassmorphism, no hover glows, no icons, no rounded chips. Whitespace and the hairlines carry the rhythm.

**Closing CTA polish (small)**
- Drop brass-outline button → navy filled `Schedule Your Consultation`.
- Headline stays Cormorant; italic accent stays the muted ivory tone the upper sequence uses (no brass on large type).
- Address line stays.

### Technical details

- File: `src/pages/Home.tsx` lines ~340–639 (FCMB, Renovations, Services, CTA sections).
- Remove unused Lucide imports left behind (Award, Shield, Users, FileCheck, CheckCircle2, Sparkles, Building2 where they no longer appear). Keep `ArrowRight`, `Star`.
- Use existing semantic tokens only (`bg-background`, `text-foreground`, `bg-primary`, `text-accent`, `border-accent/30`, `bg-seafoam`). No raw hex.
- Reuse `RevealAnimation` and the existing `parallax-ligature` background-letter pattern for one moment per band if it adds rhythm (likely just on the FCMB and Difference statements).
- Keep all copy meaning intact — only tightening for editorial cadence. No new claims, no removed credentials, contact + address unchanged.

### Out of scope

- Navigation, VideoHero, WalkthroughShowcase, DeliveryShowcase, Footer — locked, untouched.
- The new Bespoke → Emblem → Philosophy sequence we just built — untouched.
- Interior pages (Renovations page, About, Process, etc.) — Phase 3.

### Ready to ship

Switch to build mode and I implement all three rebuilds + the closing CTA polish in one pass.