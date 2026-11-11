# Colour scheme

A light page with one indigo hero, built on the original brand colours: indigo `#424769`, navy `#2d3250` and peach `#f9b17a`. All colours are CSS custom properties at the top of `src/app/globals.css`.

| Token | Hex | Usage |
|---|---|---|
| `--page` | `#efede8` | Background behind the frame |
| `--paper` | `#ffffff` | Side rail and sections |
| `--ink` | `#1d1f2e` | Main text |
| `--muted` | `#5a5d70` | Secondary text, labels, dates |
| `--line` | `#e4e2dc` | Dividers |
| `--peach` | `#f9b17a` | Accent: link underlines, list markers, focus outline, hero lines |
| `--art-bg-1` → `--art-bg-2` | `#4a4f75` → `#2d3250` | Hero gradient |
| `--art-glow` | `#f9b17a` at 45% | Soft glow, top-right of the hero |
| `--art-line` | `#f9b17a` at 35% | Hero circle outline and rays |
| `--hero-first` / `--hero-last` | `#ffffff` | Name |
| `--hero-text` | `#d4d6e6` | Tagline |
| `--card` / `--card-shot` | `#ffffff` / `#f6f4ef` | "Selected work" card |

## Typography

- **Barlow Condensed** (400, 500, 600): name, headings, menu, labels.
- **Barlow** (400, 500, 600): body text.

## Accessibility

- Body text is ink or muted grey on white; hero text is white or pale grey on indigo. Both pass WCAG AA.
- Peach is used for lines, shapes and underlines, never for small text on white.
- The hero artwork is decorative SVG, hidden from screen readers.
