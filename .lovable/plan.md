## The problem
Two consecutive sections on `/renovations` use the same left-aligned text-on-empty-right layout:

1. **"Reimagine your dream residence."** (seafoam band, with CTAs)
2. **"The Space Coast and Central Florida's finest renovation specialists."** (ivory band)

Stacked back-to-back they read as twin slabs of copy with a vacant right column on each. The page loses rhythm before the credentials band.

## Proposed fix — two complementary moves

### 1. "Reimagine your dream residence." → split editorial layout
Convert the seafoam hero from single-column text to a 12-column split:

```text
+-------------------------------+-----------------+
|  Eyebrow · Renovations        |                 |
|                               |   [renovation   |
|  Reimagine your               |    interior     |
|  dream residence.             |    detail —     |
|                               |    portrait     |
|  Lede paragraph (max-w-md)    |    aspect,      |
|                               |    brass        |
|  [Talk to Beau Monde] [Process]|   hairline]    |
+-------------------------------+-----------------+
```

- Left column (≈col-span-7): existing eyebrow, headline, lede, CTAs — tightened width.
- Right column (≈col-span-5): a tall portrait-aspect renovation image with the same thin brass hairline ring and soft navy shadow used on AJ's portrait, with a tiny brass "Recently Reimagined · Space Coast" caption underneath.
- Image source: reuse one of the existing renovation interior assets already imported on this page (the "A residence, reimagined" hero image around line 119, or a sibling renovation shot if available). No new uploads required for the plan — pick whichever reads most "interior detail" rather than wide exterior so it complements, not duplicates, the hero image at the top of the page.

### 2. "The Space Coast and Central Florida's finest renovation specialists." → centered editorial
Re-orient the second section so it doesn't visually rhyme with the first:

- Center the eyebrow rule, headline, and lede.
- Tighten max-width and add a short centered brass hairline underline beneath the lede.
- Keep it text-only (no image) so it functions as a quiet editorial pause before the FCMB credentials band — but its centered rhythm differentiates it from the new split hero above.

## Why this works
- Adds a real image where there was dead space, without inflating the page.
- Breaks the "twin slabs" pattern by giving each section a distinct composition (split vs. centered).
- Stays inside brand discipline: hairline brass framing, navy shadow, Cormorant headlines, no new colors or fonts.
- Zero new assets needed — reuses imagery already on the Renovations page.

## Technical notes
- Edits limited to `src/pages/Renovations.tsx` (the two sections roughly lines 179–250).
- Use the existing `RevealAnimation` wrapper for both columns; stagger the right-column image with a small delay so it lands after the headline.
- Mobile: image stacks below the text block on `<lg`, matching the page's existing responsive pattern.
- No changes to routing, data, or other pages.
