# Hackthon

Hackthon is a prototype for a future hackathon platform. This folder contains the original editorial workshop direction.

## Website options

- **Option 1** — the original editorial workshop at [`/option-1/`](https://johncabarles319-design.github.io/hackthon/option-1/).
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
npm ci
npm run dev
```

From this directory, run Option 2 instead:

```bash
cd ../option-2
npm ci
npm run dev
```

## Verify

```bash
npm test
npm run build
```

Option 2 has its own checks:

```bash
npm test --prefix ../option-2
npm run build --prefix ../option-2
```

## Deployment

The repository's GitHub Pages workflow builds and deploys this option alongside Option 2.
