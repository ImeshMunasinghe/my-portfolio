import ProjectCard from './ProjectCard';
import type { Project } from './ProjectCard';
import styles from './Projects.module.css';

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A short, punchy description of what this project does and the problem it solves.',
    stack: ['React', 'TypeScript', 'Node.js'],
    href: 'https://github.com/yourusername',
  },
  {
    title: 'Project Two',
    description: 'Another project description. Keep it to two sentences max — clarity over completeness.',
    stack: ['Python', 'FastAPI', 'PostgreSQL'],
    href: 'https://github.com/yourusername',
  },
];

function Projects() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Work</h2>
      <div className={styles.grid}>
        {projects.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;