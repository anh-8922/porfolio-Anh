# 📁 Complete Project Structure Guide

## Overview

This document shows you EXACTLY where to place each file in your project.

---

## Step 1: Create the Main Folder

```bash
mkdir anh-portfolio
cd anh-portfolio
```

---

## Step 2: File Placement

### 🔷 ROOT DIRECTORY FILES
Place these files directly in `anh-portfolio/`:

```
anh-portfolio/
├── Dockerfile                # Production Docker configuration
├── Dockerfile.dev           # Development Docker configuration
├── docker-compose.yml       # Docker Compose orchestration
├── .dockerignore           # Files to exclude from Docker
├── package.json            # Node.js dependencies
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── (create folders below)
```

### 🔷 CREATE FOLDER STRUCTURE

```bash
# From inside anh-portfolio/ directory:
mkdir -p src/app/projects
mkdir -p public
```

### 🔷 SRC/APP FILES
Place these in `src/app/`:

```
src/
└── app/
    ├── layout.jsx          # Root layout (provided as layout.jsx)
    ├── page.jsx           # Home page (rename home-page.jsx to page.jsx)
    ├── globals.css        # Global styles
    └── projects/
        └── page.jsx       # Projects page (the main component!)
```

### 🔷 PUBLIC FOLDER
Leave empty for now:

```
public/
└── (empty - add images/assets later if needed)
```

---

## Step 3: File Renaming Guide

Some files need to be renamed when you copy them:

| Provided File | → | Final Location & Name |
|--------------|---|----------------------|
| `Dockerfile` | → | `Dockerfile` (root) |
| `Dockerfile.dev` | → | `Dockerfile.dev` (root) |
| `docker-compose.yml` | → | `docker-compose.yml` (root) |
| `.dockerignore` | → | `.dockerignore` (root) |
| `package.json` | → | `package.json` (root) |
| `next.config.js` | → | `next.config.js` (root) |
| `tailwind.config.js` | → | `tailwind.config.js` (root) |
| `postcss.config.js` | → | `postcss.config.js` (root) |
| `layout.jsx` | → | `src/app/layout.jsx` |
| `home-page.jsx` | → | `src/app/page.jsx` ⚠️ RENAME! |
| `globals.css` | → | `src/app/globals.css` |
| `page.jsx` (projects) | → | `src/app/projects/page.jsx` |

---

## Step 4: Verification Checklist

Before running `docker-compose up`, verify:

### ✅ Root Directory Check
```bash
ls -la anh-portfolio/
```
Should show:
- [x] Dockerfile
- [x] Dockerfile.dev
- [x] docker-compose.yml
- [x] .dockerignore
- [x] package.json
- [x] next.config.js
- [x] tailwind.config.js
- [x] postcss.config.js
- [x] src/ (folder)
- [x] public/ (folder)

### ✅ src/app/ Check
```bash
ls -la anh-portfolio/src/app/
```
Should show:
- [x] layout.jsx
- [x] page.jsx (NOT home-page.jsx!)
- [x] globals.css
- [x] projects/ (folder)

### ✅ Projects Folder Check
```bash
ls -la anh-portfolio/src/app/projects/
```
Should show:
- [x] page.jsx (the main projects component)

---

## Complete Visual Structure

Here's the COMPLETE final structure:

```
anh-portfolio/
│
├── 🐳 DOCKER FILES (Root)
│   ├── Dockerfile                    # Production
│   ├── Dockerfile.dev                # Development
│   ├── docker-compose.yml            # Orchestration
│   └── .dockerignore                 # Exclude files
│
├── ⚙️ CONFIG FILES (Root)
│   ├── package.json                  # Dependencies
│   ├── next.config.js                # Next.js config
│   ├── tailwind.config.js            # Tailwind config
│   └── postcss.config.js             # PostCSS config
│
├── 📂 src/
│   └── app/
│       ├── layout.jsx                # Root layout
│       ├── page.jsx                  # Home page ⚠️ (rename home-page.jsx)
│       ├── globals.css               # Global styles
│       │
│       └── projects/
│           └── page.jsx              # Projects page (MAIN COMPONENT)
│
└── 📂 public/
    └── (empty for now)
```

---

## Common Mistakes to Avoid

### ❌ WRONG:
```
anh-portfolio/
└── page.jsx          # Projects page in root - WRONG!
└── src/
    └── projects/
        └── page.jsx  # Missing app/ folder - WRONG!
```

### ✅ CORRECT:
```
anh-portfolio/
└── src/
    └── app/
        └── projects/
            └── page.jsx  # Correct location!
```

---

## Quick Setup Commands

### All-in-One Setup:

```bash
# 1. Create structure
mkdir -p anh-portfolio/src/app/projects anh-portfolio/public
cd anh-portfolio

# 2. Copy files (you'll do this manually or via file manager)
# - Root: Dockerfile, docker-compose.yml, configs, etc.
# - src/app/: layout.jsx, page.jsx, globals.css
# - src/app/projects/: page.jsx

# 3. Verify structure
find . -type f -name "*.jsx" -o -name "*.json" -o -name "*.js" -o -name "Dockerfile*"

# 4. Start
docker-compose up
```

---

## File Permissions (Linux/Mac)

If you encounter permission issues:

```bash
# Set proper permissions
chmod +x anh-portfolio/
chmod -R 755 anh-portfolio/

# Or give Docker user ownership
sudo chown -R $USER:$USER anh-portfolio/
```

---

## Testing Your Structure

### Test 1: Validate Docker Files
```bash
cd anh-portfolio
docker-compose config
# Should show valid YAML without errors
```

### Test 2: Check Next.js Structure
```bash
# Ensure these paths exist:
test -f src/app/layout.jsx && echo "✅ Layout exists"
test -f src/app/page.jsx && echo "✅ Home page exists"
test -f src/app/projects/page.jsx && echo "✅ Projects page exists"
test -f src/app/globals.css && echo "✅ Styles exist"
```

### Test 3: Launch
```bash
docker-compose up
# Should build and start without errors
# Visit: http://localhost:3000
```

---

## What Each File Does

| File | Purpose |
|------|---------|
| `Dockerfile` | Production container build instructions |
| `Dockerfile.dev` | Development container with hot reload |
| `docker-compose.yml` | Defines services, ports, volumes |
| `.dockerignore` | Excludes files from Docker build |
| `package.json` | Lists npm dependencies |
| `next.config.js` | Next.js framework settings |
| `tailwind.config.js` | Tailwind CSS customization |
| `postcss.config.js` | CSS processing configuration |
| `src/app/layout.jsx` | Wraps all pages, imports globals.css |
| `src/app/page.jsx` | Home/landing page component |
| `src/app/globals.css` | Tailwind imports + global styles |
| `src/app/projects/page.jsx` | Your main projects showcase |

---

## Ready to Start?

1. ✅ Create `anh-portfolio` folder
2. ✅ Place all files in correct locations (use this guide!)
3. ✅ Rename `home-page.jsx` to `page.jsx`
4. ✅ Verify structure with commands above
5. ✅ Run `docker-compose up`
6. ✅ Open `http://localhost:3000`

---

**Created**: January 2026  
**For**: Anh Chau - Full-Stack Developer Portfolio  
**No Node.js required - Docker only!** 🐳