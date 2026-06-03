## Last spread of the Style Book — closing the volume

Right now the final page (`YoursPlate`) renders as a single hardCover sheet that lands on the left, leaving the right half blank. I'll pair it with a true back-cover spread: a curated inquiry form on the right where a visitor picks one of the 11 styles to discuss.

### 1. Right-side: "Begin the Conversation" inquiry card

New component `InquiryPlate` rendered as a hardCover page immediately after `YoursPlate`, so the closing spread is `Yours.` (left) + inquiry card (right) — mirroring the front spread (`FrontCover` + `CoverPlate`).

Visual treatment (matches the front cover so the book reads as one bound volume):
- Same seafoam gradient background as `FrontCover` with the brass hairline border.
- Top eyebrow: `Beau Monde · Palm Beach` (Fira Sans, brass, tracked).
- Wordmark: **Beau Monde** in `font-wordmark` (DM Serif Display), navy — the bolder display treatment the user called out, echoing the nav.
- Cormorant italic subhead: *Begin the conversation.*
- Form (Fira Sans labels, ivory inputs with brass hairline borders, navy submit):
  - **Style of interest** — `<Select>` listing all 10 idioms from `STYLES` plus an 11th option **"Yours — something entirely new"**. Default = whichever idiom page the user lingered on most recently (track via a small `useRef`/state hook updated `onFlip`); falls back to first style.
  - **Name** (single field, required)
  - **Email** (required, validated)
  - **Phone** (optional)
  - **A note** (textarea, optional, max 600 chars)
  - Submit button: navy CTA, label **"Send to Beau Monde"**.
- Footer hairline + small print: `Replies within 24 hours · 205 Worth Avenue`.

Submit flow reuses the existing `send-contact-email` Supabase Edge Function (no new function, no new secrets) with two additions:
- New optional fields in the request body: `style: string` and `source: "style-book"`.
- When `source === "style-book"`, the team email subject becomes **`Style Book Inquiry — {style} — {firstName} {lastName}`** and the team email body gets a top "Style of Interest" row above Contact Details. User confirmation email subject becomes **"Thank You — Your Style Book Inquiry"** and the body acknowledges the chosen style (e.g. *"We've noted your interest in Coastal Modern…"*). Existing `/contact` form continues to work unchanged because all new fields are optional.
- Client-side validation via zod (name 1–100, email valid, phone optional ≤ 40, note ≤ 600, style required). Toast on success/error using the existing `sonner` toaster.

### 2. Left-side: small copy correction on `YoursPlate`

- Change `Browse the ten idioms again` → **`Browse your styles`**.
- Everything else on the left page (numbering, "Yours.", body copy, Talk to Beau Monde button) stays as-is.

### 3. Flip-book wiring

- Bump `totalPages` to `STYLES.length + 4` (front cover + title + 10 styles + yours + inquiry).
- Add a new `<Page hardCover>` after `YoursPlate` rendering `<InquiryPlate defaultStyle={lastViewedStyle} />`.
- Track `lastViewedStyle` in `FlipBookView` state by inspecting `e.data` in `onFlip` — if the flipped-to page index maps to a style, store that style's name.
- Update the page counter comment and the pairing math comment.

### Files touched

- `src/pages/Projects.tsx` — copy fix on YoursPlate, add `InquiryPlate` component, add page to the book, track last-viewed style.
- `supabase/functions/send-contact-email/index.ts` — accept optional `style` + `source`, branch the subject/body when `source === "style-book"`. Deploy after edit.

### What I'm NOT doing (per scope)

- No new edge function, no Lovable Emails migration, no Resend connector swap — keeps the change tight and reuses the working pipeline.
- No changes to the rest of the flip book, nav, or `/contact` page.
- No design-direction picker — the right page is intentionally a mirror of the front cover so the spread bookends the volume.