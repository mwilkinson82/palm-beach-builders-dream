## Two refinements to /projects flip-book

### 1. Reword the per-plate CTA

Replace the current "Build in this idiom" hairline link on each of the 10 style plates with:

**"Talk to Beau Monde about this style"**

Rationale: matches site-wide primary CTA voice ("Talk to Beau Monde"), drops the word "idiom" (too writerly, not how people speak), and keeps the style context. Same brass hairline treatment, same destination (`/contact?style={slug}`), same uppercase 0.3em tracking. No layout change.

### 2. Hover magnifier on each image

Add a loupe-style magnifier to every style plate image (and the cover/Yours images if they have photography). Behavior:

- On pointer enter over the image, a circular lens (~140px diameter on desktop, ~110px on touch-tap) appears under the cursor.
- Lens shows the same image at ~2x scale, positioned by cursor coordinates — so the user inspects detail without leaving the page.
- Lens is contained inside the image frame (no overflow into the plate's typography).
- Subtle ivory hairline ring + soft navy shadow on the lens to match the brand. No brass fill.
- Cursor over the image becomes `zoom-in`.
- Hidden entirely on coarse pointers / `prefers-reduced-motion` — touch users keep the static image (no modal, no full-screen). Confirmed earlier constraint: portfolio images stay non-clickable, no overlays — the lens is hover-only and dismisses the moment the cursor leaves.
- No click-to-enlarge, no lightbox.

### Technical notes

- New small component `ImageLoupe` (in `src/pages/Projects.tsx` or `src/components/ImageLoupe.tsx`) wrapping the existing `<img>`. Pure CSS + a `mousemove` handler updating a CSS variable for `background-position`; uses the same `src` as the underlying image so no extra network cost.
- Replace the existing `<img>` block inside `StylePlate` with `<ImageLoupe src={s.image} alt={s.name} eager={index < 2} />`.
- No changes to flip-book mechanics, animations, navigation, routing, or design tokens.

### Files touched

- `src/pages/Projects.tsx` — swap CTA copy; replace inline `<img>` with `<ImageLoupe>` (or add component in same file).

### Not in scope

- Lightbox / full-screen viewer
- Click-to-open behavior
- Mobile magnifier gesture
- Any copy change beyond the per-plate CTA
