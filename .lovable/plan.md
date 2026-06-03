## Goal

Replace the current "Our Marks" section (two cramped columns, dead space under the emblem, cert badges feeling like a footer) with the selected **Cinematic Band + Plinth** direction. Emblem + its three meanings live in a seafoam-tinted editorial band; FCMB + NAHB live below on their own ivory credential plinth, treated with the reverence of a museum mount.

## Final composition (top to bottom)

```text
┌──────────────────────────────────────────────────────────────┐
│  SEAFOAM BAND (full section width)                           │
│  ┌───────────────┐  OUR MARKS  ·  brass eyebrow              │
│  │               │  "The signs that stand behind             │
│  │   EMBLEM      │   the work."   ← Cormorant italic         │
│  │  (hairline    │                                            │
│  │   framed,     │  ─ THE LIONS                              │
│  │   brass       │  ─ THE PARTHENON                          │
│  │   corner      │  ─ PALM TREES                             │
│  │   ticks)      │     (each = brass hairline + uppercase    │
│  │               │      title + one-line body)               │
│  └───────────────┘                                            │
└──────────────────────────────────────────────────────────────┘
        ↓ silk-grain ivory background continues ↓
┌──────────────────────────────────────────────────────────────┐
│  IVORY PLINTH (centered, max-w-4xl)                          │
│                                                               │
│  HERITAGE & ACCREDITATION  ← brass eyebrow, wide tracking    │
│  "Certifications held by the few."  ← Cormorant italic, 5xl  │
│                                                               │
│  ═══════════════════════════════════════════════════════     │
│  ─── architectural triple-rule (thin · thick · thin) ───     │
│                                                               │
│        [FCMB]    ·    [NAHB]    ← badges on ivory cards      │
│        FCMB             NAHB        with offset brass shadow │
│        FLORIDA          NATIONAL                              │
│                                                               │
│   "Voluntary credentials awarded only to builders with the   │
│    experience, ethics, and record to back them — FCMB is     │
│    Florida's pinnacle and NAHB the national benchmark."      │
│                                                               │
│  ┌─ EXPERIENCE ─────── 7+ years ─┐ ┌─ RECORD ── Clean ─────┐ │
│  ┌─ REFERENCES ─────── Verified ─┐ ┌─ WARRANTY ─ 1-yr min ─┐ │
│                                                               │
│  ─── architectural triple-rule ───                            │
└──────────────────────────────────────────────────────────────┘
```

## What changes

**File: `src/pages/Home.tsx`** — replace the entire `<section>` currently labeled `Our Marks — Emblem + FCMB merged editorial card` (≈ lines 570–717).

- **Section wrapper**: keep `border-t border-accent/20`, keep silk-grain overlay, but drop the outer `py-20…32` so the seafoam band can run full-width edge-to-edge.
- **Seafoam band** (new): full-bleed `bg-seafoam` with thin brass hairline top/bottom (`border-y border-accent/20`). Inside: a 12-column grid, `lg:col-span-5` emblem left, `lg:col-span-7` text right, ample `py-20 lg:py-28` padding. Emblem sits in a hairline-framed plate with brass corner ticks (reuse the corner-tick pattern from `BentoTile`). The three meanings render as a vertical stack — each row: `w-8 h-px bg-accent` rule → uppercase Fira Sans title → one-sentence body. Keep the existing `EMBLEM_MEANINGS` array; no copy changes.
- **Credential plinth** (new): below the band, on ivory. Centered `max-w-4xl`. Order:
  1. Brass eyebrow `"Heritage & Accreditation"`.
  2. Cormorant italic headline `"Certifications held by the few."` at `text-4xl md:text-5xl`.
  3. Architectural triple-rule divider (thin accent/25 · 3px accent solid · thin accent/25, stacked with 6px gaps).
  4. Two badges row: FCMB and NAHB, each in a `bg-card` square with `border border-accent/20` and a subtle offset shadow plate behind it (a second absolutely-positioned bordered div translated `+8px,+8px` — the v6 prototype's depth move). Caption beneath each in uppercase Fira Sans.
  5. The existing one-paragraph narrative (kept verbatim).
  6. Credentials ledger: 2-column grid on desktop, 1-column on mobile, rendering the existing `FCMB_CREDENTIALS` array. Each row = brass uppercase key (left), navy uppercase value (right), separated by a brass hairline underline.
  7. Closing architectural triple-rule.

## What I'm intentionally **not** taking from the v6 refinement

- **No red wax seal / "HG" monogram** — violates brass discipline and isn't a Beau Monde mark.
- **No text-shadow letterpress effect** — would clash with the consistent flat type used everywhere else on the site.
- **No "Excellence in the Built Environment" footer tagline** — not a Beau Monde line.
- **Eyebrow stays `"Our Marks"` above the seafoam band**, plinth gets its own `"Heritage & Accreditation"` eyebrow — preserves the original section title.

## Reused brand tokens (verbatim)

- `bg-seafoam`, `bg-background` (ivory), `bg-card`
- `text-primary` (Atlantic Navy), `text-accent` (Brass), `border-accent/20`, `border-accent/30`
- `font-display italic` for the two italic headlines (Cormorant)
- `font-sans` uppercase `tracking-[0.3em]` / `tracking-[0.25em]` for eyebrows and ledger keys
- Existing `RevealAnimation` (`fade-up`, `luxury-reveal`, `scale-in`) and `Parallax` wrappers preserved on the emblem and badges

## Animations

- Seafoam band: emblem fades up + lifts 4px on scroll-in; meanings stagger by 80ms each.
- Plinth: triple-rules draw left-to-right (origin-left scale-x), badges scale in from 0.96, ledger rows fade up with 60ms stagger.

## Out of scope

- No copy changes to `EMBLEM_MEANINGS` or `FCMB_CREDENTIALS` arrays.
- No changes to assets (`fcmbLogo`, `nahbBadge`, `logoSketch`) — same images, new mounts.
- No changes to neighboring sections (Shores, Renovations, Three Commitments).
- No changes to the existing `Our Emblem` ligature `S` flourish — it gets retired with the old layout since the new headline lives over a seafoam band where the ghost ligature would feel busy.