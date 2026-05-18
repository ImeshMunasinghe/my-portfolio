import { RiArrowRightUpLine } from 'react-icons/ri';
import styles from './ProjectCard.module.css';

interface Project {
  title: string;
  description: string;
  stack: string[];
  href: string;
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.top}>
        <span className={styles.title}>{project.title}</span>
        <RiArrowRightUpLine className={styles.arrow} size={18} />
      </div>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.stack}>
        {project.stack.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </a>
  );
}

export type { Project };
export default ProjectCard;