## Goal
A throwaway preview route at `/projects-preview` that renders all three Your Style directions (A, B, C) behind a small fixed switcher, so you can flip between them instantly on the same content. No changes to the live `/projects` route — pure side-by-side comparison.

## Scope

**New file: `src/pages/ProjectsPreview.tsx`**
- Imports the existing 6 style images from `@/assets/projects/*` (oceanfront, worth-avenue, intracoastal, mediterranean, modern, classic) — same source data so comparison is apples-to-apples.
- Renames them to inspiration-board style names: Oceanfront, Urban Classical, Waterfront Contemporary, Mediterranean, Modern Coastal, Traditional Estate. Each gets a 1-sentence Cormorant-friendly descriptor.
- Renders `<Navigation />` and `<Footer />` so the page sits in real chrome.
- Below the navigation: a fixed floating switcher (top-right, ivory card, brass hairline) with three pills — `A · Editorial Plate Book`, `B · Museum Wall`, `C · Cinematic Scroll`. Active pill = navy fill + ivory text; inactive = navy text on ivory with brass hairline. Pure local `useState`, no router.
- Renders ONE of three components based on state. All three share an eyebrow + Cormorant italic hero ("Find Your Style.") and a closing "Talk to Beau Monde" plinth so only the body composition varies.

**Direction A — `EditorialPlateBook`**
- Vol. I eyebrow + Cormorant italic hero, brass hairline divider.
- 6 alternating full-bleed rows: `lg:grid-cols-12`, image spans 7 cols, text spans 5 cols. Even rows flip image-right/text-left.
- Each row: large brass Roman numeral (I–VI) in `font-display` italic at ~`text-7xl` opacity-30, style name in `font-display italic text-4xl/5xl text-primary`, single-line descriptor in `font-sans text-primary/75`, brass hairline `w-16 h-px bg-accent`.
- Generous `py-20 lg:py-28` between rows. Images in `aspect-[4/5]` with subtle `shadow-[0_30px_60px_-30px_rgba(15,42,61,0.25)]`. No hover.

**Direction B — `MuseumWall`**
- Asymmetric hand-placed grid using a 12-col grid with explicit `col-span` + `row-span` per item to produce uneven heights (two tall, two wide, two square — hand-tuned, not masonry).
- Each plate: image inside a `border border-accent/30 p-3 bg-card` frame, then a small caption card directly below — eyebrow brass style name + 1-line descriptor in Fira Sans. Brass hairline above caption.
- `max-w-7xl mx-auto`, `gap-8 md:gap-12`. No hover, no overlay (per portfolio constraint).

**Direction C — `CinematicScroll`**
- 6 stacked full-viewport panels (`min-h-screen snap-start`) inside a `snap-y snap-mandatory` container.
- Each panel: 2-column split — image fills 60% (with very subtle CSS `transform: scale` parallax via `will-change`), text 40% centered vertically. Huge style name in `font-display italic text-6xl/7xl/8xl text-primary`, brass hairline `w-24 h-px bg-accent`, one descriptor line, small "0X / 06" counter in brass Fira Sans.
- Soft scroll-snap between panels for the film-reel feel. No hover.

**Routing**
- Add a single route in `src/App.tsx`: `<Route path="/projects-preview" element={<ProjectsPreview />} />`. Keep `/projects` untouched.

## Brand discipline (applies to all three)
- Background: `bg-background` (ivory). Text: `text-primary` (navy). Brass `text-accent` only for eyebrows / hairlines / numerals — never as button fills, never as large headlines.
- Headlines: `font-display italic font-light`. Body/UI: `font-sans font-light`.
- Closing CTA in every direction: navy primary button "Talk to Beau Monde" linking to `/contact`. No brass buttons.
- No hover scale, no overlays on portfolio images (per Portfolio Gallery memory). Images are non-clickable.
- No seafoam (saved exclusively for Shores of Tranquility + Philosophy whisper).

## Out of scope
- No edits to live `/projects` page yet — that comes after you pick a direction.
- No new image assets. Reusing existing 6.
- No filter logic, no real project metadata (sqft/bedrooms/year) — this is a style board.
- No SEO meta on the preview route (it's a scratch page).

## Cleanup later
Once you pick A, B, or C, I'll port that direction onto `/projects` (replacing the current implementation) and delete `ProjectsPreview.tsx` + the preview route.
