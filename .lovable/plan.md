## 1. Copy edits

**WalkthroughShowcase footer caption** (`src/components/WalkthroughShowcase.tsx`)
Replace `Palm Beach, Florida` with a non-geo, brand-forward line. Recommended:

> **An Award-Winning Beau Monde Residence**

(Alternate if you'd rather: *A Newly Delivered Beau Monde Residence* · *A Beau Monde Custom Build*)

**InterviewShowcase footer caption** (`src/components/InterviewShowcase.tsx`)
Replace `On Site · Palm Beach, Florida` with:

> **On Site · A Pristine Luxury Build**

(Alternates: *On Site · Inside a Beau Monde Delivery* · *On Site · The Day of Handover*)

Both stay between the brass hairlines, same tracking and treatment — purely a string swap.

## 2. Layout depth — break the centered-video rhythm

You're right: VideoHero → Walkthrough → Interview are three consecutive *centered headline over centered 16:9* compositions before Bespoke finally breaks it. Rather than parallax-ing the entire stack (risky on mobile, fights the editorial calm), the cleanest fix is to **re-lay the Interview band as an asymmetric editorial pair** so the rhythm goes:

```text
VideoHero          full-bleed cinematic       (centered, immersive)
Walkthrough        centered video, navy        (centered, formal)
Interview          asymmetric editorial pair   ← NEW rhythm break
Bespoke / Stats…   editorial bands             (already asymmetric)
```

### Interview re-layout (still navy, still cinematic)

12-col grid on `lg`:

- **Left, cols 1–7:** the iframe (16:9), unchanged frame and brass hairline border.
- **Right, cols 8–12, vertically centered:**
  - Brass eyebrow: `IN CONVERSATION`
  - Cormorant headline: *The Builder, on the Build* (left-aligned now, not centered)
  - Italic Cormorant pull-quote (1–2 lines, lifted feel of an interview)
  - Brass hairline + small caption: *With AJ Hoover · CEO, Beau Monde Builders*
  - One small navy CTA: `Talk to Beau Monde`

On `<lg`: stacks — eyebrow + headline + pull-quote first, then video, then caption. Mobile stays calm.

The parallax `C` ligature stays, repositioned to sit behind the headline column instead of the right edge, so it reads as a layered editorial mark.

### Why not blanket parallax

Parallax across three back-to-back video sections compounds motion sickness on scroll and tends to read "agency template" rather than "Worth Avenue editorial." The existing `parallax-ligature` letters already provide the depth signature; one structural rhythm break does more work than ten parallax layers.

## Out of scope

- VideoHero composition (stays centered/immersive — it's the front door)
- WalkthroughShowcase composition (stays centered — pairs visually with the hero, then Interview breaks the pattern)
- Any new pages, nav changes, or copy beyond the two captions above

## Files touched

- `src/components/WalkthroughShowcase.tsx` — 1 string
- `src/components/InterviewShowcase.tsx` — 1 string + re-layout to 12-col asymmetric pair, ligature reposition
