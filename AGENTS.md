@AGENTS.md
<modern-accessible-ui-rules>
The site should feel modern, interactive and polished while still being accessible and easy to use.

Accessibility and interaction design must be treated as the same design problem, not as competing goals.

## Core Principle

Do not add interaction only because it looks nice.
Start with a simple, usable version first. Add interaction only when the base behavior works without it.
Every interactive detail should improve at least one of these:

* clarity
* feedback
* navigation
* perceived quality
* user confidence
* mobile usability

If an animation or interaction makes the page harder to understand, harder to use with keyboard, harder to use on mobile, or more distracting, remove it.

## WCAG-Aware Interaction Rules

When adding hover, animation, menus, buttons, cards, accordions, dialogs or other interactive UI:

* The feature must work with keyboard, not only mouse
* The feature must work on touch devices, not only hover
* Focus state must be visible and intentional
* Hover state and focus state should feel related visually
* Active/current state must not rely on color alone
* Interactive elements should have at least 44x44 CSS pixels tap target where practical
* Text contrast must stay readable in all states
* Motion must not be required to understand the content
* Reduced motion preferences must be respected for non-essential animations
* Components must not trap keyboard focus unless they intentionally manage focus, such as dialogs
* Escape should close temporary UI when relevant, such as mobile menus or popovers

## Modern UI Rules

The interface should feel calm, responsive and alive.

Prefer:

* subtle transitions
* small transform changes
* gentle opacity changes
* clear hover states
* clear focus states
* smooth mobile disclosure menus
* sticky navigation when useful
* visible active page indicators
* small feedback on press/click
* layout consistency across pages

Avoid:

* large distracting animations
* hover-only dropdowns
* flashing or pulsing UI
* autoplaying effects
* excessive parallax
* animation that delays navigation
* hiding important information behind motion
* decorative effects that reduce readability
* complex UI before the core pages are stable

## Navbar Interaction Standard

The navbar should feel modern, but remain simple and reliable.

Required:

* semantic `<nav>`
* descriptive `aria-label`
* active link uses `aria-current="page"`
* logo link has a clear accessible name
* mobile menu button uses `aria-expanded`
* mobile menu button uses `aria-controls`
* menu can be closed with Escape
* all links are reachable with Tab
* focus ring is visible
* tap targets are mobile-friendly
* menu does not depend on hover

Allowed enhancements:

* sticky navbar
* subtle backdrop blur
* subtle shadow on scroll
* animated mobile menu open/close
* hover/focus transitions
* active link pill or underline
* small logo hover effect

Not allowed unless carefully implemented:

* hover-only submenus
* disappearing menus
* focus traps without reason
* animation that prevents fast navigation
* custom keyboard navigation that breaks normal Tab behavior

## Motion Standard

Use motion carefully.

Default motion should be:

* short
* subtle
* predictable
* reversible
* non-essential

Preferred duration:

```txt
150ms - 250ms
```

Preferred properties:

```txt
opacity
transform
box-shadow
border-color
background-color
```

Avoid animating layout-heavy properties when possible, such as:

```txt
height
width
top
left
margin
padding
```

If larger motion is added later, handle `prefers-reduced-motion`.

## Component Completion Checklist

Before an interactive component is considered done, check:

* Can I use it with only keyboard?
* Can I use it on mobile?
* Is the focus state visible?
* Is the active/current state clear?
* Does it still work without hover?
* Is the text readable?
* Is the motion subtle?
* Is the component still understandable if animation is removed?
* Does `npm run lint` pass?
* Does `npm run typecheck` pass?
* Does `npm run build` pass?

A component is not finished just because it looks good visually. It must also behave well.

## Content architecture / CMS-readiness

Do not hard-code page content directly inside presentational components.

The project should be built so content can later be edited through an admin channel, CMS, Supabase, database, or similar content source. For now, static TypeScript content files are acceptable, but they must be structured as a temporary content layer, not mixed into UI components.

Use this separation:

- `src/content/*` = page/content data
- `src/types/*` = shared content/data types
- `src/components/*` = reusable presentational components
- `src/app/*` = route-level composition that connects content and components

Components should receive content through props when practical.

Good pattern:

```tsx
<Hero content={homeContent.hero} />
```

Avoid this pattern inside components:

```tsx
<h1>Hard-coded page title</h1>
<p>Hard-coded organization text...</p>
```

When creating new sections such as hero, FAQ, activities, projects, contact information, footer text, cards, or page copy, first place the editable content in a typed content object. Then make the component render from that object.

The goal is to make it possible to later replace src/content/* with Supabase/CMS/admin-managed content without rewriting the visual components.
</modern-accessible-ui-rules>
