## Fix mobile hero viewport so Unmute is visible

**File:** `src/components/VideoHero.tsx`

**Change:** Replace `h-screen` on the hero `<section>` with `h-[100svh]`.

### Why
- `h-screen` = `100vh`, which on mobile browsers (iOS Safari, Android Chrome) includes the area behind the dynamic URL bar / bottom toolbar. The bottom-anchored Unmute pill ends up hidden behind the browser chrome, forcing the user to scroll.
- `100svh` (small viewport height) is sized to the *visible* viewport with browser chrome shown, so the hero — and the Unmute pill at `bottom-8` — fits within what the user can actually see on first load.

### Implementation
Single-line change in the section className:

```tsx
className="relative h-[100svh] w-full overflow-hidden bg-black"
```

No other changes. Desktop is unaffected (svh = vh when no dynamic chrome is present). Browser support is universal across iOS 15.4+, Android Chrome, and all evergreen desktop browsers.
