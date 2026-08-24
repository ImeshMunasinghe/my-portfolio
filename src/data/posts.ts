import article1Img from '../assets/article 1.webp';
import article2Img from '../assets/article2.png';
import article3Img from '../assets/article 3.webp';
import article4Img from '../assets/article 4.webp';
import article5Img from '../assets/article 5.webp';

export interface Article {
  title: string;
  description: string;
  date: string;
  readTime: string;
  href: string;
  image?: string;
  platform?: string;
}

export const articles: Article[] = [
  {
    title: 'How to Run NVIDIA’s Massive 550B Nemotron Qwen3 Inside VS Code Without Burning Your Free Daily limit',
    description: 'Learn how to leverage NVIDIA\'s powerful 550B Nemotron model right inside your VS Code environment.',
    date: 'Jul 2026',
    readTime: '5 min read',
    href: 'https://medium.com/@ImeshM/how-to-run-nvidias-massive-550b-nemotron-qwen3-inside-vs-code-without-burning-your-free-daily-0bc57c2707a2',
    image: article1Img,
    platform: 'Medium',
  },
  {
    title: 'Build a RAG API with FastAPI',
    description: 'Learn how to build a local AI pipeline that retrieves, augments, and generates answers from your own documents.',
    date: 'Jul 2026',
    readTime: '45 min read',
    href: 'https://nextwork.ai/restful_lavender_gentle_lulo/docs/ai-devops-api',
    image: article2Img,
    platform: 'NextWork',
  },
  {
    title: 'Stop Hallucinating: A Developer\'s Guide to RAG',
    description: 'Learn the foundational concepts of Retrieval-Augmented Generation (RAG) and how it helps solve AI hallucinations.',
    date: 'Jul 2026',
    readTime: '6 min read',
    href: 'https://medium.com/@ImeshM/stop-hallucinating-a-developers-guide-to-rag-retrieval-augmented-generation-290c813c176a',
    image: article3Img,
    platform: 'Medium',
  },
  {
    title: 'How We Built Jump-A-Lot-Land: Implementing Core Computer Graphics Algorithms From Scratch',
    description: 'An in-depth look into building a computer graphics project, covering core algorithms implemented entirely from scratch.',
    date: 'Jul 2026',
    readTime: '8 min read',
    href: 'https://medium.com/@ImeshM/how-we-built-jump-a-lot-land-implementing-core-computer-graphics-algorithms-from-scratch-31cc17c8bbf3',
    image: article4Img,
    platform: 'Medium',
  },
  {
    title: 'Bypassing the App Store: How Progressive Web Apps (PWAs) are Changing the Internet',
    description: 'Discover how PWAs are bridging the gap between web and native applications, reshaping digital experiences.',
    date: 'Jun 2026',
    readTime: '7 min read',
    href: 'https://medium.com/@ImeshM/bypassing-the-app-store-how-progressive-web-apps-pwas-are-changing-the-internet-966414d1b4e7',
    image: article5Img,
    platform: 'Medium',
  }
];
