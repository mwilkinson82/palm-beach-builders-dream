## Renovations Page — Brand Alignment Pass

The current Renovations page violates brand discipline on multiple fronts and uses fabricated stats. The plan is a structural rebuild that mirrors the Contact page's editorial restraint while keeping the renovation-specific content (services, HOA expertise, areas served).

### What's wrong with the current page

- **Brass discipline broken:** brass button fills (`bg-accent text-black`), brass on large type ("Palm Beach Residence" h1 in brass), brass icons everywhere, brass dots/circles around step numbers, brass-tinted glow blurs.
- **Typography off-brand:** `font-thin` everywhere instead of `font-display` (Cormorant Garamond). No engraved feel.
- **CTA wording off:** "START YOUR RENOVATION", "SCHEDULE YOUR CONSULTATION" — should be "Talk to Beau Monde" per brand vocab.
- **Generic stats:** "50+ Renovations Completed", "100% Client Satisfaction", "A+ BBB Rating" — invented numbers; remove unless the client confirms.
- **Dark-on-dark sections** with white/70 body text — heavy and at odds with the light-mode-first Ivory & Ocean palette.
- **Lucide icon cards** (Building2, ChefHat, Bath, Sparkles…) — too generic-SaaS for a luxury builder.

### New structure (editorial restraint, matches Contact tone)

1. **Hero band** (Ivory)
   - Brass eyebrow + hairline: "Renovations"
   - Cormorant headline split italic/roman: *"Reimagine your"* / "Palm Beach residence"
   - Short Fira Sans paragraph (restraint-forward, mentions discretion + 30 years).
   - Single primary CTA: navy "Talk to Beau Monde" (using the new luxe button style from Contact). Secondary: hairline text link "View Our Process →".

2. **Editorial intro** (Ivory, no second card-grid)
   - Two-column 7/5: left has Cormorant subhead "Palm Beach's finest renovation specialists" + body about FCMB-level craftsmanship applied to existing residences. Right has a small stacked panel of three quiet credentials (Florida Certified Master Builder · 30+ years · Worth Avenue office) — no fabricated percentages.

3. **Services list** (Ivory, replaces dark card grid)
   - 6 services rendered as a 2-column editorial list with brass eyebrow numerals (01 — 06), Cormorant service title, Fira Sans description, and a thin brass hairline divider between rows. No icons, no lucide. Features become inline · separated keywords beneath each description.
   - Services preserved: Luxury Condo Transformations, Whole-Home Remodels, Gourmet Kitchen Design, Spa-Inspired Bathrooms, Interior Redesign, Turnkey Condo Packages.

4. **Condo expertise band** (Navy section — first dark band, used sparingly)
   - Two-column. Left: Cormorant headline "Palm Beach's premier condo specialists" + bullet list of HOA expertise items (hairline left-border list, no Shield icon, no brass dots).
   - Right: a single quiet "card" on navy with three sections (Property Types · Areas We Serve · Our 4-Step Process) — rendered as typographic columns with brass hairline section labels, no checkmarks, no circle-numbered step badges. The 4-step process is the canonical one from the memory.

5. **Closing CTA band** (Ivory or quiet Sand)
   - Cormorant: *"Ready to begin?"*
   - Short line.
   - Single navy "Talk to Beau Monde" CTA (same luxe button).

### Brand-compliance fixes applied throughout

- All headlines → `font-display` Cormorant, never `font-bold`.
- Brass restricted to hairlines, eyebrows, numerals (01—06), and underline-on-hover. Never as button fills, never as headline color.
- Buttons → reuse the new navy + brass-hairline-ring + underline-draw treatment from Contact. CTAs use "Talk to Beau Monde".
- Lucide icons removed from the services grid and from list items.
- Fabricated stats removed (50+, 100%, A+).
- No specific building names or addresses (already compliant; will keep that way).
- Dark-on-dark used only in the single Condo Expertise band, not three times.

### SEO

- Add `<BreadcrumbSchema>` (Home → Renovations) — currently missing.
- Add a `Service` JSON-LD block listing the six renovation services under the LocalBusiness `@id`, so they associate with the Palm Beach office record we just added on Contact.
- Keep existing SEO title/description.

### Files

- `src/pages/Renovations.tsx` — rewrite layout & markup; preserve route, SEO title/description, RevealAnimation, Navigation, Footer.

### Out of scope

- No new dependencies.
- No changes to other pages, edge functions, or schema.
- Stats are removed, not replaced — if the client wants real numbers later, easy to add a single Numbers band back.
- No imagery added in this pass; the page stays type-led. We can layer in a single hero image or one editorial photo later if desired.