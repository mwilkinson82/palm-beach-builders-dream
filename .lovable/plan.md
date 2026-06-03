## Goal

Transform the right column of the "Bespoke Luxury Redefined" block on the Home page into an editorial diptych — the pink-scarf portrait as the dominant image, paired with a small offset architectural detail behind/below. Reads as *the client × the home* — the life and the place built for it.

## Layout — `src/pages/Home.tsx` (band 1, lines ~169–184)

Replace the single 4/5 home photo on the right with a layered pair:

```text
       ┌─────────────────────────────┐
       │                             │
       │                             │
       │      PORTRAIT (3/4)         │
       │      dominant, front        │
       │                             │
       │                             │
       │         ┌──────────────────┐│
       │         │  ARCHITECTURAL   ││
       └─────────│  DETAIL          ││
                 │  (smaller, offset)│
                 └──────────────────┘
       ↑ "Turning blueprints to fingerprints" caption stays, repositioned bottom-left of portrait
```

- **Portrait**: full width of the right column, `aspect-[3/4]`, hard right-aligned. Subtle navy shadow (matches current treatment). Brass hairline frame inset on the bottom-right edge only (engraved corner mark), `cinema-hairline` style.
- **Detail**: ~55% width of the column, `aspect-[4/5]`, absolutely positioned bottom-left, overlapping the portrait by ~15% on the left/bottom (`-bottom-12 -left-12`). Sits *in front* of the portrait so the eye reads detail → portrait → headline. Same shadow language, lighter weight.
- **Caption**: the existing "Turning blueprints to fingerprints" tag stays in this section but moves to the top-right of the portrait (out of the way of the detail image), still on ivory with a brass border.
- **Parallax**: portrait gets `speed={0.08}` (current), detail gets `speed={-0.04}` so they drift opposite directions on scroll — subtle, editorial.
- **Reveal**: portrait `scale-in` at `delay=200` (current), detail `fade-up` at `delay=420` so the detail settles in after the portrait.

## Mobile (`<lg`)

- Stack vertically below the headline column (as today). Portrait first, detail below offset right by ~40% (no absolute overlap — keeps it readable on small screens). Caption hides on mobile (already does).

## Asset handling

- The user is providing a second image (architectural detail). Once attached, upload via `lovable-assets create --file /mnt/user-uploads/<filename> --filename bespoke-detail.jpg > src/assets/projects/bespoke-detail.jpg.asset.json`.
- The portrait gets uploaded via `lovable-assets create --file /mnt/user-uploads/Woman.jpeg --filename bespoke-portrait.jpg > src/assets/projects/bespoke-portrait.jpg.asset.json`.
- Existing `heroImage` import in this block gets removed (no other file uses it for this block).

## Out of scope

- No changes to the headline, body copy, CTAs, or star-rating row.
- No changes to the Stats band below.
- No new sections or pages.
- The portrait is *not* used elsewhere on the site — single editorial moment.

## Technical notes

- Right column wrapper becomes `relative` so the detail can position absolutely against the portrait.
- Detail's overlap uses negative offsets only at `lg:` breakpoint; mobile uses a normal stacked flow.
- Brand discipline: no brass overlays on the portrait beyond the hairline mark; navy shadows only; no text overlaid on either image.
- Will use the existing `cinema-hairline` + `.revealed` system from the Renovations hero for the corner mark.

## What I need from you

Drop the architectural detail photo into the next message (the interior/detail shot you mentioned). I'll upload both images and ship the layout in one pass.