---
name: Precision Industrial System
colors:
  surface: '#f8f9ff'
  surface-dim: '#ccdbf4'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e6eeff'
  surface-container-high: '#dde9ff'
  surface-container-highest: '#d5e3fd'
  on-surface: '#0d1c2f'
  on-surface-variant: '#43474c'
  inverse-surface: '#233144'
  inverse-on-surface: '#ebf1ff'
  outline: '#74777c'
  outline-variant: '#c4c6cc'
  surface-tint: '#506071'
  primary: '#051625'
  on-primary: '#ffffff'
  primary-container: '#1b2b3a'
  on-primary-container: '#8292a5'
  inverse-primary: '#b8c8dc'
  secondary: '#376282'
  on-secondary: '#ffffff'
  secondary-container: '#aed9fe'
  on-secondary-container: '#34607f'
  tertiary: '#6b5f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#bdac47'
  on-tertiary-container: '#493f00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d3e4f8'
  primary-fixed-dim: '#b8c8dc'
  on-primary-fixed: '#0c1d2b'
  on-primary-fixed-variant: '#384858'
  secondary-fixed: '#cbe6ff'
  secondary-fixed-dim: '#a0cbf0'
  on-secondary-fixed: '#001e30'
  on-secondary-fixed-variant: '#1b4b69'
  tertiary-fixed: '#f7e478'
  tertiary-fixed-dim: '#d9c75f'
  on-tertiary-fixed: '#201c00'
  on-tertiary-fixed-variant: '#514700'
  background: '#f8f9ff'
  on-background: '#0d1c2f'
  surface-variant: '#d5e3fd'
  clinical-white: '#FFFFFF'
  machine-gray: '#EFEFEF'
  precision-blue: '#013A58'
  safety-yellow: '#F2DF74'
  industrial-navy: '#1B2B3A'
typography:
  headline-lg:
    fontFamily: IBM Plex Sans
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: IBM Plex Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  baseline: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1200px
---

## Brand & Style

The design system is engineered for a pharmaceutical machine technician, prioritizing reliability, discipline, and technical expertise. The visual narrative moves away from ephemeral tech trends, leaning instead into a high-precision, industrial aesthetic that mirrors the rigorous standards of pharmaceutical manufacturing.

The core style is **Minimalist Industrial**. It utilizes heavy structural whitespace, a restricted palette, and functional clarity. Layouts are governed by a strict logic, suggesting an environment where every component has a purpose and every measurement is exact. The emotional response should be one of complete trust—communicating that the technician is methodical, experienced, and highly attentive to detail.

## Colors

The palette is rooted in "Industrial Navy" and "Clinical Slate" to establish an immediate sense of authority and cleanliness. 

- **Primary (Industrial Navy):** Used for headers, primary actions, and structural grounding.
- **Secondary (Precision Blue):** Derived from the reference, used for interactive elements and subtle highlights.
- **Tertiary (Safety Yellow):** Reserved for critical callouts, status indicators, or highlighting technical certifications—mirroring safety signage in a lab or factory.
- **Surface Strategy:** Use "Clinical White" for main backgrounds to maintain a sterile feel, with "Machine Gray" for secondary containers and dividers to provide subtle depth without using shadows.

## Typography

The typography strategy focuses on legibility and a technical "blueprint" feel. 

- **Headlines:** IBM Plex Sans provides a systematic, engineered look that feels more industrial than standard neo-grotesks.
- **Body:** Inter is used for its exceptional readability in technical documentation and long-form descriptions of machinery.
- **Labels & Data:** JetBrains Mono is introduced for technical specifications, serial numbers, and machine parameters. This monospaced font reinforces the "technician" persona and ensures data tables are easy to scan.

## Layout & Spacing

This design system employs a **Fixed Grid** philosophy. Content is housed within a 12-column grid with a 1200px maximum width to ensure a controlled, professional presentation on large monitors.

- **The 4px Rule:** All spacing (padding, margins, gaps) must be a multiple of 4px. This creates a rhythmic "engineered" alignment.
- **Precision Margins:** Use generous 64px margins on desktop to allow the content to breathe, suggesting a high-end, gallery-like technical portfolio.
- **Reflow:** On mobile, margins drop to 16px and the grid collapses to a single column. Technical data tables should allow horizontal scrolling to maintain the integrity of the data rows.

## Elevation & Depth

This design system avoids traditional shadows to maintain its industrial, "flat-surface" integrity. Depth is conveyed through:

- **Low-Contrast Outlines:** Use 1px borders in `#EFEFEF` or `#334155` (at 20% opacity) to define containers.
- **Tonal Layering:** Objects are "raised" by shifting the background color. A card sits on the `#FFFFFF` background with a `#EFEFEF` fill.
- **Crisp Dividers:** Use vertical and horizontal hair-thin lines to separate technical specs, mimicking the look of an architectural or engineering drawing.
- **Zero Shadows:** No ambient or soft shadows. If a "hover" state is required, use a slight color shift or a thicker border rather than a shadow.

## Shapes

The shape language is "Soft" but disciplined. A 0.25rem (4px) border radius is applied to buttons and small components to prevent the UI from feeling overly aggressive or "sharp," while maintaining a professional, boxy structure. 

Large containers and image frames should strictly use the 0.25rem radius. Avoid circles or highly rounded "pills" except for status badges (like "Certified" or "Active").

## Components

- **Buttons:** Rectangular with 4px corners. Primary buttons use "Industrial Navy" with white text. Secondary buttons use a 1px "Clinical Slate" border. No gradients.
- **Technical Data Tables:** The most critical component. Use a "Machine Gray" header row with "JetBrains Mono" labels. Rows should have subtle bottom borders.
- **Status Chips:** Small, monospaced text. Use "Safety Yellow" for "In Progress" and a muted green for "Operational."
- **Input Fields:** Clean 1px borders. Focus states should use a 2px "Precision Blue" border with no glow.
- **Cards:** White background, 1px "Machine Gray" border. No shadow. Used for categorizing different machinery types or project case studies.
- **Dividers:** 1px solid lines using `#EFEFEF`. Use them liberally to group related technical specifications.
- **Spec Lists:** Key-value pairs for machine specs (e.g., *Voltage: 240V*) should use a bold label in "Inter" and the value in "JetBrains Mono."