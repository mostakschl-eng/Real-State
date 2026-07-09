---
name: ui-skill
description: Premium real estate portfolio UI skill. Full combination of high-end-visual-design (Awwwards-tier component architecture, motion choreography, haptic depth) and design-taste-frontend (anti-slop brief discipline, dial system, layout variance, typography, color calibration, content density, AI tell suppression). Read fully before writing any frontend code for this project.
---

# UI Skill: Premium Real Estate Portfolio (J&S)

> This is a portfolio site — not a property marketplace. It must make visitors feel something.
> Target aesthetic: Sobha Realty / Emaar / high-end architecture studio.
> Stack: Next.js 15, Tailwind v4, `motion/react`, Lenis, GSAP (scroll-pinning only).
> Every rule is contextual. Read the brief first. None of this fires automatically.

---

## 0. BRIEF INFERENCE (Read the Room First)

Before any code, infer what the section actually needs. Most bad AI design output exists because the model jumps to a default aesthetic instead of reading the room.

### 0.A Read These Signals First

1. **Section type** — hero, property showcase, legacy/about, amenities, testimonial, contact, footer.
2. **Vibe words used** — "premium", "calm", "Sobha-level", "editorial", "cinematic", "luxury", "image-led".
3. **Reference signals** — Sobha Realty, BTI BD, Emaar, high-end architecture studio portfolios, Awwwards agency sites.
4. **Audience** — high-net-worth property buyers, corporate investors, institutional clients. They are design-literate.
5. **Brand assets** — logo, color, photography. These are starting material, not optional.
6. **Quiet constraints** — SEO-critical pages, mobile-first browsing, accessibility.

### 0.B Declare a Design Read Before Generating

One line, before any code:
**"Reading this as: `<section>` for `<audience>`, with `<vibe>` language, leaning toward `<aesthetic family>`."**

Example: _"Reading this as: property showcase hero for HNW buyers, with Editorial Luxury, leaning toward warm cream + deep espresso + cinematic parallax."_

### 0.C If Ambiguous, Ask One Question

Ask exactly one clarifying question — never a multi-question dump. Only when the design read genuinely diverges. If inferable, do not ask. Declare and proceed.

### 0.D Anti-Default Discipline

Do NOT reach for: centered hero over dark gradient mesh, AI-purple gradients, three equal feature cards, Inter font, `shadow-md`, generic glassmorphism, infinite-loop micro-animations everywhere. These are LLM defaults. Reach past them deliberately.

---

## 1. THE THREE DIALS

After the design read, set these dials. Every layout, motion, and density decision is gated by them.

- **`DESIGN_VARIANCE: 8`** — 1 = perfect symmetry, 10 = artsy chaos
- **`MOTION_INTENSITY: 7`** — 1 = static, 10 = cinematic / physics
- **`VISUAL_DENSITY: 3`** — 1 = art gallery / airy, 10 = cockpit / packed data

**Project defaults:** `8 / 7 / 3`. Override conversationally per section. Never silently use baseline.

### 1.A Dial Inference Table

| Signal                                                | VARIANCE | MOTION | DENSITY |
| ----------------------------------------------------- | -------- | ------ | ------- |
| "premium consumer / luxury / Sobha-level / editorial" | 7-8      | 5-7    | 3-4     |
| "agency / Awwwards / cinematic / experimental"        | 9-10     | 8-10   | 3-4     |
| "portfolio / marketing / showcase (default)"          | 7-9      | 6-8    | 3-5     |
| "calm / restrained / minimal"                         | 5-6      | 3-4    | 2-3     |
| "trust-first / accessibility-critical"                | 3-4      | 2-3    | 4-5     |

### 1.B Dial Definitions

**DESIGN_VARIANCE**

- 1-3: Symmetrical 12-col grid, equal paddings, centered alignment.
- 4-7: `-mt-8` overlaps, varied image aspect ratios (4:3 next to 16:9), left-aligned headers.
- 8-10: Masonry, fractional grid units (`2fr 1fr 1fr`), massive empty zones (`padding-left: 20vw`).
- Mobile override for 4-10: MUST collapse to `w-full px-4 py-8` below `768px`.

**MOTION_INTENSITY**

- 1-3: CSS `:hover` and `:active` only. `prefers-reduced-motion` is the default mode.
- 4-7: Custom `cubic-bezier` transitions, `animation-delay` cascades, `transform` and `opacity` only.
- 8-10: Scroll-triggered reveals, parallax, GSAP ScrollTrigger pin/scrub. `window.addEventListener('scroll')` is a hard ban at all levels.

**VISUAL_DENSITY**

- 1-3: `py-32` to `py-48` between sections. Images dominate. Expensive, clean.
- 4-7: `py-16` to `py-24` standard.
- 8-10: Tight paddings. No card boxes. `font-mono` for all numbers.

---

## 2. DESIGN SYSTEM & STACK

This project is an aesthetic, not a design system brief. Build with:

- **Tailwind v4** — do NOT use `tailwindcss` plugin in `postcss.config.js`. Use `@tailwindcss/postcss`.
- **`motion/react`** — import from `motion/react`, not `framer-motion` (legacy alias, avoid in new code).
- **Lenis** — smooth scroll, initialized once in `app/layout.tsx` via `"use client"` provider.
- **GSAP + ScrollTrigger** — ONLY for actual pin/scrub work. Not for simple reveals.
- **shadcn/ui** — acceptable for form primitives only. NEVER in default state. Customize radii, colors, shadows, type to the project aesthetic.
- **One system per project.** Do not mix shadcn with Radix Themes in the same tree.

**Dependency verification (mandatory):** Before importing any 3rd-party library, check `package.json`. If missing, output the install command first.

---

## 3. VIBE & TEXTURE ARCHETYPES (Pick 1 Per Page Build)

### Editorial Luxury ← Correct archetype for this project

Warm creams (`#FDFBF7`, `#F5F1EB`) or deep espresso (`#1A1410`) for dark sections. High-contrast Variable Serif for display headings. Subtle CSS noise/film-grain overlay (`opacity-[0.025]`) on a `fixed inset-0 pointer-events-none` element — never on scrolling containers. Physical, unhurried, silent confidence. No gradients, no glow.

### Ethereal Glass ← Dark hero overlays only

OLED near-black (`#0A0806`), hairline `border-white/10` borders, heavy `backdrop-blur-2xl`. Reserved for hero overlays or isolated dark sections. Never the whole page.

### Soft Structuralism ← Amenities / stats / about sections

Off-white (`#F9F9F8`), massive Grotesk display type, near-zero shadows, clean hairline dividers. Calm, editorial, document-like.

**The Variance Mandate:** Never generate the same layout or vibe combination twice. Roll the variance engine before each section build.

---

## 4. LAYOUT ARCHETYPES (Pick 1 Per Section — Never Repeat Within 2 Sections)

### The Asymmetric Bento

CSS Grid with fractional units (`2fr 1fr`, `col-span-8 row-span-2`). Featured property takes 60%+ of grid. N items = N cells exactly — no empty tiles. At least 2-3 cells must have real visual variation (image, tinted background, pattern). Not all text-on-white.
Mobile: `grid-cols-1`, all `col-span` reset to `col-span-1`, `gap-4`.

### The Z-Axis Cascade

Cards stacked with physical overlap (`-mt-8`, `z-index` steps), subtle rotation (`rotate-[-1deg]`, `rotate-[0.5deg]`). Creates depth, weight, and the sensation of physical objects. Borders must be `ring-1 ring-black/5` — never harsh.
Mobile: Remove all rotations and overlaps. Stack vertically with standard spacing. Overlapping elements cause touch-target conflicts on mobile.

### The Editorial Split

Massive display type left (`col-span-5`), full-bleed property image or interactive content right (`col-span-7`). Words and image are equal co-stars.
Mobile: Image first (full-width), text below. `w-full` on both.

### Section-Repetition Rule

Once a layout family is used, it cannot repeat until 2 other layout families have been used between. A page with 8 sections must use at least 4 different layout families. "Selected Work" must not look like "What We Build."

### Zigzag Cap

Alternating left-image/right-text then left-text/right-image = banal. Max 2 consecutive sections with this pattern. The 3rd is a Pre-Flight Fail. Break with a full-width section, bento, marquee, or pinned stack.

---

## 5. VISUAL ARCHITECTURE (Awwwards-Tier Component Mastery)

### The Double-Bezel (Doppelrand) — All Major Cards

Never place a premium card, image, or container flatly on the background. Every property card, feature tile, image frame, and CTA container uses nested enclosure — outer machined tray + inner core:

- **Outer shell:** `p-2 rounded-[2rem] ring-1 ring-black/5 bg-black/[0.03]`
- **Inner core:** `rounded-[calc(2rem-0.5rem)] overflow-hidden bg-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)]`
- **Dark sections invert:** `ring-white/10`, `bg-white/5`, inner `bg-zinc-900`
- Use exaggerated squircle radii (`rounded-[2rem]`). The concentric curves are the machined-hardware feel.

### Floating Pill Nav

The navbar is never a sticky bar glued to the top edge. Always detached:
`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-max rounded-full px-6 py-3 bg-white/80 backdrop-blur-xl ring-1 ring-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.08)]`
Nav on ONE line at desktop. Height max 80px, default 64-72px. No two-line navs.
`backdrop-blur` ONLY on this fixed/sticky element — never on scrolling containers. Causes continuous GPU repaints.

### Button-in-Button CTA (Island Architecture)

Primary CTAs are fully rounded pills (`rounded-full`), generous padding (`px-6 py-3`). If a trailing arrow exists, it NEVER sits naked. It lives in its own nested circular wrapper flush to the right inner padding:
`w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center`
On hover: button scales `active:scale-[0.98]`. Inner circle translates diagonally `group-hover:translate-x-1 group-hover:-translate-y-[1px]` and `scale-105`, creating internal kinetic tension. Use `group` utility.

### Spatial Rhythm & Tension

- Section padding minimum: `py-24`. Hero sections: `py-32` to `py-40`.
- Max content width: `max-w-7xl mx-auto` (pages), `max-w-4xl` (editorial text blocks).
- Hero top padding cap: `pt-24` maximum — content must not float mid-viewport.
- NEVER `h-screen`. Always `min-h-[100dvh]` — prevents iOS Safari viewport jumping.
- Double your standard padding instinct. Empty space is a design feature, not a mistake.

### Eyebrow Tags

Microscopic pill-shaped badge above H1/H2s. Sparingly: max 1 per 3 sections. Hero counts as 1.
`rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium border border-black/10 text-zinc-500`

### Glassmorphism (Contextual — Not Default)

Only for premium overlay vibes, dark hero sections, or Apple-adjacent moments. When used, go beyond `backdrop-blur`: add `border-white/10` inner border + `shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]` for physical edge refraction. Provide `prefers-reduced-transparency` solid fallback. Never on entire page.

---

## 6. TYPOGRAPHY

### Font Stack for This Project

| Role                    | Font Options                                                                        |
| ----------------------- | ----------------------------------------------------------------------------------- |
| Display / Hero Headings | `PP Editorial New`, `Newsreader`, `Canela`, `Tiempos Headline`, `GT Sectra Display` |
| UI / Body / Labels      | `Geist`, `Plus Jakarta Sans`, `Cabinet Grotesk`, `Satoshi`                          |
| Numbers / Specs / Price | `Geist Mono`, `JetBrains Mono`                                                      |

**Always `next/font`.** Never `<link>` Google Fonts in production.

**Banned fonts:** Inter (as default), Roboto, Arial, Open Sans, Helvetica, `Fraunces`, `Instrument_Serif`.

**Serif justification for this project:** Accepted here ONLY because the brief is genuinely luxury real estate — editorial / heritage / prestige. This is the exception, not the rule. For any other project type, default to sans display.

**Font pairing discipline:** `Geist` + `Geist Mono`, `Satoshi` + `JetBrains Mono`, `Cabinet Grotesk` + `Inter Tight`.

### Type Scale

- Hero H1: `text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95]`
- Section H2: `text-3xl md:text-5xl tracking-tight leading-[1.05]`
- Body: `text-base leading-relaxed max-w-[65ch] text-zinc-600`
- Eyebrow: `text-[10px] uppercase tracking-[0.2em] font-medium`

**Hero font-scale discipline:** Plan font size and image size together. If the hero asset is large and the headline is more than 6 words, do not start at `text-7xl`. A 4-line hero headline is always a font-size error, never a copy-length error.

### Italic Descender Clearance (Mandatory)

Any italic word with a descender letter (`y g j p q`) in display type: `leading-[1.1]` minimum + `pb-1` on the wrapper element. `leading-none` with italic descenders clips them visually. Audit every italic word in display headings before shipping.

### Emphasis Rule

To emphasize a word in a headline: use italic or bold of the **same font**. Do NOT inject a serif word into a sans headline (or vice versa). Mixed-family emphasis is amateur. Italic/bold within the same family is the correct move.

---

## 7. COLOR

### Light Palette (Primary)

| Token             | Value                                | Use                                          |
| ----------------- | ------------------------------------ | -------------------------------------------- |
| Canvas            | `#FDFBF7`                            | Page background                              |
| Surface           | `#F5F1EB`                            | Card backgrounds, subtle section tints       |
| Text Primary      | `#1A1410`                            | Headlines — warm near-black, never `#000000` |
| Text Secondary    | `#6B6560`                            | Body, labels                                 |
| Hairline / Border | `rgba(0,0,0,0.08)`                   | Dividers, card rings                         |
| Accent            | One chosen color — locked everywhere | CTAs, highlights                             |

### Dark Palette (Accent Sections)

| Token      | Value                       |
| ---------- | --------------------------- |
| Background | `#0F0D0B` — warm near-black |
| Surface    | `#1A1714`                   |
| Text       | `#F5F1EB`                   |
| Hairline   | `rgba(255,255,255,0.08)`    |

### Color Rules

**One accent color. Locked.** Once chosen, it appears on every CTA, every highlight, every active state — across the entire site. A warm-grey site does not suddenly get a blue CTA in section 7. Pick it, name it in a constants file, never deviate.

**No pure black or white.** `#000000` and `#FFFFFF` are banned. Use warm near-blacks and warm off-whites. Pure values kill depth.

**THE LILA RULE:** AI-purple / blue glow aesthetic is banned as default. No automatic purple button glows, no random neon gradients. Use Zinc / Slate / Stone neutrals with one high-contrast singular accent (Emerald, Electric Blue, Deep Rose, Burnt Orange).

**PREMIUM-CONSUMER PALETTE BAN (mandatory):** For luxury / premium-consumer briefs, the LLM auto-default is the beige+brass+oxblood+espresso family. Banned hex families:

- Backgrounds: `#f5f1ea`, `#f7f5f1`, `#fbf8f1`, `#efeae0`, `#ece6db`, `#e8dfcb`
- Accents: `#b08947`, `#b6553a`, `#9a2436`, `#9c6e2a`, `#bc7c3a`, `#7d5621`
- Text: `#1a1714`, `#1a1814`, `#1b1814`

These are banned as the **auto-reach** for a luxury brief. Rotate to:

- **Cold Luxury:** silver-grey + chrome + smoke
- **Forest:** deep green + bone + amber
- **Black and Tan:** true off-black + warm tan, sharp contrast
- **Cobalt + Cream:** saturated blue + single neutral
- **Terracotta + Slate:** warm rust + cool grey
- Only use the warm-craft palette if the brand explicitly specifies it.

**One palette per project.** Do not alternate between warm and cool grays. One thermal family for the whole site.

**Shape Consistency Lock:** Pick ONE corner-radius scale and apply it everywhere. Options: all-sharp (0), all-soft (12-16px with Double-Bezel at `2rem`), all-pill (for interactive only). Round buttons in a square-card layout is broken design.

**Page Theme Lock:** ONE theme per page. No warm-paper section sandwiched between dark sections. Allowed: one intentional single theme switch if the composition explicitly designs for it. Section-level tints within the same family are fine (`bg-zinc-950` next to `bg-zinc-900`).

---

## 8. IMAGE & VISUAL ASSET STRATEGY

Portfolios are **visual products**. Images are the product. Every image interaction must feel considered and expensive.

### Asset Priority Order

1. **Image-generation tool first.** If any image-gen tool is available, use it for hero photography, property shots, mood images, texture backgrounds. Generate at correct aspect ratio. Do not skip this.
2. **Real images second.** `picsum.photos/seed/{descriptive-seed}/1600/900` for development. Actual brand/stock URLs when provided.
3. **Last resort:** leave clearly-labeled placeholder slots. Never fill with div-based fake screenshots or hand-rolled SVG illustrations.

**Hero needs a real visual.** Text + gradient blob is not a hero. It is an incomplete placeholder.

**Desaturate photography.** Property images should feel warm-toned and slightly desaturated — never oversaturated stock photography. They must blend into the palette, not fight it.

**No div-based fake product UI.** Fake dashboards, fake terminal windows, fake task lists built from styled divs are the #1 LLM design tell. Use real screenshots, generated images, or skip entirely.

### Image Hover Effects (Portfolio Critical)

These are what separate a portfolio from a template. Every image interaction must feel intentional.

**The Slow Zoom:** On card hover, the image inside scales `scale-100` → `scale-105` over `700ms` with `ease-[cubic-bezier(0.32,0.72,0,1)]`. The outer container has `overflow-hidden`. Only the image transforms — never the card. Creates a breathing, alive quality.

**The Reveal Curtain:** A dark overlay (`bg-black/40`) at `opacity-0` transitions to `opacity-100` on hover. Simultaneously a hidden label (property name, specs, "View Project") slides up from `translate-y-4 opacity-0`. The overlay and label arrive at different speeds — overlay `300ms`, label `500ms delay-100`. The hierarchy of the reveal matters.

**The Tilt Card (Select Cards Only):** On `mousemove`, the card rotates on X/Y axis based on cursor position: `rotateX` max ±8deg, `rotateY` max ±8deg. Use `useMotionValue` + `useTransform` — never `useState` (re-renders on every mousemove and collapses on mobile). Add a subtle specular `radial-gradient` highlight that follows the cursor. Apply ONLY to 1-2 featured hero property cards. Not every card.

**The Ken Burns (Full-Bleed Hero Images):** For section-filling property photographs, a slow infinite pan/zoom: `scale(1.0)` → `scale(1.08)` over 12-16 seconds, alternating direction subtly. Applied to `position: absolute` image inside `overflow: hidden` container. Creates a cinematic, living background. Pause on page focus loss (`document.visibilitychange`).

**The Image Strip Hover (Signature Real Estate Gallery):** A row of narrow property image strips (each `w-[60px]` default). On hover of any strip, it expands to `w-[320px]` while others contract proportionally. Transition: `500ms ease-[cubic-bezier(0.32,0.72,0,1)]`. The expanding strip reveals a property name + location overlay. This is the signature luxury real estate gallery interaction — the one effect that immediately marks the site as premium.

**The Hover Image Trail:** On mouse movement across a gallery or portfolio grid section, recent images appear at cursor coordinates and fade out after `600ms`. Creates an exploratory, cinematic atmosphere. Use sparingly — one section maximum. Implement via `useMotionValue` + absolute-positioned image queue, never `useState`.

---

## 9. SCROLL ANIMATION (Lenis + `motion/react` + GSAP)

### Lenis Smooth Scroll

Initialize ONCE in `app/layout.tsx` via a `"use client"` provider component. Never instantiate Lenis in individual page components. Configuration: `duration: 1.2`, custom easing (`Math.min(1, 1.001 - Math.pow(2, -10 * t))`), `smoothWheel: true`. Destroy on cleanup.

### Core Rules

- All scroll reveals use `whileInView`. `window.addEventListener('scroll')` is a **hard ban** — jank-prone, causes continuous reflows, kills mobile performance.
- `window.scrollY` in React state is also banned for the same reason. Use `useScroll()`.
- `viewport={{ once: true }}` on all reveals — elements never re-animate on scroll-up.
- Animate only `transform` and `opacity`. Never `height`, `width`, `top`, `left`.
- `useReducedMotion()` must wrap ALL animations when `MOTION_INTENSITY > 3`. Non-negotiable.
- GSAP only for actual pin/scrub work. `motion/react` for everything else — it is lighter and does not need ScrollTrigger.
- Never mix GSAP and Motion in the same component tree. They fight over the same frames.

### Reveal Patterns

**Standard section reveal:** `opacity: 0, y: 40` → `opacity: 1, y: 0`. Duration `0.8s`, ease `[0.32, 0.72, 0, 1]`, `margin: "-80px"` in viewport.

**Property card stagger:** Parent uses `staggerChildren: 0.08`. Each card: `opacity: 0, y: 32` → `opacity: 1, y: 0`. Duration `0.7s`. Parent and children MUST be in the same `"use client"` component tree for stagger to work.

**Blur-in entry (hero headline only):** `opacity: 0, y: 16, filter: blur(8px)` → `opacity: 1, y: 0, filter: blur(0)`. Duration `1s`. Use ONLY for hero headline and hero subtext. Nowhere else. If overused, the effect becomes an AI tell.

**Split mask reveal (editorial headings):** Words or lines clip-reveal upward from `translateY(100%)` to `translateY(0)` in sequence. Wrapper has `overflow-hidden`. Creates the premium "words arrive one by one" effect.

**Parallax (hero images and property banners):** `useScroll` + `useTransform` in an isolated `"use client"` component. Range max `0%` to `-15%`. Never exceed `-20%` — more feels cheap and physically wrong.

**Sticky-Stack (GSAP — use max once per page):** When cards physically stack as the user scrolls. `start: "top top"`, `pin: true`, `pinSpacing: false`. Previous card scales `0.92` and `opacity: 0.55` as next card arrives. See GSAP skeleton below.

**Horizontal Pan (GSAP — contextual):** Vertical scroll → horizontal gallery pan. `start: "top top"`, pin the wrapper, scrub the inner track. `end: "+=${track.scrollWidth - window.innerWidth}"`. See GSAP skeleton below.

### GSAP Sticky-Stack Skeleton

```tsx
// "use client" isolated component
// gsap.registerPlugin(ScrollTrigger) at top
// useEffect: gsap.context() wrapping all ScrollTrigger.create() calls
// start: "top top" on every card trigger
// pin: true, pinSpacing: false on every card except last
// Scale/opacity scrub driven by the NEXT card's trigger
// return () => ctx.revert() for cleanup
// useReducedMotion() — if true, skip all GSAP setup
```

### GSAP Horizontal-Pan Skeleton

```tsx
// "use client" isolated component
// Wrapper ref (pinned), track ref (slides horizontally)
// distance = track.scrollWidth - window.innerWidth
// gsap.to(track, { x: -distance, scrollTrigger: { start: "top top", pin: true, scrub: 1, end: "+=${distance}", invalidateOnRefresh: true } })
// return () => ctx.revert() for cleanup
// useReducedMotion() — if true, skip
```

### Forbidden Scroll Patterns

- `window.addEventListener("scroll", ...)` — hard ban
- `window.scrollY` in React state — hard ban
- `requestAnimationFrame` loops that touch React state — use `useMotionValue` instead
- `useEffect` + IntersectionObserver when `whileInView` covers the same need — redundant
- `useEffect` animations without strict cleanup functions — memory leaks

---

## 10. MOTION CHOREOGRAPHY

### All Transitions Use Custom Cubic-Bezier

No `ease-in-out`. No `linear`. Ever. Always:

- `ease-[cubic-bezier(0.32,0.72,0,1)]` — for enters and exits (fast out, slow in)
- `ease-[cubic-bezier(0.16,1,0.3,1)]` — for spring-like entrances (overshoot feel)
- Spring physics in Motion: `type: "spring", stiffness: 100, damping: 20` — no linear easing

### The Fluid Nav & Hamburger Morph

On mobile open, lines rotate into ×. Line 1: `rotate-45 + translate-y`. Line 2: `-rotate-45 + translate-y`. Absolute positioned, smooth morph. Never just disappear.

Menu expands as screen-filling overlay: `backdrop-blur-3xl bg-zinc-950/95`. Nav links stagger-reveal: `translate-y-12 opacity-0` → `translate-y-0 opacity-100` with `delay-100, delay-150, delay-200` per item.

### Magnetic CTAs

On `mousemove` within button bounds, button translates slightly toward cursor. On `mouseleave`, spring-returns. Use `useMotionValue` + `useTransform` exclusively. Never `useState` — causes re-renders on every pointer move, collapses on mobile.

### Perpetual Micro-Interactions (Contextual Only)

Pulse, shimmer, float — only when `MOTION_INTENSITY > 5` AND the section actively benefits (status indicators, live counters). Not every card needs an infinite loop. Informational sections stay still.

### Motion Must Be Motivated (Mandatory)

Before ANY animation: "what does this communicate?" Valid answers: hierarchy, storytelling, feedback, state transition. Invalid: "it looked cool." If not articulable in one sentence — remove it.

**"Motion claimed, motion shown."** If `MOTION_INTENSITY > 4`, the page must actually move: hero entry transitions, scroll reveals, hover physics on CTAs, at minimum. A static page claiming `MOTION_INTENSITY: 7` is broken output.

### Performance Guardrails

- Animate ONLY `transform` and `opacity`. Never `top`, `left`, `width`, `height`.
- `backdrop-blur` ONLY on fixed/sticky elements (nav, overlays). Never on scrolling containers — continuous GPU repaints, severe mobile frame drops.
- Grain/noise overlays ONLY on `fixed inset-0 pointer-events-none z-50` pseudo-elements. Never on scrolling containers.
- `will-change: transform` sparingly — only on elements actively animating. Remove after animation.
- Z-index discipline: NO arbitrary `z-50` or `z-[9999]`. Define a project z-index scale (nav, modal, overlay, grain). Document in `lib/constants.ts`.
- Bundle awareness: Motion is not tiny. GSAP + ScrollTrigger adds weight. Lazy-load anything not above-the-fold.
- Grain/Three.js/heavy libs: `dynamic(() => import(...), { ssr: false })` when not needed SSR.

---

## 11. COMPONENT ARCHITECTURE

### Server vs Client Split

- `page.tsx` stays Server Component. Always.
- Lenis, Framer Motion, parallax, tilt, magnetic, Ken Burns, image trail → isolated `"use client"` leaf components.
- Never `"use client"` on root layout or any wrapper with mostly static children.
- Push `"use client"` as far down the component tree as possible.

### State Rules

- `useMotionValue` / `useTransform` / `useScroll` for ALL continuous pointer/scroll values.
- `useState` only for discrete UI state: open/closed, active tab, selected item.
- Global state (Zustand/Jotai) only when prop-drilling genuinely requires it.
- `useReducer` for complex UI state machines.

### Icons

Priority: `@phosphor-icons/react` → `hugeicons-react` → `@radix-ui/react-icons` → `@tabler/icons-react`.
One family per project. Standardize `strokeWidth` globally. Never hand-roll SVG icon paths. Lucide only on explicit request.

### Forms

- Label ABOVE input. Helper text optional, present in markup. Error text BELOW input. `gap-2` for input blocks.
- No placeholder-as-label. Ever.
- All form inputs, placeholders, focus rings, helper text, error text pass WCAG AA contrast against section background.

### Dark Mode

Build for both modes from the start. Never ship light-only without explicit instruction.

- **Tailwind `dark:` variant** (default for this project): pair every color utility with dark variant.
- Respect `prefers-color-scheme`. Add manual toggle if either mode loses key brand expression.
- No pure `#000000` / `#FFFFFF` in either mode.
- Test in both modes before shipping. Never ship a page seen in only one mode.

### Env Vars

Use `@t3-oss/env-nextjs` in `lib/env.ts`. Splits `server`/`client` schemas, throws at build time not runtime.
Install: `pnpm add @t3-oss/env-nextjs zod`

---

## 12. LAYOUT DISCIPLINE (Hard Rules — Failing Any Is Shipping Broken Work)

**Hero must fit the initial viewport.** Headline max 2 lines at desktop. Subtext max 20 words AND max 4 lines. CTA visible without scroll. If copy is too long: reduce font scale or cut copy. A 4-line hero headline is always a font-size error.

**Hero stack discipline (max 4 text elements):**

1. Eyebrow OR brand strip OR neither — pick zero or one
2. Headline (max 2 lines)
3. Subtext (max 20 words)
4. CTAs (1 primary + max 1 secondary)

Banned in the hero: tagline below CTAs, "trusted by" micro-strip, pricing teaser, bullet list, social-proof avatar row. All move to dedicated sections below the hero.

**"Used by / Trusted by" logo wall** lives UNDER the hero, never inside it. Logo wall = logos only. No industry/category labels below each logo.

**Navigation on one line at desktop.** Two-line nav at desktop is broken design. Height max 80px.

**Bento cell count rule:** N items → N cells. 3 items = 3 cells. 5 items = 5 cells. Empty tiles in the middle or end = you planned wrong. Reshape the grid.

**Bento background diversity:** At least 2-3 cells in any multi-cell grid must have real visual variation — an image, a tinted background, a pattern. All-white text-on-white bento cells read as default AI output.

**Split-header ban:** The pattern "left big headline + right small explainer paragraph" as a section header is banned. Stack them vertically. Only use the split when the right column carries a visual or interactive element, not filler text.

**Mobile collapse must be explicit per section.** For every multi-column layout, declare the `< 768px` fallback in the same component. No "Tailwind handles it" assumptions.

**Content density:** Default per section: headline ≤ 8 words, sub-paragraph ≤ 25 words, one visual or one CTA. Long lists (> 5 items) need a different UI component — carousel, card grid, tabs, accordion, marquee, scroll-snap pills. Never a default `<ul>` with `divide-y` for a 10-item list.

**Quotes:** Max 3 lines of quote body. Attribution: name + role + optional company. Never name only. Typographic quotes `"  "`, not straight ASCII `" "`. No em-dashes in attribution.

---

## 13. AI TELLS — ZERO TOLERANCE

Any of these in the output = work is not done.

### Visual & CSS

- NO neon / outer glows by default — use inner borders or subtle tinted shadows
- NO pure `#000000` — off-black, zinc-950, or charcoal
- NO oversaturated accents
- NO excessive gradient text on large headers
- NO custom mouse cursors — outdated, accessibility-hostile, perf-hostile

### Typography

- Inter as default font — banned
- Fraunces or Instrument_Serif without explicit brand justification — banned
- Em-dash (`—`) ANYWHERE on the page — see Section 13.G — ZERO tolerance
- Oversized H1 with no hierarchy control beyond raw scale

### Layout

- Three equal-width feature cards in a row — banned
- Centered hero over dark gradient mesh — banned
- Eyebrow above every section (max 1 per 3 sections)
- Split-header: big headline left + paragraph right as section header — banned
- 3+ consecutive zigzag image+text sections
- Empty bento cells
- Section numbers as eyebrows (`001 · Capabilities`, `06 / how it works`) — banned
- `V0.6`, `BETA`, `INVITE-ONLY` version labels in hero — banned
- Section-bottom decoration text strips (`BRAND. MOTION. SPATIAL.`) — banned
- Floating top-right sub-text paragraph in section headings — banned
- Middle-dot (`·`) as separator on everything — rationed to max 1 per metadata line
- Decorative colored status dots on every list item — banned
- `<br>`-broken italic headlines as default design move — banned
- Vertical rotated text (`INDEX OF WORK, 2018-2026` rotated 90°) — banned unless brief is explicitly Awwwards-experimental
- Crosshair / hairline grid lines as pure decoration — banned
- `border-t` + `border-b` on every row of a long list — banned. Group rows, or use card layout.

### Content

- "John Doe", "Sarah Chan", "Acme Corp", "Lorem Ipsum" — use realistic locale-appropriate names
- "Elevate", "Seamless", "Unleash", "Next-Gen", "Revolutionize" — concrete verbs only
- "Quietly in use at" / "Quietly trusted by" — use plain language or skip the heading
- "From the field" / "Field notes" / "On our desks" — poetic labels on quote/sidebar sections — banned
- Scroll cue labels (`Scroll`, `↓ scroll`, `Scroll to explore`) — banned. Users know what scroll is.
- Locale / city-name / weather strips in nav or header — banned unless brief is genuinely place-focused
- Photo-credit captions as decoration (`Field study no. 12 · Ines Caetano`) — only for real photographer credits
- Version footers on marketing pages (`v1.4.2`, `Build 0048`) — banned
- Pills / labels / tags overlaid on images — let the image speak
- Fake-precise numbers without real data — banned
- `01 / 4`-style pagination labels on bento tiles — banned
- Generic step labels (`Stage 1 / Stage 2`) — use the actual verb-noun

### Motion

- `window.addEventListener('scroll')` — hard ban
- `useState` for pointer/scroll tracking — hard ban
- More than one horizontal marquee on the page
- Infinite loops on informational sections
- Animations without a one-sentence motivation
- GSAP everywhere because GSAP is available — amateur

### 13.G EM-DASH BAN (The Single Most-Violated Tell)

**`—` is COMPLETELY banned. Zero instances. No exceptions.**

This is the LLM's signature stylistic crutch and the #1 visual tell in production tests. There is no "limited use" path, no "natural language frequency" path, no "in body copy is fine" path.

- Banned in headlines — use a period or comma
- Banned in eyebrows, labels, pills, button text, captions, nav — use line breaks, columns, or hairlines
- Banned in body copy — restructure with a period, comma, parentheses, or colon
- Banned in quote attribution — use `-` (hyphen with spaces) or a line break + smaller-weight name
- En-dash (`–`) as a separator is also banned — use a regular hyphen `-`

Only permitted dashes: regular hyphen `-` (compound words, date ranges `2018-2026`, number ranges) and minus sign in math (`-5°C`).

If a single `—` or `–` appears anywhere visible, the output fails Pre-Flight and must be rewritten. This rule has historically been ignored when phrased as "use sparingly." It is now binary: zero.

---

## 14. INTERACTIVE UI STATES

LLMs default to "static successful state only." Always implement full cycles where forms or interactive elements exist:

- **Loading:** Skeletal loaders matching the final layout shape. No generic circular spinners.
- **Empty:** Beautifully composed. Indicate how to populate.
- **Error:** Clear, inline for forms, contextual toasts for transient errors.
- **Tactile feedback:** On `:active`, use `-translate-y-[1px]` or `scale-[0.98]` to simulate a physical press.

**Button contrast (mandatory a11y):** Every CTA text readable against button background. WCAG AA min 4.5:1 (body), 3:1 (large text 18px+). White text on white button is banned. Ghost buttons over photographs need a backdrop, scrim, or stroke.

**CTA wrap ban:** Button text on ONE line at desktop. If wrapping: shorten the label (3 words max for primary CTAs, ideally 1-2) or widen the button. Wrapped CTAs are a Pre-Flight Fail.

**No duplicate CTA intent:** "Get in touch" + "Contact us" + "Let's talk" = all contact intent. Pick ONE label, use it everywhere on the page. One label per intent.

---

## 15. REFERENCE VOCABULARY (Pattern Names to Know)

The agent must know these names to communicate about them, plan with them, and reach for the right one when the design read calls for it.

### Hero Paradigms

- **Asymmetric Split Hero** — text on one side, full-bleed asset on the other
- **Editorial Manifesto Hero** — large type, no asset, almost-poster
- **Video / Media Mask Hero** — type cut out as mask over video background
- **Kinetic-Type Hero** — animated typography as the primary visual
- **Curtain-Reveal Hero** — hero parts on scroll like a curtain opening
- **Scroll-Pinned Hero** — hero stays pinned while content scrolls behind it

### Navigation & Menus

- **Floating Pill Nav** — detached rounded-full navbar, not edge-to-edge
- **Hamburger Morph** — lines rotate into × on open
- **Mega Menu Reveal** — full-screen dropdown, stagger-fade content
- **Magnetic Button** — button pulls toward cursor
- **Dynamic Island** — morphing pill for status or alerts
- **Gooey Menu** — sub-items detach like viscous liquid

### Layout & Grids

- **Asymmetric Bento** — CSS Grid with mixed cell sizes
- **Masonry Layout** — staggered grid, no fixed row height
- **Z-Axis Cascade** — overlapping rotated cards with depth
- **Editorial Split** — massive type left, full-bleed asset right
- **Sticky-Stack Sections** — sections that pin and stack on scroll
- **Split-Screen Scroll** — two halves sliding in opposite directions

### Cards & Containers

- **Double-Bezel Card** — outer tray + inner core nested architecture
- **Parallax Tilt Card** — 3D tilt tracking mouse coordinates
- **Spotlight Border Card** — borders illuminate under cursor
- **Reveal Curtain Card** — hover reveals overlay + label
- **Slow-Zoom Card** — image breathes on hover
- **Glassmorphism Panel** — frosted glass with inner edge refraction
- **Morphing Modal** — button expands into its own dialog

### Scroll Animations

- **whileInView Stagger** — cards/items cascade into viewport
- **Blur-In Entry** — opacity + Y + blur resolve on enter
- **Split Mask Reveal** — words clip-reveal upward in sequence
- **Sticky Scroll Stack** — cards stick and physically stack with GSAP
- **Horizontal Scroll Hijack** — vertical scroll → horizontal gallery pan
- **Zoom Parallax** — background image zooms on scroll
- **Ken Burns** — slow infinite pan/zoom on full-bleed images

### Image Hover Effects

- **Slow Zoom** — image scales 1.0 → 1.05 inside overflow-hidden container
- **Reveal Curtain** — overlay + label slides up on hover
- **Tilt Card** — 3D cursor-tracking rotation with specular highlight
- **Ken Burns** — slow infinite cinematic pan/zoom
- **Image Strip Hover** — narrow strips expand to reveal full image on hover
- **Hover Image Trail** — images appear at cursor position, fade after delay

### Typography & Text

- **Kinetic Marquee** — endless text bands, reversing on scroll (max 1 per page)
- **Text Scramble** — matrix-style decode on load or hover
- **Gradient Stroke Animation** — outlined text with running gradient
- **Circular Text Path** — text curving along a spinning circle

### Micro-Interactions

- **Directional Hover-Aware Button** — fill enters from cursor's exact side
- **Particle Explosion Button** — CTA shatters into particles on success
- **Skeleton Shimmer** — shifting light reflection across loading placeholders
- **Ripple Click Effect** — wave from click coordinates
- **Animated SVG Line Drawing** — vectors draw themselves in real time
- **Mesh Gradient Background** — organic slow-moving lava-lamp blobs

---

## 16. PERFORMANCE & ACCESSIBILITY

### Core Web Vitals Targets

- **LCP** < 2.5s — hero image uses `next/image priority`
- **INP** < 200ms — heavy work off main thread
- **CLS** < 0.1 — reserve space for images, fonts, and embeds
- Run Lighthouse before declaring a page done.

### Reduced Motion (Mandatory)

All animations at `MOTION_INTENSITY > 3` must honor `prefers-reduced-motion`. In `motion/react`: `useReducedMotion()`, degrade to `false` for initial. In CSS: `@media (prefers-reduced-motion: reduce)`. Parallax, scroll-hijack, infinite loops, magnetic physics MUST collapse to static under reduced motion.

### Hardware Acceleration

Animate ONLY `transform` and `opacity`. `will-change: transform` only on actively animating elements. Remove after animation ends.

### DOM Cost

Grain / noise filters: `fixed inset-0 pointer-events-none` only. Never on scrolling containers. Lazy-load heavy libs not above-the-fold.

---

## 17. FINAL PRE-FLIGHT CHECKLIST

**THIS IS NOT OPTIONAL. Run every box. One fail = not done.**

**Brief & Dials**

- [ ] Design Read declared (one-liner, Section 0.B)?
- [ ] Dial values set and reasoned, not silently defaulted?
- [ ] Vibe Archetype and Layout Archetype consciously selected?

**Typography**

- [ ] No Inter, Roboto, Arial, Fraunces, Instrument_Serif?
- [ ] Zero em-dashes (`—` or `–` as separator) anywhere on the page?
- [ ] Italic descenders: `leading-[1.1]` + `pb-1`?
- [ ] No mixed-family emphasis (no serif word in sans headline)?

**Layout**

- [ ] Hero fits viewport: headline ≤ 2 lines, subtext ≤ 20 words, CTA visible?
- [ ] Hero top padding ≤ `pt-24`?
- [ ] Hero stack ≤ 4 elements?
- [ ] No three equal-width feature cards?
- [ ] Zigzag sections ≤ 2 consecutive?
- [ ] Eyebrow count ≤ ceil(sectionCount / 3)?
- [ ] No split-header as section header?
- [ ] Bento: N items = N cells, no empty tiles?
- [ ] Bento has 2-3 cells with real visual variation?
- [ ] Section layout families varied (min 4 families across 8 sections)?
- [ ] No section-number eyebrows (`001 · Capabilities`)?
- [ ] No decoration text strip at hero bottom?
- [ ] No floating top-right sub-text in section headings?
- [ ] Nav on one line at desktop, height ≤ 80px?
- [ ] No duplicate CTA intent on the same page?
- [ ] Mobile collapse explicit per multi-column section?
- [ ] `min-h-[100dvh]` — never `h-screen`?

**Color & Theme**

- [ ] One accent color locked across the entire site?
- [ ] No pure `#000000` or `#FFFFFF`?
- [ ] Not defaulting to beige+brass+oxblood for luxury?
- [ ] Page theme locked — no arbitrary mid-page inversions?
- [ ] Shape consistency: one corner-radius system throughout?

**Images**

- [ ] Real images used — no div-based fake screenshots?
- [ ] `next/image` everywhere, hero has `priority`?
- [ ] No labels/tags overlaid on images?
- [ ] No decorative photo-credit captions?

**Image Hover Effects**

- [ ] At least one premium image hover effect applied (slow zoom / reveal curtain / strip hover / tilt)?
- [ ] Tilt card applied max to 1-2 featured cards only?
- [ ] Image trail applied max to 1 section?

**Motion & Scroll**

- [ ] Lenis initialized once via provider?
- [ ] `whileInView` only — no `window.addEventListener('scroll')`?
- [ ] `once: true` on all viewport configs?
- [ ] Parallax range ≤ 15%?
- [ ] Animate only `transform` and `opacity`?
- [ ] `backdrop-blur` only on fixed/sticky elements?
- [ ] `useReducedMotion()` wrapping all animations at MOTION_INTENSITY > 3?
- [ ] Motion isolated in `"use client"` leaf components?
- [ ] No `useState` for pointer/scroll tracking?
- [ ] Max one marquee on the page?
- [ ] Every animation motivated in one sentence?
- [ ] All `useEffect` animations have cleanup functions?
- [ ] No GSAP and Motion mixed in the same component tree?
- [ ] GSAP sticky-stack / horizontal-pan: `start: "top top"`, `pin: true`, correct scrub?

**Performance & A11y**

- [ ] Button contrast WCAG AA 4.5:1?
- [ ] CTA labels on one line at desktop?
- [ ] Grain/noise on `fixed pointer-events-none` only?
- [ ] Core Web Vitals plausibly hit (LCP < 2.5s, INP < 200ms, CLS < 0.1)?
- [ ] Dark mode tokens defined, tested in both modes?
- [ ] Reduced motion handled?

**Content**

- [ ] No generic names (John Doe, Acme Corp, Lorem Ipsum)?
- [ ] No filler verbs (Elevate, Seamless, Unleash, Next-Gen)?
- [ ] No scroll cue labels?
- [ ] No version labels in hero (V0.6, BETA)?
- [ ] No locale/weather strips?
- [ ] No decorative dots by default?
- [ ] No `·` overuse (max 1 per metadata line)?
- [ ] No version footers on marketing pages?
- [ ] Copy self-audited — no AI-hallucinated or broken phrases?
- [ ] Quotes ≤ 3 lines, attribution clean?
- [ ] Fake-precise numbers only from real data or labeled as mock?
- [ ] One copy register per page?

**Final**

- [ ] The overall impression reads as a $150k+ agency portfolio, not a template with nice fonts?
- [ ] `@t3-oss/env-nextjs` used in `lib/env.ts`?
- [ ] One design system — no Material + shadcn mix?
