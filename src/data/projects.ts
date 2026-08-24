import p1Img from '../assets/p1.png';
import p3Img from '../assets/p3.png';

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
    title: 'Project Two',
    description: 'Another project description. Keep it to two sentences max — clarity over completeness.',
    stack: ['Python', 'FastAPI', 'PostgreSQL'],
    href: 'https://github.com/yourusername',
    liveHref: 'https://yourlivedemo.com',
  },
  {
    title: 'Personal Developer Portfolio',
    description: 'A modern, highly interactive personal portfolio built from scratch. Features smooth micro-animations, a responsive design system, and custom carousel components.',
    stack: ['React', 'TypeScript', 'Vite', 'Framer Motion'],
    href: 'https://github.com/ImeshMunasinghe/my-portfolio',
    liveHref: '',
    image: p3Img,
  }
];
