# Find Your Style — Flip-Book Edition

Four moves, ordered by risk. Each is independently shippable.

## 1. Nav: solid from the top, site-wide

`src/components/Navigation.tsx` currently renders transparent until `scrollY > 50`. On any light-hero page (like /projects) the ivory-on-ivory text disappears.

Change: remove the `isScrolled` conditional entirely. Nav always renders with the "scrolled" treatment — ivory background at 95% with backdrop blur, navy text, hairline bottom border. Drop the scroll listener and the `isScrolled` state.

Effect on home: the home hero loses the "no chrome" opening — nav sits over the dark image from frame one. Text stays legible (ivory bg / navy text reads cleanly over any image). This is what you chose, calling it out so there are no surprises.

## 2. Per-panel CTA — quiet hairline link

Inside each `StylePanel`, under the descriptor, add a single brass hairline link:

```
Build in this idiom  ⟶
```

- Fira Sans, 11px, tracked `0.3em`, uppercase, `text-accent`
- Brass hairline underline that extends on hover (uses `story-link` pattern but brass instead of primary)
- Links to `/contact?style={slug}` — Contact page already accepts no params today; we just append it. No Contact-page changes required for this ship; the param sits in the URL for future routing/analytics.
- Respects brass discipline: hairline + small type only, never a brass fill.

## 3. "Yours." — elevate in place, inline CTA, kill the plinth

Rewrite `YoursPanel`:

- Keep the framed treatment but make it the clear emotional peak: wider plate, deeper brass hairline frame (top + bottom only — no box), `Yours.` set one notch larger than the style headlines (`text-7xl md:text-8xl lg:text-9xl`).
- Add the navy primary CTA **inside** the frame, directly under the descriptor: `Talk to Beau Monde` → `/contact`.
- Add a secondary text link below it: `Or browse the ten idioms again →` that jumps back to panel 1 (flip-book: `goTo(0)`).
- **Remove `ClosingPlinth` entirely.** It's now redundant. The flip-book ends on Yours; that's the finale.

## 4. The flip-book — desktop and mobile

This is the big one. Replace the current snap-scroll container with a true page-turn flip-book that owns the whole viewport on /projects.

### Library

Use **`page-flip`** (a.k.a. `StPageFlip`), the React wrapper is `react-pageflip`. It's the actively-maintained, framework-agnostic flip engine used by most premium flip-book sites (real curl shadow, hard/soft page, mouse drag, swipe, programmatic `flip()`/`turnToPage()`). MIT-licensed, ~30kb. No paper-sound — that's the line between "luxurious" and "gimmicky."

Install: `react-pageflip`.

### Structure

```text
/projects route
├── <Navigation />              ← solid (from move #1)
├── <FlipBook>                  ← fixed-height viewport, fills screen below nav
│   ├── <Cover/>                ← "Find Your Style" hero (was the <Hero> section)
│   ├── <StylePlate × 10>       ← one plate per idiom
│   └── <YoursPlate/>           ← the finale (move #3)
└── <Footer />                  ← only visible after closing the book (scroll past)
```

Each plate is a self-contained spread sized to the flip-book viewport. The plate composition stays close to today's `StylePanel` (image dominant + headline + descriptor + new hairline CTA), but redesigned for a fixed canvas instead of a min-h-screen scroll panel — no internal scrolling inside a page.

### Desktop behavior

- Two-page spread (left page + right page) on screens ≥ `lg`. Cover and Yours render as single hard pages; idiom plates pair up as spreads (image left / type right, alternating). Real page curl, drag-to-turn, click-corner-to-turn.
- Keyboard: `←` `→` `Space` flip; `Home` / `End` jump to cover / finale.
- Tiny page counter pill bottom-center: `03 / 12`. Brass hairline, ivory bg, Fira Sans 10px.
- Bottom-right: discreet "View as scroll" toggle (Fira Sans 10px tracked) — accessibility escape hatch that falls back to today's vertical layout. Persists choice in `localStorage`.

### Mobile behavior

- Single-page mode (one plate fills the viewport). Horizontal swipe to turn. `page-flip` handles this natively.
- Same page counter. Same "View as scroll" toggle.
- Plate composition collapses to image-top / type-bottom for portrait orientation.

### Reveal animations (the "luxurious fade-in" you asked for)

Per-plate, triggered on `onFlip` settle (not scroll, since we're not scrolling):

- Image: scale from `1.04 → 1.0` over 900ms `cubic-bezier(0.16, 1, 0.3, 1)` ("ease-out-expo"), opacity `0 → 1` over 600ms.
- Eyebrow `01 / 11`: opacity + 8px rise, 400ms, 100ms delay.
- Headline: opacity + 12px rise, 700ms, 250ms delay.
- Brass hairline divider: scaleX `0 → 1` from left, 600ms, 500ms delay.
- Descriptor: opacity + 8px rise, 600ms, 650ms delay.
- CTA link: opacity, 400ms, 850ms delay.

Implemented with Framer Motion `variants` + a `staggerChildren` parent keyed on the active page index. No third library — Framer Motion is already in the project.

### Accessibility & SEO

- `react-pageflip` renders all plates in the DOM (it just transforms them in 3D), so the existing `ItemList` JSON-LD and crawler-visible content all stay intact. No SSR penalty.
- Each plate has a proper `<h2>` and semantic content. Skip-link at top: "Skip flip-book, view all styles" → scrolls to a hidden-but-rendered linear list at the bottom (or activates scroll fallback).
- `prefers-reduced-motion`: auto-fallback to scroll mode, no curl animation.

### Performance

- All 12 plate images already lazy-load. Force `eager` on plates 1-2 (cover + first idiom), `lazy` on the rest. The flip-book preloads adjacent pages, so swipes are instant.
- Fixed viewport sizing uses `dvh` units with a `ResizeObserver` to re-init the flip-book on rotation.

## Technical notes

- New dep: `react-pageflip` (~30kb gz).
- New component: `src/components/FlipBook.tsx` — wraps `react-pageflip`, handles sizing, keyboard, page counter, scroll-fallback toggle, reduced-motion fallback.
- New components: `src/components/projects/Cover.tsx`, `StylePlate.tsx`, `YoursPlate.tsx` — extracted from the current `Projects.tsx`.
- `src/pages/Projects.tsx` becomes the orchestrator: SEO, Nav, FlipBook (or scroll-fallback), Footer. Keep all existing SEO + `BreadcrumbSchema` + `ItemList` JSON-LD untouched.
- `src/components/Navigation.tsx` — strip `isScrolled` state, scroll listener, and conditional classes. Single solid treatment.
- No backend changes. No design-token changes (palette and fonts already in place).

## What I'm not doing (call out)

- Not adding sound. You said "not clunky" — sound on auto is clunky.
- Not changing copy on any of the 10 idiom descriptors.
- Not removing the `/projects` linear-scroll DOM — it stays as the accessibility fallback and SEO surface.
- Not touching Contact page routing yet (the `?style=` param sits unused on the receiving end until you want to act on it).
