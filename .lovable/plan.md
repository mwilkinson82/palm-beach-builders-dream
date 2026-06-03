# Tying the Homepage Together

Two new sections on the homepage to give it a peak and a proper closing — both built from the existing palette (Ivory, Navy, Brass) and CTA vocabulary.

---

## 1. Featured Project Band — "The Shores at Tranquility"

A quiet editorial band that names what the videos and walkthrough gallery have been showing all along, and routes visitors into the portfolio.

**Placement:** Directly after the walkthrough/media block, before the next content section. It acts as a closing caption for the media and a doorway into "Find My Style."

**Composition:**
- Full-width band on `bg-background` (ivory), generous vertical padding
- Two-column on desktop, stacked on mobile:
  - **Left:** one large hero still from the existing Shores set (uses an existing `c#.jpg` asset — no new image work), framed with the same brass hairline + soft shadow treatment as the splash image
  - **Right:** brass eyebrow "Featured Residence · Palm Beach", Cormorant headline "The Shores at Tranquility", one short editorial paragraph, then a navy primary CTA "Find My Style →" linking to `/projects`
- Brass hairline above and below the band to act as connective tissue between sections

**Why this works:** It gives a name to what the videos and gallery have been depicting (so visitors stop wondering "whose house is this?"), creates the missing peak the page currently lacks, and funnels into the portfolio without adding a new clickable gallery (respects the non-clickable portfolio rule).

---

## 2. Closing CTA Band — "Begin a Conversation"

A single, generous navy band immediately before the footer.

**Composition:**
- Full-width `bg-primary` (Atlantic Navy), tall padding (`py-32 md:py-40`)
- Centered, narrow column:
  - Small brass eyebrow "By Appointment · Worth Avenue"
  - Oversized Cormorant headline in ivory: "Begin a conversation."
  - One sentence of supporting copy in ivory/70
  - Primary CTA button: "Talk to Beau Monde" → `/contact`
  - Below the button, a quiet ivory/55 line: phone + email (the existing contact details), separated by a brass dot
- Optional: faint silk-grain texture overlay at very low opacity for richness

**Why this works:** The current homepage drifts into the footer with no peak moment. This gives the page a clear emotional close and a single, unambiguous next action — matching the brand's "by appointment" tone without shouting.

---

## Files Touched

- `src/pages/Home.tsx` — add the two new section blocks in the correct order
- No new assets, no new routes, no copy changes elsewhere

## Out of Scope

- The other three ideas (rhythm/dividers everywhere, trust-credentials band, oversized italic type moment) — can be revisited after these two land if the page still wants more.
