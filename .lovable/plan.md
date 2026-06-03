## Contact Page — Refinement Pass

Three targeted refinements, no functional changes (form handler, edge function, schema, SEO, Reveal animations all preserved).

### 1. Replace "Atelier" → "Office"

In `src/pages/Contact.tsx`:
- Hero copy: "Our atelier accepts a limited number of commissions each year…" → "Our office accepts a limited number of commissions each year…"
- Eyebrow label "Atelier Location" → "Office Location"
- Map pin annotation "The Atelier" (if present) → "The Office"
- Keep all typography, spacing, hierarchy identical.

### 2. Luxury button refresh (header CTA + Contact submit only)

Scope: the navy "Talk to Beau Monde" buttons in `src/components/Navigation.tsx` (desktop + mobile) and the submit button in `src/pages/Contact.tsx`. No site-wide button component rewrite.

New treatment (shared visual language, applied inline to these two surfaces only):

- Navy primary fill (unchanged token: `bg-primary text-primary-foreground`) — brand discipline holds.
- Refined proportions: slightly taller (py-5 header, py-6 contact submit), generous horizontal padding, tighter letter-spacing on a thinner weight (`font-light tracking-[0.3em]` instead of medium) for an engraved feel.
- Hairline brass inner outline: `ring-1 ring-inset ring-accent/30` that brightens to `ring-accent/60` on hover.
- Slow brass underline draw beneath the label on hover (`::after` hairline animating width 0→100% over 600ms, brass color).
- Subtle lift: `hover:-translate-y-px` with a soft navy shadow (`hover:shadow-[0_18px_40px_-20px_hsl(var(--primary)/0.55)]`).
- Remove the current full-overlay brass slide-up on the Contact submit (it visually "fills" with brass, which violates brass discipline). Replace with the hairline + underline-draw treatment above.
- Disabled state: opacity-60, no lift, no underline draw.
- Mobile header button uses the same treatment at full width.

### 3. Replace framed grayscale map with address card + small static map

Remove the entire `relative group` framed iframe block in `Contact.tsx`. Replace with a single "Location" card:

```text
┌─────────────────────────────────────┐
│  OFFICE                             │  ← brass eyebrow
│                                     │
│  205 Worth Avenue, Suite 120        │  ← Cormorant, navy
│  Palm Beach, FL 33480               │
│                                     │
│  [ small static map thumbnail ]     │  ← ~4:3, full color, no frame fuss
│                                     │
│  Get Directions  →                  │  ← brass hairline link, opens Google Maps
└─────────────────────────────────────┘
```

Implementation details:
- Card: `bg-card`, hairline `border border-accent/20`, generous inner padding (`p-8 md:p-10`), subtle navy shadow (`shadow-lifted`).
- Static map image via Google Maps Static API URL (no API key needed for the simple unsigned variant on the existing Maps embed pattern). Source: `https://maps.googleapis.com/maps/api/staticmap?center=205+Worth+Ave,Palm+Beach,FL&zoom=15&size=600x400&scale=2&markers=color:0x0f2a3d%7C205+Worth+Ave,Palm+Beach,FL`. If the unsigned static map fails (Google now generally requires a key), fall back to the existing embed iframe at small size with full color (no grayscale, no frame chrome).
- "Get Directions" link: `https://www.google.com/maps/dir/?api=1&destination=205+Worth+Avenue,+Palm+Beach,+FL+33480`, opens in new tab, brass hairline underline on hover, Fira Sans uppercase 10px tracked.
- Remove "Ref · PB-33480" annotation and the brass outer outline frame.

### Files to edit

- `src/pages/Contact.tsx` — copy swap, submit button restyle, map block replacement.
- `src/components/Navigation.tsx` — desktop + mobile CTA button restyle.

### Out of scope

- No changes to form handler, edge function, schema, SEO, or Reveal animation timing.
- No new shared Button variant (kept inline per user's "just these two" choice).
- No changes to other pages' buttons.

### Note on map fallback

Google's Static Maps API requires an API key for reliable production use. If the unsigned URL returns a "for development purposes only" watermark or fails, I'll swap to a small full-color embed iframe inside the same card layout — same visual outcome, no key needed. I'll verify in the preview after implementing.