# DESIGN_GUIDE.md — Abdessalam Gherghouch Portfolio
**Principle: Simplicity over anything else. Every token earns its place.**

---

## 1. Color Tokens

```ts
// tailwind.config.ts → extend.colors
colors: {
  bg:        '#0C0C0C',   // page background — near-black, not pure
  surface:   '#141414',   // card / section background
  border:    '#1F1F1F',   // all dividers and borders
  muted:     '#3A3A3A',   // disabled, placeholder, secondary borders
  subtle:    '#6B6B6B',   // metadata, timestamps, secondary text
  secondary: '#A8A8A8',   // body text, descriptions
  primary:   '#E8E8E8',   // headings, important text
  white:     '#F5F5F5',   // maximum contrast text
  accent:    '#00C2A8',   // teal-cyan — used ONCE per screen max
  // accent usage: one link underline, one tag, one status dot — never fills
}
```

**Rules:**
- Never use `accent` as a background fill
- `border` on all cards — no shadow, no glow
- Background stays `bg` — no section alternation with grey panels

---

## 2. Typography

### Font Stack
```ts
// next/font/google — loaded once in layout.tsx
import { Geist, Geist_Mono } from 'next/font/google'

const sans = Geist({ subsets: ['latin'], variable: '--font-sans' })
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' })
```

### Scale
```
display:   font-mono  · text-5xl  · font-bold    · tracking-tight  · text-white
h1:        font-mono  · text-4xl  · font-bold    · tracking-tight  · text-white
h2:        font-sans  · text-2xl  · font-semibold· tracking-normal · text-primary
h3:        font-sans  · text-lg   · font-medium  · tracking-normal · text-primary
body:      font-sans  · text-base · font-normal  · leading-relaxed · text-secondary
small:     font-mono  · text-xs   · font-normal  · tracking-wide   · text-subtle   · uppercase
tag:       font-mono  · text-xs   · font-normal  · tracking-wider  · text-subtle
quote:     font-sans  · text-sm   · font-normal  · italic          · text-subtle
```

**Rules:**
- Mono for: name, nav items, tags, status labels, metadata, the quote
- Sans for: body copy, descriptions, section headings h2+
- Never mix weights within the same text block

---

## 3. Spacing System

Use Tailwind's default spacing scale. Key values:
```
page horizontal padding:  px-6  (mobile)  →  px-8 (md)  →  max-w-3xl mx-auto (desktop)
section gap:              py-20 between major sections
component gap:            gap-6 between cards, gap-4 within cards
text stack:               space-y-2 for label+value, space-y-4 for paragraphs
nav height:               h-14
```

**Max content width: `max-w-3xl` (768px)**
Single column. No multi-column layouts in v1.
Everything reads as a document — top to bottom, no sidebars.

---

## 4. Component Rules

### Nav
```
- Fixed top, h-14, bg-bg/80 with backdrop-blur-sm
- Left: your initials "AG" in font-mono text-white — links to /
- Right: text links only — Projects · Blog · GitHub (external)
- No hamburger menu on mobile — links collapse to icons or stack
- Border-bottom: 1px border-border
- No active state highlights — current page shown by URL only
```

### Hero (Home page)
```
- Full viewport height minus nav: min-h-[calc(100vh-3.5rem)]
- Centered vertically and horizontally
- Stacked:
    [your name — display size — font-mono]
    [role line — h3 — font-sans — text-secondary]
    [quote — italic — font-sans — text-subtle]
    [two CTAs — see Button rules]
- No background image, no animation, no avatar
```

### Section Header
```
- small label above: "// 01 PROJECTS" — font-mono text-subtle uppercase text-xs
- h2 title below: font-sans text-2xl text-primary
- Followed by: 1px border-border divider, then content
```

### Project Card
```
- No rounded corners — border-radius: 0 (or rounded-none)
- Border: 1px border-border
- Padding: p-5
- Layout (vertical stack):
    [status dot + status label]     ← top right, absolute
    [project name — h3]
    [one-sentence description — body text-secondary]
    [stack tags — inline flex gap-2]
    [GitHub link — text-xs font-mono text-subtle hover:text-accent]
- Hover state: border-color → border-muted only. Nothing else moves.
- Background: bg-surface
```

### Tag
```
- font-mono text-xs text-subtle
- border 1px border-border
- px-2 py-0.5
- NO background fill
- NO color coding by language — all same style
```

### Status Badge
```
LIVE    → dot bg-accent    + text "LIVE"
WIP     → dot bg-yellow-500 + text "WIP"
ARCHIVED→ dot bg-muted     + text "ARCHIVED"
dot size: w-1.5 h-1.5 rounded-full inline-block
font: font-mono text-xs uppercase tracking-wider
```

### Button / CTA
```
Primary CTA:
  - border 1px border-primary
  - text-primary font-mono text-sm
  - px-5 py-2
  - bg-transparent
  - hover: bg-primary text-bg
  - transition: background 150ms ease

Secondary CTA / link:
  - no border, no background
  - text-subtle font-mono text-sm
  - hover: text-primary
  - underline offset-4 on hover
```

### Footer
```
- border-top: 1px border-border
- py-8
- Two columns:
    Left:  "AG" initials + year
    Right: GitHub · LinkedIn · Medium — font-mono text-xs text-subtle
- No paragraph text, no tagline
```

---

## 5. Motion Rules

**v1: No animation.**

The only allowed motion:
- `transition-colors duration-150` on interactive elements (links, buttons, cards)
- Nothing else

No scroll reveals. No fade-ins. No typewriter effects.
Simplicity principle: if the content needs animation to land, rewrite the content.

---

## 6. Blog "Coming Soon" Page

```
- Same nav + footer as all pages
- Centered vertically: min-h-[calc(100vh-3.5rem)]
- Content (centered, max-w-sm):

    // blog                       ← section label, font-mono text-subtle
    Writing is thinking.          ← h2, font-sans, text-primary
    [1 sentence on what you'll cover]
    "What if it works?"           ← quote, italic, text-subtle, smaller

    [Medium link]                 ← "Read current writing on Medium →"
                                     font-mono text-xs text-subtle hover:text-accent

- No email signup form
- No countdown timer
- No animation
```

---

## 7. Responsive Behavior

```
Mobile  (< 640px):  px-6, single column, nav links hidden → show only "AG" + GitHub icon
Tablet  (640-1024): px-8, same single column
Desktop (> 1024px): max-w-3xl mx-auto, centered document layout
```

No layout changes between breakpoints — same single column, just more padding.

---

## 8. What to Never Do

- No gradients (background or text)
- No box shadows
- No border-radius > 4px on any card or button
- No emoji in UI
- No color-coded skills/language bars
- No avatar / profile photo in v1
- No tooltip popups
- No modals
- No dark/light toggle

---

## 9. File References

This guide is used alongside:
- `PLAN.md` — architecture and positioning
- `CONTENT.md` — all written copy, ready to paste

When Claude Code reads these three files, it generates the full Next.js project with no design decisions left open.
