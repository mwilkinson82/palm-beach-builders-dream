## Goal

Stop the portrait from overlapping the "Find My Style" button in the "Bespoke Luxury Redefined" hero. Keep its current width (`lg:w-[46%]`) and aspect ratio.

## Change

In `src/pages/Home.tsx` (~line 191), the portrait wrapper currently sits at:

```
lg:absolute lg:bottom-[-3rem] lg:left-[-7rem] lg:w-[46%] lg:z-30
```

The `-7rem` left offset pushes the portrait into the left text column at the buttons' vertical position. Fix by pulling it back so it stays anchored under the interior image (right column) and only kisses the column gutter:

```
lg:absolute lg:bottom-[-3rem] lg:left-[-2.5rem] lg:w-[46%] lg:z-30
```

That removes the overlap entirely while preserving the editorial offset feel (still pokes slightly past the column edge, still overlaps the interior image at bottom-left).

## Out of scope

- No size change to the portrait.
- No change to the interior image, caption, or buttons.
- No mobile changes — overlap only happens at `lg+`.

## Verify

After the edit, screenshot at 1366×768 (current viewport) and confirm the portrait sits clear of the button row.