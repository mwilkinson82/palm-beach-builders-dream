## Contact Page Redesign — Editorial Atelier

Rebuild `src/pages/Contact.tsx` to match the selected "Editorial bands" direction while honoring the locked Beau Monde brand system.

### Layout

1. **Hero band** — full-width on Ivory, two-column baseline-aligned:
   - Left (≈⅔): brass eyebrow "The Design Inquiry" + oversized Cormorant italic headline "Let's Create Something" / "Extraordinary" (non-italic light).
   - Right (≈⅓): short Fira Sans paragraph about the private consultation.
   - Hairline brass divider beneath the entire band.

2. **Atelier grid** — 12-col asymmetric:
   - **Left col-span-7 — Form**: First Name / Last Name (paired), Email / Phone (paired), Tell Us About Your Vision (textarea). Each field is a hairline underline input with a brass eyebrow label and a brass underline that draws in on focus. Submit = navy filled "Talk to Beau Monde" with brass slide-up hover overlay.
   - **Right col-span-5 — Atelier info**: brass vertical hairline next to each block.
     - Atelier Location → 205 Worth Avenue, Palm Beach, FL 33480
     - Studio Hours → Mon–Fri 9:00–17:00, Sat By Appointment, Sun Closed
     - Below: the existing Google Maps iframe restyled as a framed "site sketch" card — white inner mat, brass outline frame, ivory border inset, subtle grayscale. Add small "Ref: PB-33480" annotation and "The Atelier" pin label overlay. (Keep the real Google embed; no fake architectural sketch generation.)

### Brand compliance fixes from the prototype

- Remove all `font-bold` on Cormorant or brass labels (memory: Cormorant never bold; brass eyebrows stay regular/medium Fira).
- Background stays `bg-background` (Ivory token), not the prototype's `#f8f5f2`.
- Submit button uses semantic tokens (`bg-primary text-primary-foreground`) not hard-coded hex.
- Keep brass strictly as hairlines/eyebrows/underline-on-focus — never fills, never on type larger than eyebrow size.
- Phone number stays `(561) 646-8992`; email stays `ajhoover@mac.com`; do not substitute placeholders.
- Hero copy stays "Let's Create Something Extraordinary"; eyebrow uses "Begin Your Journey" (existing site-wide pattern) rather than the prototype's "The Design Inquiry" — better continuity.
- Submit button label = "Talk to Beau Monde".

### Functional preservation

- Keep existing `handleSubmit` → `supabase.functions.invoke("send-contact-email")` wiring, toast feedback, and form state.
- Keep `<SEO>`, `<BreadcrumbSchema>`, and JSON-LD `contactPageSchema` exactly as today.
- Keep `<Navigation />` and `<Footer />` slots.
- Keep `RevealAnimation` wrappers for the atelier section.
- Keep the real Google Maps iframe; restyle its frame only.

### Files

- `src/pages/Contact.tsx` — rewrite layout/markup only; preserve state, schema, and submit handler.

No new dependencies. No edge-function or schema changes. Mobile: hero stacks (headline first, paragraph below), grid collapses to single column, form fields stack, map sits beneath info blocks.