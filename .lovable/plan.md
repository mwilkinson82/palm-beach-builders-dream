# Featured Newly Completed Residence — Cinematic Rebuild

Re-stage the band on `Home.tsx` so it stops feeling like a slotted-in block and starts reading as THE house on the page. Palette shifts to a pale seafoam wash (used as a section tint only — type and CTAs stay navy, per brand rules). Composition becomes a cinematic hero with an overlaid title card, followed by a larger, indexed filmstrip.

## 1. Section wash — pale seafoam band

The whole band gets a soft seafoam background so it visually separates from the ivory sections above and below. Seafoam stays a wash only — no seafoam type, no seafoam buttons.

- Section background: pale seafoam tint (`hsl(var(--seafoam))` — already defined as `160 18% 88%`)
- Subtle silk-grain overlay stays for texture
- Top + bottom borders: brass hairlines (`border-accent/30`) so the band feels intentionally framed
- Headline, body, eyebrow, CTA: all stay navy / brass / Cormorant as today

## 2. Cinematic hero with overlaid title card

Replace the centered intro + floating-image stack with one full-bleed cinematic frame.

```text
┌────────────────────────────────────────────────────────────┐
│                                                            │
│              c64 hero (full-bleed, ~70vh)                  │
│                                                            │
│   ─── FEATURED · NEWLY COMPLETED RESIDENCE                 │
│   The Shores at Tranquility.                               │
│   short editorial line                                     │
│   [ Find My Style → ]                                      │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

- `c64.jpg` fills the frame edge-to-edge, ~`h-[70vh]` (min 520px, max ~780px), `object-cover`
- Soft navy-to-transparent gradient veil on the lower-left third for type legibility (`bg-gradient-to-tr from-primary/70 via-primary/30 to-transparent`)
- Title card sits lower-left, anchored inside a brass hairline rule — eyebrow, Cormorant headline, single-line lede, navy CTA
- Brass corner-tick marks at the four corners of the hero (small `L`-shaped hairlines) — the "framed photograph" cue
- Slow Ken Burns on the image using the existing `cinema-image` utility from `index.css`
- Mobile: hero shortens to `aspect-[4/5]`, title card moves below the image (still left-aligned, not centered)

## 3. Indexed filmstrip (replaces current `WalkthroughGallery` layout inside this band)

The filmstrip becomes the second act of the band — larger tiles, a counted index, and a brass rail that ties it to the hero above. The lightbox behavior is unchanged.

- Header row above the strip:
  - Left: brass hairline + eyebrow `THE RESIDENCE · GALLERY`
  - Right: live counter `01 / 65` that updates as the user scrolls (driven by the existing scroll-progress handler)
- Tiles grow: `w-72 md:w-96 lg:w-[28rem]`, aspect `4/3`, slightly more breathing room (`gap-2 md:gap-3`) so each frame reads as a photo, not a contact sheet
- Each tile gets a thin brass index numeral in the lower-left corner (`01`, `02`, …) — magazine plate feel
- Brass progress rail underneath stays, but thicker (`h-[2px]`) and pinned full-width
- Caption below the rail keeps the existing "Tap any frame to enlarge" microcopy

The strip continues to live inside the Featured band (one home for the full visual story), and the standalone `<WalkthroughGallery />` between `WalkthroughShowcase` and `InterviewShowcase` is already gone — no change there.

## 4. Copy

- Eyebrow: `Featured · Newly Completed Residence` (unchanged)
- Headline: `The Shores at Tranquility.` (unchanged, italic on "at Tranquility")
- Lede shortens to a single editorial line, e.g. *"The home behind the films above — every detail at the level we bring to every Beau Monde residence."*
- CTA: `Find My Style →` (unchanged, navy)

## Files

- `src/pages/Home.tsx` — rebuild the Featured Residence `<section>` (seafoam wash, cinematic hero with overlay title card, brass corner ticks, updated mobile stack)
- `src/components/WalkthroughGallery.tsx` — bump tile size, add per-tile index numerals, add live `NN / 65` counter in the header row, thicken progress rail, drop the now-redundant navy section background (band already provides the wash) and adjust foreground tokens so text reads on seafoam instead of navy

## Out of scope

- No changes to `WalkthroughShowcase`, `InterviewShowcase`, `DeliveryShowcase`, or any other section
- No new images or assets — uses existing `c64` + the constellation set
- Lightbox behavior unchanged (keyboard nav, swipe, thumbnail rail)
