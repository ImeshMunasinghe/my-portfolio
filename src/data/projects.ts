import p1Img from '../assets/p1.jpg';
import p2Img from '../assets/p2.jpg';
import p3Img from '../assets/p3.jpg';
import p4Img from '../assets/p4.jpg';
import p5Img from '../assets/p5.jpg';

export interface Project {
  title: string;
  description: string;
  stack: string[];
  href: string;
  liveHref?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: 'MedicareX',
    description: 'A modern healthcare platform developed under SoftwareProjectInnovateX.',
    stack: ['React', 'Nest.js', 'Firebase'],
    href: 'https://github.com/SoftwareProjectInnovateX',
    liveHref: '',
    image: p1Img,
  },
  {
    title: 'Vynt',
    description: 'A full-stack e-commerce platform for premium audio hardware featuring AI-powered catalog search, Stripe payment checkout, real-time admin analytics, and order management.',
    stack: ['React', 'NestJS', 'Prisma', 'PostgreSQL', 'Stripe'],
    href: 'https://github.com/ImeshMunasinghe/audio-store-fullstack',
    image: p2Img,
  },
  {
    title: 'Personal Developer Portfolio',
    description: 'A modern, highly interactive personal portfolio built from scratch. Features smooth micro-animations, a responsive design system, and custom carousel components.',
    stack: ['React', 'TypeScript', 'Vite', 'Framer Motion'],
    href: 'https://github.com/ImeshMunasinghe/my-portfolio',
    liveHref: '',
    image: p3Img,
  },
  {
    title: 'Jump a Lot Land',
    description: 'A custom-built 2D game engine developed in C++ using OpenGL and FreeGLUT. Features a multi-level world system, custom physics, and dynamic tile-based rendering.',
    stack: ['C++', 'OpenGL', 'FreeGLUT'],
    href: 'https://github.com/ImeshMunasinghe/Jump-a-Lot-Land',
    image: p4Img,
  },
  {
    title: 'AI DevOps RAG API',
    description: 'A local Retrieval-Augmented Generation (RAG) API built with FastAPI, ChromaDB, and Ollama. Allows querying an AI model grounded in custom local text documents using semantic search.',
    stack: ['Python', 'FastAPI', 'ChromaDB', 'Ollama'],
    href: 'https://github.com/ImeshMunasinghe/rag-api',
    image: p5Img,
  }
];
