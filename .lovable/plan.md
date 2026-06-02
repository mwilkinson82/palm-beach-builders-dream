## Add: Founder Walkthrough Section

A new editorial section featuring AJ Hoover's full walkthrough video of a newly completed project. Placed directly under the hero, above the "New from Beau Monde" delivery showcase, so it leads the post-hero scroll narrative.

### Placement

```text
VideoHero (hero)
└── WalkthroughShowcase  ← NEW
    └── DeliveryShowcase ("New from Beau Monde")
        └── Bespoke Luxury Redefined …
```

### Section composition (mirrors DeliveryShowcase rhythm so the two sit cohesively)

- Black background section, matching `DeliveryShowcase` paddings.
- Eyebrow: gold hairlines + "A Walkthrough With" in Cormorant italic, gold, tracked.
- Wordmark: "AJ HOOVER" — Montserrat bold uppercase, white, large display scale.
- Subhead: Cormorant italic, white/75 — "Newly completed project walkthrough. CEO, Beau Monde Builders."
- Video frame: full-width responsive 16:9 container with the ReelReef iframe, framed with the same subtle gold border + shadow as DeliveryShowcase.
- Footer mark: gold hairlines + "Palm Beach, Florida" small caps (same as DeliveryShowcase) for visual symmetry.
- All elements wrapped in `RevealAnimation` (luxury-reveal / fade-up with staggered delays).

### Embed

Native iframe, responsive 16:9 via `aspect-video` wrapper with `absolute inset-0 w-full h-full` iframe:
```
src="https://media.reelreef.com/videos/019caebd-3875-71e0-b3da-bde3d856926a"
allow="autoplay; fullscreen; picture-in-picture"
title="Newly completed project walkthrough with AJ Hoover, CEO of Beau Monde Builders"
loading="lazy"
```

### Files

- **New:** `src/components/WalkthroughShowcase.tsx` — section component (props with sensible defaults for title, subhead, iframe src).
- **Edit:** `src/pages/Home.tsx` — import and render `<WalkthroughShowcase />` between `<VideoHero />` and `<DeliveryShowcase />`.

No design tokens, routes, or other components change.
