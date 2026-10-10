---
name: Hackthon
description: A wintergreen editorial workshop where ideas move from challenge to working prototype.
colors:
  wintergreen: "#59857b"
  wintergreen-dark: "#153f38"
  champagne: "#f8eaca"
  light-french-beige: "#d0b182"
  dirt: "#9c6c4a"
  dark-gold: "#a76c3c"
  paper: "#fffaf0"
  ink: "#16342f"
  muted: "#6d665b"
  line: "rgba(22, 52, 47, 0.18)"
  error: "#8d2d24"
typography:
  display:
    fontFamily: "Bodoni Moda, serif"
    fontSize: "clamp(4rem, 7.4vw, 7rem)"
    fontWeight: 600
    lineHeight: 0.88
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Bodoni Moda, serif"
    fontSize: "clamp(2.7rem, 5.2vw, 5.6rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Bodoni Moda, serif"
    fontSize: "clamp(2rem, 3.5vw, 3.3rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
  micro:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.64rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  chip: "3px"
  control: "4px"
  artwork: "5px"
  card: "7px"
  panel: "8px"
  frame: "12px"
  circle: "50%"
spacing:
  gutter: "10px"
  compact: "1rem"
  content: "2rem"
  section: "clamp(5rem, 9vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.champagne}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1rem"
    height: "44px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0.75rem 1rem"
    height: "44px"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0 0.85rem"
    height: "50px"
  skill-chip:
    backgroundColor: "transparent"
    textColor: "{colors.champagne}"
    rounded: "3px"
    padding: "0.5rem 0.65rem"
---

# Design System: Hackthon

## Overview

**Creative North Star: "The Wintergreen Workshop"**

Hackthon is a warm editorial workshop framed as a working instrument. A paper-white product canvas floats on a deep wintergreen field, containing modular panels in champagne, beige, wintergreen, dirt, and dark gold. The visual language feels crafted and serious without becoming nostalgic: high-contrast Bodoni headlines carry the editorial voice, while compact Manrope navigation, labels, and body copy keep the interface practical.

The system makes progress visible through asymmetric panels, fine rules, circular gauges, and a restrained orbital motif. Motion is ambient rather than spectacular. It suggests ideas circulating through a build process, then yields completely to reduced-motion preferences.

**Key Characteristics:**

- A framed paper product canvas on a wintergreen browser field.
- Bodoni Moda display typography paired with compact, readable Manrope.
- Ten-pixel bento gutters and modular asymmetric panel compositions.
- Champagne, beige, dirt, and gold warmth grounded by accessible dark greens.
- Restrained 4–12px corners, circular instruments, and minimal orbit motion.

## Colors

The palette is botanical and earthen: wintergreen supplies identity and contrast, while champagne and beige create a warm editorial ground and dirt and dark gold provide selective emphasis.

### Primary

- **Wintergreen:** The core brand field for expressive panels, illustrations, and large color moments.
- **Accessible Wintergreen:** The darker green used behind champagne text in hero, track, team, and footer panels.

### Secondary

- **Champagne:** The principal warm surface and the light action color on dark fields.
- **Light French Beige:** A structural material for bento frames, active instruments, and secondary geometry.
- **Dirt:** A grounded terracotta-brown for the closing field and selected artwork.
- **Dark Gold:** The sparing accent for focus rings, labels, selection, and directional detail.

### Neutral

- **Paper:** The framed application canvas and quiet internal sheets.
- **Ink:** The accessible dark-green foreground for text and controls on light surfaces.
- **Muted:** Supporting prose and secondary metadata.
- **Line:** Low-contrast green rules that organize the editorial grid.
- **Error:** Validation-only color for invalid form borders and messages.

### Named Rules

**The Warm Materials Rule.** Use champagne, beige, dirt, and gold as physical materials within the composition; do not scatter them as unrelated accent colors.

**The Dark Green Contrast Rule.** Text-bearing green panels use accessible dark greens; mid-tone wintergreen is reserved for larger fields and graphic forms.

## Typography

**Display Font:** Bodoni Moda (serif fallback)
**Body Font:** Manrope (sans-serif fallback)

**Character:** Bodoni Moda gives the event an expressive editorial cadence through high contrast, italics, and tight line boxes. Manrope counterbalances it with efficient navigation, clear body copy, and precise technical labels.

### Hierarchy

- **Display:** Semibold Bodoni, fluid and oversized, with tight leading. Use for the first-view proposition and keep it under roughly eight characters per line.
- **Headline:** Semibold Bodoni for section-level propositions, normally constrained to 12 characters per line.
- **Title:** Semibold Bodoni for panels, projects, stage detail, and dialogs.
- **Body:** Regular Manrope with generous leading. Keep explanatory paragraphs near 45–56 characters wide.
- **Label:** Bold Manrope, small, uppercase, and tracked. Use for dates, statuses, categories, indices, and metadata.

### Named Rules

**The Editorial/Instrument Split Rule.** Bodoni carries ideas and names; Manrope carries navigation, explanation, state, and control labels.

## Layout

The application is a framed canvas: a broad paper surface sits 20px inside the wintergreen viewport, capped at 1480px, with a 12px outer radius and soft ambient shadow. Its masthead is compact and centered, using a three-column brand/navigation/action structure.

Inside the frame, the spatial grammar is a 10px bento gutter. Hero, tracks, timeline, builds, team matching, and editorial constellations use deliberately unequal columns so one panel always leads. Content sections sit within a 1280px shell and use generous fluid vertical spacing, while controls remain dense.

At the stacked breakpoint near 900px, navigation becomes a compact menu and asymmetric assemblies collapse into a single reading column. Narrow layouts reduce the outer frame margin and continue to one column; action groups, timelines, cards, and footer content stack without horizontal overflow. The design remains usable at 320px and at 200% text enlargement.

**The Ten-Pixel Joint Rule.** Related panels meet across a consistent 10px gutter; do not substitute wide generic card spacing.

**The Unequal Pair Rule.** Multi-column compositions must establish a dominant panel rather than defaulting to equal halves.

## Elevation & Depth

Depth comes primarily from nested warm surfaces and the framed app canvas. The outer frame receives one broad, green-black ambient shadow; panels stay mostly flat. Smaller shadows are limited to reactor planes, the circular core, and the registration dialog where separation carries meaning.

### Shadow Vocabulary

- **Ambient Frame:** A broad soft shadow around the complete paper canvas.
- **Instrument Lift:** A shallow green shadow under reactor planes and the circular core.
- **Dialog Lift:** The ambient frame shadow reused over a blurred dark-green backdrop.

**The One Floating Object Rule.** The product frame is the principal elevated object; internal panels rely on color, rules, and gutters before shadow.

## Shapes

Functional surfaces use restrained corners: 4px for controls, 6–8px for interior panels, 10px for bento assemblies, and 12px for the outer frame. Rectangles remain visibly architectural rather than pill-like. Circles are reserved for instruments, status dots, sequence markers, avatars, and orbital geometry. Expressive artwork uses slightly rotated rectangles and overlapping planes instead of clipped shards.

**The Instruments Are Round Rule.** Circles communicate status, identity, sequence, and system motion; they are not a general container style.

**The Radius Has Rank Rule.** Radius grows with structural scale, from 4px controls to the 12px product frame; never use oversized capsule corners.

## Components

### Buttons

- **Shape:** Compact rectangular controls with a 4px radius and a 44px minimum height.
- **Primary:** Champagne on dark fields or dark wintergreen in the dialog, with bold Manrope and a directional arrow when appropriate.
- **Hover / Focus:** Lift 2px on hover; arrows travel 3px horizontally. Keyboard focus uses a 3px dark-gold outline with offset.
- **Outline:** Transparent with an ink border for exploratory actions on light surfaces.

### Chips

- **Style:** Small transparent skill labels with a fine champagne border, 3px radius, and no interactive affordance.

### Cards / Containers

- **Corner Style:** Restrained 6–8px corners; 10px parent assemblies organize cards into bento groups.
- **Background:** Paper, champagne, beige, wintergreen, dirt, or dark green according to hierarchy.
- **Shadow Strategy:** Flat by default; use color adjacency and gutters for separation.
- **Border:** Fine green hairlines organize quiet sheets and internal divisions.
- **Internal Padding:** Fluid padding from roughly 1.5rem to 4rem.

### Inputs / Fields

- **Style:** Paper fields with a fine green border, 4px radius, 50px minimum height, and compact horizontal padding.
- **Focus:** Global dark-gold focus outline; the caret also uses dark gold.
- **Error:** Invalid fields and their concise messages use the dedicated error color.

### Navigation

- **Style:** Compact bold Manrope links centered in a 66px masthead. Hover reveals a one-pixel dark-gold underline; the join action is a small bordered control.
- **Mobile:** Collapse links into a menu below the masthead and preserve the paper-surface relationship.

### Idea Reactor

- **Style:** A champagne instrument field combines a faint grid, two elliptical orbit lines, overlapping earth-tone planes, compact dark labels, and a circular paper core.
- **Behavior:** Challenge selection recolors and reorients one or two planes. Continuous orbits are slow and low contrast; state transitions settle quickly and stop entirely under reduced motion.

### Modular Story Panels

- **Style:** Track briefs, timeline stages, project stories, team matching, and benefit constellations reuse the same 10px joint, unequal-column logic, and warm material palette.
- **Behavior:** At narrow widths, each assembly becomes one deliberate vertical sequence rather than a squeezed grid.

## Do's and Don'ts

### Do:

- **Do** keep the paper product visibly framed by the wintergreen viewport field.
- **Do** use 10px gutters to join related panels into modular compositions.
- **Do** pair one editorial Bodoni proposition with clear Manrope explanation.
- **Do** reserve circles for instruments, identity, status, and sequence.
- **Do** use accessible dark greens for all text-bearing green panels.
- **Do** disable orbit and transition motion for reduced-motion preferences.

### Don't:

- **Don't** reintroduce violet, coral, lime, Syne, or the discarded future-lab palette.
- **Don't** turn the page into a uniform grid of interchangeable cards.
- **Don't** use pill-shaped containers or radii above the restrained 4–12px scale.
- **Don't** add shadows to every panel; the framed canvas owns the main elevation.
- **Don't** make orbit motion fast, prominent, or necessary for understanding state.
