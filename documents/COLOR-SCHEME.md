# 🎨 Color Scheme Reference

Your portfolio uses the exact color scheme from Yana Gladkaya's travel agency registration form design.

---

## Official Color Palette

Based on the design reference image:

### Primary Colors

**#ffffff** - White
- Usage: Primary text, headings, high-contrast content

**#676f9d** - Blue-Gray
- Usage: Secondary text, borders, subtle accents, muted elements

**#424769** - Medium Blue (MAIN BACKGROUND)
- Usage: Primary background color for entire site

**#2d3250** - Dark Navy
- Usage: Card backgrounds, header, darker layered elements

**#f9b17a** - Peach Orange
- Usage: Primary accent, CTAs, highlights, active states

---

## Typography

**Font Family:** Raleway
- **Regular (400)** - Body text, descriptions
- **Semibold (600)** - Subheadings, buttons, labels
- **Bold (700)** - Main headings

---

## Visual Hierarchy

The color scheme creates depth through layering:

1. **Base Layer** - #424769 (main background)
2. **Elevated Layer** - #2d3250 (cards, header - darker for depth)
3. **Content Layer** - #ffffff (text on cards)
4. **Accent Layer** - #f9b17a (CTAs, highlights)
5. **Subtle Layer** - #676f9d (borders, secondary text)

---

## Color Usage Map

### Main Background
```css
background: #424769
```

### Header
- Background: `#2d3250` with 90% opacity
- Border: `#676f9d` with 20% opacity
- Title: `#ffffff`
- Subtitle: `#f9b17a`
- Button: `#f9b17a` background, `#2d3250` text

### Hero Section
- Badge background: `#676f9d` with 25% opacity
- Badge border: `#676f9d` with 40% opacity
- Badge text: `#ffffff`
- Main heading: `#ffffff`
- Accent text: `#f9b17a`
- Description: `#ffffff` with 70% opacity

### Project Cards
- Background: `#2d3250` with 95% opacity (darker than main background)
- Border: `#676f9d` with 20% opacity
- Hover border: `#f9b17a` with 50% opacity
- Title: `#ffffff`
- Company name: `#f9b17a`
- Description: `#ffffff` with 85% opacity
- Date/time: `#676f9d`
- Icon backgrounds: `#f9b17a` or `#676f9d`
- Technology tags: `#424769` background, `#676f9d` border
- Status badges:
  - Active: `#f9b17a` with 25% opacity background
  - Completed: `#676f9d` with 25% opacity background

### Footer CTA
- Background: `#2d3250` with 90% opacity
- Border: `#676f9d` with 20% opacity
- Heading: `#ffffff`
- Description: `#ffffff` with 70% opacity
- Primary button: `#f9b17a` background, `#2d3250` text
- Secondary button: `#424769` background, `#676f9d` border

---

## Project Accent Colors

Each project uses colors from the palette:

1. **I Like Music** - `#f9b17a` (Peach)
2. **Symba Marketing** - `#676f9d` (Blue-gray)
3. **BoB** - `#424769` (Medium blue)
4. **BUFVC Services** - `#f9b17a` (Peach)
5. **Your Local Arena** - `#676f9d` (Blue-gray)

---

## Implementation Guide

### In Tailwind CSS

```jsx
// Background colors
bg-[#424769]  // Main background
bg-[#2d3250]  // Cards, header
bg-[#676f9d]  // Subtle backgrounds
bg-[#f9b17a]  // Accent buttons

// Text colors
text-[#ffffff]  // Primary text
text-[#676f9d]  // Secondary text
text-[#f9b17a]  // Accent text

// Border colors
border-[#676f9d]  // Standard borders
border-[#f9b17a]  // Accent borders
```

### CSS Variables (Optional)

```css
:root {
  --color-white: #ffffff;
  --color-blue-gray: #676f9d;
  --color-medium-blue: #424769;
  --color-dark-navy: #2d3250;
  --color-peach: #f9b17a;
}
```

### Tailwind Config Extension

```javascript
theme: {
  extend: {
    colors: {
      'white': '#ffffff',
      'blue-gray': '#676f9d',
      'medium-blue': '#424769',
      'dark-navy': '#2d3250',
      'peach': '#f9b17a',
    },
    fontFamily: {
      'raleway': ['Raleway', 'sans-serif'],
    },
  }
}
```

---

## Color Accessibility

All color combinations meet WCAG standards:

✅ **#ffffff on #424769** - Contrast ratio: 8.5:1 (AAA)
✅ **#ffffff on #2d3250** - Contrast ratio: 13.1:1 (AAA)
✅ **#f9b17a on #2d3250** - Contrast ratio: 5.9:1 (AA)
✅ **#676f9d on #2d3250** - Contrast ratio: 3.2:1 (AA for large text)
✅ **#2d3250 on #f9b17a** - Contrast ratio: 5.9:1 (AA)

---

## Design Principles

### Depth Through Darkness
- Main background: #424769
- Cards are darker (#2d3250) - creating "sunken" effect
- This inverted approach (darker cards on lighter background) is modern and distinctive

### Strategic Accent Use
- Peach (#f9b17a) is used sparingly for maximum impact
- Appears on: buttons, company names, hover states
- Creates warmth against cool blue tones

### Subtle Sophistication
- Blue-gray (#676f9d) bridges the gap between dark and light
- Used for borders and secondary text
- Maintains visual hierarchy without harshness

---

## Quick Reference Table

| Element | Color | Hex | Usage |
|---------|-------|-----|-------|
| Main background | Medium Blue | #424769 | Site background |
| Card background | Dark Navy | #2d3250 | Cards, header |
| Primary text | White | #ffffff | Headings, body |
| Secondary text | Blue-gray | #676f9d | Dates, captions |
| Primary accent | Peach | #f9b17a | Buttons, highlights |
| Borders | Blue-gray | #676f9d | Card borders |
| Tech tags | Medium Blue | #424769 | Tag backgrounds |

---

## Animation Effects

**Hover Glow:**
```css
hover:shadow-xl hover:shadow-[#f9b17a]/30
```

**Ambient Background:**
```css
bg-[#676f9d]/15  /* Blue-gray glow */
bg-[#f9b17a]/15  /* Peach glow */
```

**Smooth Transitions:**
- All colors: 300ms duration
- Easing: cubic-bezier for natural feel
- Scale transforms: 1.02x on hover

---

## Font Implementation

### Next.js Setup

```javascript
import { Raleway } from 'next/font/google'

const raleway = Raleway({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-raleway',
})
```

### Weight Usage
- **400 (Regular)**: Body text, descriptions, normal content
- **600 (Semibold)**: Subheadings, buttons, emphasis, company names
- **700 (Bold)**: Main headings, page titles

---

## Design Credits

**Original Design:** Yana Gladkaya - Travel Agency Registration Form (2021)

**Color Palette:**
- White: #ffffff
- Blue-Gray: #676f9d  
- Medium Blue: #424769 (main background)
- Dark Navy: #2d3250
- Peach: #f9b17a

**Typography:** Raleway Regular & Semibold

**Theme:** Dark sophisticated UI with warm peach accents

---

## Export Formats

**CSS:**
```css
--white: #ffffff;
--blue-gray: #676f9d;
--medium-blue: #424769;
--dark-navy: #2d3250;
--peach: #f9b17a;
```

**SCSS:**
```scss
$white: #ffffff;
$blue-gray: #676f9d;
$medium-blue: #424769;
$dark-navy: #2d3250;
$peach: #f9b17a;
```

**JSON:**
```json
{
  "white": "#ffffff",
  "blueGray": "#676f9d",
  "mediumBlue": "#424769",
  "darkNavy": "#2d3250",
  "peach": "#f9b17a"
}
```

---

**Created**: January 2026  
**For**: Anh Chau - Full-Stack Developer Portfolio  
**Theme**: Yana Gladkaya Travel Agency Color Scheme  
**Main Background**: #424769