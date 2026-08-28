import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import avatarDark from '../../assets/avaratrL1.png';
import avatarLight from '../../assets/avatartd1.png';

const ROLES = [
  'Full-Stack Developer',
  'Technical Writer',
  'AI Explorer',
  'Problem Solver',
  'Open Source Enthusiast',
];

const TYPING_SPEED = 70;
const ERASING_SPEED = 40;
const PAUSE_AFTER_WORD = 1800;
const PAUSE_BEFORE_TYPING = 300;

function Hero() {
  const [displayed, setDisplayed] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isErasing && displayed.length < currentRole.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, displayed.length + 1));
      }, TYPING_SPEED);
    } else if (!isErasing && displayed.length === currentRole.length) {
      // Pause then erase
      timeout = setTimeout(() => setIsErasing(true), PAUSE_AFTER_WORD);
    } else if (isErasing && displayed.length > 0) {
      // Erasing
      timeout = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, ERASING_SPEED);
    } else if (isErasing && displayed.length === 0) {
      // Move to next role
      timeout = setTimeout(() => {
        setIsErasing(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }, PAUSE_BEFORE_TYPING);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isErasing, roleIndex]);

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className={styles.badgeContainer}>
          <span className={styles.pulseDot}></span>
          <span className={styles.badgeText}>Available for Opportunities</span>
        </div>
        <div className={styles.subtitle}>Undergraduate at University of Moratuwa</div>
        <h1 className={styles.name}>Imesh Munasinghe</h1>
        <div className={styles.typewriterWrapper}>
          <span className={styles.typewriterPrefix}>I&rsquo;m a </span>
          <span className={styles.typewriterText}>{displayed}</span>
          <span className={styles.cursor} aria-hidden="true">|</span>
        </div>
        <div className={styles.actions}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            View My Resume
          </a>
        </div>
      </motion.div>
      <motion.div
        className={styles.imageWrapper}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
      >
        <img
          src={avatarLight}
          alt="Imesh Munasinghe"
          className={`${styles.avatar} theme-avatar-light`}
          loading="lazy"
          onLoad={(e) => e.currentTarget.classList.add('loaded')}
        />
        <img
          src={avatarDark}
          alt="Imesh Munasinghe"
          className={`${styles.avatar} theme-avatar-dark`}
          loading="lazy"
          onLoad={(e) => e.currentTarget.classList.add('loaded')}
        />
      </motion.div>
    </section>
  );
}

export default Hero;