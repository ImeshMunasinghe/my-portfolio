import { motion } from 'framer-motion';
import { RiGraduationCapLine, RiBriefcaseLine } from 'react-icons/ri';
import styles from './Timeline.module.css';

// Import logo images
import rvcLogo from '../../assets/rvc.jpg';
import intecsLogo from '../../assets/intecs.jpg';
import ieeesbLogo from '../../assets/ieeesb.jpg';
import mhcLogo from '../../assets/mhc.jpg';

interface EducationEntry {
  year: string;
  title: string;
  institution: string;
  details: string[];
  logo?: string; // path to logo image, optional for now
}

interface ExperienceEntry {
  period: string;
  role: string;
  organization: string;
  logo?: string; // path to logo image, optional for now
}

const education: EducationEntry[] = [
  {
    year: '2022',
    title: 'G.C.E. Advanced Level',
    institution: 'Ruhunu Vijayaba College',
    details: ['Combined Maths : A', 'Chemistry : A', 'Physics : B'],
    logo: rvcLogo,
  },
  {
    year: '2018',
    title: 'G.C.E. Ordinary Level',
    institution: 'Ruhunu Vijayaba College',
    details: ['9 A\'s'],
    logo: rvcLogo,
  },
];

const experience: ExperienceEntry[] = [
  {
    period: 'Nov 2025 – Present',
    role: 'Assistant Secretary',
    organization: 'INTECS - University of Moratuwa',
    logo: intecsLogo,
  },
  {
    period: 'Mar 2026 – Present',
    role: 'Editorial Lead & Chairperson of RiseUpMora 2026',
    organization: 'IEEE Student Branch - University of Moratuwa',
    logo: ieeesbLogo,
  },
  {
    period: 'Mar 2026 – Present',
    role: 'Senior Editor',
    organization: 'Mora Hiking Club',
    logo: mhcLogo,
  },
];


function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div className={styles.logoPlaceholder} title={name}>
      {name.charAt(0).toUpperCase()}
    </div>
  );
}

function Timeline() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.sectionTitle}>My Journey</h3>
      <div className={styles.columns}>

        {/* Education Column */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}><RiGraduationCapLine /> Education</h4>
          <div className={styles.track}>
            <div className={styles.verticalLine} />
            {education.map((entry, i) => (
              <motion.div
                key={i}
                className={styles.entryRow}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: 0.07 * i }}
              >
                <div className={styles.dotWrapper}>
                  <div className={styles.dot} />
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTop}>
                    {entry.logo
                      ? <img src={entry.logo} alt={entry.institution} className={styles.logo} />
                      : <LogoPlaceholder name={entry.institution} />
                    }
                    <div>
                      <div className={styles.year}>{entry.year}</div>
                      <div className={styles.cardTitle}>{entry.title}</div>
                      <div className={styles.cardSubtitle}>{entry.institution}</div>
                    </div>
                  </div>
                  <ul className={styles.detailList}>
                    {entry.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Column */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}><RiBriefcaseLine /> Experience</h4>
          <div className={styles.track}>
            <div className={styles.verticalLine} />
            {experience.map((entry, i) => (
              <motion.div
                key={i}
                className={styles.entryRow}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: 0.07 * i }}
              >
                <div className={styles.dotWrapper}>
                  <div className={styles.dot} />
                </div>
                <div className={styles.card}>
                  <div className={styles.cardTop}>
                    {entry.logo
                      ? <img src={entry.logo} alt={entry.organization} className={styles.logo} />
                      : <LogoPlaceholder name={entry.organization} />
                    }
                    <div>
                      <div className={styles.year}>{entry.period}</div>
                      <div className={styles.cardTitle}>{entry.role}</div>
                      <div className={styles.cardSubtitle}>{entry.organization}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Timeline;
