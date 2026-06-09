# CLAUDE.md — Instructions for Claude Code
**Read PLAN.md + DESIGN_GUIDE.md + CONTENT.md first. Then generate the full Next.js project.**

---

## Your Job

Generate a complete, deployable Next.js 14 portfolio site for Abdessalam Gherghouch.
No placeholders. No TODO comments. Production-ready from the first run.

---

## Stack

- **Next.js 14** — App Router
- **Tailwind CSS** — utility-first, no component libraries
- **Geist + Geist Mono** — via `next/font/google`
- **TypeScript** — strict mode
- **Vercel Analytics** — one line in layout.tsx

No other dependencies unless strictly necessary.

---

## Project Structure to Generate

```
portfolio/
├── app/
│   ├── layout.tsx          ← root layout: fonts, metadata, nav, footer, analytics
│   ├── page.tsx            ← home: hero + about + selected projects + contact
│   ├── projects/
│   │   └── page.tsx        ← full project list: featured + grid
│   ├── blog/
│   │   └── page.tsx        ← coming soon page
│   ├── not-found.tsx       ← 404 page
│   └── globals.css         ← tailwind directives + base styles only
├── components/
│   ├── Nav.tsx             ← fixed nav
│   ├── Footer.tsx          ← simple footer
│   ├── ProjectCard.tsx     ← reusable project card
│   ├── Tag.tsx             ← stack tag
│   └── StatusBadge.tsx     ← LIVE / WIP / ARCHIVED badge
├── data/
│   └── projects.ts         ← all project data as typed array
├── tailwind.config.ts      ← custom tokens from DESIGN_GUIDE.md
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Critical Rules

### Colors
Use exactly the tokens from DESIGN_GUIDE.md Section 1.
Define them in `tailwind.config.ts` under `extend.colors`.
Never hardcode hex values in components — always use token names.

### Typography
- `font-mono` (Geist Mono) for: name, nav, tags, labels, quote, status badges, metadata
- `font-sans` (Geist) for: body copy, descriptions, h2+
- Use the exact scale from DESIGN_GUIDE.md Section 2

### Layout
- `max-w-3xl mx-auto` on all content
- `px-6 md:px-8` horizontal padding
- Single column only — no grid layouts for content sections
- Project cards use a responsive grid: `grid grid-cols-1 md:grid-cols-2 gap-4`

### Components

**Nav.tsx**
- `fixed top-0 w-full z-50`
- `bg-bg/80 backdrop-blur-sm border-b border-border`
- `h-14 flex items-center justify-between`
- Left: `<Link href="/">AG</Link>` — font-mono text-white
- Right: Projects (internal) · Blog (internal) · GitHub (external, `target="_blank"`)

**ProjectCard.tsx**
Props: `name, status, description, stack: string[], link`
- `border border-border bg-surface p-5`
- `rounded-none` — no border radius
- `hover:border-muted transition-colors duration-150`
- Status badge top-right (relative positioning)
- Stack tags as `<Tag>` components

**Tag.tsx**
Props: `label: string`
- `font-mono text-xs text-subtle border border-border px-2 py-0.5`
- No background fill

**StatusBadge.tsx**
Props: `status: 'LIVE' | 'WIP' | 'ARCHIVED'`
- Color map: LIVE→accent, WIP→yellow-500, ARCHIVED→muted
- `flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider`

### Section Pattern
Every section follows this structure:
```tsx
<section className="py-20">
  <p className="font-mono text-xs text-subtle uppercase tracking-wider mb-3">
    // label
  </p>
  <h2 className="font-sans text-2xl font-semibold text-primary mb-1">
    Heading
  </h2>
  <div className="border-t border-border mt-4 mb-8" />
  {/* content */}
</section>
```

### data/projects.ts
```ts
export type Project = {
  name: string
  status: 'LIVE' | 'WIP' | 'ARCHIVED'
  description: string
  stack: string[]
  link: string
  featured?: boolean
  type?: string
  longDescription?: string
}

export const projects: Project[] = [
  // all projects from CONTENT.md — featured ones first
]
```

### Home Page (app/page.tsx)
Sections in order:
1. Hero — full viewport height, centered content
2. About — copy from CONTENT.md exactly
3. Selected Projects — filter `projects.filter(p => p.featured)` — show 3 cards
4. Contact — copy from CONTENT.md

### globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background-color: theme('colors.bg');
  color: theme('colors.secondary');
}

::selection {
  background-color: theme('colors.accent');
  color: theme('colors.bg');
}
```

---

## Content
All copy comes from `CONTENT.md`. Use it verbatim — do not paraphrase or rewrite.

---

## What NOT to Generate
- No Storybook
- No testing setup
- No API routes
- No database
- No auth
- No dark/light toggle
- No framer-motion or animation libraries
- No component library (shadcn, radix, etc.)

---

## Final Check Before Finishing
- [ ] `npm run build` would pass with no errors
- [ ] All pages render at `/`, `/projects`, `/blog`
- [ ] 404 page works
- [ ] No hardcoded hex values in components
- [ ] All copy matches CONTENT.md exactly
- [ ] `max-w-3xl` applied consistently
- [ ] No `rounded-lg` or similar on cards — `rounded-none` only
- [ ] Mobile padding `px-6` applied on all sections
