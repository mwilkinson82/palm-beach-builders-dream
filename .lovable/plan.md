# Beau Monde Builders — Space Coast: Mockup Build Plan

Executing the plan saved at `.lovable/plan.md` (originally authored in BMB Palm Beach, mirrored here in the remix). Full visual + structural parity with Palm Beach; only the regional inputs change.

## Inputs locked

- **Wordmark / eyebrow:** "Beau Monde Builders — Space Coast" (eyebrow reads `Builders · Space Coast`)
- **Office:** 1129 Rockledge Blvd, Rockledge, FL 32955
- **Phone:** (321) 298-4122
- **Email:** ajhoover@mac.com (shared with Palm Beach)
- **Domain:** bmb.builders *(flag: Palm Beach currently uses `bmbpalmbeach.com`; confirming `bmb.builders` is the Space Coast/Central domain and not a typo before baking it into canonical/og/sitemap — if you confirm in chat I'll commit it; otherwise I ship preview-only and you bind the domain later)*
- **Hero video:** promote the AJ Hoover walkthrough exterior to the homepage hero
- **Palette / typography / animations / components:** untouched

## Memory bootstrap (first action in build mode)

Rewrite this project's memory index to Space Coast positioning before any file edits:

- Core block: swap "Palm Beach" → "Space Coast"; positioning becomes "Ultra-luxury Space Coast builder, $2–5M custom homes"; contact line → `(321) 298-4122, ajhoover@mac.com, 1129 Rockledge Blvd, Rockledge`
- Carry over every linked memory file (`mem://project/overview`, `business/details`, `style/*`, `brand/emblem-symbolism`, `features/*`) byte-for-byte, then patch `business/details` and `project/overview` with Space Coast facts
- Keep the brass discipline, font rules, and constraints (no social icons, no client addresses, non-clickable portfolio) intact

## Edits

### 1. Hero
- `src/components/VideoHero.tsx` (or wherever Home wires the hero clip): point to the AJ walkthrough exterior source already in the codebase; update poster
- Hero eyebrow → `Builders · Space Coast`

### 2. Contact + identity sweep
Replace Palm Beach contact block in all of:
- `src/components/Footer.tsx` (address, phone, email, eyebrow, tagline → "Creating the Space Coast's most distinguished residences…")
- `src/components/Navigation.tsx` (eyebrow)
- `src/pages/Contact.tsx`, `src/pages/Home.tsx`, `src/pages/About.tsx`, `src/pages/Process.tsx`, `src/pages/Projects.tsx`, `src/pages/Renovations.tsx`, `src/pages/Press.tsx`
- `src/components/SEO.tsx` `businessInfo` block (url, address, geo, phone, email, areaServed)
- `index.html` — title, description, og:*, twitter:*, geo meta (Rockledge lat/long ≈ 28.3464, -80.7253), JSON-LD, **remove** Palm Beach `google-site-verification` (re-add after you verify the new domain in GSC)
- `public/llms.txt`
- `public/robots.txt` + `public/sitemap.xml` + `scripts/generate-sitemap.ts` → `BASE_URL = "https://bmb.builders"` (pending your confirmation above)
- Email → keep `ajhoover@mac.com` everywhere (no `aj@bmbpalmbeach.com` anywhere in source)

### 3. Regional copy pass
- Footer tagline + any Palm Beach phrasing → Space Coast equivalent
- `areaServed`: Brevard County, Rockledge, Cocoa, Cocoa Beach, Cape Canaveral, Merritt Island, Satellite Beach, Indian Harbour Beach, Indialantic, Melbourne, Melbourne Beach, Viera, Suntree, Palm Bay, Titusville
- Sparingly drop A1A, Banana River, Indian River, Port Canaveral, Kennedy Space Center adjacency in the engraved tone
- Featured Residence: lead with "Shores at Tranquility" by name (no Palm Beach framing)

### 4. Renovations / Projects media
- Style Book (`Projects.tsx`) stays — already framed as aspirational, not "we built this"
- Renovations: leave existing before/after with same "representative work" framing used on Palm Beach; flag the swap list to you so you can send Space Coast renovation photography when ready

### 5. Contact form routing
`supabase/functions/send-contact-email/index.ts`:
- `to:` stays `ajhoover@mac.com`
- Confirmation email footer block: address → Rockledge, phone → (321) 298-4122, signature line → "Beau Monde Builders — Space Coast"
- `RESEND_API_KEY` already set on this project; Google Search Console connector already linked — no infra work needed
- Redeploy the edge function after edits

### 6. og:image
Default to **no** og:image (Palm Beach one is wrong for this market and a placeholder previews worse than nothing). You can ask me to generate a Space Coast one in the Ivory & Ocean palette when ready.

## What stays byte-identical

`index.css`, `tailwind.config.ts`, every `src/components/ui/*`, animation timings, splash screen, constellation gallery, walkthrough/delivery components, before/after slider mechanics, FCMB + NAHB credential block, wordmark font stack.

## Deliverable

Published `*.lovable.app` preview URL you can send AJ alongside `bmb.builders` (Palm Beach) — or alongside the current Central site if you have one — for a side-by-side review. After approval + domain bind, I'll walk you through GSC verification for the Space Coast property.

## Open items needing your nod before I commit

1. **Domain confirmation** — is `bmb.builders` really the Space Coast domain (vs. Palm Beach)? If Palm Beach owns `bmb.builders` and Space Coast needs something else (e.g., `bmbspacecoast.com`, `bmbcentral.com`), tell me now and I'll bake the right one. Otherwise I ship preview-only and leave canonical/og as relative paths.
