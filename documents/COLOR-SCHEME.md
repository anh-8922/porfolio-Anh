# Colour scheme

The site keeps the original indigo and peach brand colours on a light, minimal layout. All colours are CSS custom properties at the top of `src/app/globals.css`.

| Token | Hex | Usage |
|---|---|---|
| `--indigo` | `#424769` | Hero panel |
| `--indigo-deep` | `#2d3250` | Hero lower band |
| `--peach` | `#f9b17a` | Accent shapes, link underlines, list markers |
| `--sand` | `#e8dfd1` | Hero shape, card tiles |
| `--ink` | `#1d1f2e` | Main text |
| `--muted` | `#5a5d70` | Secondary text (about 6:1 on white) |
| `--line` | `#e4e2dc` | Dividers |
| `--paper` | `#ffffff` | Page frame |
| `--page` | `#efede8` | Background behind the frame |

## Typography

- **Barlow Condensed** (400, 500, 600): name, headings, menu, labels. Usually uppercase with letter-spacing.
- **Barlow** (400, 500, 600): body text.

Both load through `next/font/google` in `src/app/layout.jsx`. The CSS falls back to the font names directly if the variables are missing.

## Accessibility

- Body text is ink or muted on white; hero text is white on indigo.
- Peach is used for shapes and underlines, never for small text on white.
- Focus outlines are 3px peach with an offset.
