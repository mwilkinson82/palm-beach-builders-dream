## Renovations hero video

Replace the current text-only hero on `/renovations` with a cinematic video hero featuring the uploaded `0602.mp4` clip, layered with the same brass eyebrow / Cormorant headline / navy CTA treatment used elsewhere on the site.

### What you'll see

- Full-bleed video band at the top of Renovations (roughly 80vh on desktop, 70svh on mobile), autoplaying muted + looped, with a quiet poster fallback for reduced-motion users.
- Soft navy gradient + subtle vignette over the video so the type stays legible without dimming the footage too much.
- Brass hairline + eyebrow "Renovations", split Cormorant headline ("Reimagine your / Palm Beach residence."), short paragraph, and the navy "Talk to Beau Monde" CTA + "View Our Process →" link — same vocabulary as today, just lifted onto the video.
- Bottom-left "Palm Beach, Florida" wordmark and a small scroll cue, mirroring the home `VideoHero` so the two pages feel like one family.
- No sound controls on this hero (the clip will be silent/ambient-only) — keeps it restrained and avoids a second unmute pill on the site.

The rest of the Renovations page (editorial intro, services list, condo expertise navy band, closing CTA) stays exactly as it is.

### Technical notes

- Upload `/mnt/user-uploads/0602.mp4` to the Lovable Assets CDN via `lovable-assets create` and commit `src/assets/renovations-hero.mp4.asset.json`. No binary lands in the repo.
- Extract one poster frame with `ffmpeg` (~second 1), upload it the same way → `src/assets/renovations-hero-poster.jpg.asset.json`. Used as the `<video poster>` and as the reduced-motion fallback image.
- New component `src/components/RenovationsHero.tsx`:
  - `<video autoPlay muted loop playsInline preload="metadata">` with `object-cover` over a full-bleed section.
  - Honors `prefers-reduced-motion`: renders only the poster `<img>` in that case.
  - Fades the video in once `playing` fires (matches `VideoHero` pattern) to avoid a black flash.
  - Overlays: top + bottom gradients, soft radial vignette, all using existing semantic tokens (`primary`, `accent`).
  - Hosts the eyebrow, headline, paragraph, primary CTA, and secondary link — reusing the existing `ctaClass` string from `Renovations.tsx` (extracted into the component or imported from a shared spot).
- `src/pages/Renovations.tsx`: replace the current `<section>` hero block with `<RenovationsHero />`. Keep `Navigation`, SEO, JSON-LD, and all downstream sections untouched.
- Performance: 4K source is heavy; the CDN serves it cached, `preload="metadata"`, and the poster carries the first paint so LCP stays on the image, not the video.
- No new npm dependencies. No schema or routing changes.

### Out of scope

- No HLS/Mux pipeline for this clip (the existing `VideoHero` keeps its Mux sources). If we want adaptive streaming for Renovations later, we can revisit.
- No edits to other pages, no changes to the global nav, no copy changes beyond what already lives in the current hero.
