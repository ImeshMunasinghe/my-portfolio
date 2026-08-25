import { RiGithubFill, RiExternalLinkLine, RiArrowRightUpLine } from 'react-icons/ri';
import styles from './ProjectCard.module.css';

interface Project {
  title: string;
  description: string;
  stack: string[];
  href: string;
  liveHref?: string;
  image?: string;
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  // Use liveHref if available as primary link, otherwise GitHub link
  const primaryHref = project.liveHref || project.href;

  return (
    <div className={styles.card}>
      <a 
        href={primaryHref} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.imageBlock}
        aria-label={`View ${project.title}`}
      >
        {project.image ? (
          <img src={project.image} alt={project.title} className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder}>
            <span className={styles.imageText}>Image Placeholder</span>
          </div>
        )}
      </a>
      
      <div className={styles.contentBlock}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        
        <div className={styles.stack}>
          {project.stack.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
        
      <div className={styles.footer}>
        <div className={styles.linksLeft}>
          {project.liveHref && (
            <a
              href={project.liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconButton}
              aria-label={`${project.title} Live Demo (opens in a new tab)`}
            >
              <RiExternalLinkLine size={18} />
            </a>
          )}
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconButton}
              aria-label={`${project.title} on GitHub (opens in a new tab)`}
            >
              <RiGithubFill size={18} />
            </a>
          )}
        </div>
        
        <a
          href={primaryHref}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.arrowButton}
          aria-label={`Open primary link for ${project.title}`}
        >
          <RiArrowRightUpLine size={20} />
        </a>
      </div>
    </div>
  );
}

export type { Project };
export default ProjectCard;