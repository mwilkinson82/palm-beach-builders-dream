## TL;DR

**Sound-on autoplay isn't possible** — every modern browser (Chrome, Safari, Firefox, mobile included) blocks unmuted autoplay until the user taps the page. The hero already does the maximum that's allowed: muted autoplay + a visible "Watch with sound" CTA.

The good news: we can make the unmute moment feel intentional and guarantee AJ's "Good morning" is the first thing the visitor hears.

## The hero today

- ReelReef iframe autoplays **muted + looping** behind the vignette.
- A bottom-right pill reads "Watch with sound" → opens a full-screen lightbox with a fresh iframe (starts at t=0, with audio).

So the "Good morning" line *does* play from the top whenever someone hits that button — the problem is the handoff feels abrupt.

## What to change

**1. Lead the eye to the CTA on landing.**
Pulse / glow the "Watch with sound" pill for the first ~6 seconds after the hero mounts, then settle. Subtle — a soft brass ring + a one-time slide-up of the label "Hear AJ's welcome →". Reduces the "I missed it" feeling.

**2. Insert a 2-second cinematic beat after the user taps.**
When the user clicks "Watch with sound," the lightbox opens to a brief intro card before the iframe loads:

```text
┌──────────────────────────────┐
│                              │
│       BEAU MONDE BUILDERS    │
│       — Space Coast —        │
│                              │
│      A walkthrough with      │
│         AJ Hoover            │
│                              │
│        ● ● ●  (fade)         │
└──────────────────────────────┘
```

After ~2 seconds the card fades and the iframe mounts with `autoplay=1&muted=0&t=0`. Net effect: visitors are settled, eyes on the frame, ears ready — and the very first audio they hear is "Good morning."

**3. Keep the muted hero loop running** behind the lightbox so there's no jarring black flash during the 2-second beat.

**4. Respect `prefers-reduced-motion`** — skip the pulse and shorten the intro beat to ~500 ms.

## Why not "real" sound-on autoplay

Even with tricks (Web Audio unlock, hidden user-gesture capture), Chrome's Media Engagement Index and Safari's autoplay policy will still mute the iframe on first visit. Attempting it produces a worse outcome: video starts, audio is silently dropped, and the "Good morning" is already gone by the time the user finds the unmute button. The 2-second beat solves the real problem without fighting the browser.

## Files touched

- `src/components/VideoHero.tsx` — pulse/label affordance on the CTA for the first few seconds.
- `src/components/VideoLightbox.tsx` — optional `introDelayMs` + intro card render; defer iframe mount until the timer fires.
- No backend, no design-token, no copy-sweep changes.

## Open question for you

Intro card copy — three options:

- **A.** "Beau Monde Builders — Space Coast" / "A walkthrough with AJ Hoover" *(editorial, matches the wordmark)*
- **B.** Just the emblem fading in on ivory, no words *(most cinematic)*
- **C.** "Good morning." set in Cormorant, fades into the video *(meta, riskier, very memorable)*

Tell me A / B / C (or write your own) and I'll build it.