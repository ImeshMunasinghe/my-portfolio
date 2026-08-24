import { motion } from 'framer-motion';
import {
  RiReactjsLine,
  RiNodejsLine,
  RiHtml5Line,
  RiCss3Line,
  RiGitBranchLine,
  RiFirebaseLine,
  RiJavaLine,
  RiCloudLine,
} from 'react-icons/ri';
import {
  SiNestjs,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiPython,
} from 'react-icons/si';
import styles from './Skills.module.css';

interface Skill {
  icon: React.ReactNode;
  label: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const categories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { icon: <RiReactjsLine size={28} />, label: 'React' },
      { icon: <RiHtml5Line size={28} />, label: 'HTML5' },
      { icon: <RiCss3Line size={28} />, label: 'CSS3' },
      { icon: <SiTailwindcss size={28} />, label: 'Tailwind' },
      { icon: <SiJavascript size={28} />, label: 'JavaScript' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { icon: <SiNestjs size={28} />, label: 'NestJS' },
      { icon: <RiNodejsLine size={28} />, label: 'Node.js' },
      { icon: <SiPython size={28} />, label: 'Python' },
      { icon: <RiJavaLine size={28} />, label: 'Java' },
    ],
  },
  {
    name: 'Database & Cloud',
    skills: [
      { icon: <SiPostgresql size={28} />, label: 'PostgreSQL' },
      { icon: <SiMongodb size={28} />, label: 'MongoDB' },
      { icon: <RiFirebaseLine size={28} />, label: 'Firebase' },
      { icon: <RiCloudLine size={28} />, label: 'AWS' },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { icon: <RiGitBranchLine size={28} />, label: 'Git' },
    ],
  },
];

function Skills() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Tech Stack</h3>
      <div className={styles.categories}>
        {categories.map((cat) => (
          <div key={cat.name} className={styles.category}>
            <div className={styles.categoryLabel}>{cat.name}</div>
            <div className={styles.grid}>
              {cat.skills.map((skill, i) => (
                <motion.div
                  key={skill.label}
                  className={styles.chip}
                  initial={{ opacity: 0, scale: 0.85 }}
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
        ))}
      </div>
    </div>
  );
}

export default Skills;
