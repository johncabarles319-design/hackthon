# Hackthon Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a responsive, interactive Hackthon prototype inspired by the supplied editorial renewable-energy design.

**Architecture:** A static Vite + React single-page application renders all prototype content from local arrays. Pure countdown and form-validation functions receive focused Node tests, while browser QA covers rendering, responsive behavior, accessibility, and interactions. GitHub Actions deploys the production build to GitHub Pages.

**Tech Stack:** React 19, Vite 7, plain CSS, Node's built-in test runner, GitHub Actions, GitHub Pages

**Spec:** `docs/superpowers/specs/2026-10-09-hackthon-design.md`

## Global Constraints

- Use a warm ivory canvas, deep ink typography, ultraviolet and coral accents, layered geometric artwork, generous editorial spacing, and restrained motion.
- Keep all content local and demonstrative; do not add authentication, databases, external APIs, payments, or real registration submission.
- Support fluid layouts from 320px mobile through wide desktop screens.
- Keep body copy at least 16px, preserve visible keyboard focus, and honor `prefers-reduced-motion`.
- Use React and plain CSS without additional UI or animation dependencies.
- Publish from a GitHub repository named `hackthon` through GitHub Pages.

---

### Task 1: Application Foundation and Hero

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/App.jsx`
- Create: `src/styles.css`
- Create: `src/lib/countdown.js`
- Test: `src/lib/countdown.test.js`

**Interfaces:**
- Produces: `getCountdown(targetMs, nowMs)` returning `{ days, hours, minutes, seconds, complete }`.
- Produces: the Hackthon page shell, header, hero, idea-reactor artwork, and live countdown.

- [ ] **Step 1: Create the package and build configuration**

```json
{
  "name": "hackthon",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "node --test",
    "preview": "vite preview"
  },
  "dependencies": {
    "@vitejs/plugin-react": "latest",
    "vite": "latest",
    "react": "latest",
    "react-dom": "latest"
  },
  "devDependencies": {}
}
```

Configure Vite with `base: '/hackthon/'` in production and `/` during development so local previews and GitHub Pages both resolve assets correctly.

- [ ] **Step 2: Write the failing countdown tests**

```js
import assert from 'node:assert/strict'
import test from 'node:test'
import { getCountdown } from './countdown.js'

test('breaks remaining time into calendar-free units', () => {
  assert.deepEqual(getCountdown(90_061_000, 0), {
    days: 1, hours: 1, minutes: 1, seconds: 1, complete: false,
  })
})

test('returns a completed state after the target', () => {
  assert.deepEqual(getCountdown(1_000, 2_000), {
    days: 0, hours: 0, minutes: 0, seconds: 0, complete: true,
  })
})
```

- [ ] **Step 3: Run the tests and verify the missing module failure**

Run: `npm test`

Expected: FAIL because `src/lib/countdown.js` does not exist.

- [ ] **Step 4: Implement the countdown function**

```js
export function getCountdown(targetMs, nowMs = Date.now()) {
  const remaining = Math.max(0, targetMs - nowMs)
  return {
    days: Math.floor(remaining / 86_400_000),
    hours: Math.floor((remaining / 3_600_000) % 24),
    minutes: Math.floor((remaining / 60_000) % 60),
    seconds: Math.floor((remaining / 1_000) % 60),
    complete: remaining === 0,
  }
}
```

- [ ] **Step 5: Build the recognizable first viewport**

Create semantic header and hero markup in `App.jsx`. Use a fixed example event date defined as the next occurrence of October 24 at 09:00 local time, updating once per second with `getCountdown`. Construct the abstract idea reactor with CSS shapes rather than image assets. Include “Explore the tracks” and “Join the build” controls, with the registration control initially opening a native `<dialog>` shell.

- [ ] **Step 6: Apply the initial responsive visual system**

Define CSS custom properties for ivory, ink, violet, coral, lime, panel, border, and shadow colors. Style the navigation, two-column hero, countdown cells, reactor artwork, and mobile navigation breakpoint. Add visible `:focus-visible` outlines and a reduced-motion override.

- [ ] **Step 7: Verify the foundation**

Run: `npm test && npm run build`

Expected: two passing tests and a successful Vite production build.

- [ ] **Step 8: Commit the foundation**

```bash
git add package.json package-lock.json vite.config.js index.html src
git commit -m "feat: build Hackthon hero and countdown"
```

---

### Task 2: Prototype Sections and Interactions

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/styles.css`
- Create: `src/lib/registration.js`
- Test: `src/lib/registration.test.js`

**Interfaces:**
- Consumes: `getCountdown(targetMs, nowMs)` from Task 1.
- Produces: `validateRegistration({ name, email })` returning `{ name?: string, email?: string }`.
- Produces: challenge selection, timeline selection, featured-build cards, team preview, and registration success state.

- [ ] **Step 1: Write the failing registration tests**

```js
import assert from 'node:assert/strict'
import test from 'node:test'
import { validateRegistration } from './registration.js'

test('requires a useful name and valid email', () => {
  assert.deepEqual(validateRegistration({ name: 'A', email: 'wrong' }), {
    name: 'Enter at least 2 characters.',
    email: 'Enter a valid email address.',
  })
})

test('accepts a complete registration interest form', () => {
  assert.deepEqual(validateRegistration({ name: 'Ada', email: 'ada@example.com' }), {})
})
```

- [ ] **Step 2: Run the tests and verify the missing module failure**

Run: `npm test`

Expected: FAIL because `src/lib/registration.js` does not exist.

- [ ] **Step 3: Implement registration validation**

```js
export function validateRegistration({ name, email }) {
  const errors = {}
  if (name.trim().length < 2) errors.name = 'Enter at least 2 characters.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  return errors
}
```

- [ ] **Step 4: Add realistic local content arrays**

Define four tracks (`AI for Everyone`, `Climate Systems`, `Inclusive FinTech`, `Open Innovation`), four timeline stages (`Form`, `Build`, `Demo`, `Launch`), three featured builds, and four team skills directly in `App.jsx`. Keep each item concise and specific enough to look like a real event rather than filler.

- [ ] **Step 5: Build the challenge and journey interactions**

Render track buttons with `aria-pressed` and update a highlighted challenge brief on selection. Render timeline stage buttons with the same selected-state semantics and show the current stage description. Keep every interaction usable with Tab, Enter, and Space through native buttons.

- [ ] **Step 6: Build featured projects and team preview**

Add a three-card project grid with category, project name, one-sentence outcome, and team metadata. Add a team-matching preview with example participant avatars rendered as initials, skill chips, and a non-submitting “Preview matches” interaction that rotates the highlighted candidate.

- [ ] **Step 7: Complete the registration-interest dialog**

Wire all “Join the build” controls to the native dialog. Validate on submit with `validateRegistration`, associate inline error text with each input, and replace the form with a local success state. Add close controls and reset the form when the dialog closes.

- [ ] **Step 8: Complete responsive section styling**

Extend `styles.css` with section spacing, editorial headings, selected track states, timeline connector treatment, project-card accents, team-preview layout, dialog styling, and single-column mobile layouts. Avoid horizontal overflow at 320px.

- [ ] **Step 9: Verify interactions and production output**

Run: `npm test && npm run build`

Expected: four passing tests and a successful Vite production build.

- [ ] **Step 10: Commit the complete prototype**

```bash
git add src
git commit -m "feat: add Hackthon prototype interactions"
```

---

### Task 3: Metadata, Browser QA, and GitHub Delivery

**Files:**
- Modify: `index.html`
- Create: `public/favicon.svg`
- Create: `.github/workflows/deploy.yml`
- Create: `README.md`
- Modify: `docs/superpowers/plans/2026-10-09-hackthon-implementation.md`

**Interfaces:**
- Consumes: the static production bundle created by `npm run build`.
- Produces: GitHub Pages deployment workflow and verified public repository documentation.

- [ ] **Step 1: Add site metadata and favicon**

Set the document title to `Hackthon — Build what’s next`, add a concise meta description, set `theme-color` to the ink color, and link `public/favicon.svg`. Draw the favicon as a simple violet reactor core with two coral orbital strokes that remains legible at 16px.

- [ ] **Step 2: Add the Pages workflow**

Create `.github/workflows/deploy.yml` triggered by pushes to `main` and manual dispatch. Grant `contents: read`, `pages: write`, and `id-token: write`; install with `npm ci`; run `npm test` and `npm run build`; upload `dist`; deploy with `actions/deploy-pages`.

- [ ] **Step 3: Document the prototype**

Write `README.md` with the purpose, implemented demo features, `npm install`, `npm run dev`, `npm test`, `npm run build`, and a note that form submissions stay local and final product features are intentionally replaceable.

- [ ] **Step 4: Run fresh automated verification**

Run: `npm test && npm run build && git diff --check`

Expected: four passing tests, successful production build, and no whitespace errors.

- [ ] **Step 5: Perform desktop browser QA**

Open the local site at a wide desktop viewport. Verify header navigation, hero readability, countdown updates, all four track selections, all four timeline selections, team-match rotation, dialog invalid and valid states, and close behavior. Inspect browser logs and require zero application errors.

- [ ] **Step 6: Perform mobile and keyboard QA**

Set the viewport to 390×844. Verify the mobile menu, all content at 200% browser zoom without lost controls, no horizontal overflow, and a complete keyboard path through navigation, track controls, timeline controls, dialog fields, submission, and close action.

- [ ] **Step 7: Commit delivery configuration**

```bash
git add index.html public .github README.md docs/superpowers/plans/2026-10-09-hackthon-implementation.md
git commit -m "chore: prepare Hackthon for GitHub Pages"
```

- [ ] **Step 8: Create and publish the GitHub repository**

Rename the local branch to `main`, create the public repository `hackthon` under the authenticated GitHub account, push `main`, and enable Pages through the GitHub Actions source if it is not enabled automatically.

- [ ] **Step 9: Verify remote delivery**

Confirm the GitHub repository URL exists, the Pages workflow completes successfully, and the public Pages URL renders the same production site without missing assets. Record the repository and live-site URLs in the final handoff.
