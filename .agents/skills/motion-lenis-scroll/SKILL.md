---
name: motion-lenis-scroll
description: Build cinematic scroll-driven UI animation using Motion (Framer Motion) + Lenis smooth scroll in Next.js/React. Use for parallax sections, scroll-triggered reveals, sticky/pinned transitions, and scroll progress effects. No GSAP — Motion + Lenis only.
license: MIT
sources:
  - github.com/darkroomengineering/lenis (official repo + packages/react README)
  - github.com/motiondivision/motion (official repo + discussion #3065 on Lenis sync)
  - github.com/secondsky/claude-skills (plugins/motion/skills/motion/SKILL.md)
  - github.com/C-Jeril/framer-motion-skills (framer-motion-scroll skill)
  - github.com/sickn33/antigravity-awesome-skills (skills/scroll-experience/SKILL.md)
  - github/awesome-copilot (skills/gsap-framer-scroll-animation — Framer half only)
verified: npm packages `motion` 12.23.24, `lenis` 1.3.25
---

# Motion + Lenis Scroll Animation

## Overview

Two libraries, one scroll loop. Lenis smooths raw scroll input; Motion reads scroll position and animates elements. The single most common failure across every production writeup and issue thread is **two competing render loops** — Lenis running its own `requestAnimationFrame` while Motion runs its own — causing desynced, jittery, or delayed scroll animations. Fix that first with the official sync pattern below, then build choreography on top.

## When to Use

- Parallax images/layers tied to scroll position
- Scroll-triggered fade/slide reveals (once or continuous)
- Sticky/pinned section transitions (one section slides over another)
- Scroll progress indicators
- Any "premium/cinematic site feel" requirement (real estate, portfolio, agency sites)

## Installation

```bash
npm i motion lenis
```

Current verified versions: `motion@12.23.24`, `lenis@1.3.25`. Both actively maintained (lenis: 35 contributors, last commit within weeks; motion: 30,200+ stars).

`lenis` ships a first-class React package (`lenis/react`) — use it instead of manually instantiating `new Lenis()`. It handles instance lifecycle, context, and cleanup for you.

## 1. Core Setup — The Official Sync Pattern

This is the pattern documented directly in Lenis' own `packages/react/README.md` for Framer Motion integration — not a workaround, the maintainers' recommended approach.

```tsx
// app/providers/SmoothScrollProvider.tsx
"use client";

import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { cancelFrame, frame } from "framer-motion"; // or 'motion/react'
import { useEffect, useRef } from "react";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp);
    }
    frame.update(update, true);
    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis
      root
      options={{ autoRaf: false, lerp: 0.1, syncTouch: false }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}
```

Mount once in the root layout, wrapping everything:

```tsx
// app/layout.tsx
<body>
  <SmoothScrollProvider>{children}</SmoothScrollProvider>
</body>
```

**Why this exact shape:**

- `autoRaf: false` — you must set this whenever Lenis shares a page with Motion or GSAP; otherwise Lenis runs its own independent rAF loop in parallel with Motion's, causing drift.
- `frame.update(update, true)` — hooks Lenis into Motion's internal frame scheduler instead of a raw `requestAnimationFrame` call, so every `useScroll`-driven animation and Lenis' own smoothing share one timestamp source (`data.timestamp`).
- `root` prop — makes the Lenis instance accessible anywhere via the `useLenis` hook, and uses the native `<html>` scroll container so `position: sticky`, anchor links, and accessibility keep working (Lenis wraps native scroll, it doesn't hijack it).
- Only **one** `ReactLenis` instance should exist app-wide. Mounting it per-route or per-page is the #1 cause of "smooth scroll breaks on some pages" reports.

## 2. Choosing the Right Animation Pattern

### Pattern A — `whileInView`: one-shot entrance reveals

Cheapest option. Use for text blocks, cards, section headers — anything that should animate once when it enters view, not track scroll continuously.

```tsx
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
>
  <h2>Section Title</h2>
</motion.div>
```

`viewport={{ once: true }}` is the default recommendation — re-triggering on scroll-up costs more and rarely reads as intentional design.

### Pattern B — `useScroll` + `useTransform`: continuous scroll-scrubbed motion

Use for parallax, pinned transitions, scale-on-scroll — anything that should track scroll position 1:1 rather than fire once.

```tsx
"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

function ParallaxImage() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // element bottom-enters -> top-exits
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.08, 1]);

  return (
    <div ref={ref} className="relative h-[70vh] overflow-hidden">
      <motion.img
        src="/property.jpg"
        style={{ y, scale }}
        className="h-[130%] w-full object-cover"
      />
    </div>
  );
}
```

Don't mix both patterns on the same element — pick one per element based on whether it's a discrete reveal or continuous scroll-scrub. Import from `motion/react` (new package) — `framer-motion` still works with the identical API if your build has a reason to keep it (see Known Issues).

## 3. Sticky / Pinned Section Transitions (cinematic effect)

The pattern behind most awwwards-style real-estate/portfolio scroll transitions — two stacked sections, first stays pinned while the second slides over it:

```tsx
function PinnedTransition() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <section ref={ref} className="relative" style={{ height: "200vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Section 1 — stays pinned */}
      </div>
      <motion.div style={{ y }} className="relative h-screen">
        {/* Section 2 — slides up over section 1 */}
      </motion.div>
    </section>
  );
}
```

Key rule: the outer wrapper's `height` (200vh for two stacked screens) creates the scroll distance the transition plays over — the sticky child never scrolls itself.

## 4. Performance Rules

- **Animate only `transform` and `opacity`.** Never `width`, `top`, `left`, or `filter` on scroll-tied elements — forces layout/paint every frame.
- **Remove Tailwind's `transition-*` classes** from any element also carrying Motion props — CSS transitions and Motion fight over the same properties and cause stutter. This is documented as the single most common "animation is janky" report across current Motion skill repos.
- `will-change: transform` on heavy continuous-parallax elements only; drop it once the element becomes static again.
- Parallax source images should render ~120–140% of their container height (see `h-[130%]` above) so the transform range never exposes edges.
- For 50+ animated list items, virtualize (`react-window` / `react-virtuoso`) — Motion's per-item overhead compounds badly past that point.
- Keep `lerp` between 0.08–0.15. Below 0.08 feels laggy/disconnected; above 0.2 is barely distinguishable from native scroll.

## 5. Accessibility

```tsx
import { MotionConfig } from "motion/react";

<MotionConfig reducedMotion="user">
  <App />
</MotionConfig>;
```

`reducedMotion="user"` respects the OS-level `prefers-reduced-motion` setting automatically for every Motion animation in the tree — this is the current recommended approach over manually branching each animation's initial/animate values, though manual branching still works for one-off cases:

```tsx
import { useReducedMotion } from "motion/react";

function Card() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : 20 }}
      animate={{ opacity: 1, y: 0 }}
    />
  );
}
```

Note: Lenis smoothing itself should also be skipped under reduced motion — pass `options={{ autoRaf: false }}` conditionally or set a very low `duration`/high `lerp` so scrolling feels closer to native when the preference is set.

## 6. Known Issues & Fixes

| Symptom                                                                            | Cause                                                                          | Fix                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scroll feels janky, animations lag behind actual position                          | Lenis and Motion running separate rAF loops                                    | Use `autoRaf: false` + `frame.update` sync pattern in §1 (official Lenis React pattern)                                                                                                       |
| Smooth scroll works on one page, breaks on others / feels erratic after navigation | Multiple `ReactLenis` instances mounted (e.g. per-page instead of root layout) | Mount exactly once, at the root layout, with `root` prop                                                                                                                                      |
| Parallax value lags behind scroll                                                  | Using `window.scrollY` + `useEffect` state instead of Motion's scroll hooks    | Always use `useScroll`/`useTransform` — already synced to Lenis via the shared frame loop, no manual listeners needed                                                                         |
| Reveal fires on mount or too early/late                                            | Missing or misconfigured `viewport`/`offset`                                   | Set explicit `viewport={{ amount: 0.2 }}` (whileInView) or tune `offset` array (useScroll)                                                                                                    |
| Animation stutters despite correct Motion code                                     | Tailwind `transition-*` class left on the same element                         | Remove all CSS `transition-*` utilities from Motion-animated elements                                                                                                                         |
| `motion is not defined` / SSR error in Next.js                                     | Missing `"use client"` on the component using Motion                           | Add `"use client"` directive at top of file                                                                                                                                                   |
| AnimatePresence exit animation doesn't play                                        | `AnimatePresence` wrapped _inside_ the conditional instead of wrapping it      | `<AnimatePresence>{cond && <motion.div key="x" exit={{...}} />}</AnimatePresence>` — never the reverse                                                                                        |
| Touch scroll feels sluggish on mobile                                              | `syncTouch: true` smoothing native touch momentum                              | Set `syncTouch: false` (recommended default for mobile-first sites)                                                                                                                           |
| Build fails on Cloudflare Workers when using `motion` package                      | Known Wrangler incompatibility (motiondivision/motion GitHub issue #2918)      | Install `framer-motion@12.23.24` instead — identical API, works with Workers                                                                                                                  |
| Nested scroll containers (e.g. modal, carousel) don't scroll independently         | Lenis takes over all scroll by default                                         | Add `data-lenis-prevent` to the nested container, or set `allowNestedScroll: true` on the Lenis instance (costs a DOM check per scroll event — prefer `data-lenis-prevent` if perf-sensitive) |

## 7. Reference Stack

```
motion (or framer-motion) → all animation logic: useScroll, useTransform, whileInView, MotionConfig
lenis (via lenis/react)    → smooth scroll physics only, synced through Motion's frame loop
Next.js App Router          → SmoothScrollProvider as a client component wrapping {children} in root layout
```

No GSAP in this stack. `useScroll` + `useTransform` + sticky CSS covers parallax, reveals, and pinned transitions — the full vocabulary of "cinematic scroll site" without adding a second animation engine.

## Verification

- [ ] Exactly one `ReactLenis` instance exists app-wide, mounted at root layout with `root` prop
- [ ] `autoRaf: false` set, Lenis driven via `frame.update` — not its own `requestAnimationFrame`
- [ ] Scroll-tied animations use `useScroll`/`useTransform`, never manual scroll listeners or `window.scrollY` state
- [ ] Only `transform`/`opacity` animated on scroll-heavy elements; no `transition-*` Tailwind classes on Motion elements
- [ ] `MotionConfig reducedMotion="user"` set at app root (or per-component `useReducedMotion` checks)
- [ ] `"use client"` present on every file importing `motion`/`lenis/react`
- [ ] Tested at 320px, 768px, 1024px, 1440px — parallax ranges don't reveal image edges at any breakpoint
