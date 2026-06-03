## Goal

Pair the new NAHB Certified Master Building Professional badge with the existing FCMB seal everywhere it appears, using the original NAHB colors (navy + teal).

## Asset upload

- Upload `user-uploads://NAHB.jpg` via `lovable-assets create --file /mnt/user-uploads/NAHB.jpg --filename nahb-master-building-professional.jpg > src/assets/nahb-master-building-professional.jpg.asset.json`.
- Import the pointer JSON in any file that imports `fcmbLogo`.

## Placement — three surfaces

### 1. Home page — "Our Marks" credentials block (`src/pages/Home.tsx` ~line 527)

The existing FCMB block currently shows a single seal followed by the credentials list. Replace the single-seal layout with a **side-by-side pair** of seals above the credentials:

```text
[ FCMB seal ]   [ NAHB seal ]
   FCMB           NAHB
 (small caption labels under each)
─── hairline ───
Credentials list (unchanged)
```

- Both seals use the same height (`h-20 md:h-24`), `object-contain`, with a tiny brass eyebrow caption under each: "Florida Certified Master Builder" / "NAHB Certified Master Building Professional".
- Wrapped in a centered flex row with `gap-8 md:gap-12`, divider hairline (`border-accent/30`) between the seals on `md+` for editorial separation.
- Existing `FCMB_CREDENTIALS` list stays unchanged below — applies to both certifications conceptually.

### 2. About page (`src/pages/About.tsx` ~line 172)

Same treatment: wherever `fcmbLogo` is rendered, render the NAHB seal next to it with matching height and the same caption pattern. Keep the surrounding copy intact.

### 3. Anywhere else the FCMB seal appears

`rg` confirmed only Home + About import `fcmbLogo`. Footer and other pages don't show it, so no additional placement is needed for v1.

## Visual treatment

- Use the badge **as-is** (navy + teal). No tinting, no monochrome conversion.
- Respect brand discipline: no brass overlays on the badge, no hover effects, image is non-interactive.
- Both badges sit on the existing ivory background; the NAHB navy matches Atlantic Navy closely enough to read as a coherent pair.

## Out of scope

- No new sections, no new pages.
- No copy changes beyond the small caption under each seal.
- No footer trust strip (can add later if desired).
- No memory update for the badge yet — will add a memory note after build if you want NAHB documented as a permanent brand asset.

## Technical notes

- New asset: `src/assets/nahb-master-building-professional.jpg.asset.json` (CDN pointer).
- Imports added to `src/pages/Home.tsx` and `src/pages/About.tsx`.
- Captions use `font-sans text-[10px] tracking-[0.2em] uppercase text-foreground/60` to match existing eyebrow style.
- Responsive: seals stack vertically on `<sm`, side-by-side on `sm+`.