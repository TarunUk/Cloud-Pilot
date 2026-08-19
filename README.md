# 🚀 CloudPilot — Cloud Infrastructure Command Center

<div align="center">

![CloudPilot Banner](https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop)

**Your cloud infrastructure. One command center.**  
*A modern, high-performance CloudOps & Observability platform interface designed to unify deployments, container clusters, and real-time telemetry.*

[![Live Demo](https://img.shields.io/badge/Live_Demo-cloud--pilot--pi.vercel.app-C069FF?style=for-the-badge&logo=vercel&logoColor=white)](https://cloud-pilot-pi.vercel.app/)
[![React 19](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

<h3>
  <a href="https://cloud-pilot-pi.vercel.app/">🌐 View Live Application</a>
</h3>

</div>

---

## 🌟 Overview

**CloudPilot** is a next-generation frontend concept for an enterprise-grade cloud operations command center. Built with a signature cosmic purple & radiant pink visual aesthetic, it provides DevOps teams and developers with real-time clarity across multi-region cloud environments, Kubernetes clusters, continuous delivery pipelines, and sub-millisecond telemetry feeds.

🔗 **Live Preview**: [https://cloud-pilot-pi.vercel.app/](https://cloud-pilot-pi.vercel.app/)

---

## ✨ Key Features

### 🌌 1. Cosmic Hero & Brand Atmosphere
- **Cosmic Lighting Engine**: Multi-layered ambient lighting, dynamic light beams, and particle star systems built with `framer-motion`.
- **Multi-Platform Infinite Slider**: Seamless looping marquee showcasing trusted cloud and blockchain technology partners.
- **Glassmorphic Navigation**: Sticky progressive-blur header with integrated system health status.

### 🎛️ 2. 3D Interactive Command Cockpit
- **Physics-Based Parallax Tilt**: Real-time 3D mouse tracking that rotates and tilts the dashboard interface with multi-speed depth layers.
- **Live Telemetry Stream**: Animated SVG waveform telemetry visualizer tracking CPU load, memory utilization, and cluster uptime.
- **Orbiting Satellite Pills**: Floating status badges reporting 98.7% cluster health and sub-millisecond ingest speed.

### 🔄 3. Continuous Delivery & Pipeline Narrative
- **Automated Step Conduits**: 5-stage visual delivery pipeline (`Code` ➔ `Build` ➔ `Test` ➔ `Deploy` ➔ `Live`).
- **Canary Rollout Visualizer**: Zero-downtime canary deployment monitoring with live request verification.

### 📊 4. Real-Time Observability & Monitoring
- **Sub-Second Waveform Graphs**: Dynamic SVG telemetry wave with automated anomaly detection indicators.
- **Core Service Matrix**: Instant latency and error-rate monitoring for microservices and frontend edge nodes.

### 🪐 5. Living Space Gravity Canvas
- **Dynamic Particle Field**: Background canvas simulating gravitational pull and velocity physics with interactive cursor attraction.
- **Orbiting Satellite Nodes**: Subtle celestial tracks pulsing with cosmic magenta and violet accents.

### 🎯 6. Interactive Text-Hover Footer
- **Cursor Masking Effect**: Custom SVG radial gradient mask tracking cursor coordinates across the giant `CLOUDPILOT` wordmark.
- **Radial Ambient Backdrop**: Smooth bottom gradient integration with quick links, security compliance specs (SOC-2 Type II), and social channels.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/) |
| **Language** | [TypeScript 5.7](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com/) + PostCSS |
| **Component Architecture** | [shadcn/ui](https://ui.shadcn.com/) (`@/components/ui/`) |
| **Animation Engine** | [Framer Motion](https://www.framer.com/motion/) + [Motion](https://motion.dev/) |
| **Iconography** | [Lucide React](https://lucide.dev/) |
| **Utilities** | `clsx` + `tailwind-merge` + `class-variance-authority` |
| **Deployment** | [Vercel](https://cloud-pilot-pi.vercel.app/) (Single Page Application configuration) |

---

## 📁 Project Structure

```text
Cloud-Pilot/
├── public/
│   └── cloudpilot-icon.svg          # Favicon & brand asset
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx            # Accessible button primitive (cva)
│   │   │   ├── foxy-hero.tsx         # Cosmic hero section primitive
│   │   │   ├── hover-footer.tsx      # SVG cursor text-hover primitive
│   │   │   ├── infinite-slider.tsx   # Continuous loop slider
│   │   │   ├── progressive-blur.tsx  # Multi-tier edge blur
│   │   │   └── hero-section-5.tsx    # Orbital geometry alternative
│   │   ├── DeploySection.tsx         # CI/CD pipeline showcase
│   │   ├── FinalCTA.tsx              # Conversion call-to-action
│   │   ├── Footer.tsx                # Interactive hover footer
│   │   ├── Hero.tsx                  # Main hero section
│   │   ├── HeroDashboard.tsx         # 3D interactive command cockpit
│   │   ├── HowItWorks.tsx            # 3-step typographic onboarding
│   │   ├── Logo.tsx                  # Animated energy circuit brandmark
│   │   ├── MonitoringSection.tsx     # Real-time observability matrix
│   │   ├── Navbar.tsx                # Glassmorphic top navigation
│   │   └── SpaceGravityCanvas.tsx    # Living physics particle canvas
│   ├── lib/
│   │   └── utils.ts                  # Classnames merger (`cn`)
│   ├── App.tsx                       # Root application component
│   ├── index.css                     # Cosmic CSS tokens & base styling
│   └── main.tsx                      # DOM entry point
├── index.html                        # HTML template with metadata
├── package.json                      # Dependencies and scripts
├── tailwind.config.js                # Custom theme & color extensions
├── tsconfig.json                     # TypeScript configuration with @/* aliases
├── vercel.json                       # Vercel deployment & cache rules
└── vite.config.ts                    # Vite build & alias configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0 or higher)
- npm or yarn or pnpm

### 1. Clone the repository
```bash
git clone https://github.com/TarunUk/Cloud-Pilot.git
cd Cloud-Pilot
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` to view the app.

### 4. Build for production
```bash
npm run build
```

### 5. Type checking
```bash
npm run typecheck
```

---

## 🌐 Deployment to Vercel

The live production deployment is available at:  
👉 **[https://cloud-pilot-pi.vercel.app/](https://cloud-pilot-pi.vercel.app/)**

This project is pre-configured with a production-ready [`vercel.json`](./vercel.json) file including SPA route rewrites and immutable asset caching.

### Deploy with Vercel Git Integration (Recommended)
1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Deploy CloudPilot to Vercel"
   git push origin main
   ```
2. Go to **[vercel.com/new](https://vercel.com/new)** and import your repository.
3. Vercel automatically detects Vite settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

### Deploy via Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

---

## 🎨 Design Philosophy

CloudPilot bridges the gap between high-utility developer tooling and immersive high-end digital aesthetics:
- **Depth & Hierarchy**: Multi-layer lighting and soft specular rims provide dimensional focus.
- **Cosmic Palette**: Deep `#0C0414` midnight base paired with glowing magenta, lilac, and neon purple (`#C069FF`, `#E879F9`, `#EC4899`).
- **Responsive Geometry**: Fully fluid layouts optimized for everything from small mobile displays (`390px`) to ultra-wide monitors (`1440px+`).
- **Smooth Performance**: 60fps animations utilizing hardware-accelerated transforms and canvas rendering.

---

## 📄 Disclaimer

CloudPilot is a fictional cloud operations and observability concept created for design and engineering demonstration purposes. All telemetry metrics, service graphs, and cluster states are simulated on the client side.

---

## 👨‍💻 Author

**Tarun Rajput**  
- GitHub: [@TarunUk](https://github.com/TarunUk)  
- Live Project: [https://cloud-pilot-pi.vercel.app/](https://cloud-pilot-pi.vercel.app/)  
- Focus: Cloud Computing & Frontend Engineering
