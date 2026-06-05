## Goal

Stand up **Beau Monde Builders — Space Coast** as a separate Lovable project remixed from this Palm Beach site, then deliver a full-parity mockup AJ can review against his current `bmb.builders` site.

Same palette, same typography, same wordmark, same structural pages. We change only what actually differs between the two markets: hero video, contact details, regional copy nuance, and a handful of media swaps on Renovations.

---

## Step 1 — Create the sibling project (you do this, ~1 min)

In the Lovable sidebar, right-click this project → **Remix**. Name it something like **"Beau Monde Builders — Space Coast"** (or "bmb-space-coast"). Open the new project and tell me you're in it — all of Steps 2–6 below run inside the remixed project, not this one.

Why a remix vs. a section of this site: the two markets target different buyers ($15M Worth Avenue vs. $2–5M Space Coast). One codebase + one Search Console property + one domain would dilute both. Two independent sites lets each one rank, brand, and convert against its own audience.

---

## Step 2 — Swap the hero video

The current home hero video is a Palm Beach exterior. Replace it with Space Coast footage. Likely candidates already in this codebase that are actually Space Coast homes:

- The AJ Hoover walkthrough video (used in `WalkthroughShowcase` / `InterviewShowcase`)
- The "New from Beau Monde" delivery video (`DeliveryShowcase`, `new-delivery.mp4`)
- Shores at Tranquility carousel stills

I'll either promote one of these to the hero slot or, if you have a dedicated Space Coast hero clip you'd rather use, you upload it and I wire it in. Default plan: use the AJ walkthrough exterior as the hero so the homepage immediately reads "Space Coast."

---

## Step 3 — Update contact + location

Replace Palm Beach contact block everywhere it appears (Footer, Contact page, SEO schema, `index.html` JSON-LD, `llms.txt`):

- Office address: Space Coast address (Cocoa Beach / Melbourne / Titusville — **need from you**)
- Phone: Space Coast office line — **need from you, or reuse `(561) 646-8992` if it's the same line**
- Email: Space Coast inbox — **need from you, or reuse `ajhoover@mac.com`**
- Geo meta + LocalBusiness JSON-LD: re-point lat/long, region, placename
- `areaServed`: Brevard County, Cocoa Beach, Cape Canaveral, Cocoa, Rockledge, Merritt Island, Satellite Beach, Indian Harbour Beach, Indialantic, Melbourne, Melbourne Beach, Palm Bay, Titusville, Viera, Suntree
- Map / "find us" anything that points to Worth Avenue

---

## Step 4 — Regional copy pass

Swap Palm Beach–specific language without rewriting the brand voice. Sweep:

- `Home.tsx`, `About.tsx`, `Process.tsx`, `Projects.tsx`, `Renovations.tsx`, `Press.tsx`, `Contact.tsx`
- `Footer.tsx` tagline ("Creating Palm Beach's most distinguished estates…" → Space Coast equivalent)
- `index.html` title + meta description + OG tags
- `llms.txt`
- Featured Residence section: lose any "Palm Beach" framing, lead with "Shores at Tranquility" by name
- Drop a few specific Space Coast references (oceanfront on A1A, Banana River, Indian River, Port Canaveral, Kennedy Space Center adjacency) — used sparingly, in the same engraved tone we have here

Wordmark, logo, "Builders · Palm Beach" eyebrow → "Builders · Space Coast". Color palette, typography, animations, layouts: untouched.

---

## Step 5 — Media audit on Renovations + Projects

- **Projects / Style Book**: stays as-is. The constellation gallery and style book images are aspirational design directions, not "we built this in Palm Beach" claims, so they translate cleanly.
- **Renovations**: the before/after slider images are likely the most market-specific. I'll flag the current photos and you tell me which to keep vs. which need new Space Coast renovation photography. If you don't have replacements yet, we leave the existing ones with copy that frames them as "representative work" — same treatment used on Palm Beach.

---

## Step 6 — SEO + infrastructure reset

A remix carries over SEO artifacts that must not point at Palm Beach:

- `public/sitemap.xml` and `scripts/generate-sitemap.ts` BASE_URL → new domain
- `public/robots.txt` Sitemap directive → new domain
- `index.html` canonical, `og:url`, JSON-LD `url`/`@id`, geo coordinates
- `src/components/SEO.tsx` `businessInfo` block (url, logo, address, geo, phone, email, areaServed)
- Google Search Console verification meta → **remove the Palm Beach one** until you verify the new domain in GSC (I'll walk you through it after the mockup is approved and a domain is connected)
- `og:image` social preview → new image (I can generate one in the Space Coast palette or you provide)

Contact form: the Supabase edge function in the remix is a fresh backend instance. I'll re-scaffold the contact email routing (Resend) so submissions go to the Space Coast inbox, not AJ's Palm Beach inbox. Needs the destination email from Step 3.

---

## What I need from you before I start Step 2

1. Space Coast **office address**, **phone**, **email** (or confirm we reuse the Palm Beach ones for now as placeholders).
2. Confirm the hero video swap candidate (AJ walkthrough exterior is my default).
3. Whether you want me to **generate a new social-preview image** for Space Coast or skip until you have photography.

Everything else I can execute against and ship the mockup. Target deliverable: a published `*.lovable.app` preview URL you can send AJ alongside `bmb.builders` for the night-and-day comparison.

---

## Technical notes

- Remix preserves the full file tree, asset CDN references, Tailwind tokens, components, and Supabase edge function source. The new project gets its own Supabase backend, its own GSC property, its own domain.
- No design-system changes. `index.css`, `tailwind.config.ts`, all `src/components/*` stay byte-identical except for the eyebrow text in `Footer.tsx` and `Navigation.tsx`.
- Contact form: `supabase/functions/send-contact-email/index.ts` needs the Resend `to:` address updated and the `RESEND_API_KEY` secret re-added on the new backend.
- Sitemap generator: only the `BASE_URL` constant changes; routes are identical.
