# Real Estate Project Setup & Architecture

This document defines the exact tech stack, folder structure, and setup steps we will use to build the premium real estate portfolio, strictly following your rules.

## 1. Tech Stack

- **Package Manager:** Bun
- **Framework:** Next.js 15 (App Router, Server Components default)
- **Styling:** Tailwind CSS + `cn()` utility
- **UI Components:** shadcn/ui (for base accessible components)
- **Motion & Animations:** Framer Motion (Lens Blur, Magnetic Staggers)
- **Smooth Scroll:** Lenis
- **Typography:** Instrument Serif (Headings), Plus Jakarta Sans (Body)

## 2. Strict Folder Structure

We will use the strict Next.js App Router conventions outlined in `AGENTS.md`:

```text
src/
  app/
    layout.tsx                  # Root layout (Wraps Lenis provider & Fonts)
    page.tsx                    # Main Home Page
    _components/                # Home-page specific components (e.g., Hero, Services Slider)
    projects/
      page.tsx                  # Projects List Page
      [slug]/
        page.tsx                # Single Project Detail Page
        _components/            # Project-specific components (e.g., GalleryGrid)
  components/
    ui/                         # Shared shadcn/ui components (Buttons, Inputs)
    shared/                     # Custom shared components (Navbar, Footer, Preloader)
  lib/
    utils.ts                    # Utility functions like cn()
  hooks/                        # Custom hooks (e.g., useScroll, useMousePosition)
  actions/                      # Server Actions for forms (Contact, Inquiry)
```

## 3. Core Architectural Rules

1.  **Shared vs. Local Components:** If a component (like a Button or Navbar) is used on multiple pages, it goes in `src/components/shared/` or `src/components/ui/`. If a component (like `HomeHeroSlider`) is ONLY used on the home page, it goes in `src/app/_components/`.
2.  **No Code Duplication:** We will never recreate standard elements. We will rely on our central `components/` directory.
3.  **Client vs Server:** All pages are Server Components by default. We only use `"use client"` in the deepest possible child components (like the Framer Motion slider or Lenis provider).

## 4. Setup Commands to Run Next

Once you approve this structure, I will run the following commands via Bun:

1. `bun create next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"` (in the current directory)
2. `bun add framer-motion @studio-freight/lenis lucide-react clsx tailwind-merge`
3. Initialize shadcn/ui: `bunx --bun shadcn-ui@latest init`
