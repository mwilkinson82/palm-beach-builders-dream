## Port Cinematic Scroll → `/projects` (Find Your Style)

Replace the current `/projects` page with the Cinematic Scroll direction from the preview, expand the style roster to **10 panels**, and close with a custom-build panel before the CTA.

### Style roster (in order)

1. Oceanfront
2. Urban Classical
3. Waterfront Contemporary
4. Mediterranean
5. Modern Coastal
6. Traditional Estate
7. **Bermuda / British Colonial** *(new)*
8. **Anglo-Caribbean / West Indies** *(new)*
9. **Transitional** *(new)*
10. **Regency / Georgian** *(new)*
11. **"Yours." — One of one** *(closing panel, distinct treatment, no image — or full-bleed brass-hairline plate)*

Each panel keeps the cinematic format: full-viewport, 60/40 split, image one side, large Cormorant italic name + numbered eyebrow (`01 / 10`) + brass hairline + single descriptor line on the other. Alternating sides.

The **"Yours."** panel breaks the pattern intentionally — centered composition, no photograph, brass hairline frame, Cormorant italic headline, body copy:
> *If none of these is quite it, that's the point. The most memorable Beau Monde houses begin with a vision no catalogue could hold.*

It acts as the visual exhale before the "Talk to Beau Monde" plinth.

### Image handling

You'll provide images for the four new styles. Until they arrive, panels 7–10 will use a **placeholder treatment**: ivory plate with brass hairline frame, small "Plate forthcoming" eyebrow, and the style name + descriptor visible so the page reads cleanly. Drop in the real `.jpg` files at `src/assets/projects/{slug}.jpg` and I'll swap the imports.

Suggested filenames when you're ready:
- `bermuda-colonial.jpg`
- `anglo-caribbean.jpg`
- `transitional.jpg`
- `regency-georgian.jpg`

### Descriptor copy (draft, editable)

- **Bermuda / British Colonial** — White stucco, hipped tile, louvered shutters, deep verandas — the island idiom done with proportion and restraint.
- **Anglo-Caribbean / West Indies** — Pecky cypress, coral stone, plantation shutters — a quieter, more breeze-cooled coastal language.
- **Transitional** — Traditional bones, modern interiors — the way most Palm Beach houses live today.
- **Regency / Georgian** — Symmetry, fanlights, refined townhouse vocabulary in the Mizner lineage.

### Technical notes

- Edit `src/pages/Projects.tsx` — replace the existing hero/filter/grid/CTA with the Cinematic Scroll structure from `ProjectsPreview.tsx`.
- Remove the `filter` state, category bar, and `ProjectImage` component (the cinematic version uses native `<img>` with `loading` hints; no hover/zoom per portfolio rule).
- Keep `SEO`, `BreadcrumbSchema`, `Helmet` JSON-LD intact; update the JSON-LD `ItemList` to reflect the 10 styles (no addresses, no client data).
- Hero eyebrow updates: "A Film of Styles" → keep, or use "Vol. I — Style Studies". I'll use **"A Film of Styles"** to match the cinematic direction unless you prefer otherwise.
- Closing plinth: keep "Found your style" eyebrow → "Let's build the one you'll keep." → "Talk to Beau Monde" → `/contact`.
- Delete `src/pages/ProjectsPreview.tsx` and remove the `/projects-preview` route from `src/App.tsx`.
- Update `mem://features/portfolio-branding` to record: cinematic scroll format, 10 panels, "Yours." closer, no filters.

### Out of scope

- Image generation for the four new styles (you're providing them).
- Any project metadata (sq ft, bedrooms, year) — this is a style inspiration board, not a project list.
