## Plan: "New Beau Monde Delivery" section

### What you'll see
A new full-width section directly under the main cinematic hero. On scroll into view it gently slides up and fades in (same soft easing as the rest of the site). The section contains:

- **Eyebrow:** `NEW BEAU MONDE DELIVERY` (gold, tracked, small caps)
- **Heading:** `Another Custom Luxury Home` (Cormorant Garamond, large)
- **Subhead:** `Delivered by the Beau Monde Builders team.`
- **Video:** the uploaded MP4, full-bleed widescreen frame, autoplay-muted-loop-playsinline, native HTML5 `<video>` (no chrome). A small unmute pill in the corner, matching the main hero's pattern.
- **Thin gold rule + Palm Beach mark** below the video for continuity.

Order on the homepage becomes:
1. Cinematic main hero (existing)
2. **New Beau Monde Delivery** (new)
3. Bespoke Luxury Redefined (existing)
4. Stats, Logo Story, Philosophy, etc. (existing)

### Motion
- Reuses the existing `RevealAnimation` component with `animation="luxury-reveal"` so the whole section drifts up + fades in on scroll, consistent with the rest of the site.
- Video itself starts paused with the poster frame visible; once it scrolls into view it begins playing (IntersectionObserver) — saves bandwidth and avoids two videos competing at page load.
- Respects `prefers-reduced-motion`: shows the poster only, no autoplay, no slide.

### Mobile / tablet
- Section padding scales (`py-16 md:py-24 lg:py-32`).
- Video keeps native 16:9 aspect with `aspect-video` and `object-cover`, full-bleed on phones with a thin gold border on desktop for an editorial frame.
- Unmute pill sized for touch (44px min).

### Technical details

**New asset**
- You'll upload the MP4. I'll host it via Lovable Assets (CDN, no repo bloat) and reference it via a generated `.asset.json` pointer. Recommended file: H.264 MP4, no audio track unless you want sound, ≤30MB.
- Use the attached aerial still as the `poster` — I'll also push that through Lovable Assets.

**New component: `src/components/DeliveryShowcase.tsx`**
- Props: `videoSrc`, `posterSrc`, `eyebrow`, `heading`, `subhead`.
- Wraps content in `<RevealAnimation animation="luxury-reveal">`.
- IntersectionObserver gates `video.play()` so playback starts only when visible.
- Native `<video autoplay muted loop playsinline poster={posterSrc}>` — same minimal pattern as `VideoHero` but without the HLS layer (single self-hosted MP4).
- Unmute toggle identical in style to the main hero pill for visual consistency.

**Edit: `src/pages/Home.tsx`**
- Import and render `<DeliveryShowcase ... />` immediately after `<VideoHero />`, before the "Bespoke Luxury Redefined" act-two section.

No design tokens, routes, or backend changes.

### Files touched
```text
src/components/DeliveryShowcase.tsx              (new)
src/assets/new-delivery.mp4.asset.json           (new, after you upload)
src/assets/new-delivery-poster.jpg.asset.json    (new, from the attached still)
src/pages/Home.tsx                               (insert one section)
```

### What I need from you
Upload the MP4 in the next message. I'll wire everything up in one pass.
