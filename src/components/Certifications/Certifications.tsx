import { motion } from 'framer-motion';
import {
  RiAwardLine,
  RiExternalLinkLine,
  RiLinkedinFill,
} from 'react-icons/ri';
import { FaAws } from 'react-icons/fa';
import {
  SiGithub,
  SiGooglecloud,
} from 'react-icons/si';
import styles from './Certifications.module.css';

interface Cert {
  title: string;
  issuer: string;
  date: string;
  href?: string;
  icon: React.ReactNode;
  color: string;
}

const certs: Cert[] = [
  {
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'Amazon Web Services (AWS)',
    date: '2024',
    icon: <FaAws size={28} />,
    color: '#FF9900',
  },
  {
    title: 'GitHub Foundations',
    issuer: 'GitHub',
    date: '2024',
    icon: <SiGithub size={28} />,
    color: 'var(--color-text-primary)',
  },
  {
    title: 'Google Cloud Skills Boost',
    issuer: 'Google Cloud',
    date: '2024',
    icon: <SiGooglecloud size={28} />,
    color: '#4285F4',
  },
  {
    title: 'Build a RAG API with FastAPI',
    issuer: 'NextWork',
    date: '2025',
    icon: <RiAwardLine size={28} />,
    color: '#10b981',
  },
  {
    title: 'Career Essentials in Generative AI',
    issuer: 'LinkedIn Learning & Microsoft',
    date: '2024',
    icon: <RiLinkedinFill size={28} />,
    color: '#0A66C2',
  },
];

function Certifications() {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Certifications</h3>
      <p className={styles.subtitle}>Continuous learning through recognised programmes</p>
      <div className={styles.grid}>
        {certs.map((cert, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}
          >
            <div className={styles.iconWrap} style={{ color: cert.color }}>
              {cert.icon}
            </div>
            <div className={styles.info}>
              <div className={styles.certTitle}>{cert.title}</div>
              <div className={styles.issuer}>{cert.issuer}</div>
              <div className={styles.date}>{cert.date}</div>
            </div>
            {cert.href && (
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                aria-label={`View ${cert.title} certificate`}
              >
                <RiExternalLinkLine size={16} />
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
