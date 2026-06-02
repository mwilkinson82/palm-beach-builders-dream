## Goal

Make the homepage open (after the 3s splash) with a full-screen cinematic video hero — autoplay, muted, looped, no YouTube chrome. The existing "BESPOKE / Luxury / REDEFINED" headline is retired from the hero and folded into the next section so the video can carry the moment uninterrupted, matching the $5M+ luxury bespoke positioning.

## What the user will see

1. 3-second splash (unchanged)
2. Full-viewport cinematic video (YouTube `0LDSwhryy7w`) playing silently on loop, edge-to-edge, with a subtle dark vignette and a tasteful bottom-left brand mark + "Scroll" cue
3. A small floating "Unmute" pill (bottom-right) — one tap to bring sound in, because a video this good deserves audio
4. Scroll down → new editorial "Bespoke / Luxury / Redefined" intro section (the old hero copy + CTAs, reimagined on a dark cinematic backdrop with the existing hero photo as a side image), then the existing Stats Bar, Logo Story, Philosophy, etc.

## Why this layout

- A luxury bespoke brand should let the film breathe. Stacking a headline on top of a powerful video dilutes both.
- Keeping the headline + CTAs in the very next section preserves SEO (H1 stays above the fold on scroll), conversion (TALK TO BEAU MONDE button is one scroll away), and the Google Reviews badge.
- Self-hosted MP4 can replace the YouTube embed later with zero layout change — the `VideoHero` component will accept either source.

## Technical Details

**New component: `src/components/VideoHero.tsx`**
- Full-viewport (`h-screen w-screen`) section
- YouTube iframe with params: `autoplay=1&mute=1&loop=1&playlist=0LDSwhryy7w&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1`
- Iframe oversized + transform-scaled to hide black bars (16:9 cover technique using `min-w-[177.77vh] min-h-[56.25vw]` centered absolute)
- `pointer-events-none` on iframe so it can't be paused; overlay div sits on top
- Subtle radial vignette + bottom gradient for text legibility
- Bottom-left: small "BMB" mark + "Palm Beach, Florida" eyebrow
- Bottom-center: animated "Scroll" indicator (reuse existing pattern)
- Bottom-right: "Unmute" toggle button — uses YouTube IFrame Player API (`postMessage`) to unmute/mute without reload
- Fades in 600ms after mount to mask YouTube's initial flash

**Edits to `src/pages/Home.tsx`**
- Import & render `<VideoHero />` immediately after `<Navigation />`, replacing the current `<section className="relative h-screen flex items-center">` hero
- Move the old headline + subhead + CTAs + Google Reviews badge into a new second section ("Bespoke Luxury Redefined") that uses `heroImage` as a large right-side editorial image with the copy on the left, dark background, gold accents — this becomes a powerful "act two" rather than a discarded asset
- Stats bar, Logo Story, Philosophy, and everything below remain untouched

**Accessibility & performance**
- `aria-label="Cinematic introduction to Beau Monde Builders"` on the video region
- Respect `prefers-reduced-motion`: fall back to a static poster image (use existing `heroImage`) instead of autoplay
- Mobile: same approach (YouTube allows muted autoplay inline on iOS/Android with `playsinline=1`); add a tap-to-play fallback overlay if autoplay is blocked
- Lazy-render iframe only after splash unmounts, so initial paint isn't blocked

**Later swap to MP4**
- `VideoHero` will accept an optional `mp4Src` prop. When provided, it renders a native `<video autoplay muted loop playsinline>` instead of the iframe. Zero other changes needed when you send the MP4.

## Files touched

```text
src/components/VideoHero.tsx    (new)
src/pages/Home.tsx              (replace hero section, add "act two" section with old copy)
```

No design tokens, routes, backend, or other pages change.
