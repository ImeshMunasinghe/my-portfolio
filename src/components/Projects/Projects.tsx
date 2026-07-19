import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import ProjectCard from './ProjectCard';
import type { Project } from './ProjectCard';
import styles from './Projects.module.css';
import p1Img from '../../assets/p1.png';
import p3Img from '../../assets/p3.png';

const projects: Project[] = [
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

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
            if (isHovered) return;
            const timer = setInterval(() => {
              setCurrentIndex((prev) => (prev + 1) % projects.length);
            }, 3000); // Autoplay every 3 seconds
            return () => clearInterval(timer);
          }, [isHovered]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

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
        <h2 className={styles.heading}>Projects</h2>
        <p className={styles.subtitle}>Explore some of my recent projects</p>
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
          aria-label="Previous project"
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
              <ProjectCard project={projects[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={handleNext}
          aria-label="Next project"
        >
          <RiArrowRightSLine size={28} />
        </button>
      </div>

      <div className={styles.dots}>
        {projects.map((_, idx) => (
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

export default Projects;