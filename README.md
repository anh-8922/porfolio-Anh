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
- ⚡ **Next.js 14** - Latest App Router with React Server Components
- 🐳 **Docker Ready** - Complete Docker setup for development and production
- 🎯 **SEO Optimized** - Meta tags and semantic HTML
- ♿ **Accessible** - WCAG AAA compliant color contrasts
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
git clone https://github.com/YOUR_USERNAME/anh-portfolio.git
cd anh-portfolio

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
│       │   └── page.jsx          # Projects showcase page
│       ├── layout.jsx             # Root layout with Raleway font
│       ├── page.jsx               # Home/landing page
│       └── globals.css            # Global styles & Tailwind
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

### Projects Page (`/projects`)
- 5 featured projects from professional experience
- Project cards with hover effects
- Technology tags
- Status badges (Active/Completed)
- External project links

---

## 🎨 Customization

### Update Projects

Edit `src/app/projects/page.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    company: "Company Name",
    period: "Start - End Date",
    status: "Active", // or "Completed"
    link: "https://your-link.com",
    description: "Project description...",
    highlights: [
      "Key achievement 1",
      "Key achievement 2"
    ],
    technologies: ["Tech1", "Tech2"],
    color: "#f9b17a" // Project accent color
  },
  // Add more projects...
];
```

### Change Colors

Colors are defined using Tailwind's arbitrary values:

```jsx
bg-[#424769]    // Background
text-[#ffffff]  // Text
border-[#676f9d] // Borders
```

See `COLOR_SCHEME.md` for complete color reference.

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

# Type check (if using TypeScript)
npm run type-check
```

---

## 📝 Documentation

- `COLOR_SCHEME.md` - Complete color palette reference
- `HOMEPAGE_BACKGROUND_DESIGN.md` - Homepage background details
- `DOCKER_SETUP_GUIDE.md` - Comprehensive Docker guide
- `PROJECT_STRUCTURE.md` - File organization guide
- `TROUBLESHOOTING.md` - Common issues and solutions

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

This project is open source and available under the [MIT License](LICENSE).

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

**Live Demo:** [Your deployment URL]

**Last Updated:** January 2026