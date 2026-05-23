import { motion } from 'framer-motion';
import styles from './Hero.module.css';
import avatar from '../../assets/avatar.png';

function Hero() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className={styles.subtitle}>Undergraduate at University of Moratuwa</div>
        <h1 className={styles.name}>Imesh Munasinghe</h1>
        <p className={styles.role}>
          I'm a self-driven IT undergraduate passionate about software engineering, quick to learn new technologies, and eager to take on real-world challenges.
        </p>
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
          src={avatar}
          alt="Imesh Munasinghe"
          className={styles.avatar}
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}

export default Hero;