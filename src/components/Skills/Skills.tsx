import { motion } from 'framer-motion';
import {
  RiReactjsLine,
  RiNodejsLine,
  RiHtml5Line,
  RiCss3Line,
  RiGitBranchLine,
  RiDatabase2Line,
} from 'react-icons/ri';
import {
  SiTypescript,
  SiNextdotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si';
import styles from './Skills.module.css';

const skills = [
  { icon: <RiReactjsLine size={32} />, label: 'React' },
  { icon: <SiNextdotjs size={32} />, label: 'Next.js' },
  { icon: <SiTypescript size={32} />, label: 'TypeScript' },
  { icon: <RiNodejsLine size={32} />, label: 'Node.js' },
  { icon: <SiPython size={32} />, label: 'Python' },
  { icon: <SiMongodb size={32} />, label: 'MongoDB' },
  { icon: <SiPostgresql size={32} />, label: 'PostgreSQL' },
  { icon: <RiHtml5Line size={32} />, label: 'HTML5' },
  { icon: <RiCss3Line size={32} />, label: 'CSS3' },
  { icon: <RiGitBranchLine size={32} />, label: 'Git' },
  { icon: <RiDatabase2Line size={32} />, label: 'SQL' },
];

function Skills() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Tech Stack</h3>
      <div className={styles.grid}>
        {skills.map((skill, i) => (
          <motion.div
            key={skill.label}
            className={styles.chip}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
          >
            <span className={styles.icon}>{skill.icon}</span>
            <span className={styles.label}>{skill.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
