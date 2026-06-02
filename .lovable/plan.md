## Plan: Apply selected "New from" eyebrow treatment

Refine the headline in `src/components/DeliveryShowcase.tsx` to match the chosen direction (Serif + gold hairlines).

### Change
Split the current single-line h2 into a quiet eyebrow + a loud wordmark:

- **Eyebrow (new):** flex row with a short gold hairline on each side, and "New from" set in italic Cormorant Garamond, light weight, gold (`text-accent`), `text-lg md:text-xl`, `tracking-[0.15em]`. Sits centered above the wordmark with `mb-3 md:mb-4`.
- **Wordmark:** "Beau Monde" in bold uppercase Montserrat (`font-display font-bold uppercase`), same large display sizing as before (`text-5xl … lg:text-8xl`), tight leading, white. No inline color spans, no `<br/>` — it's now a single confident line by itself.

Nothing else moves: the italic Cormorant subhead, the video frame, the unmute pill, and the Palm Beach mark below the frame stay exactly as they are.

### Files touched
```text
src/components/DeliveryShowcase.tsx
```
