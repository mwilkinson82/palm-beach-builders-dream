# Featured Newly Completed Residence — Revisions

Three changes to the band that already sits after the media block.

## 1. Copy fix
- Eyebrow changes from "Featured Residence · Palm Beach" to **"Featured · Newly Completed Residence"**.
- Image alt text drops the "Palm Beach" reference.

## 2. Hero photo
- Swap `c1.jpg` for `c64.jpg` as the framed hero still on the left.

## 3. Move the walkthrough carousel into this band
The `WalkthroughGallery` filmstrip (currently under the AJ walkthrough video) moves down here so the Featured Residence section is the single home for the full visual story of the home.

**New band structure (top-down):**
- Eyebrow + headline ("The Shores at Tranquility") + paragraph + "Find My Style" CTA, in a centered editorial intro row
- Below it: the framed c64 hero still as the anchor image
- Below that: the existing `WalkthroughGallery` filmstrip — the same horizontal scroller with the brass progress bar and full-screen lightbox, untouched in behavior

**Removed from above:** the standalone `<WalkthroughGallery />` between `WalkthroughShowcase` and `InterviewShowcase` is deleted, so the carousel exists in one place only.

The gallery's own outer `<section>` (which is navy) will remain navy inside the new band — that gives the Featured Residence section a natural two-tone rhythm (ivory intro → navy filmstrip) and keeps the existing lightbox/animation logic intact.

## Files
- `src/pages/Home.tsx` — copy edit, image swap, remove the upper `<WalkthroughGallery />`, and nest it inside the Featured Residence section
