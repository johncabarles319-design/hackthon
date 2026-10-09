---
name: Hackthon
description: An optimistic future lab where challenges become teams, prototypes, and launch-ready ideas.
colors:
  warm-ivory: "#f3f0e8"
  paper-white: "#fffdf6"
  dense-ink: "#171522"
  muted-plum: "#655f6d"
  reactor-violet: "#5a32e5"
  deep-violet: "#32178e"
  signal-coral: "#ff715b"
  electric-lime: "#c8f23d"
  error-red: "#b52f24"
  field-error: "#9f251c"
  hairline-ink: "rgba(23, 21, 34, 0.16)"
typography:
  display:
    fontFamily: "Syne, sans-serif"
    fontSize: "clamp(4rem, 8.7vw, 8.8rem)"
    fontWeight: 600
    lineHeight: 0.82
    letterSpacing: "-0.075em"
  headline:
    fontFamily: "Syne, sans-serif"
    fontSize: "clamp(3rem, 6vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.06em"
  title:
    fontFamily: "Syne, sans-serif"
    fontSize: "clamp(2rem, 3.5vw, 3.3rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.05em"
  body:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  none: "0"
  circle: "50%"
spacing:
  xs: "0.6rem"
  sm: "0.9rem"
  md: "1.35rem"
  lg: "2rem"
  xl: "3.5rem"
components:
  button-primary:
    backgroundColor: "{colors.dense-ink}"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.35rem"
    height: "52px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.dense-ink}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.35rem"
    height: "52px"
  button-light:
    backgroundColor: "{colors.electric-lime}"
    textColor: "{colors.dense-ink}"
    rounded: "{rounded.none}"
    padding: "0.95rem 1.35rem"
    height: "52px"
  input:
    backgroundColor: "#ffffff"
    textColor: "{colors.dense-ink}"
    rounded: "{rounded.none}"
    padding: "0 0.9rem"
    height: "52px"
  status-chip:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    rounded: "{rounded.none}"
    padding: "0.6rem 0.75rem"
---

# Design System: Hackthon

## Overview

**Creative North Star: "The Idea Reactor"**

Hackthon feels like an optimistic future lab assembled from paper, ink, and live electrical signals. The visual system makes the event's process visible: challenges enter, planes shift, teams form, and prototypes emerge. Its energy comes from the tension between an editorial foundation and vivid technical instrumentation, never from a conventional startup hero or a generic feature-card grid.

The system is spacious without becoming passive. Oversized, tightly set headlines create momentum; hairlines, labels, index marks, and structured rails keep that energy precise. Interaction changes the composition itself—signal colors switch, geometry recalibrates, progress advances—so state always feels causal and legible.

**Key Characteristics:**

- Warm ivory and paper surfaces grounded by dense near-black ink.
- Ultraviolet structural planes with coral and electric-lime signals.
- Oversized Syne headlines paired with calm, readable DM Sans copy.
- Square paper-like panels, circular instruments, and asymmetric clipped geometry.
- Motion that settles like calibrated machinery and fully yields to reduced-motion preferences.

## Colors

The palette uses quiet editorial neutrals as the field, a saturated violet as the structural identity, and coral or lime only as purposeful signals.

### Primary

- **Reactor Violet:** The core brand and system color for the hero emphasis, closing field, selected track, abstract planes, and successful states.
- **Deep Violet:** A denser violet reserved for the participant-match panel, where white type and lime status marks need a grounded high-contrast field.

### Secondary

- **Signal Coral:** A directional and alert signal used in geometry, progress, focus outlines, and selected visual accents.
- **Electric Lime:** The optimistic live-state color for availability, active timeline stages, supporting geometry, and high-energy light actions.

### Neutral

- **Warm Ivory:** The global canvas. It keeps large areas warm and tactile instead of clinical.
- **Paper White:** Elevated sheets, mobile navigation, cards, dialogs, and reactor-core surfaces.
- **Dense Ink:** Primary text, dark section fields, and the default primary action.
- **Muted Plum:** Supporting copy and quiet metadata on light surfaces.
- **Hairline Ink:** Structural dividers, field borders, and grid lines; it organizes without becoming decoration.
- **Error Red / Field Error:** Validation-only colors for invalid strokes and their explanatory copy.

### Named Rules

**The Signal Has a Job Rule.** Coral and lime indicate focus, progress, availability, or a meaningful visual event; they are not general-purpose decoration.

**The Warm Field Rule.** Default pages sit on warm ivory, while paper white is reserved for distinct sheets and controls.

## Typography

**Display Font:** Syne (sans-serif fallback)  
**Body Font:** DM Sans (sans-serif fallback)

**Character:** Syne supplies engineered, optimistic mass through tight tracking and compact line heights. DM Sans keeps instructions, metadata, and longer explanations approachable and highly legible.

### Hierarchy

- **Display:** Semibold, fluid and very large, with tightly compressed leading. Use for the singular first-view statement; keep it near nine characters per line.
- **Headline:** Semibold and fluid with a compact line box. Use for section-level propositions, normally constrained to roughly 10–13 characters per line.
- **Title:** Semibold, compact, and tightly tracked. Use for project names, selected-stage statements, dialogs, and other local focal points.
- **Body:** Regular DM Sans with generous leading. Introductory copy stays around 48–56 characters wide so large type and explanatory text remain balanced.
- **Label:** Semibold DM Sans, small, uppercase, and tracked. Use for dates, status, categories, reactor annotations, and compact metadata.

### Named Rules

**The Compression Creates Energy Rule.** Display type earns its scale through short copy, tight tracking, and constrained line length; do not apply the same compression to body text.

## Layout

The desktop shell is centered and intentionally broad: masthead and hero use a 92vw container capped at 1440px, while content sections cap at 1320px. The first viewport is a weighted split between copy and reactor, and later sections use asymmetric two-column relationships rather than equal card grids. Section spacing is generous and fluid, commonly expanding from 6rem to 11rem.

At 900px the navigation becomes a paper overlay, the reactor moves before the hero copy, and major two-column assemblies collapse to one column. At 520px actions stack, the timeline becomes a two-by-two matrix, project cards become single-column compositions, and footer content stacks. The system must remain coherent at 320px and at 200% text enlargement.

Hairline rules, not empty boxes, create most internal structure. Gaps scale with the composition: compact controls use sub-rem to 1.4rem intervals, while major relationships use fluid gaps up to 7–10rem.

**The Unequal Pair Rule.** When two regions share a row, give one clear visual authority; avoid defaulting to symmetrical halves unless the content genuinely demands parity.

## Elevation & Depth

Depth is a hybrid of paper layering and selective ambient lift. Most surfaces remain flat and are separated by tonal shifts or hairlines. The reactor planes, selected track brief, participant panel, mobile navigation, primary action, and dialog receive diffuse violet-black shadows to signal active layers rather than decorative card elevation.

### Shadow Vocabulary

- **Ambient Panel:** A broad violet-tinted shadow for signal-bearing panels and floating navigation.
- **Compact Action:** A smaller ink-tinted shadow beneath the dark primary button.
- **Dialog Lift:** A deep, wide shadow that separates the registration sheet from its dimmed and blurred backdrop.
- **Signal Halo:** Soft concentric rings around live dots, active timeline nodes, and the reactor core.

**The Flat Until Active Rule.** Ordinary content surfaces stay flat; ambient lift appears on interactive, selected, or modal layers.

## Shapes

The base form language is square and paper-like: buttons, cards, fields, and major panels use crisp zero-radius corners. Circles are reserved for instruments—status lights, avatars, stage indices, reactor cores, and mark containers. Abstract visuals introduce sharply asymmetric clipped polygons, creating the sense of translucent planes in motion.

**The Instruments Are Round Rule.** Use circles for status, identity, sequence, and reactor mechanics; do not soften rectangular containers into generic rounded cards.

**The Cut Is Intentional Rule.** Polygonal clipping belongs to expressive reactor and project imagery, not functional text containers.

## Components

### Buttons

- **Shape:** Crisp rectangular control with no corner radius and a minimum height of 52px.
- **Primary:** Dense ink with white text, medium-weight labeling, generous horizontal padding, an arrow when directional, and a compact ambient shadow.
- **Hover / Focus:** Lift upward by 2px; directional arrows travel 4px horizontally. Keyboard focus uses a thick coral outline with clear offset.
- **Outline:** Transparent field with a dense-ink hairline; used for secondary, exploratory actions.
- **Light:** Electric lime with dense-ink text; used only on dark or violet fields for a high-energy call to action.

### Chips

- **Style:** Square, transparent skill tags with a low-contrast white hairline on dark violet panels. They describe capabilities and do not masquerade as buttons.

### Cards / Containers

- **Corner Style:** Square paper sheets, never rounded cards.
- **Background:** Paper white for project stories; violet or lime for selected, stateful panels; pale violet, coral, or lime tints for abstract project imagery.
- **Shadow Strategy:** Flat by default. Only selected or signal-bearing panels use ambient lift.
- **Border:** One-pixel hairlines organize neutral cards and internal sections.
- **Internal Padding:** Fluid padding grows from roughly 1.7–2rem on compact screens to 2.6–4.5rem on wider screens.

### Inputs / Fields

- **Style:** White, square, 52px-high fields with a one-pixel hairline and comfortable horizontal padding.
- **Focus:** The global coral focus outline sits outside the field while the caret remains violet.
- **Error:** Invalid fields receive a red border and a concise darker-red message directly below. Disabled styling is not yet established.

### Navigation

- **Style:** Centered compact links use semibold DM Sans and reveal a violet underline from right to left on hover. The desktop join action remains visually light but directional.
- **Mobile:** A bordered menu trigger opens a paper sheet below the masthead with vertically stacked links and ambient elevation; the separate desktop join action is hidden.

### Track Selector

- **Style:** A ruled vertical list pairs circular letter indices with medium-large labels and arrow affordances. The pressed item adopts the selected track's signal color.
- **Behavior:** Selecting a track updates the adjacent brief, reactor signal, and reactor geometry together, with calibrated eased transitions.

### Timeline

- **Style:** Circular numbered nodes sit on a single hairline rail at desktop and become a two-by-two arrangement on narrow screens. The selected node and label switch to electric lime, with a subtle halo around the node.

### Idea Reactor

- **Style:** Layer translucent clipped planes, orbital hairlines, a perspectival grid, circular core, and compact black labels inside an irregular paper-lit stage.
- **Behavior:** Track changes recolor the primary plane and core ring while selected tracks alter one plane's angle or scale. Continuous orbit is slow and ambient; state changes settle with a fast-out, slow-in mechanical ease.

## Do's and Don'ts

### Do:

- **Do** use warm ivory as the default canvas and reserve paper white for distinct sheets.
- **Do** pair one dominant proposition with one supporting explanation in each section.
- **Do** use hairlines, labels, indices, and rails to make process and state visible.
- **Do** connect interactive state to more than color when possible through arrows, geometry, halos, or progress.
- **Do** preserve visible keyboard focus and disable nonessential motion for reduced-motion preferences.

### Don't:

- **Don't** turn the system into a conventional startup hero followed by a uniform feature-card grid.
- **Don't** round buttons, fields, cards, or primary panels into soft generic capsules.
- **Don't** use coral or lime without a signal, status, focus, or progress role.
- **Don't** compress body typography to imitate the display face.
- **Don't** add decorative shadows to every surface; flatness is the default.
