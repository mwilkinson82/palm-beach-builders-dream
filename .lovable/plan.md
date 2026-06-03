## Goal

Turn the Renovations section on the Home page into a single large cinematic image of the attached marble-kitchen interior, with the headline overlaid and a quiet "Beau Monde" wordmark in the bottom-right corner — section-scale, not a card.

## Changes — `src/pages/Home.tsx`, Renovations section (lines ~211–341)

**Keep**
- The navy announcement strip at the top ("New · 2026 · Beau Monde is now offering · Renovations.").
- The "Three commitments — applied to renovations" grid below the hero (Discretion / Continuity / Same Standard). It's strong content and works as a follow-through.

**Replace** the editorial image/headline pair (lines ~233–285) with a full-bleed hero:
- Full viewport-width image of the new uploaded interior, locked to a cinematic 21:9 (`aspect-[21/9]`) on desktop, 4/5 on mobile so it doesn't squash. Uses `object-cover` and `object-center`.
- Subtle navy gradient overlay (`bg-gradient-to-tr from-primary/75 via-primary/30 to-transparent`) — anchored bottom-left so the headline reads cleanly, the right-side palms/ocean stay visible.
- A thin brass hairline frame inside the image edge (top/bottom only, `inset-x-12 top/bottom-6 h-px bg-accent/40`) to read as engraved frame, not a stock photo.
- Headline overlay, bottom-left, padded generously: small brass eyebrow "A New Beau Monde Offering" → `font-display` "Renovations at the same standard." (one line on desktop, breaks at "at the" on mobile, italic on "same standard") → "Explore Renovations" navy button with brass border.
- "Beau Monde" wordmark in `font-wordmark`, bottom-right of the image, in ivory at 50% opacity — small, no link, no underline. Pure signature.

**Asset handling**
- Upload the user's attached image via `lovable-assets create --file /mnt/user-uploads/ChatGPT_Image_Jun_2_2026_10_06_50_PM.png --filename renovation-hero.jpg` → write `src/assets/projects/renovation-hero.jpg.asset.json`.
- Import that asset, drop the old `renovationImage` import (and check no other file uses it — if it does, leave the old asset alone).

## Out of scope
- No changes to the navy announcement strip text.
- No changes to the three-commitments grid.
- No changes to the /renovations page itself.
- No new animations beyond the existing RevealAnimation wrappers; the image gets a slow parallax (`Parallax speed={0.05}`).

## Technical notes
- Section becomes `relative w-full` and the hero is wrapped in a `relative w-full` div that spans the full section width (not constrained by `max-w-6xl`). Three commitments grid stays inside the existing `max-w-6xl` container, placed in its own wrapper below the hero.
- Mobile: stack the headline above the wordmark; wordmark moves to bottom-center on `<md`. Headline scales `text-3xl → md:text-5xl → lg:text-6xl`.
- Brand discipline check: navy CTA (not brass), brass only as eyebrow + hairline frame + button border, `font-display` italic on the headline, `font-wordmark` only on "Beau Monde" signature.
