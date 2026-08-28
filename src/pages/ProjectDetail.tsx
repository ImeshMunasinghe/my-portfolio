import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiGithubFill,
  RiExternalLinkLine,
  RiArticleLine,
  RiCheckboxCircleFill,
  RiSparklingFill,
  RiCodeSSlashFill,
  RiMailSendLine,
  RiLinkedinBoxFill,
} from 'react-icons/ri';
import { projects } from '../data/projects';
import styles from './ProjectDetail.module.css';

/* Minimal markdown-like renderer for the longDescription body strings */
function renderBody(body: string) {
  const lines = body.split('\n');
  return lines.map((line, i) => {
    if (!line.trim()) return <br key={i} />;
    // Bold spans: **text**
    const parts = line.split(/\*\*(.*?)\*\*/g);
    const rendered = parts.map((part, j) =>
      j % 2 === 1 ? <strong key={j}>{part}</strong> : part
    );
    // Bullet point
    if (line.startsWith('• ') || line.startsWith('- ')) {
      return (
        <p key={i} className={styles.bullet}>
          <span className={styles.bulletDot}>—</span>
          <span>{rendered.slice(1)}</span>
        </p>
      );
    }
    return <p key={i} className={styles.bodyPara}>{rendered}</p>;
  });
}

const statusLabels: Record<string, string> = {
  active: 'Active',
  completed: 'Completed',
  archived: 'Archived',
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const projectIndex = projects.findIndex(p => p.slug === slug);
  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  useEffect(() => {
    if (projectIndex === -1) navigate('/', { replace: true });
  }, [projectIndex, navigate]);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — Imesh Munasinghe`;
    }
    return () => { document.title = 'Imesh Munasinghe'; };
  }, [project]);

  if (!project) return null;

  const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

  return (
    <div className={styles.page}>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className={styles.hero}>
        {project.image && (
          <img src={project.image} alt={project.title} className={styles.heroImg} />
        )}
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <Link to="/projects" className={styles.backLink}>
            <RiArrowLeftLine size={16} />
            All Projects
          </Link>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {project.title}
          </motion.h1>
          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            {project.description}
          </motion.p>
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────────── */}
      <div className={styles.body}>

        {/* Meta bar */}
        <motion.div
          className={styles.metaBar}
          initial="hidden" animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Year</span>
            <span className={styles.metaValue}>{project.year}</span>
          </div>
          {project.role && (
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>{project.role}</span>
            </div>
          )}
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Status</span>
            <span className={`${styles.statusBadge} ${styles[`status_${project.status}`]}`}>
              {statusLabels[project.status]}
            </span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>Stack</span>
            <div className={styles.stackRow}>
              {project.stack.map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Highlights */}
        <motion.section
          className={styles.section}
          initial="hidden" animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <h2 className={styles.sectionTitle}>
            <RiSparklingFill className={styles.sectionIcon} />
            Key Highlights
          </h2>
          <div className={styles.highlightsGrid}>
            {project.highlights.map((h, i) => (
              <motion.div
                key={i}
                className={styles.highlightCard}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.45 + i * 0.07 }}
              >
                <RiCheckboxCircleFill className={styles.highlightIcon} />
                <p className={styles.highlightText}>{h}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Long description sections */}
        <motion.section
          className={styles.section}
          initial="hidden" animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <h2 className={styles.sectionTitle}>
            <RiCodeSSlashFill className={styles.sectionIcon} />
            Project Details
          </h2>
          <div className={styles.descSections}>
            {project.longDescription.map((sec, i) => (
              <div key={i} className={styles.descSection}>
                <h3 className={styles.descHeading}>{sec.heading}</h3>
                <div className={styles.descBody}>{renderBody(sec.body)}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Links footer */}
        <motion.div
          className={styles.linksFooter}
          initial="hidden" animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.linkBtn} ${styles.linkBtnGhost}`}
              id={`github-link-${project.slug}`}
            >
              <RiGithubFill size={18} />
              View on GitHub
            </a>
          )}
          {project.liveHref && (
            <a
              href={project.liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.linkBtn} ${styles.linkBtnPrimary}`}
              id={`live-link-${project.slug}`}
            >
              <RiExternalLinkLine size={18} />
              Live Demo
            </a>
          )}
          {project.articleHref && (
            <a
              href={project.articleHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.linkBtn} ${styles.linkBtnArticle}`}
              id={`article-link-${project.slug}`}
            >
              <RiArticleLine size={18} />
              Read Article
            </a>
          )}
        </motion.div>

        {/* ── Prev / Next navigation ───────────────────────────── */}
        <motion.div
          className={styles.projectNav}
          initial="hidden" animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.4, delay: 0.65 }}
        >
          {prevProject ? (
            <Link to={`/projects/${prevProject.slug}`} className={styles.projectNavBtn} id="prev-project-link">
              <RiArrowLeftLine size={18} />
              <div className={styles.projectNavMeta}>
                <span className={styles.projectNavLabel}>Previous</span>
                <span className={styles.projectNavTitle}>{prevProject.title}</span>
              </div>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link to={`/projects/${nextProject.slug}`} className={`${styles.projectNavBtn} ${styles.projectNavBtnRight}`} id="next-project-link">
              <div className={styles.projectNavMeta}>
                <span className={styles.projectNavLabel}>Next</span>
                <span className={styles.projectNavTitle}>{nextProject.title}</span>
              </div>
              <RiArrowRightLine size={18} />
            </Link>
          ) : <div />}
        </motion.div>

        {/* ── Hire Me CTA ──────────────────────────────────────── */}
        <motion.div
          className={styles.hireCta}
          initial="hidden" animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          <div className={styles.hireCtaGlow} />
          <div className={styles.hireCtaInner}>
            <div className={styles.hireCtaText}>
              <span className={styles.hireCtaBadge}>🟢 Available for Opportunities</span>
              <h3 className={styles.hireCtaHeading}>Impressed by this project?</h3>
              <p className={styles.hireCtaSubtitle}>
                I'm actively looking for full-time roles, internships, and freelance collaborations.
                If you think I'd be a good fit for your team, I'd love to hear from you.
              </p>
            </div>
            <div className={styles.hireCtaActions}>
              <a
                href="/#contact"
                className={`${styles.linkBtn} ${styles.linkBtnPrimary}`}
                id="hire-cta-contact"
              >
                <RiMailSendLine size={18} />
                Get in Touch
              </a>
              <a
                href="https://www.linkedin.com/in/imeshmunasinghe/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.linkBtn} ${styles.linkBtnGhost}`}
                id="hire-cta-linkedin"
              >
                <RiLinkedinBoxFill size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
