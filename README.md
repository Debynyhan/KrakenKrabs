# Kracken Krabs — Web App Structure

A clean, scalable structure for a React + Tailwind restaurant website, designed around Separation of Concerns, Single Responsibility, SOLID, and UX/UI best practices.

## Directory Layout

- `src/`
  - `components/` — Reusable presentational building blocks
    - `ui/` — Primitive UI elements (buttons, inputs, badges)
    - `layout/` — Page chrome (headers, footers, grids, containers)
    - `navigation/` — Navbars, menus, breadcrumbs
  - `pages/` — Route-level components (Home, Menu, About, Contact, etc.)
  - `features/` — Vertical slices of app logic (keeps domain code cohesive)
    - `menu/` — Menu listing, item details, filters
    - `reservations/` — Reservation forms and flows
    - `orders/` — Cart, checkout, order status
  - `hooks/` — Reusable custom hooks (e.g., `usePrefersReducedMotion`)
  - `context/` — React contexts (Theme, Cart, Auth)
  - `services/` — Side-effect modules and API clients
    - `api/` — HTTP clients, endpoints, DTO mappers
  - `utils/` — Pure utilities, formatters, validators
  - `styles/` — Tailwind entry and layered CSS
    - `base/` — Base styles (preflight overrides, typography)
    - `components/` — Component-level styles (if any)
  - `assets/` — App-bundled media
    - `images/`, `icons/`, `fonts/`
  - `constants/` — App constants, enums, tokens
  - `types/` — TypeScript types/interfaces (or JSDoc typings)
  - `data/` — Static JSON/fixtures/seeds
- `public/` — Static files served as-is (favicons, OG images, robots.txt)
- `tests/`
  - `unit/`, `integration/`
- `e2e/` — End-to-end tests (Playwright/Cypress)
- `docs/`
  - `ux-ui/` — UX notes, flows, wireframes, accessibility checklists
  - `architecture/` — ADRs, diagrams, decisions
- `config/`
  - `tailwind/` — Tailwind config and theme tokens
  - `linting/` — ESLint/Prettier configs and shared rules
  - `env/` — Environment templates and docs
- `.vscode/` — Recommended workspace settings and extensions

## Principles Applied

- Separation of Concerns — UI (components) is decoupled from domain (features) and infra (services)
- Single Responsibility — Each module has one clear reason to change
- SOLID —
  - SRP: small, focused components and utilities
  - OCP: feature folders can grow without modifying shared primitives
  - LSP/ISP/DIP: use interfaces/types, inject services via hooks/context
- UX/UI —
  - Mobile-first, fast navigation, reduced-motion/data friendly
  - Accessible colors, semantic landmarks, focus states
  - Reusable design tokens and components

## Migration Notes

- Existing file: `kracken_krabs_dark_ocean_landing_react_tailwind.jsx`
  - Suggest moving it into `src/pages/Home/Home.tsx` (or `.jsx`) and extracting presentational parts into `src/components/` as you iterate.
  - Local media paths like `/media/...` should live under `public/`.

## Suggested Next Steps

1. Initialize the app scaffold (Vite React or Next.js) and Tailwind config
2. Move current landing component into `src/pages` and split into components
3. Add a `src/styles/base/tailwind.css` entry and configure Tailwind
4. Create an `assets` map and a `services/api` module for menu data
5. Add tests for key components and flows (menu browsing, order CTA)

If you want, I can wire up a minimal Vite + Tailwind setup and move the current landing page into `src/pages/Home` now.
