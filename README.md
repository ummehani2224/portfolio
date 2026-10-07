# Ummehani Burhanuddin — Portfolio Website

> Personal Portfolio of **Ummehani Burhanuddin**, Software Engineer & AI/ML Engineer.

[![Vercel](https://img.shields.io/badge/Deploy%20with-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/new)
[![Render](https://img.shields.io/badge/Deploy%20to-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com)

---

## 🚀 Live Deployments

- **Vercel**: Deployed via [Vercel](https://vercel.com/) with high-speed CDN caching for static frames and assets.
- **Render**: Deployed via [Render](https://render.com/) Static Site with automatic HTTPS and global edge routing.

---

## 🛠️ Project Structure

```text
portfolio/
├── assets/                          # Images, resume PDF, certificate PDFs/PNGs
├── frames/                          # High-performance animation frames
├── index.html                       # Semantic, accessible HTML5 layout
├── style.css                        # Modern CSS design system & typography
├── app.js                           # UI interactions, certificate lightbox modal
├── server.js                        # Node.js local & web server
├── server.ps1                       # PowerShell zero-dependency local server
├── start.bat                        # 1-click Windows local server launcher
├── package.json                     # NPM metadata and scripts
├── vercel.json                      # Vercel CDN caching and header rules
├── render.yaml                      # Render Blueprint specification
└── .gitignore                       # Ignored files (logs, system files)
```

---

## 🚢 How to Deploy

### Option 1: Deploy to Vercel (Recommended)

1. Push this repository to your GitHub account (e.g. `github.com/ummehani2224/portfolio`).
2. Go to [vercel.com/new](https://vercel.com/new).
3. Sign in with GitHub and click **Import** next to your `portfolio` repository.
4. Keep the default settings (Framework Preset: **Other**, Root Directory: `./`).
5. Click **Deploy**. Your site will be live in ~15 seconds at `https://your-portfolio.vercel.app`!

### Option 2: Deploy to Render

#### As a Static Site (Free, Never Sleeps):
1. Push this repository to GitHub.
2. Go to the [Render Dashboard](https://dashboard.render.com/).
3. Click **New +** > **Static Site**.
4. Connect your GitHub repository.
5. Set:
   - **Name**: `ummehani-portfolio`
   - **Branch**: `main`
   - **Build Command**: *(leave empty)*
   - **Publish Directory**: `.`
6. Click **Create Static Site**. Render will provision your URL at `https://ummehani-portfolio.onrender.com`.

#### Or via Blueprint:
Render automatically detects `render.yaml` in this repository when you choose **New + > Blueprint**.

---

## 💻 Running Locally

### Using the Batch Launcher:
Double-click `start.bat`.

### Using Node.js:
```bash
npm start
# or
node server.js
```
Then open `http://localhost:3000` in your browser.
