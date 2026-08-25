import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

function Projects() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Projects</h2>
        <p className={styles.subtitle}>Explore some of my recent projects</p>
      </div>

      <div className={styles.grid}>
        {projects.slice(0, 3).map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className={styles.cardWrapper}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      <Link to="/projects" className={styles.moreLink}>
        View More Projects &rarr;
      </Link>
    </section>
  );
}

export default Projects;