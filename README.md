# Imesh Munasinghe • Professional Software Developer Portfolio

A responsive, high-performance web portfolio built using React, TypeScript, Vite, and Vanilla CSS. Designed with modern design aesthetics, clean interactive elements, dark/light theme switching, and optimized search engine indexing (SEO).

Live Demo: [imeshmunasinghe.com](https://imeshmunasinghe.com)

---

## 🌟 Key Features

- **Pulsating Availability Badge**: Prominently shows active recruiter availability state.
- **Dedicated Subpages**: Configured client-side routing using React Router for `/projects` and `/writing` (Articles) full directory grid views.
- **Contextual Sticky Navigation**: Intelligent header navigation that handles direct page hashes on home page while rewriting path anchors smoothly from subpages.
- **Categorized Tech Stack Layout**: Grid displays of skills structured across Frontend, Backend, Databases/Cloud, and Tools sections.
- **Interactive Credentials & Certifications**: Grid cards containing live HackerRank and Udemy certificate links equipped with smooth tooltip hover overlays.
- **Timeline Milestones**: Two-column responsive split listing personal Academic and Professional records.
- **Dark/Light Mode**: Smooth transitions reflecting system preferences and custom toggles.
- **SEO & Search Indexing**: Features semantic metadata parser, Open Graph preview tags, and JSON-LD structured schema.
- **Google Analytics (GA4)**: Configured traffic tagging built directly into the site template.

---

## 🛠️ Technology Stack

- **Framework**: React 19.x (TypeScript)
- **Bundler**: Vite 8.x
- **Animation**: Framer Motion
- **Icons**: React Icons (Remix Icons)
- **Styling**: Vanilla CSS Modules
- **Analytics**: Google Tag (GA4 - G-4V4ZLD195J)

---

## 📂 Project Structure

```text
my-portfolio/
├── public/                 # Static assets (favicons, manifest, resume)
├── src/
│   ├── assets/             # Images, portraits, and local graphics
│   ├── components/         # Reusable layouts, carousels, and design modules
│   │   ├── Certifications/ # Certificate tags
│   │   ├── Header/         # Dynamic Navigation Bar
│   │   ├── Hero/           # Greeting hero banner
│   │   ├── Projects/       # Home page projects slider
│   │   ├── Skills/         # Categorized skills matrix
│   │   └── Timeline/       # Education & Work details
│   ├── data/               # Unified data layers (projects.ts, posts.ts)
│   ├── pages/              # Subpages (AllProjects.tsx, AllWriting.tsx)
│   ├── App.tsx             # Route management
│   ├── index.css           # Global CSS variables/tokens
│   └── main.tsx            # Application entrypoint
├── package.json            # Configuration and script definitions
└── wrangler.json           # Cloudflare deployment settings
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.x or higher) and **npm** installed.

### Development Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ImeshMunasinghe/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server locally:
   ```bash
   npm run dev
   ```

4. Build the static bundle:
   ```bash
   npm run build
   ```

---

## ☁️ Deployment

This project is deployed to **Cloudflare** using Wrangler Worker Assets.

### Deploying manually:
```bash
npx wrangler deploy
```

*Note: For CI/CD automatic deployment on Git push, verify the Cloudflare page settings refer to `npm run build` as Build Command and `/dist` as the build output directory.*
