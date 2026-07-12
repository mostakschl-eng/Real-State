---
name: responsive-design-system
description: Build interfaces that work smoothly and accurately across mobile, tablet, and desktop. Use for any layout, component, or page where cross-device behavior matters — breakpoints, fluid typography, container queries, touch targets, responsive images, and testing strategy.
license: MIT
sources:
  - github.com/lotfb86/web-design-skills (02-responsive-design/SKILL.md)
  - github.com/nextlevelbuilder/ui-ux-pro-max-skill (mobile-first / breakpoint-consistency rules)
  - agentskills.me/skill/responsive-design
  - lobehub.com/skills/patricio0312rev-skills-responsive-design-system
  - MDN Responsive Web Design guide
verified: Tailwind CSS v4 screens config, baseline browser support for container queries (2023+)
---

# Responsive Design System

## Overview

Build layouts that adapt smoothly across every screen — not just look okay at 3 tested widths. The 2026 standard stack is: **mobile-first media queries for structural shifts** + **fluid typography/spacing with `clamp()`** + **container queries for component-level responsiveness**. Hard breakpoint jumps (fixed px font sizes, device-specific layouts) are the #1 source of "broken on my phone" bug reports — fluid values eliminate most of that class of bug before it exists.

## When to Use

- Any UI that must work across mobile, tablet, and desktop
- Building reusable component libraries (cards, nav, tables, forms)
- Landing pages, dashboards, admin panels — anything with real users on real devices
- Fixing "looks broken on mobile" or "text too big/small at some width" reports

## 1. Breakpoint Strategy — Content-Based, Not Device-Based

Set breakpoints where **your content** starts to look bad, not to match specific phone models (phones fragment constantly; content doesn't). Use this as your default Tailwind scale unless the design has a reason to diverge:

```js
// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      xs: '475px',   // large phones
      sm: '640px',   // small tablets
      md: '768px',   // tablets
      lg: '1024px',  // laptops / small desktops
      xl: '1280px',  // desktops
      '2xl': '1536px', // large screens
      // Feature queries — target input type, not screen size
      touch: { raw: '(hover: none) and (pointer: coarse)' },
      mouse: { raw: '(hover: hover) and (pointer: fine)' },
    },
  },
};
```

**Mobile-first is non-negotiable**: write base styles for the smallest screen, then layer `sm:` / `md:` / `lg:` on top. Never write desktop-first and override down — it produces heavier CSS and hides mobile as an afterthought.

```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
```

Test the exact breakpoint boundary pixels (e.g., 767px vs 768px), not just round numbers — that's where layout bugs actually hide.

## 2. Fluid Typography & Spacing — `clamp()` Over Fixed Breakpoint Jumps

Fixed font sizes at breakpoints create a visible "jump" as viewport crosses the threshold. `clamp(min, preferred, max)` scales continuously instead:

```css
:root {
  --font-size-base: clamp(1rem, 0.875rem + 0.5vw, 1.125rem);   /* 16px → 18px */
  --font-size-h1: clamp(2rem, 1.5rem + 2vw, 3.5rem);            /* 32px → 56px */
  --font-size-h2: clamp(1.5rem, 1.25rem + 1vw, 2.25rem);
  --spacing-section: clamp(3rem, 2rem + 4vw, 8rem);
}
```

Reading: `clamp(floor, viewport-relative-ramp, ceiling)` — never grows unreadable on a 320px phone, never oversized on a 2560px monitor, with zero extra media queries.

**Rule: minimum body text is 16px on mobile** — anything smaller triggers iOS Safari's auto-zoom-on-focus behavior on form inputs, which feels broken to users.

## 3. Container Queries — Component-Level Responsiveness

Media queries respond to the viewport. Container queries respond to the *component's actual available space* — critical for components reused in different contexts (sidebar vs. full-width, card grid vs. single column). Baseline browser support since 2023, safe to use directly:

```css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 120px 1fr;
  }
}
```

Use container queries when a component's layout should depend on **where it's placed**, not the screen size. Use media queries for page-level structural shifts (nav collapsing, sidebar moving below content).

## 4. Touch Targets & Density

- Minimum touch target: **44×44px** (Apple HIG) — applies to every tappable element, not just buttons: icons, checkboxes, close buttons.
- Tap feedback must appear within ~100ms of touch (perceived responsiveness threshold).
- Spacing between adjacent touch targets should be comfortable, not cramped — mis-taps compound frustration fast on real devices, more than any simulator shows.
- **Never build hamburger menus on desktop.** If there's horizontal space for nav items, show them — hiding navigation when you have room reduces discoverability for no benefit.

```css
.touch-target {
  min-height: 44px;
  min-width: 44px;
}
```

## 5. Responsive Images

Never ship one image size to every viewport — always let the browser choose:

```html
<img
  src="hero-800.webp"
  srcset="hero-400.webp 400w, hero-800.webp 800w, hero-1600.webp 1600w"
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 80vw, 1200px"
  alt="Description"
  width="1600"
  height="900"
  loading="lazy"
/>
```

Always set explicit `width`/`height` (or `aspect-ratio` in CSS) to reserve space and prevent layout shift (CLS) while the image loads. In Next.js, `next/image` handles `srcset`/`sizes` generation automatically — pass `sizes` explicitly whenever the image isn't full-bleed, or it defaults to serving the largest variant to every viewport.

## 6. Layout Patterns That Actually Hold Up

**Responsive table → card transformation** (tables are the #1 thing that breaks on mobile):

```tsx
function ResponsiveTable({ headers, rows }: TableProps) {
  return (
    <>
      <table className="hidden md:table w-full">
        <thead><tr>{headers.map(h => <th key={h} className="px-4 py-2 text-left">{h}</th>)}</tr></thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>{row.map((cell, j) => <td key={j} className="px-4 py-2">{cell}</td>)}</tr>
          ))}
        </tbody>
      </table>

      <div className="md:hidden space-y-4">
        {rows.map((row, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow">
            {row.map((cell, j) => (
              <div key={j} className="flex justify-between py-2 border-b last:border-0">
                <span className="font-medium text-gray-600">{headers[j]}</span>
                <span>{cell}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
```

**Line-length control for readability**: 35–60 characters/line on mobile, 60–75 on desktop — constrain with `max-w-prose` or explicit `ch` units, don't let text run edge-to-edge on wide screens.

**No horizontal scroll on mobile, ever** — check every fixed-width element, especially `w-[Npx]` values and unconstrained flex rows; they're the usual culprit.

**Consistent container max-width on desktop** (`max-w-6xl`/`max-w-7xl`) — unconstrained full-bleed content on large monitors looks broken even though nothing is technically wrong.

## 7. Testing Strategy — Real Devices, Not Just DevTools

Simulators/DevTools device emulation catch most layout bugs but miss: real touch behavior, actual font rendering, true network conditions, and iOS-specific quirks (safe-area insets, momentum scroll, input zoom).

Minimum test matrix:
- **320px** — smallest common phone width, catches overflow bugs first
- **768px** — tablet portrait / breakpoint boundary
- **1024px** — tablet landscape / laptop
- **1440px** — standard desktop
- Test breakpoint boundary pixels exactly (767px vs 768px), not just round numbers
- At least one real mid-range Android device — underrepresented in testing but a large share of real traffic
- One real iOS device — catches Safari-specific issues (100vh viewport bug, input auto-zoom, safe-area)

## 8. Common Pitfalls

| Symptom | Cause | Fix |
|---|---|---|
| Text size jumps abruptly at a breakpoint | Fixed px font sizes per media query | Replace with `clamp()` fluid typography |
| Form input triggers iOS zoom on focus | Body/input font-size below 16px | Set minimum 16px on all form inputs |
| Component looks fine in isolation, breaks when placed in sidebar | Using media queries for something that should be container-aware | Switch to `@container` queries |
| Horizontal scrollbar appears on mobile only | A fixed-width element (`w-[600px]`, unconstrained flex row) overflows viewport | Audit fixed widths; use `max-w-full`, `overflow-x-hidden` as a last resort only |
| Table unreadable on mobile | Table rendered as-is at all widths | Transform to stacked cards below `md:` breakpoint (see §6) |
| Layout shifts as images load | Missing `width`/`height`/`aspect-ratio` on `<img>` | Always set explicit dimensions or aspect-ratio |
| Buttons/icons hard to tap on real phone | Touch target smaller than 44×44px | Enforce minimum touch target size on every interactive element |
| Desktop shows a hamburger menu despite having nav space | Nav collapse breakpoint copied from a template, not tuned to content | Only collapse nav when items genuinely don't fit |
| Layout "works" in DevTools but breaks on a real device | Simulator doesn't reproduce real touch/render/network behavior | Test on at least one real Android + one real iOS device before shipping |
| Content reads fine on desktop, cramped/wrapped oddly on tablet | Breakpoints set at device widths instead of where content actually breaks | Resize the browser slowly and set the breakpoint at the exact px where it looks bad |

## Verification

- [ ] Base styles are mobile-first; larger breakpoints only add/override, never redefine from scratch
- [ ] Typography uses `clamp()` for headings and body text — no abrupt breakpoint jumps
- [ ] Body/input text is 16px minimum on mobile
- [ ] Reusable components use container queries where placement context varies
- [ ] Every tappable element meets 44×44px minimum
- [ ] No horizontal scroll at 320px
- [ ] Images have explicit `width`/`height` or `aspect-ratio`; responsive `srcset`/`sizes` in place
- [ ] Tables collapse to stacked cards (or equivalent) below tablet width
- [ ] Tested at 320px, 768px, 1024px, 1440px, plus exact breakpoint boundary pixels
- [ ] Tested on at least one real Android and one real iOS device, not simulator-only
