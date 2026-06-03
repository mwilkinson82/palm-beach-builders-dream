## Goal
Remove the seafoam background from the Our Marks section so it sits cleanly on the ivory `bg-background`, restoring tonal continuity with the surrounding sections. The seafoam "chapter" remains exclusive to Our Philosophy above.

## Changes — `src/pages/Home.tsx` (Our Marks section, ~lines 570–637)

1. **Drop the seafoam wrapper around the emblem band.**
   - Remove the inner `<div className="... bg-seafoam border-y border-accent/20">` wrapper.
   - The emblem + meanings grid now renders directly on the section's `bg-background`.
   - Keep the outer `<section>` `border-t border-accent/20` for a clean handoff from Philosophy.

2. **Re-frame the emblem plate for ivory-on-ivory contrast.**
   - The emblem currently uses `bg-background` (ivory) inside a seafoam band. On ivory it disappears.
   - Switch the inner plate to `bg-card` (sand-tinted) with `border-accent/30` so the framed emblem still reads as a distinct museum plate.
   - Keep the brass corner ticks and drop shadow.

3. **Preserve the ivory credential plinth as-is.**
   - It already renders on `bg-background`. With seafoam gone above it, add a subtle separator between the emblem band and the plinth: a single centered brass hairline (`w-24 h-px bg-accent/40 mx-auto`) with vertical breathing room, so the two halves of Our Marks still read as distinct beats without a heavy band.

4. **No copy, asset, animation, or neighboring-section changes.** Philosophy, Bento, and downstream sections are untouched.

## Out of scope
- No changes to the Philosophy section's seafoam treatment.
- No edits to `EMBLEM_MEANINGS`, `FCMB_CREDENTIALS`, badges, or the ledger structure.
- No font, palette, or token changes.
