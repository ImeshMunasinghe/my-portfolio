import styles from './About.module.css';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

function About() {
  useDocumentTitle('About');
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.bio}>
        I am Imesh Munasinghe, a passionate software developer with a love for building impactful digital experiences. With a background in computer science and a knack for problem-solving, I specialize in creating web applications that are both functional and user-friendly. When I'm not coding, you can find me exploring new technologies, writing about my learnings, or enjoying a good book on software development.
      </p>
    </section>
  );
}

export default About;