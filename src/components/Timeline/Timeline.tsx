import { motion } from 'framer-motion';
import { RiCalendarLine } from 'react-icons/ri';
import styles from './Timeline.module.css';

interface TimelineEntry {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'achievement' | 'role';
}

const entries: TimelineEntry[] = [
  {
    year: '2016',
    title: 'G.C.E. Ordinary Level',
    subtitle: 'Ruhunu Vijayaba College',
    description: 'Completed O/L examinations, laying the academic foundation.',
    type: 'education',
  },
  {
    year: '2019',
    title: 'G.C.E. Advanced Level',
    subtitle: 'Ruhunu Vijayaba College',
    description: 'Sat A/L examinations in the Physical Science stream.',
    type: 'education',
  },
  {
    year: '2022',
    title: 'Enrolled at University of Moratuwa',
    subtitle: 'B.Sc. (Hons.) Information Technology',
    description: 'Commenced undergraduate studies at one of Sri Lanka\'s top engineering universities.',
    type: 'education',
  },
  {
    year: '2023',
    title: 'Senior Editor — Mora Hiking Club',
    subtitle: 'University of Moratuwa',
    description: 'Led editorial content for the Mora Hiking Club, developing storytelling and content strategy skills.',
    type: 'role',
  },
  {
    year: '2024',
    title: 'Team Lead — IEEE Editorial Committee',
    subtitle: 'IEEE Student Branch, UOM',
    description: 'Led a team producing technical publications and promoting engineering culture across the student community.',
    type: 'achievement',
  },
  {
    year: '2024',
    title: 'Assistant Secretary — INTECS',
    subtitle: 'University of Moratuwa',
    description: 'Managed organisational operations for the IT faculty student association.',
    type: 'role',
  },
  {
    year: '2025',
    title: 'Full-Stack & AI Developer',
    subtitle: 'Independent Projects',
    description: 'Building production-grade applications with React, TypeScript, NestJS, and integrating agentic AI workflows.',
    type: 'achievement',
  },
];

const typeColors: Record<TimelineEntry['type'], string> = {
  education: 'var(--color-accent)',
  achievement: '#10b981',
  role: '#f59e0b',
};

function Timeline() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>My Journey</h3>
      <div className={styles.line} />
      <div className={styles.entries}>
        {entries.map((entry, i) => (
          <motion.div
            key={i}
            className={`${styles.entry} ${i % 2 === 0 ? styles.entryLeft : styles.entryRight}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.05 * i }}
          >
            <div className={styles.card}>
              <div className={styles.dot} style={{ backgroundColor: typeColors[entry.type] }} />
              <div className={styles.yearBadge}>
                <RiCalendarLine size={13} />
                {entry.year}
              </div>
              <div className={styles.cardTitle}>{entry.title}</div>
              <div className={styles.cardSubtitle}>{entry.subtitle}</div>
              <p className={styles.cardDesc}>{entry.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
