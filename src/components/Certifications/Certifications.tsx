import { motion } from 'framer-motion';
import {
  RiExternalLinkLine,
} from 'react-icons/ri';
import {
  SiHackerrank,
  SiUdemy,
} from 'react-icons/si';
import styles from './Certifications.module.css';

interface Cert {
  title: string;
  issuer: string;
  date: string;
  href: string;
  icon: React.ReactNode;
  color: string;
}

const certs: Cert[] = [
  {
    title: 'Frontend Developer (React)',
    issuer: 'HackerRank',
    date: '2026',
    href: 'https://www.hackerrank.com/certificates/be2e36de6e7e',
    icon: <SiHackerrank size={28} />,
    color: '#00EA64',
  },
  {
    title: 'Java (Basic)',
    issuer: 'HackerRank',
    date: '2026',
    href: 'https://www.hackerrank.com/certificates/1dc1317e60cc',
    icon: <SiHackerrank size={28} />,
    color: '#00EA64',
  },
  {
    title: 'Udemy Certificate',
    issuer: 'Udemy',
    date: '2025',
    href: 'https://www.udemy.com/certificate/UC-bfb89e67-e680-471d-a87f-439e8ccf90a8/',
    icon: <SiUdemy size={28} />,
    color: '#A435F0',
  },
  {
    title: 'Udemy Certificate',
    issuer: 'Udemy',
    date: '2025',
    href: 'https://www.udemy.com/certificate/UC-4de19537-56ec-48cf-9c4d-5e146eb0c632/',
    icon: <SiUdemy size={28} />,
    color: '#A435F0',
  },
  {
    title: 'Udemy Certificate',
    issuer: 'Udemy',
    date: '2025',
    href: 'https://www.udemy.com/certificate/UC-93c1315e-d70d-4aed-9574-45b8b24e0f81/',
    icon: <SiUdemy size={28} />,
    color: '#A435F0',
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
            <a
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconWrap}
              style={{ color: cert.color }}
              aria-label={`View ${cert.title} credential`}
            >
              {cert.icon}
            </a>
            <div className={styles.info}>
              <div className={styles.certTitle}>{cert.title}</div>
              <div className={styles.issuer}>{cert.issuer}</div>
              <div className={styles.date}>{cert.date}</div>
            </div>
            <a
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              aria-label={`View ${cert.title} certificate`}
            >
              <RiExternalLinkLine size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
