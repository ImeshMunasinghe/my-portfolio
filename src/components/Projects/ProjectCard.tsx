import { Link } from 'react-router-dom';
import { RiGithubFill, RiExternalLinkLine, RiArrowRightLine } from 'react-icons/ri';
import styles from './ProjectCard.module.css';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      {/* Clicking the image navigates to the internal detail page */}
      <Link
        to={`/projects/${project.slug}`}
        className={styles.imageBlock}
        aria-label={`View ${project.title} details`}
      >
        {project.image ? (
          <img src={project.image} alt={project.title} className={styles.image} />
        ) : (
          <div className={styles.imagePlaceholder}>
            <span className={styles.imageText}>{project.title}</span>
          </div>
        )}
        <div className={styles.imageOverlay}>
          <span className={styles.viewLabel}>View Project</span>
        </div>
      </Link>

      <div className={styles.contentBlock}>
        {/* Title also navigates to the detail page */}
        <Link to={`/projects/${project.slug}`} className={styles.titleLink}>
          <h3 className={styles.title}>{project.title}</h3>
        </Link>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.stack}>
          {project.stack.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.linksLeft}>
          {/* Live demo — external link */}
          {project.liveHref && (
            <a
              href={project.liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconButton}
              aria-label={`${project.title} Live Demo (opens in a new tab)`}
              onClick={e => e.stopPropagation()}
            >
              <RiExternalLinkLine size={17} />
            </a>
          )}
          {/* GitHub — external link */}
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconButton}
              aria-label={`${project.title} on GitHub (opens in a new tab)`}
              onClick={e => e.stopPropagation()}
            >
              <RiGithubFill size={17} />
            </a>
          )}
        </div>

        {/* Arrow navigates to the internal detail page */}
        <Link
          to={`/projects/${project.slug}`}
          className={styles.arrowButton}
          aria-label={`Read more about ${project.title}`}
        >
          <RiArrowRightLine size={20} />
        </Link>
      </div>
    </div>
  );
}

export type { Project };
export default ProjectCard;