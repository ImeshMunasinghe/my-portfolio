import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiPenNibLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import styles from './Writing.module.css';
import article1Img from '../../assets/article 1.webp';
import article2Img from '../../assets/article2.png';
import article3Img from '../../assets/article 3.webp';
import article4Img from '../../assets/article 4.webp';
import article5Img from '../../assets/article 5.webp';

interface Article {
  title: string;
  description: string;
  date: string;
  readTime: string;
  href: string;
  image?: string;
  platform?: string;
}

const articles: Article[] = [
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

function Writing() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
      if (isHovered) return;
      const timer = setInterval(() => {
        void setCurrentIndex((prev) => (prev + 1) % articles.length);
      }, 3500); // Autoplay every 3.5 seconds
      return () => clearInterval(timer);
    }, [isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % articles.length);
  };

  const article = articles[currentIndex];

  const touchStartX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? handleNext() : handlePrev();
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Blogs</h2>
        <p className={styles.subtitle}>Check out my latest blog posts</p>
      </div>
      
      <div
        className={styles.carouselContainer}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={handlePrev}
          aria-label="Previous article"
        >
          <RiArrowLeftSLine size={28} />
        </button>

        <div className={styles.carouselViewport}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className={styles.cardWrapper}
            >
              <div className={styles.card}>
                <div className={styles.imageBlock}>
                  {article.image ? (
                    <img src={article.image} alt={article.title} className={styles.image} />
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      <span className={styles.imageText}>Image Placeholder</span>
                    </div>
                  )}
                </div>
                <div className={styles.contentBlock}>
                  <h3 className={styles.title}>{article.title}</h3>
                  <p className={styles.description}>{article.description}</p>
                  
                  <div className={styles.metaInfo}>
                    <span className={styles.pill}>Published: {article.date}</span>
                  </div>
                  
                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.button}
                    aria-label={`Read ${article.title} on ${article.platform || 'Medium'} (opens in a new tab)`}
                  >
                    <RiPenNibLine size={20} />
                    {article.platform || 'Medium'}
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={handleNext}
          aria-label="Next article"
        >
          <RiArrowRightSLine size={28} />
        </button>
      </div>

      <div className={styles.dots}>
        {articles.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Writing;