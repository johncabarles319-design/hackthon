# Hackthon Website Design

## Purpose

Hackthon is a polished prototype website for a future hackathon platform. It should demonstrate the visual direction and a small set of realistic interactions while keeping all content easy to replace when the final feature list arrives.

## Visual Direction

The site takes inspiration from the supplied renewable-energy reference without copying it. The visual thesis is **optimistic future lab**: warm ivory canvas, deep ink typography, ultraviolet and coral accents, layered geometric artwork, generous editorial spacing, and restrained motion.

The memorable visual element is an abstract “idea reactor” in the hero: translucent geometric planes orbiting a luminous core. It adapts into simpler shapes on small screens and honors reduced-motion preferences.

## Audience and Primary Flow

The initial audience is prospective hackathon participants. A visitor should immediately understand that Hackthon is an innovation event, see the active event window, browse challenge tracks, and preview how teams and projects will work.

Primary flow:

1. Land on the hero and understand the event proposition.
2. View the live countdown and event status.
3. Browse the example challenge tracks.
4. Inspect the event journey and featured prototype projects.
5. Use the primary call to action to open a lightweight registration-interest dialog.

## Page Structure

The prototype is a single responsive page with anchored navigation:

- Header: wordmark, section links, and “Join the build” action.
- Hero: event message, short supporting copy, calls to action, countdown, and animated abstract artwork.
- Challenge tracks: AI, Climate, FinTech, and Open Innovation cards with concise briefs.
- Event journey: formation, building, demo day, and awards timeline.
- Featured builds: three realistic example projects with category, status, and team metadata.
- Team preview: a compact matching interface showing example skills and availability.
- Closing call to action and concise footer.

## Example Interactions

- Live countdown calculated in the browser from a fixed example event date.
- Challenge-track selection updates the highlighted brief.
- Timeline stages reveal supporting details on click or keyboard activation.
- Registration-interest dialog validates a name and email locally and confirms submission without sending data.
- Mobile navigation opens and closes accessibly.
- Motion is subtle and disabled when the visitor prefers reduced motion.

All data is local demo content. There is no authentication, database, external API, payment flow, or real registration submission in this first version.

## Architecture

Use a small Vite + React application with plain CSS and no additional UI or animation dependencies. Components will be organized by page section only where separation improves readability. Shared content will live in simple arrays near the page component so the final feature set can replace it without a data migration.

The site will be static and deployable through GitHub Pages. Repository metadata, page title, description, and a custom SVG favicon will use the Hackthon name.

## Responsive and Accessible Behavior

- Fluid layouts from 320px mobile through wide desktop screens.
- Semantic landmarks, headings, buttons, and dialog behavior.
- Visible keyboard focus, adequate contrast, and labeled controls.
- Body copy remains at least 16px and usable at 200% text zoom.
- Interactive cards are keyboard-operable and do not rely on hover alone.
- Reduced-motion preferences remove nonessential animation.

## Error and Empty States

The countdown displays a completed-event state after reaching zero. The registration-interest dialog provides inline validation and an explicit success state. Because content is bundled locally, there are no network loading or failure states in this prototype.

## Verification and Delivery

Verification will include a production build, direct browser checks at desktop and mobile viewport sizes, keyboard interaction checks, console-error inspection, and a review of the deployed GitHub Pages result when publishing access is available.

The final deliverables are the source code in a GitHub repository named `hackthon` and the corresponding published GitHub Pages URL. If repository creation or Pages publication requires an account permission that is unavailable, the complete verified local repository will be ready for the user to authorize and publish.
