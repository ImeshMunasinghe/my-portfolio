import { RiGithubFill, RiExternalLinkLine } from 'react-icons/ri';
import styles from './ProjectCard.module.css';

interface Project {
  title: string;
  description: string;
  stack: string[];
  href: string;
  liveHref?: string;
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageBlock}>
        <div className={styles.imagePlaceholder}>
          <span className={styles.imageText}>Image Placeholder</span>
        </div>
      </div>
      <div className={styles.contentBlock}>
        <h3 className={styles.title}>{project.title}</h3>
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
            <RiGithubFill size={20} />
            GitHub
          </a>
          <a
            href={project.liveHref || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.button} ${styles.liveButton}`}
            aria-label={`${project.title} Live Demo (opens in a new tab)`}
          >
            <RiExternalLinkLine size={20} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export type { Project };
export default ProjectCard;