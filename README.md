# Semih Utku Canverdi — AI, Deep Learning & Software Engineering Portfolio

Luxury Obsidian & Champagne Gold interactive portfolio crafted for **Semih Utku Canverdi**.

## ✨ Key Features
- **Cinematic Neural Boot Preloader**: Live percentage counter, SVG monogram draw animation, and split-shutter reveal.
- **Interactive Cursor & 3D Tilt Spotlight Cards**: Custom dual-layer magnetic cursor, radial cursor spotlight (`--mouse-x`, `--mouse-y`), and 3D perspective tilt on all cards.
- **60 FPS Interactive Neural Constellation Canvas**: Mouse-reactive synaptic graph with click shockwaves + Hero 3D Tensor Topology canvas.
- **Live Interactive AI Lab**:
  1. **VISTA Lab — Deep Learning Piano Finger Positioning Simulator**: Playable grand piano synth (Web Audio API) with real-time Softmax finger probability distribution (`P1..P5`) and Bach/Chopin sequence runners.
  2. **Knight Path Finder & AI Agent Visualizer**: Interactive 8x8 graph traversal board computing optimal L-move routes around obstacles via BFS.
- **Bilingual (TR / EN) Instant Switcher** & **Multi-Track CV Viewer Modal** (synthesizing all 4 CV tracks).

## 🚀 Local Preview
```bash
npx serve . -l 3000
```
Then open `http://localhost:3000`.

## 🌐 Custom Domain & Deployment Guide (Vercel — Recommended, Free SSL)
1. **Deploy via Vercel CLI (Fastest)**:
   ```bash
   npx vercel
   ```
   Or push this folder to a GitHub repo (`github.com/sutkucanverdi/portfolio`) and import it at [vercel.com/new](https://vercel.com/new).
2. **Connect Your Domain**:
   - In Vercel Dashboard → **Settings** → **Domains**, enter your new domain (e.g., `semihutkucanverdi.com` or `utkucanverdi.com`).
   - In your domain registrar's DNS panel (Cloudflare, Namecheap, GoDaddy, Google/Squarespace, etc.), add:
     - **A Record**: Host `@` → Value `76.76.21.21`
     - **CNAME Record**: Host `www` → Value `cname.vercel-dns.com`
   - SSL certificate (`https://`) will activate automatically within a few minutes.
