# 🐳 Docker Setup Guide - Next.js Portfolio

Complete guide to running your Next.js portfolio using Docker (no Node.js installation required!)

---

## Prerequisites

### Install Docker Desktop

**Windows:**
1. Download: [Docker Desktop for Windows](https://www.docker.com/products/docker-desktop/)
2. Run the installer
3. Restart your computer
4. Verify: Open Command Prompt and run `docker --version`

**Mac:**
1. Download: [Docker Desktop for Mac](https://www.docker.com/products/docker-desktop/)
2. Drag to Applications folder
3. Open Docker Desktop
4. Verify: Open Terminal and run `docker --version`

**Linux:**
```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install docker.io docker-compose
sudo systemctl start docker
sudo systemctl enable docker

# Verify
docker --version
docker-compose --version
```

---

## 🚀 Quick Start (3 Commands)

### Option 1: Using Docker Compose (Recommended)

```bash
# 1. Create project folder and navigate to it
mkdir anh-portfolio && cd anh-portfolio

# 2. Copy all provided files into this folder:
#    - Dockerfile.dev
#    - docker-compose.yml
#    - .dockerignore
#    - package.json
#    - next.config.js
#    - Create src/app/projects/page.jsx with the component code

# 3. Start the development server
docker-compose up
```

That's it! Visit: `http://localhost:3000/projects`

### Option 2: Using Docker Commands Directly

```bash
# Build the image
docker build -f Dockerfile.dev -t anh-portfolio .

# Run the container
docker run -p 3000:3000 -v $(pwd):/app anh-portfolio
```

---

## 📁 Project Structure

Create this structure in your project folder:

```
anh-portfolio/
├── Dockerfile.dev          # Development Docker config
├── Dockerfile              # Production Docker config
├── docker-compose.yml      # Docker Compose config
├── .dockerignore          # Files to exclude from Docker
├── package.json           # Dependencies
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # (create this)
├── postcss.config.js      # (create this)
├── src/
│   └── app/
│       ├── projects/
│       │   └── page.jsx   # Your projects page
│       ├── layout.jsx     # Root layout
│       ├── page.jsx       # Home page
│       └── globals.css    # Tailwind styles
└── public/                # Static assets
```

---

## 🔧 Step-by-Step Setup

### Step 1: Create Project Directory

```bash
mkdir anh-portfolio
cd anh-portfolio
```

### Step 2: Copy Docker Files

Copy these files into your project root:
- ✅ `Dockerfile.dev`
- ✅ `docker-compose.yml`
- ✅ `.dockerignore`
- ✅ `package.json`
- ✅ `next.config.js`

### Step 3: Create Next.js Project Structure

```bash
# Create directories
mkdir -p src/app/projects
mkdir -p public

# You'll add files to these directories next
```

### Step 4: Create Required Configuration Files

#### A. Create `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### B. Create `postcss.config.js`:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

#### C. Create `src/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-slate-950 text-white;
  }
}
```

#### D. Create `src/app/layout.jsx`:

```javascript
import './globals.css'

export const metadata = {
  title: 'Anh Chau - Full-Stack Developer',
  description: 'Portfolio of Anh Chau, Full-Stack Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

#### E. Create `src/app/page.jsx` (home page):

```javascript
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">Anh Chau</h1>
        <p className="text-xl text-slate-400 mb-8">Full-Stack Developer</p>
        <a 
          href="/projects" 
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-medium hover:shadow-lg transition-all"
        >
          View Projects
        </a>
      </div>
    </main>
  )
}
```

#### F. Add `src/app/projects/page.jsx`:

Copy the content from the `page.jsx` file I provided earlier.

### Step 5: Start Development Server

```bash
docker-compose up
```

Or with rebuild:
```bash
docker-compose up --build
```

### Step 6: Access Your Application

Open browser: `http://localhost:3000`

Projects page: `http://localhost:3000/projects`

---

## 🛠️ Docker Commands Cheat Sheet

### Development

```bash
# Start development server
docker-compose up

# Start in detached mode (background)
docker-compose up -d

# Rebuild and start
docker-compose up --build

# Stop containers
docker-compose down

# View logs
docker-compose logs -f

# Access container shell
docker-compose exec nextjs-portfolio sh
```

### Managing Containers

```bash
# List running containers
docker ps

# Stop all containers
docker stop $(docker ps -q)

# Remove all containers
docker rm $(docker ps -a -q)

# Remove all images
docker rmi $(docker images -q)

# Prune unused resources
docker system prune -a
```

### Production Build

```bash
# Build production image
docker build -t anh-portfolio:prod .

# Run production container
docker run -p 3000:3000 anh-portfolio:prod

# Or use the npm script
docker-compose -f docker-compose.yml up
```

---

## 🔥 Hot Reload in Docker

The configuration includes hot reload! Any changes you make to files will automatically refresh in the browser.

**How it works:**
- Volume mounting: Your local files are mounted into the container
- Webpack watch: Configured to poll for changes
- Next.js dev server: Automatically detects changes

**If hot reload isn't working:**
1. Check `next.config.js` has polling enabled
2. Restart the container: `docker-compose restart`
3. Rebuild: `docker-compose up --build`

---

## 🐛 Troubleshooting

### Issue: "Cannot find module 'next'"

**Solution:** Rebuild the container
```bash
docker-compose down
docker-compose up --build
```

### Issue: Port 3000 already in use

**Solution 1:** Stop the conflicting process
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

**Solution 2:** Use a different port
Edit `docker-compose.yml`:
```yaml
ports:
  - "3001:3000"  # Change 3001 to any available port
```

### Issue: Changes not reflecting

**Solution:**
```bash
# Restart container
docker-compose restart

# Or rebuild
docker-compose down
docker-compose up --build
```

### Issue: Permission denied errors (Linux)

**Solution:**
```bash
# Add user to docker group
sudo usermod -aG docker $USER

# Logout and login again
```

### Issue: Docker Desktop not starting (Windows)

**Solution:**
1. Enable WSL 2: `wsl --install`
2. Enable Virtualization in BIOS
3. Restart computer

---

## 📦 File Checklist

Before running `docker-compose up`, ensure you have:

- [x] `Dockerfile.dev` - Development configuration
- [x] `Dockerfile` - Production configuration
- [x] `docker-compose.yml` - Compose configuration
- [x] `.dockerignore` - Exclude unnecessary files
- [x] `package.json` - Dependencies
- [x] `next.config.js` - Next.js config
- [x] `tailwind.config.js` - Tailwind config
- [x] `postcss.config.js` - PostCSS config
- [x] `src/app/layout.jsx` - Root layout
- [x] `src/app/page.jsx` - Home page
- [x] `src/app/globals.css` - Global styles
- [x] `src/app/projects/page.jsx` - Projects page

---

## 🚢 Deployment

### Option 1: Deploy with Docker to VPS

```bash
# On your server
git clone your-repo
cd anh-portfolio

# Build and run
docker-compose -f docker-compose.prod.yml up -d
```

### Option 2: Deploy to Container Registry

```bash
# Build image
docker build -t your-username/anh-portfolio .

# Push to Docker Hub
docker push your-username/anh-portfolio

# Pull and run on server
docker pull your-username/anh-portfolio
docker run -p 3000:3000 your-username/anh-portfolio
```

### Option 3: Deploy to Cloud Platforms

**Render.com:**
- Connect your GitHub repo
- Set Dockerfile as source
- Deploy automatically

**Railway.app:**
- Connect GitHub
- Railway auto-detects Dockerfile
- One-click deploy

**Heroku:**
```bash
heroku container:push web
heroku container:release web
```

---

## 💡 Pro Tips

### 1. Volume Mounting for Development
The docker-compose.yml mounts your source code:
```yaml
volumes:
  - .:/app              # Your code
  - /app/node_modules   # Exclude node_modules
  - /app/.next          # Exclude build cache
```

### 2. Environment Variables
Create `.env.local`:
```env
NEXT_PUBLIC_API_URL=your-api-url
```

Add to docker-compose.yml:
```yaml
env_file:
  - .env.local
```

### 3. Multi-Stage Builds
The production Dockerfile uses multi-stage builds for smaller images:
- Stage 1: Install dependencies
- Stage 2: Build application
- Stage 3: Production runtime

### 4. Container Optimization
```bash
# Check image size
docker images anh-portfolio

# Optimize by cleaning cache
docker builder prune
```

---

## 🎯 Quick Reference

| Task | Command |
|------|---------|
| Start dev server | `docker-compose up` |
| Stop server | `docker-compose down` |
| Rebuild | `docker-compose up --build` |
| View logs | `docker-compose logs -f` |
| Shell access | `docker-compose exec nextjs-portfolio sh` |
| Production build | `docker build -t anh-portfolio .` |

---

## 📚 Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Next.js Docker Guide](https://nextjs.org/docs/deployment#docker-image)

---

## ✅ Success Checklist

You're ready when:
- [x] Docker Desktop is installed and running
- [x] All required files are in place
- [x] `docker-compose up` runs without errors
- [x] Browser shows your page at `http://localhost:3000`
- [x] Hot reload works when you edit files
- [x] Projects page loads at `/projects`

---

**No Node.js required! Everything runs in Docker containers.** 🐳

**Created for:** Anh Chau - Full-Stack Developer  
**Last Updated:** January 2026