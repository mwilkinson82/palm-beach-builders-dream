## Mobile editorial fixes — Home

### 1. Hero "Bespoke Luxury Redefined" — mobile reorder & editorial pairing

Currently on mobile the headline + CTAs render first, then both images stack vertically (interior, then portrait) full-width. We'll restructure the mobile flow only — desktop layout is unchanged.

New mobile sequence inside the `lg:grid-cols-12` block (using `order-*` utilities so desktop stays put):

1. **Image pair (editorial)** — interior + portrait side-by-side, asymmetric:
   - Interior: ~58% width, `aspect-[4/5]`, slightly taller
   - Portrait: ~42% width, `aspect-[3/4]`, offset downward by ~2rem with `mt-8` and a thin brass hairline ring (already on it)
   - Tight gap (`gap-3`), brass corner tick on interior's bottom-right kept visible on mobile
2. **Eyebrow** "The Beau Monde Standard"
3. **Headline** "Bespoke Luxury / Redefined" (with the oversized italic "B" ligature — repositioned so it doesn't clip on small screens)
4. **Body paragraph**
5. **CTAs** "Talk to Beau Monde" / "Find My Style"
6. **Stars + reviews line**
7. **Stats band** (unchanged, already below)

Desktop (`lg:` and up) keeps current side-by-side text-left / image-right composition with the portrait overlapping into the bottom-left — no visual change.

### 2. Renovations hero — mobile CTA + wordmark collision

Currently on mobile:
- "Explore Renovations" button uses `px-7 py-5` + `text-[11px]` + `tracking-[0.32em]` → it wraps wide and tall
- The mobile "Beau Monde" wordmark is absolutely positioned `bottom-3` centered, sitting directly under/behind the button

Fixes (mobile-only, desktop preserved):
- Shrink the CTA on mobile: tighter padding (`px-5 py-3.5`), smaller type (`text-[10px]`), tighter tracking (`tracking-[0.25em]`), shorter trailing hairline (`w-4` instead of `w-6`), smaller arrow gap
- Increase the headline overlay's bottom padding on mobile so the CTA sits higher off the frame edge (`pb-20` on the overlay container at the mobile breakpoint)
- Move the centered mobile wordmark from `bottom-3` to `bottom-4` and reduce opacity slightly (`text-primary-foreground/40`) so it reads as a watermark signature, with the CTA cleanly above it
- Add a subtle navy gradient bump at the very bottom of the image so the wordmark stays legible without competing with the CTA

### Files

- `src/pages/Home.tsx` — only the two sections above (lines ~99–253 hero, ~275–350 renovations cinematic block). No changes to copy, no changes to desktop, no changes to other sections.

### Out of scope

- The turning-blueprints caption and any fingerprint badge stay removed (per current design)
- No new assets, no animation changes beyond what's needed for the reorder
