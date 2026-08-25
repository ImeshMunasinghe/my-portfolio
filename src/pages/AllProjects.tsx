import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiArrowLeftLine } from 'react-icons/ri';
import { projects } from '../data/projects';
import ProjectCard from '../components/Projects/ProjectCard';
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
            className={styles.cardWrapper}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AllProjects;

