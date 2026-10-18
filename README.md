# Hackthon

Hackthon contains two independent website prototypes and a small chooser page.

```text
hackthon/
├── index.html       # choose a direction
├── chooser.css      # chooser styles
├── option-1/        # The Workshop
└── option-2/        # The Signal Desk
```

## Run an option

```bash
cd option-1 && npm ci && npm run dev
```

Or run Option 2:

```bash
cd option-2 && npm ci && npm run dev
```

Each option owns its source, dependencies, and tests. The prototypes use sample content; registration interest is local and is not transmitted or stored.

## Verify and build

```bash
npm test --prefix option-1
npm test --prefix option-2
npm run build --prefix option-1
npm run build --prefix option-2
cp index.html chooser.css dist/
node --test scripts/pages-output.test.mjs
```

GitHub Pages deploys the chooser at the repository root, with the two sites at `/option-1/` and `/option-2/`.
