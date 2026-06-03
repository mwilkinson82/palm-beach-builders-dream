## Goal

Make the Walkthrough carousel feel like a private-collection contact sheet — edge-to-edge photos, no gradient fades, quiet brass detailing, restrained interaction. No vibe drift; same navy section, same photo set.

## Changes — `src/components/WalkthroughGallery.tsx`

**Frame / edge treatment**
- Keep gradient fades removed (already done).
- Replace the soft `border-primary-foreground/15` chip border with a single brass hairline (`ring-1 ring-accent/20`) that brightens to `ring-accent/70` on hover. Frame reads as engraved rather than card-like.
- Tighten gap from `gap-3 md:gap-4` to `gap-px md:gap-[2px]` so frames sit like a contact-sheet strip separated by a brass-tinted seam (the navy bg shows through the 1–2px gap).
- Drop `opacity-90` on the resting image — photos should sit at full strength. Hover keeps the gentle `scale-[1.02]` (reduced from 1.03).
- Remove the black-from-bottom hover gradient overlay (it dims the photo). Replace hover affordance with a single brass hairline rule that slides in across the bottom of the frame (`h-px bg-accent translate-y-full → 0` on hover).

**Number tag**
- Move the `01 / 65` index from inside the photo to a small caption that sits just under the frame in the resting state — always visible, brass, tiny tracking. Removes hover-only mystery and makes the strip feel curated.
- Drop the Expand icon entirely; cursor + hairline are enough.

**Strip rhythm**
- Slightly narrower frames on desktop (`lg:w-72` instead of `lg:w-80`) so more photos peek in — reads denser, more editorial.
- Keep `aspect-[3/2]` and snap-x.

**Scroll affordance (replaces fades)**
- Thin brass progress ticker beneath the strip: full-width hairline track at `bg-accent/15` with an `bg-accent/70` fill that tracks `scrollLeft / (scrollWidth - clientWidth)`. Updates on the strip's `onScroll`. Replaces the gradient hint with something intentional and luxurious.
- Below the ticker, keep the existing "Tap any frame to enlarge · Scroll to explore" line but tighten spacing.

**Section padding**
- Keep `-mx-6 px-6 …` bleed so the strip truly runs edge-to-edge of the section. No container border around it.

## Out of scope
- No changes to the lightbox, the PHOTOS array, or the surrounding sections.
- No autoplay, no arrow buttons (the request is styling refinement, not new controls).
- No new dependencies.

## Technical notes
- Progress ticker: `useRef` on the scroller, `useState` number 0–1, `onScroll` handler computes ratio. Render a `div` with `style={{ transform: \`scaleX(${ratio})\`, transformOrigin: 'left' }}`.
- All colors via existing semantic tokens (`accent`, `primary`, `primary-foreground`) — no raw hex.
