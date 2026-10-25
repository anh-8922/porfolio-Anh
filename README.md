# 🎨 Anh Chau - Portfolio

A modern, sophisticated portfolio website showcasing full-stack development projects. Built with Next.js, featuring a dark theme with elegant animations and responsive design.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)
![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=flat&logo=docker)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)

---

## ✨ Features

- 🎨 **Sophisticated Dark Theme** - Based on Yana Gladkaya's design palette
- 🎭 **Animated Background** - Multi-layered gradient orbs and geometric shapes
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Next.js 14** - App Router with React Server Components
- 🗂️ **Data-driven timeline** - all experience, projects and training live in one JSON file
- 🐳 **Docker Ready** - Complete Docker setup for development and production
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- ♿ **Accessible** - WCAG AA text contrast, semantic landmarks, reduced-motion support
- 🎬 **Smooth Animations** - CSS animations and transitions

---

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| White | `#ffffff` | Primary text |
| Blue-Gray | `#676f9d` | Secondary text, borders |
| Medium Blue | `#424769` | Main background |
| Dark Navy | `#2d3250` | Cards, header |
| Peach | `#f9b17a` | CTAs, accents |

**Font:** Raleway (400, 600, 700)

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
│   └── app/
│       ├── projects/
│       │   └── page.jsx          # Experience timeline page
│       ├── layout.jsx             # Root layout with Raleway font
│       ├── page.jsx               # Home/landing page
│       └── globals.css            # Global styles & Tailwind
│   ├── components/Timeline.jsx    # Timeline + project blocks
│   ├── data/timeline.json         # ← ALL CONTENT LIVES HERE
│   └── lib/format.js              # Date formatting
├── public/                        # Static assets
├── Dockerfile                     # Production Docker config
├── Dockerfile.dev                 # Development Docker config
├── docker-compose.yml             # Docker orchestration
├── next.config.js                 # Next.js configuration
├── tailwind.config.js             # Tailwind CSS config
├── package.json                   # Dependencies
└── README.md                      # This file
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

### Home Page (`/`)
- Hero section with animated background
- Call-to-action buttons
- Contact links
- Sophisticated gradient orbs and geometric shapes

### Experience Page (`/projects`)
- Timeline of roles, newest first, each with projects, tasks and stack tags
- Side projects (shown when `sideProjects` has entries)
- Training section

---

## 🎨 Customization

### Update Content

All content lives in **`src/data/timeline.json`**. You never need to touch the page code to add work.

- **New role:** add an object to the top of `experience` (newest first).
- **New project or task:** add to that role's `projects` array, or add a line to a project's `tasks`.
- **Side project:** add to `sideProjects` with a `repo` link; the section appears automatically once it has entries.
- **Course:** add to `learning`. Use `"status": "in progress"` for an In progress badge.
- **Dates:** `"YYYY-MM"` or `"YYYY"`. Use `"end": null` for a current role (shows "Present").

```json
{
  "name": "Project name",
  "tasks": ["Verb + what + result"],
  "stack": ["React", "Node.js"],
  "link": "https://live-site.com",
  "repo": "https://github.com/anh-8922/repo"
}
```

### Change Colors

Colors are defined using Tailwind's arbitrary values:

```jsx
bg-[#424769]    // Background
text-[#ffffff]  // Text
border-[#676f9d] // Borders
```

See `documents/COLOR-SCHEME.md` for the full colour reference.

### Modify Animations

Adjust animation timing in the styled-jsx blocks or Tailwind classes:

```jsx
// Duration
transition-all duration-300

// Animation delay
style={{ animationDelay: '0.2s' }}
```

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
- **Icons:** Lucide React
- **Font:** Google Fonts (Raleway)
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

- Design inspiration: Yana Gladkaya's travel agency registration form
- Color palette: #ffffff, #676f9d, #424769, #2d3250, #f9b17a
- Typography: Raleway font family

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

**Last Updated:** October 2026