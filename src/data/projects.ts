import p1Img from '../assets/p1.jpg';
import p2Img from '../assets/p2.jpg';
import p3Img from '../assets/p3.jpg';
import p4Img from '../assets/p4.jpg';
import p5Img from '../assets/p5.jpg';

export interface ProjectSection {
  heading: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: ProjectSection[];
  highlights: string[];
  stack: string[];
  href: string;
  liveHref?: string;
  articleHref?: string;
  image?: string;
  year: string;
  status: 'completed' | 'active' | 'archived';
  role?: string;
}

export const projects: Project[] = [
  {
    slug: 'medicarex',
    title: 'MedicareX',
    description: 'A full-stack Pharmacy Supply Chain Management System connecting customers, pharmacists, suppliers, and admins on one unified platform — covering everything from prescription upload to delivery, inventory, payments, and AI-driven insights.',
    year: '2024',
    status: 'completed',
    role: 'Co-Developer — Architecture, AI & Deployment',
    highlights: [
      'AI Health Assistant built on WHO guidelines using Groq API for lightning-fast responses',
      'Semantic AI product search powered by Pinecone vector database and embeddings',
      'Role-Based Access Control (RBAC) with Firebase Auth, covering 4 user types',
      'Automated supplier & pharmacist onboarding with email notifications and password generation',
      'Search analytics dashboard to monitor real-time trends across the platform',
    ],
    longDescription: [
      {
        heading: 'Overview',
        body: 'MedicareX is a full-stack Pharmacy Supply Chain Management System built as our 2nd Year Software Engineering project. It connects customers, pharmacists, suppliers, and admins on one unified platform — covering everything from prescription upload and delivery to inventory management, payments, and AI-driven insights. The platform was developed under SoftwareProjectInnovateX and is live at innovatexuom.vercel.app.',
      },
      {
        heading: 'My Contributions',
        body: "As part of the core engineering team, I took ownership of several critical architecture, AI, and deployment features:\n\n• **Software Design & Architecture** — Created the SRS and EER diagrams to lay the database and system foundation.\n• **Identity & Access Management** — Implemented Firebase Authentication, password resets, and robust Role-Based Access Control (RBAC) spanning 4 user roles.\n• **AI Health Assistant** — Built a WHO-guideline-based web chatbot utilizing the Groq API (openai/gpt-oss-20b) for lightning-fast, accurate health responses.\n• **Semantic Search** — Engineered an AI product search using Pinecone vector databases and OpenAI embeddings for context-aware catalog discovery.\n• **User Journey & Onboarding** — Built secure guest browsing access alongside automated supplier/pharmacist account request flows with email notifications and system-generated password delivery.\n• **Analytics & UI** — Set up search analytics to monitor trends, and polished the frontend with full mobile responsiveness and dark mode.\n• **QA & Deployment** — Manually tested core features and edge cases, and handled the final production web deployment.",
      },
      {
        heading: 'Tech Stack',
        body: '**Frontend:** React 19 · Vite · Zustand · Tailwind CSS\n\n**Backend:** NestJS 11 · TypeScript · Node.js · Firebase Firestore & Auth\n\n**AI/ML:** Groq (openai/gpt-oss-20b) · Pinecone · OpenAI (GPT-3.5-turbo) · Xenova Transformers\n\n**Infrastructure:** Railway · Cloudinary · PayHere',
      },
      {
        heading: 'Key Takeaways',
        body: 'Building MedicareX taught me a massive amount about designing scalable architecture, integrating AI meaningfully into a real-world healthcare workflow, managing RBAC across complex user roles, and handling a full production deployment cycle end-to-end.',
      },
    ],
    stack: ['React 19', 'NestJS', 'Firebase', 'Groq', 'Pinecone', 'Zustand'],
    href: 'https://github.com/SoftwareProjectInnovateX',
    liveHref: 'https://innovatexuom.vercel.app',
    image: p1Img,
  },
  {
    slug: 'vynt',
    title: 'Vynt',
    description: 'A full-stack e-commerce platform for premium audio hardware featuring AI-powered catalog search, Stripe payment checkout, real-time admin analytics, and complete order management.',
    year: '2024',
    status: 'completed',
    role: 'Full-Stack Developer',
    highlights: [
      'Stripe Payment Elements integration with automatic stock restoration on payment failure via webhooks',
      'AI Inventory Forecast powered by Groq with rule-based fallback analysis',
      'JWT access token rotation (15 min) with refresh tokens in HTTP-only cookies for zero-flash auth',
      'Floating AI Chat Assistant with tool-calling: searches catalog by category, price, or keyword',
      'Rate limiting (60 req/min per IP), Helmet security headers, DTO validation — production-grade security',
    ],
    longDescription: [
      {
        heading: 'Overview',
        body: 'Vynt is a full-stack e-commerce platform for premium audio hardware. Built with a NestJS REST API backend and a React + Vite frontend, it combines modern commerce features with AI capabilities — including an AI-powered catalog assistant, Stripe payment integration, real-time admin analytics, and a complete order management system.',
      },
      {
        heading: 'Storefront & Shopping Experience',
        body: 'The storefront features a product catalog with category, ANC flag, and dynamic max-price filtering alongside full-text search with live autocomplete in the navbar. Product detail pages include image galleries, spec tables, wishlist toggles, and stock-capped quantity controls. The cart drawer provides persistent state and quantity management across sessions.',
      },
      {
        heading: 'Checkout & Payments',
        body: 'Stripe Payment Elements is integrated for card payments, with a mock payment fallback available for local development requiring no real card. Orders are created in the database on checkout and marked as PAID on Stripe confirmation. Stock is automatically restored on payment failure via Stripe webhooks — ensuring inventory integrity at all times.',
      },
      {
        heading: 'Authentication & Security',
        body: '**Authentication:** JWT access tokens (15 min) combined with 7-day rotating refresh tokens stored in HTTP-only cookies. Protected routes use an auth hydration guard to eliminate flash redirects.\n\n**Security:** Helmet for secure HTTP headers (XSS, MIME, clickjacking protection), rate limiting at 60 requests/60 seconds per IP, strict DTO validation with class-validator (unknown fields rejected), and CORS locked to the FRONTEND_URL environment variable. Swagger is disabled in production.',
      },
      {
        heading: 'Admin Dashboard & AI',
        body: 'The admin dashboard includes a product ledger with paginated inline Add/Edit/Delete, an order ledger with status and payment tracking, and stats cards for total revenue, total orders, and live stock health.\n\nThe **AI Inventory Forecast** is powered by Groq (openai/gpt-oss-20b) with a rule-based fallback when the API is unavailable. A floating **Vynt AI Chat Assistant** uses Groq tool-calling to search the catalog by category, price, or keyword in real time.',
      },
      {
        heading: 'Tech Stack',
        body: '**Frontend:** React 18 + TypeScript · Vite · Tailwind CSS v4 · React Router v6 · Stripe.js · Lucide React\n\n**Backend:** NestJS + TypeScript · Prisma ORM · PostgreSQL (Neon) · JWT (access + refresh) · Stripe SDK · Groq SDK · @nestjs/throttler · Swagger/OpenAPI',
      },
    ],
    stack: ['React', 'NestJS', 'Prisma', 'PostgreSQL', 'Stripe', 'Groq'],
    href: 'https://github.com/ImeshMunasinghe/audio-store-fullstack',
    image: p2Img,
  },
  {
    slug: 'my-portfolio',
    title: 'Personal Developer Portfolio',
    description: 'A modern, highly interactive personal portfolio built from scratch. Features smooth micro-animations, a responsive design system, custom carousel components, SEO optimization, and Google Analytics integration.',
    year: '2025',
    status: 'active',
    role: 'Solo Developer & Designer',
    highlights: [
      'Pulsating availability badge and smooth Framer Motion page transitions with AnimatePresence',
      'Contextual sticky navigation with intelligent hash handling from subpages',
      'Dark/Light mode with smooth transitions reflecting system preferences',
      'SEO-optimized with Open Graph tags, JSON-LD structured schema, and GA4 analytics',
      'Deployed to Cloudflare Workers with Wrangler for global CDN edge distribution',
    ],
    longDescription: [
      {
        heading: 'Overview',
        body: 'A responsive, high-performance web portfolio built with React 19, TypeScript, Vite, and Vanilla CSS Modules. Designed with modern aesthetics — clean interactive elements, dark/light theme switching, Framer Motion animations, and optimized search engine indexing. Live at imeshmunasinghe.com.',
      },
      {
        heading: 'Design & Interaction',
        body: 'Every element of this site was crafted with attention to micro-interactions and premium design. Key UX features include:\n\n• **Pulsating Availability Badge** — prominently signals active recruiter availability\n• **Smooth Page Transitions** — Framer Motion AnimatePresence wraps all route changes\n• **Contextual Sticky Navigation** — handles direct page hashes on home while rewriting path anchors from subpages\n• **Dark/Light Mode** — system preference detection + custom toggle with smooth CSS variable transitions',
      },
      {
        heading: 'Content Sections',
        body: '• **Dedicated Subpages** — React Router routes for /projects and /writing directory grids\n• **Categorized Tech Stack** — structured Frontend, Backend, Databases/Cloud, and Tools grid\n• **Interactive Certifications** — HackerRank and Udemy certificate cards with tooltip hover overlays\n• **Timeline Milestones** — two-column responsive split for Academic and Professional history',
      },
      {
        heading: 'SEO & Analytics',
        body: 'The site implements a full SEO stack:\n\n• Semantic HTML5 metadata, Open Graph preview tags, and JSON-LD structured schema\n• Google Analytics GA4 (G-4V4ZLD195J) for real-time traffic and engagement tracking\n• Deployed to Cloudflare Workers via Wrangler for global edge CDN distribution',
      },
      {
        heading: 'Tech Stack',
        body: '**Framework:** React 19.x (TypeScript)\n**Bundler:** Vite 8.x\n**Animation:** Framer Motion\n**Icons:** React Icons (Remix Icons)\n**Styling:** Vanilla CSS Modules\n**Analytics:** Google Tag Manager (GA4)\n**Deployment:** Cloudflare Workers + Wrangler',
      },
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Framer Motion', 'Cloudflare'],
    href: 'https://github.com/ImeshMunasinghe/my-portfolio',
    liveHref: 'https://imeshmunasinghe.com',
    image: p3Img,
  },
  {
    slug: 'jump-a-lot-land',
    title: 'Jump a Lot Land',
    description: 'A custom-built 2D game engine developed in C++ using OpenGL and FreeGLUT. Features a multi-level world system, custom physics, and dynamic tile-based rendering.',
    year: '2023',
    status: 'completed',
    role: 'Game Engine Developer',
    highlights: [
      'Custom-built 2D game engine from scratch in C++ — no third-party engine used',
      'Real-time physics system with custom gravity, collision detection, and platforming mechanics',
      'Three fully distinct environments: Lava World, Ice World, and Moon World',
      'Frame-based sprite animation system for smooth character movement',
      'Dynamic rendering with real-time moving platforms and environmental effects',
    ],
    longDescription: [
      {
        heading: 'Overview',
        body: 'Jump a Lot Land is a custom-built 2D platformer game and game engine, developed entirely in C++ using OpenGL and FreeGLUT. Rather than using an existing engine like Unity or Unreal, every system — from the physics engine to the tile renderer — was built from scratch, making this a deep exercise in computer graphics algorithms and low-level systems programming.',
      },
      {
        heading: 'Game Engine Systems',
        body: '**Physics Engine** — Custom gravity implementation, collision detection against tile geometry, and platforming mechanics (jump, land, slide) all built without any physics library.\n\n**Tile-Based Rendering** — A dynamic tile rendering system that draws the world in real time, including moving platforms and animated environmental effects unique to each world.\n\n**Sprite Animation** — Frame-based character animation system that syncs movement frames with player input for smooth, responsive visuals.',
      },
      {
        heading: 'World Design',
        body: 'Three distinct multi-level environments, each with unique visual themes and environmental mechanics:\n\n• **Lava World** — Volcanic terrain with lava hazards and heat shimmer effects\n• **Ice World** — Slippery ice physics and frozen platform aesthetics\n• **Moon World** — Low-gravity mechanics and space-themed tile rendering\n\nLevels are switched at runtime using keyboard shortcuts (1, 2, 3), demonstrating a multi-scene management system.',
      },
      {
        heading: 'Controls',
        body: '**W** — Jump\n**A / D** — Move Left / Right\n**1, 2, 3** — Switch between Lava, Ice, and Moon worlds',
      },
      {
        heading: 'Tech Stack',
        body: '**Language:** C++\n**Graphics API:** OpenGL / FreeGLUT\n**Environment:** Code::Blocks / MinGW\n\nRead the full technical deep-dive on Medium — covering how core computer graphics algorithms were implemented from scratch.',
      },
    ],
    stack: ['C++', 'OpenGL', 'FreeGLUT'],
    href: 'https://github.com/ImeshMunasinghe/Jump-a-Lot-Land',
    articleHref: 'https://medium.com/@ImeshM/how-we-built-jump-a-lot-land-implementing-core-computer-graphics-algorithms-from-scratch-31cc17c8bbf3',
    image: p4Img,
  },
  {
    slug: 'rag-api',
    title: 'AI DevOps RAG API',
    description: 'A local Retrieval-Augmented Generation (RAG) API built with FastAPI, ChromaDB, and Ollama. Allows querying an AI model grounded in custom local text documents using semantic search.',
    year: '2024',
    status: 'completed',
    role: 'Solo Developer',
    highlights: [
      '100% local AI pipeline — no cloud API keys required, full data privacy',
      'Semantic vector search via ChromaDB for grounded, context-aware responses',
      'Dual Ollama models: qwen2.5:0.5b for generation + nomic-embed-text for embeddings',
      'FastAPI REST endpoints with interactive Swagger UI for easy exploration',
      'Plug-and-play design — drop in any local .txt documents to instantly ground the AI',
    ],
    longDescription: [
      {
        heading: 'Overview',
        body: 'AI DevOps RAG API is a fully local Retrieval-Augmented Generation (RAG) pipeline built with FastAPI, ChromaDB, and Ollama. It allows querying an AI language model that is grounded in your own custom local text documents through semantic search — giving accurate, context-aware answers without hallucination and with complete data privacy.',
      },
      {
        heading: 'How It Works',
        body: 'The RAG pipeline works in three stages:\n\n1. **Ingestion** — Local `.txt` documents are loaded, chunked, and embedded using the `nomic-embed-text` Ollama model. The vector embeddings are stored in ChromaDB.\n\n2. **Retrieval** — On each query, the user\'s question is embedded and semantically compared against the stored document vectors. The most relevant chunks are retrieved from ChromaDB.\n\n3. **Generation** — The retrieved context is injected into a prompt and passed to `qwen2.5:0.5b` via Ollama for grounded text generation. The model answers based strictly on the retrieved content.',
      },
      {
        heading: 'Features',
        body: '• **100% Local Pipeline** — Powered entirely by Ollama; no OpenAI or cloud API keys needed. Your documents stay on your machine.\n• **Vector Storage** — ChromaDB manages semantic search and context retrieval efficiently.\n• **REST API** — FastAPI provides fast, interactive endpoints with auto-generated Swagger documentation.\n• **Plug-and-Play** — Drop any `.txt` files into the documents folder and re-ingest to instantly ground the AI in new knowledge.',
      },
      {
        heading: 'Tech Stack',
        body: '**Language:** Python\n**API Framework:** FastAPI + Uvicorn\n**Vector Database:** ChromaDB\n**LLM Runtime:** Ollama\n**Generation Model:** qwen2.5:0.5b\n**Embedding Model:** nomic-embed-text',
      },
    ],
    stack: ['Python', 'FastAPI', 'ChromaDB', 'Ollama'],
    href: 'https://github.com/ImeshMunasinghe/rag-api',
    image: p5Img,
  },
];
