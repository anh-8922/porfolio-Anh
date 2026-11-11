# 🎨 Anh Chau - Portfolio

Portfolio of Anh Chau, web developer. A simple, accessible one-page site built with Next.js, with case studies of WordPress and front-end work.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)
![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=flat&logo=docker)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)

---

## ✨ Features

- **Less-is-more layout** - white side rail with the menu, one full-height colour panel as the hero, quiet white sections below
- **Case studies, not a CV list** - each project shows who it was for, my role, what I did and the result
- **Data-driven** - all content lives in two JSON files in `src/data/`
- **Accessible** - skip link, semantic landmarks and heading order, visible keyboard focus, AA text contrast, reduced-motion support
- **Responsive** - the side rail becomes a scrollable top menu on small screens
- **Next.js 14** - App Router, statically prerendered; Docker setup for development and production

---

## 🎨 Colour palette

| Colour | Hex | Usage |
|-------|-----|-------|
| Indigo | `#424769` | Hero panel |
| Dark navy | `#2d3250` | Hero lower band |
| Peach | `#f9b17a` | Accent shapes, link underlines, list markers |
| Sand | `#e8dfd1` | Hero shape, card tiles |
| Ink | `#1d1f2e` | Main text |
| Muted | `#5a5d70` | Secondary text |
| Paper / page | `#ffffff` / `#efede8` | Page frame and background |

**Fonts:** Barlow Condensed (headings, menu, labels) and Barlow (body text), loaded with `next/font/google`.

---

## 🚀 Quick Start

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed
- Git installed

### Installation

```bash
# Clone the repository
git clone https://github.com/anh-8922/porfolio-Anh.git
cd porfolio-Anh

# Start with Docker
docker-compose up

# Or rebuild if needed
docker-compose up --build
```

Visit: **http://localhost:3000**

---

## 📁 Project Structure

```
anh-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.jsx        # Fonts and page metadata
│   │   ├── page.jsx          # The one-page site: hero, about, work, experience, skills, training, contact
│   │   └── globals.css       # All site styles (colour tokens at the top)
│   ├── components/
│   │   ├── Rail.jsx          # Side rail / top menu, highlights the section in view
│   │   ├── Hero.jsx          # Colour panel, name and "Selected work" card
│   │   └── CaseStudy.jsx     # One case study
│   ├── data/
│   │   ├── work.json         # ← Site details, about text, case studies, skills
│   │   └── timeline.json     # ← Experience and training
│   └── lib/format.js         # Date formatting
├── next.config.js            # Includes the /projects → /#work redirect
└── ...
```

---

## 🛠️ Development

### Run Locally with Docker

```bash
# Start development server
docker-compose up

# Start in background
docker-compose up -d

# View logs
docker-compose logs -f

# Stop containers
docker-compose down

# Rebuild after changes
docker-compose down && docker-compose up --build
```

### Run Locally without Docker

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 📄 Pages

- **`/`** - the whole portfolio on one page.
- **`/projects`** - permanently redirects to `/#work`, so old links still work.

---

## 🎨 Customisation

### Update content

- **Case studies, skills, about text, contact links:** `src/data/work.json`. Each case study has `org`, `years`, `title`, `summary`, `facts`, `points` and an optional `link`.
- **Experience and training:** `src/data/timeline.json` (newest first). Experience rows show `role`, `company` and `summary`; training rows show `name`, `provider` and dates, with `"status": "in progress"` for a badge.
- **Dates:** `"YYYY-MM"` or `"YYYY"`; `"end": null` shows "Present".

### Change colours or fonts

Colour tokens are at the top of `src/app/globals.css`. Fonts are set in `src/app/layout.jsx`.

---

## 🐳 Docker Commands

| Command | Description |
|---------|-------------|
| `docker-compose up` | Start development server |
| `docker-compose up -d` | Start in background |
| `docker-compose down` | Stop containers |
| `docker-compose logs -f` | View live logs |
| `docker-compose restart` | Restart containers |
| `docker-compose exec nextjs-portfolio sh` | Access container shell |

---

## 📦 Technologies

- **Framework:** Next.js 14.2 (App Router)
- **Styling:** Tailwind CSS 3.4
- **Fonts:** Barlow Condensed and Barlow (Google Fonts via `next/font`)
- **Container:** Docker & Docker Compose
- **Package Manager:** npm

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to [Vercel](https://vercel.com) for automatic deployments.

### Deploy with Docker

```bash
# Build production image
docker build -t anh-portfolio:prod .

# Run production container
docker run -p 3000:3000 anh-portfolio:prod
```

### Deploy to Other Platforms

- **Netlify:** Connect GitHub repo
- **Railway:** Deploy with Dockerfile
- **Render:** Connect GitHub repo

---

## 🧪 Testing

```bash
# Lint code
npm run lint

```

---

## 📝 Documentation

- `documents/COLOR-SCHEME.md` - Colour palette reference
- `documents/DOCKER_SETUP_GUIDE.md` - Docker guide
- `documents/PROJECT_STRUCTURE.md` - File organisation
- `documents/QUICK_START.md` - Quick start

---

## 🤝 Contributing

This is a personal portfolio project, but feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

All rights reserved. Content and code © Anh Chau.

---

## 👤 Author

**Anh Chau**
- 📧 Email: [anhchau8922@gmail.com](mailto:anhchau8922@gmail.com)
- 💼 LinkedIn: [anh-kim-chau](https://linkedin.com/in/anh-kim-chau)
- 📍 Location: Greater London, UK

---

## 🙏 Acknowledgments

- Layout inspired by minimal photographer portfolios with a side menu and full-bleed hero
- Original colour palette: #424769, #2d3250, #f9b17a

---

## 📊 Project Stats

- **Next.js Version:** 14.2.35
- **React Version:** 18.3.0
- **Node Version:** 18+ (Alpine Linux in Docker)
- **Build Time:** ~30-45 seconds
- **Bundle Size:** Optimized with Next.js standalone output

---

## 🔄 Updates

### Latest Changes
- ✅ Redesigned as a light, one-page "less is more" layout: side rail, colour-panel hero, case studies
- ✅ Content split into `work.json` (case studies, skills) and `timeline.json` (experience, training)
- ✅ `/projects` now redirects to `/#work`; removed the unused `lucide-react` dependency
- ✅ Switched fonts from Raleway to Barlow Condensed and Barlow
- ✅ Rebuilt /projects as a data-driven experience timeline (`src/data/timeline.json`)
- ✅ Added Training and Side projects sections, GitHub links
- ✅ Fixed muted-text contrast, added reduced-motion support
- ✅ Fixed Dockerfile (`npm Install` typo, missing `public/`), added `.dockerignore`
- ✅ Implemented exact Yana Gladkaya color scheme
- ✅ Added Raleway font family
- ✅ Created sophisticated homepage background
- ✅ Added animated geometric shapes
- ✅ Implemented staggered fade-in animations
- ✅ Enhanced button hover effects
- ✅ Added Docker support for easy deployment

---

## 📞 Support

If you have questions or need help:

1. Check the documentation files
2. Review `TROUBLESHOOTING.md`
3. Open an issue on GitHub
4. Contact: anhchau8922@gmail.com

---

**Built with ❤️ using Next.js and Docker**

**Live:** [chauanh.netlify.app](https://chauanh.netlify.app)

**Last Updated:** November 2026