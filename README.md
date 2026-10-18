# Hackthon

Hackthon is a prototype for a future hackathon platform. This repository contains two independent visual directions, deployed together on GitHub Pages.

## Website options

- **Option 1** — the original editorial workshop at the site root.
- **Option 2** — the Signal Desk concept at [`/option-2/`](https://johncabarles319-design.github.io/hackthon/option-2/).

## Prototype features

- Responsive event hero with a live countdown and animated idea reactor
- Four selectable challenge tracks
- Interactive event journey
- Three synthetic featured projects
- Rotating team-match preview
- Accessible local registration-interest dialog with validation
- Mobile navigation, keyboard support, and reduced-motion behavior

The project uses demo content only. Form entries are not sent or stored, and the final product features are intentionally left open for the next iteration.

## Run locally

```bash
npm install
npm run dev
```

To run Option 2 instead:

```bash
cd option-2
npm install
npm run dev
```

## Verify

```bash
npm test
npm run build
```

Option 2 has its own checks:

```bash
npm test --prefix option-2
npm run build --prefix option-2
```

## Deployment

Pushes to `main` are tested, built, and deployed to GitHub Pages by the included workflow.
