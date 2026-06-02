## 1. Walkthrough → click-to-lightbox

The walkthrough iframe today is just embedded inline. We'll convert it into a poster-frame trigger that opens a true cinematic lightbox.

**New component:** `src/components/VideoLightbox.tsx`
- Full-viewport fixed overlay, `bg-primary/95` with subtle silk-grain.
- Centered `aspect-video` iframe at `max-w-[90vw] max-h-[85vh]`, brass hairline border.
- Top-right close button (Ivory X, brass on hover), ESC key + backdrop click close, focus-trapped.
- `?autoplay=1` appended to iframe src on open.
- Body scroll locked while open.
- Respects reduced motion (instant open vs. 220ms fade+scale).

**`WalkthroughShowcase.tsx` updates:**
- The current iframe becomes a `<button>` showing the video's poster image (we'll capture/use the existing frame as a static poster — placeholder asset `walkthrough-poster.jpg` with a TODO comment for AJ to swap a real still).
- Overlaid brass-circled play glyph + small "Play Walkthrough" caption.
- onClick opens `<VideoLightbox src=…>`.
- Keep brass hairline frame and the existing reveal animation.

## 2. DeliveryShowcase → side-by-side video pair

Currently one self-hosted MP4 with the "New from Beau Monde" headline and a "Palm Beach, Florida" caption. We restructure to a two-up editorial pair.

**`DeliveryShowcase.tsx` rewrite:**
- Keep the navy band, "New from / **Beau Monde**" wordmark, and italic subhead.
- Replace single video block with `grid lg:grid-cols-2 gap-8` containing **two video frames**:
  - **Left:** existing MP4 (autoplay/muted/loop, in-view, mute toggle — current behavior preserved, just half-width).
  - **Right:** new Cloudflare Stream iframe (the URL provided), in the same 16:9 brass-hairline frame, lazy-loaded, also click-to-lightbox capable.
- Each video has its own small caption strip underneath ("Recent Delivery" / "Recent Delivery") — no city names.
- Bottom hairline caption changes from "Palm Beach, Florida" to **"Two Pristine Luxury Builds · Newly Delivered"**.
- On `<lg`: stacks vertically.

## 3. Home.tsx — restructure lower half

New order from after `InterviewShowcase` down to the closing CTA:

```text
VideoHero
WalkthroughShowcase           (now click-to-lightbox)
InterviewShowcase             (unchanged)
DeliveryShowcase              (now two-up)
─────────────────────────────
Bespoke Luxury Redefined band (unchanged — hero editorial + stats)
Stats row                     (unchanged)
RenovationsAnnouncement       ← MOVED UP, restyled with subtle NEW badge
Philosophy band               (lifted out of nested editorial section)
Emblem + FCMB combined card   ← NEW merged section
Three Commitments             (redesigned — see §5)
Closing CTA
```

The current monolithic "Editorial Sequence" `<section>` (lines 53–276) gets split: stats + hero editorial stay where they are; Emblem and Philosophy bands get lifted into top-level sections so they can be reordered cleanly.

## 4. Renovations — moved up, subtle NEW badge

Existing `Renovations, at the same standard` section is moved to immediately follow the stats row. Visual edits only:

- Replace the "Now Offering" eyebrow with a paired treatment:
  - Tiny brass-bordered chip: `NEW · 2026` (font-sans, tracking-[0.3em], px-2 py-1, hairline brass border, navy text).
  - Followed by the existing eyebrow text reading **"A New Beau Monde Offering"**.
- Subhead tweak: *"Renovations, at the same standard as our custom builds."* (clarifies the parity claim).
- Layout and image side stay as they are.

## 5. Emblem + FCMB merged card

A single editorial section replacing the current standalone Emblem band AND standalone FCMB band.

**Layout:** `lg:grid-cols-12`
- **Left col-span-5:** the sketched emblem (current `logoSketch`) inside the bordered card, eyebrow `OUR EMBLEM`, headline *The Symbols of Beau Monde*. The three meanings (Lions / Parthenon / Palm Trees) move to the right column as a compact list.
- **Right col-span-7:** Top half = the three emblem meanings (more compact, smaller type, single-column stack). A brass hairline divider. Bottom half = FCMB logo (smaller, ~200px), eyebrow `ELITE CERTIFICATION`, sub-headline *Florida Certified Master Builder · A designation held by the few*, and a 2-row condensed credentials list (Experience · Record · References · Warranty — already in code).
- One unified `OUR MARKS` super-eyebrow above the whole pair to frame it as "the marks that stand behind the work."

## 6. Three Commitments — redesign

Current treatment is the generic "01 / Title / Body" three-row table. Replace with a more cinematic composition:

- Keep eyebrow `OUR APPROACH` and headline *Three commitments, one standard.*
- Below: `grid lg:grid-cols-3` of three tall navy-on-ivory cards, each with:
  - Large brass numeral (font-display italic, 5xl–6xl) top-left.
  - Brass hairline rule.
  - Title in Cormorant.
  - Body in Fira Sans, light.
  - On hover: subtle navy fill of the top hairline (brass→navy transition), card lifts 4px.
- Cards separated by brass hairlines, no card backgrounds (keeps the ivory editorial feel — not "feature boxes").
- Mobile: stacks; numerals stay aligned left.

## 7. Copy edits (small)

- DeliveryShowcase footer caption → **"Two Pristine Luxury Builds · Newly Delivered"** (was "Palm Beach, Florida").
- WalkthroughShowcase keeps the recently approved "An Award-Winning Beau Monde Residence" caption.

## Technical notes

- **VideoLightbox** is reusable — both Walkthrough and the right-side Delivery video opt in via a `lightboxSrc` prop. Interview iframe stays inline (already asymmetric, lightbox would be redundant).
- The lightbox uses `createPortal` to `document.body` so it escapes any parent transform/overflow.
- Cloudflare Stream iframe accepts `?autoplay=1&muted=false` query params; we'll pass them on lightbox open.
- No new dependencies. No backend changes. No new routes.
- Existing `parallax-ligature` letters preserved; the lifted Emblem section keeps its `S`, Philosophy keeps its centered `A`, Commitments keeps its `III`.
- Reduced-motion: lightbox skips fade, autoplay still triggers but muted; existing `Parallax` wrapper already respects the media query.

## Files touched

- **New:** `src/components/VideoLightbox.tsx`
- **New:** `src/assets/walkthrough-poster.jpg` (placeholder image generated to match the video's framing — swap later)
- **Edit:** `src/components/WalkthroughShowcase.tsx` (poster + lightbox trigger)
- **Edit:** `src/components/DeliveryShowcase.tsx` (two-up grid, accepts second iframe src, caption swap)
- **Edit:** `src/pages/Home.tsx` (section reordering, lift Emblem & Philosophy & FCMB out of nested wrapper, build merged Emblem+FCMB card, redesign Three Commitments, restyle Renovations eyebrow)

## Out of scope

- VideoHero, InterviewShowcase composition (untouched).
- Nav, footer, other pages.
- Any business-logic, backend, or routing work.
- Replacing the actual walkthrough poster image with a real still — placeholder ships now, real frame can be dropped in later without code changes.
