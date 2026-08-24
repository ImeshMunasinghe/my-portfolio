import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiArrowLeftLine, RiGithubFill, RiExternalLinkLine } from 'react-icons/ri';
import { projects } from '../data/projects';
import styles from './AllProjects.module.css';

function AllProjects() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link to="/" className={styles.backHome}>
          <RiArrowLeftLine size={18} />
          Back to Home
        </Link>
        <h1 className={styles.heading}>All Projects</h1>
        <p className={styles.subtitle}>A comprehensive directory of my digital creations and experiments</p>
      </header>

      {/* Grid displaying the cards */}
      <div className={styles.grid}>
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className={styles.card}
          >
            <div className={styles.imageBlock}>
              {project.image ? (
                <img src={project.image} alt={project.title} className={styles.image} />
              ) : (
                <div className={styles.imagePlaceholder}>
                  <span className={styles.imageText}>Image Placeholder</span>
                </div>
              )}
            </div>
            <div className={styles.contentBlock}>
              <h3 className={styles.projTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              
              <div className={styles.stack}>
                {project.stack.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>

              <div className={styles.buttonGroup}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                  aria-label={`${project.title} on GitHub (opens in a new tab)`}
                >
                  <RiGithubFill size={16} />
                  GitHub
                </a>
                <a
                  href={project.liveHref || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.button} ${styles.liveButton}`}
                  aria-label={`${project.title} Live Demo (opens in a new tab)`}
                >
                  <RiExternalLinkLine size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AllProjects;
