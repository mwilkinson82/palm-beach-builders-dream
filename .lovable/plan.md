## Site-Wide Redesign: Ivory & Ocean

Refresh the brand system across the whole site without losing copy, data, or the moments you already love. Splash, hero video, AJ Hoover walkthrough, and "New from Beau Monde" stay structurally — they get re-skinned to the new palette and type.

### Locked taste

- **Palette:** Ivory `#f5f0e6` · Sand `#e0d5c2` · Atlantic Navy `#0f2a3d` · Brass `#b08a4a`
- **Type:** DM Serif Display (headlines) · Fira Sans (body & UI)
- **Layout:** Full-width cinematic bands, generous negative space, editorial pacing
- **Voice:** Old-money Palm Beach, daylight, coastal — material and quiet, never flashy

### What changes vs. what's preserved

**Preserved (re-skinned only):**
- Splash screen (untouched, per your note)
- VideoHero
- WalkthroughShowcase (AJ Hoover)
- DeliveryShowcase ("New from Beau Monde")
- All copy, contact info, FCMB cert, portfolio images, contact form logic, all routes, SEO tags, legal pages

**Reworked:**
- Global color tokens (`src/index.css`, `tailwind.config.ts`) — full palette swap, light-mode-first
- Global type — DM Serif Display + Fira Sans wired through Tailwind `font-display` / `font-sans` / `font-serif`
- Navigation: cleaner, lighter, ivory background with navy ink and brass underline on hover
- Footer: editorial layout, navy band with ivory type
- Home page sections below the walkthrough/delivery (Bespoke Luxury Redefined, the icon/stat cards, etc.) — rebuilt as full-width editorial bands; generic Lucide icons replaced with thin custom marks or removed in favor of typography
- About / Process / Projects / Renovations / Press / Contact pages — re-skinned to the new system, generic cards swapped for editorial layouts (asymmetric splits, oversized type, image-led blocks)

### Phased rollout (so we don't bite off too much at once)

**Phase 1 — Brand system foundation** (one focused build)
- Update `src/index.css` design tokens to the Ivory & Ocean palette (HSL), set ivory as `--background`, navy as `--foreground` / `--primary`, brass as `--accent`. Dark-mode tokens stay as a deep-navy variant.
- Update `tailwind.config.ts` to load DM Serif Display + Fira Sans, map `font-display` → DM Serif Display, `font-sans` → Fira Sans.
- Add the fonts via `index.html` `<link>` preconnect + Google Fonts.
- Refit Navigation + Footer to the new tokens.
- Re-skin the four preserved sections (Splash stays as-is; Hero, Walkthrough, Delivery get token swaps only — no structural change). Brass replaces gold, navy replaces black backgrounds where appropriate; cinematic video sections keep dark frames for contrast.
- Output: site shifts to the new palette + type globally; nothing on Home below the delivery section is touched yet.

**Phase 2 — Home page editorial rebuild**
- Generate 3 rendered design directions for the Home sections under the delivery (Bespoke Luxury Redefined, capabilities, stats, CTAs). You pick one, I build it.
- Replace generic icon/card grids with editorial bands: oversized serif statements, asymmetric image+text rows, brass hairlines instead of icons.

**Phase 3 — Interior pages**
- Apply the same editorial system to About, Process, Projects, Renovations, Press, Contact one by one (smallest meaningful units, easier to review).

### Technical notes

- All colors as HSL in tokens, referenced via semantic Tailwind classes (`bg-background`, `text-foreground`, `text-accent`) — no raw hex in components.
- Light-mode-first. Dark surfaces (hero, walkthrough, delivery) become deep navy `#0f2a3d`, not pure black, so the palette stays cohesive.
- Brass `#b08a4a` replaces the current gold `--accent` everywhere; existing `text-accent` / `bg-accent` classes pick this up automatically.
- DM Serif Display has heavy presence — body sizes capped, used only for headlines and brand moments. Fira Sans handles UI, body, captions, buttons.
- `mem://style/visual-aesthetic` updated at the end of Phase 1 so future sessions inherit the new system.

### What I need from you to start Phase 1

Just a "go" and I'll ship the foundation. Phases 2 and 3 each pause for your direction picks before building.
