## Two additions to the Renovations page

### 1. Before/after slider (Architectural Inset direction)

Place a new `<RenovationsBeforeAfter />` section on `src/pages/Renovations.tsx`, slotted **between** the cinematic full-bleed moment and the existing "Reimagine your Palm Beach residence." text hero. The text hero stays as-is — the slider's only header is a brass eyebrow + short caption, not a duplicate headline.

**Assets (Lovable Assets, uploaded via `lovable-assets` CLI from the two attached photos):**
- `src/assets/renovation-before.jpg.asset.json` — the warm/dark traditional kitchen
- `src/assets/renovation-after.jpg.asset.json` — the bright/white renovated kitchen

**New component:** `src/components/BeforeAfterSlider.tsx`
- Container: ivory background, contained at `max-w-6xl`, vertical padding matching the page rhythm (`py-24 md:py-32`).
- Eyebrow row: `——  A RESIDENCE, TRANSFORMED` (brass hairline + Fira Sans eyebrow).
- Slider frame: `aspect-video`, hairline border `border-foreground/5`, soft shadow.
- Implementation: pointer + touch drag updates a `clipPath: inset(0 (100-x)% 0 0)` on the **after** image overlay, so the after image is revealed from left as the handle moves right. Default position 55%.
- Divider: 1px brass vertical line at the split.
- Handle: circular, 48px, ivory/10 with `backdrop-blur-md`, brass hairline ring, two brass chevrons inside (matches selected prototype). `cursor-col-resize`, full keyboard support (←/→ to nudge 2%, role="slider", aria labels).
- Labels: bottom-left "ORIGINAL RESIDENCE" on dark glass; bottom-right "BEAU MONDE STANDARD" on solid navy with brass hairline (both Fira Sans, tracked, 10px).
- "Slide to reveal" hint top-right, fades out on first interaction (not just hover) using a `hasInteracted` state.
- Footer metadata row under the slider, separated by a hairline top border: two columns — **Scope** "Full Architectural Overhaul" and **Building Type** "Oceanfront Residence" (in Cormorant). **No address, no "View Case Study" link** — removed to honor the renovation-discretion rule. Right side of the row left empty for breathing room.
- Reveal: wrap in existing `RevealAnimation`. Add a one-time scroll-in sweep where the clip animates from 100% → 55% over ~1.4s using `requestAnimationFrame` once the section enters the viewport (IntersectionObserver, runs once).
- Mobile: same component, taller aspect (`aspect-[4/5]`), labels shrink, footer stacks.

### 2. Add NAHB credential to the FCMB band

Mirror the Home page's two-badge treatment in the existing credentials band on `Renovations.tsx`:

- Import `nahbBadge` (same asset Home uses) alongside `fcmbLogo`.
- Replace the single framed logo with a two-up framed pair: side-by-side on `md+`, stacked on mobile, separated by a thin brass hairline gutter.
- Each badge gets a tiny Fira Sans caption underneath: `FLORIDA CERTIFIED MASTER BUILDER` and `NAHB CERTIFIED MASTER BUILDING PROFESSIONAL`.
- Keep the existing four-row ledger (Experience / Record / References / Warranty) untouched on the right.

### Technical notes

- New files: `src/components/BeforeAfterSlider.tsx`, two `.asset.json` pointer files for before/after photos.
- Edited files: `src/pages/Renovations.tsx` (import + render the slider section; import `nahbBadge`; update the credentials band markup).
- No new dependencies — slider built with native pointer events + `clipPath`.
- Reuses tokens (`bg-background`, `text-foreground`, `border-accent/25`, etc.). No raw hex in components.
- Respects mem rules: no client address, no brass on large type, no brass fills, navy for any CTA (none introduced here).

```text
Renovations page order after this change:
  [Hero video]
  [Cinematic moment "A residence, reimagined"]
  [NEW — Before/After slider]
  [Existing text hero "Reimagine your Palm Beach residence."]
  [UPDATED — FCMB + NAHB credentials band]
  [Services list / rest of page unchanged]
```
