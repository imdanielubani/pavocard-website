# Pavocard Website — Design System Rules

## Stack

- **Framework**: Next.js (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 (PostCSS-based, no `tailwind.config.js`)
- **Animation**: Framer Motion (complex interactions only)
- **Utilities**: `clsx` + `tailwind-merge` via `cn()` at `lib/utils/cn.ts`

---

## Design Tokens

### Colors

Defined as CSS custom properties in `app/globals.css`, mapped to Tailwind via `@theme inline`:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-poppins);
}
```

**Brand Palette** (use exact Tailwind classes or hex values as shown):

| Role       | Value / Class             |
|------------|---------------------------|
| Primary    | `#046f2b` / `green-700`   |
| Primary Dark | `green-800`             |
| Primary Mid  | `green-600`             |
| Primary Light | `green-100`, `green-50` |
| Accent CTA | `#ffe000` (yellow)        |
| Background | `#ffffff`                 |
| Text Dark  | `#171717`, `#1b1b1b`, `#343434` |
| Text Muted | `#848484`                 |
| Neutral    | Gray scale (`gray-100` → `gray-700`) |

### Typography

- **Font**: Poppins (loaded in `app/layout.tsx` via `next/font/google`)
- **Weights used**: 300, 400, 500, 600, 700, 800
- **Apply via**: `font-sans` (mapped to Poppins via `@theme inline`)
- **Custom tracking**: `-2.5px`, `-0.6px`, `-0.5px`, `-0.4px` — apply inline or via arbitrary Tailwind values
- **Line heights**: Custom where needed (`leading-[27px]`, `leading-[28.8px]`)

### Spacing

- Uses Tailwind's default 4px spacing scale
- Custom overrides via arbitrary values: `pt-[60px]`, `gap-[72px]` etc.
- Max-width containers: `max-w-[1240px]`, `max-w-[630px]`

---

## Component Architecture

### Directory Structure

```
components/
  common/        # Navbar, Footer, Preloader (layout-level)
  ui/            # Button, Card, Badge, Skeleton, Spinner (primitives)
  sections/      # CallToAction (page sections)
  forms/         # ContactForm (form components)
  blog/          # Blog-specific components
```

### Rules

- Use `cn()` from `lib/utils/cn.ts` for all conditional/merged class logic
- All component props typed with explicit TypeScript interfaces
- Client components require `"use client"` directive
- Variants defined as objects keyed by prop value (see Button pattern below)

### Button (`components/ui/Button.tsx`)

```tsx
const variants = {
  primary:  "bg-green-700 text-white hover:bg-green-800 ring-2 ring-green-500",
  outline:  "border-2 border-green-700 text-green-700 hover:bg-green-50",
  ghost:    "text-green-700 hover:bg-green-50",
};
const sizes = {
  sm: "text-sm px-4 py-1.5",
  md: "text-base px-6 py-2.5",
  lg: "text-lg px-8 py-3",
};
const base = "inline-flex items-center justify-center font-semibold rounded-full transition-colors duration-200 disabled:opacity-50";
```

**CTA buttons** (download / primary actions): use `#ffe000` background with dark text.

### Card (`components/ui/Card.tsx`)

Rounded container with border and shadow — `rounded-2xl border border-gray-100 shadow-sm`.

### Badge (`components/ui/Badge.tsx`)

Inline badge — 3 variants: `green`, `gray`, `blue`.

---

## Styling Approach

- **Utility-first Tailwind CSS v4** — no CSS Modules, no CSS-in-JS
- Global styles only in `app/globals.css`
- No scoped/component-level CSS files
- Complex merge logic uses `cn()` (clsx + tailwind-merge)
- Animation: Framer Motion for Preloader and heavy motion; Tailwind transitions for hover/state changes

---

## Asset Management

### Paths

```
/public/
  icons/    # logo.svg, social PNGs (facebook, instagram, twitter, whatsapp)
  images/   # all page images (PNG/JPG)
```

### Rules

- Always use Next.js `<Image>` component (never raw `<img>`) unless already using `<img>` with an `eslint-disable` comment
- Priority images (above fold): add `priority` prop
- Background images: use `fill` + `object-cover`
- Regular images: explicit `width` + `height`
- Reference paths: `/images/filename.ext`, `/icons/filename.ext`

---

## Icon System

Icons are either:
1. **SVG files** (`/public/icons/logo.svg`) — loaded via `<Image>`
2. **Inline SVG elements** — hardcoded `<svg>` paths for social icons and nav UI (hamburger)

No icon library is used. When adding icons, prefer inline SVG over adding a library.

---

## Responsive Design

**Mobile-first** using Tailwind breakpoints:

| Breakpoint | Width  | Usage |
|------------|--------|-------|
| (base)     | < 640px | Mobile default |
| `sm:`      | ≥ 640px | Tablet / small desktop |
| `md:`      | ≥ 768px | Desktop nav, column layouts |
| `lg:`      | ≥ 1024px | Large desktop decorative elements |

**Patterns**:
```tsx
// Nav
<ul className="hidden md:flex items-center gap-8">
<button className="md:hidden">  {/* hamburger */}

// Grid
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

// Stack → row
<div className="flex flex-col md:flex-row gap-10 md:gap-0">

// Desktop-only decoration
<div className="hidden lg:block">
```

---

## Figma → Code Integration Rules

When converting Figma designs to code in this project:

1. **Map colors** to the brand palette above — never use raw hex unless the color is not in the palette
2. **Use existing components** (`Button`, `Card`, `Badge`) before creating new ones
3. **Follow the `cn()` pattern** for all class composition
4. **Typography**: use `font-sans` (Poppins) with Tailwind size/weight utilities
5. **Spacing**: prefer Tailwind scale values; use arbitrary values only when exact spec demands it
6. **Images**: always use `<Image>` from `next/image`; place new assets in `/public/images/` or `/public/icons/`
7. **Layout**: mobile-first, breakpoints `sm` / `md` / `lg`
8. **Animation**: Framer Motion for enter/exit transitions; Tailwind for hover/focus
9. **Icons**: inline SVG preferred, no icon library

---

## Key Files

| File | Purpose |
|------|---------|
| `app/globals.css` | Tailwind import + CSS tokens |
| `app/layout.tsx` | Root layout, Poppins font, metadata |
| `lib/utils/cn.ts` | `cn()` utility (clsx + tailwind-merge) |
| `lib/constants/site.ts` | Site metadata constants |
| `lib/constants/nav.ts` | Navigation link config |
| `lib/constants/routes.ts` | Route path constants |
