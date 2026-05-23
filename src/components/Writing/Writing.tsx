import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiPenNibLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import styles from './Writing.module.css';

interface Article {
  title: string;
  description: string;
  date: string;
  readTime: string;
  href: string;
}

const articles: Article[] = [
  {
    title: 'Your First Article Title Here',
    description: 'A short description of what this article is about, matching the new design style.',
    date: 'May 2026',
    readTime: '5 min read',
    href: 'https://medium.com/@yourusername',
  },
  {
    title: 'Your Second Article Title Here',
    description: 'Another short description to fill out the card layout.',
    date: 'Apr 2026',
    readTime: '4 min read',
    href: 'https://medium.com/@yourusername',
  },
  {
    title: 'Your Third Article Title Here',
    description: 'A third article description to demonstrate the carousel functionality fully.',
    date: 'Mar 2026',
    readTime: '6 min read',
    href: 'https://medium.com/@yourusername',
  }
];

function Writing() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
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
                  <div className={styles.imagePlaceholder}>
                    <span className={styles.imageText}>Image Placeholder</span>
                  </div>
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
                    aria-label={`Read ${article.title} on Medium (opens in a new tab)`}
                  >
                    <RiPenNibLine size={20} />
                    Medium
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