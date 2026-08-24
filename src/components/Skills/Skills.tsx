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
  RiDatabaseLine,
} from 'react-icons/ri';
import {
  SiNestjs,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiTypescript,
  SiSpringboot,
  SiNextdotjs,
  SiMysql,
  SiDocker,
  SiPostman,
  SiCucumber,
  SiGithub,
  SiSwagger,
  SiJira,
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
    name: 'Languages',
    skills: [
      { icon: <RiJavaLine size={28} />, label: 'Java' },
      { icon: <SiTypescript size={28} />, label: 'TypeScript' },
      { icon: <SiJavascript size={28} />, label: 'JavaScript' },
      { icon: <SiPython size={28} />, label: 'Python' },
      { icon: <RiDatabaseLine size={28} />, label: 'SQL' },
      {
        icon: (
          <span style={{ display: 'flex', gap: '2px' }}>
            <RiHtml5Line size={20} />
            <RiCss3Line size={20} />
          </span>
        ),
        label: 'HTML/CSS',
      },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { icon: <SiNestjs size={28} />, label: 'NestJS' },
      { icon: <SiSpringboot size={28} />, label: 'Spring Boot' },
      { icon: <RiNodejsLine size={28} />, label: 'Node.js' },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { icon: <RiReactjsLine size={28} />, label: 'React' },
      { icon: <SiNextdotjs size={28} />, label: 'Next.js' },
      { icon: <SiTailwindcss size={28} />, label: 'Tailwind CSS' },
    ],
  },
  {
    name: 'Databases & Storage',
    skills: [
      { icon: <SiPostgresql size={28} />, label: 'PostgreSQL' },
      { icon: <SiMysql size={28} />, label: 'MySQL' },
      { icon: <SiMongodb size={28} />, label: 'MongoDB' },
      { icon: <RiFirebaseLine size={28} />, label: 'Firebase (Firestore)' },
    ],
  },
  {
    name: 'DevOps & Cloud',
    skills: [
      { icon: <RiCloudLine size={28} />, label: 'AWS' },
      { icon: <SiDocker size={28} />, label: 'Docker' },
    ],
  },
  {
    name: 'Testing',
    skills: [
      { icon: <SiPostman size={28} />, label: 'Postman' },
      { icon: <SiCucumber size={28} />, label: 'Cucumber (BDD)' },
    ],
  },
  {
    name: 'Developer Tools',
    skills: [
      { icon: <RiGitBranchLine size={28} />, label: 'Git' },
      { icon: <SiGithub size={28} />, label: 'GitHub' },
      { icon: <SiSwagger size={28} />, label: 'Swagger / OpenAPI' },
      { icon: <SiJira size={28} />, label: 'Jira' },
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
