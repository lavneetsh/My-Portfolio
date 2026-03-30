# Design System Document

## 1. Overview & Creative North Star: "The Neon Architect"

The Creative North Star for this design system is **"The Neon Architect."** 

We are moving away from the "cluttered terminal" aesthetic and toward a high-end, editorial experience that feels like a premium SaaS dashboard fused with a luxury fashion lookbook. This is "hacker-chic" evolved: it is precise, mathematically grounded, yet possesses a soulful, ethereal glow. 

To break the "template" look, we favor **intentional asymmetry**. Hero sections should utilize large-scale typography paired with overlapping glass containers that break the traditional container bounds. We treat the viewport as a 3D space where light—not lines—defines the architecture.

---

## 2. Colors

Our palette is anchored in the void (`#131313`) and brought to life through "Electric Neon" and "Soft Violet" light sources.

### The "No-Line" Rule
**Explicit Instruction:** Prohibition of 1px solid, high-contrast borders for sectioning. Use background shifts instead. For example, a section transition should occur by moving from `surface` to `surface-container-low`. Boundaries are felt, not seen.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, semi-transparent sheets. 
- **Base Layer:** `surface` (#131313).
- **Secondary Sectioning:** `surface-container-low` (#1c1b1b).
- **Interactive Cards:** `surface-container-high` (#2a2a2a) or `surface-container-highest` (#353534).

### The "Glass & Gradient" Rule
Standard flat containers are forbidden for primary UI elements. Use **Glassmorphism**:
- **Background:** `surface-variant` at 40% opacity.
- **Backdrop-filter:** `blur(12px)`.
- **Signature Texture:** Apply a linear gradient (45deg) from `primary` (#dbfcff) to `primary-container` (#00f0ff) at 10% opacity as a subtle overlay to give the glass a "tinted" crystalline feel.

---

## 3. Typography

The typography strategy relies on the tension between the technical precision of **Inter** and the geometric authority of **Space Grotesk**.

*   **Display & Headlines (Space Grotesk):** These are your "Editorial Statements." Use `display-lg` for hero statements with a negative letter-spacing (-0.04em). This creates a "compressed power" look common in high-end tech branding.
*   **Body & Labels (Inter):** Inter provides the "Developer Utility." It is highly legible and neutral, allowing the accent colors and glass effects to take center stage without visual competition.
*   **The Hierarchy Identity:** Large headline scales (`display-sm` through `display-lg`) should always be paired with generous leading (line-height) to ensure the "Apple-style" breathing room.

---

## 4. Elevation & Depth

We eschew traditional shadows in favor of **Tonal Layering** and **Luminescence.**

### The Layering Principle
Depth is achieved by nesting. A project card (`surface-container-highest`) sits atop a section background (`surface-container-low`). The contrast is minimal (subtle shifts in dark grey), creating a sophisticated, low-fatigue interface.

### Ambient Shadows & Luminescence
When an element must "float" (e.g., a modal or a primary CTA):
- **Shadow:** Use `on-surface` color at 5% opacity with a `40px` blur. 
- **The Glow:** For "Electric Neon" elements, use a drop-shadow with the `primary` token color, but set the spread to `2px` and blur to `20px` at 30% opacity. It should look like the element is casting light onto the surface below.

### The "Ghost Border" Fallback
If accessibility requires a container boundary, use a **Ghost Border**: 
- **Stroke:** 1px.
- **Color:** `outline-variant` (#3b494b) at 20% opacity.
- **Effect:** This creates a "whisper" of an edge that catches the light without boxing in the content.

---

## 5. Components

### Buttons
*   **Primary (The Neon Pulse):** Background of `primary-container`. Text in `on-primary`. On hover, add a 10px outer glow using the `primary` token. Shape: `rounded-md` (0.75rem).
*   **Secondary (The Glass Variant):** Background: Transparent. Border: Ghost Border. Text: `primary`. On hover: Background becomes `primary` at 10% opacity.

### Cards & Lists
*   **Cards:** Use `xl` (1.5rem) rounded corners. Forbid divider lines. Separate content using the `spacing-6` (2rem) scale.
*   **Lists:** Items should be separated by a background shift on hover (`surface-container-high`) rather than a line.

### Input Fields
*   **Style:** Minimalist. No background color (transparent). Only a bottom border using `outline-variant` at 30%. On focus, the bottom border animates to `primary` with a subtle `2px` glow.

### Additional Signature Component: The "Code Glass" Terminal
A specific component for portfolios: A glassmorphic container with a `surface-container-lowest` header bar. Use `secondary` (Soft Violet) for syntax highlighting and `primary` (Electric Neon) for terminal prompts.

---

## 6. Do's and Don'ts

### Do
*   **DO** use `spacing-16` or `spacing-20` for section padding. Negative space is a premium asset.
*   **DO** use `secondary` (Soft Violet) sparingly—only for "human" elements like testimonials or bio-tags to contrast the "robotic" Neon Cyan.
*   **DO** utilize `full` rounding for chips and tags to create a "pill" look that contrasts with the `xl` rounded cards.

### Don't
*   **DON'T** use 100% white (#FFFFFF). Use `on-background` (#e5e2e1) for text to prevent eye strain against the deep black.
*   **DON'T** use standard 90-degree corners. Everything must have a minimum of `sm` (0.25rem) rounding to maintain the "premium organic" feel.
*   **DON'T** use "Heavy" font weights for body text. Stick to Regular (400) or Medium (500) to keep the layout feeling light and "airy."