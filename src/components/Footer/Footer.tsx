import { RiGithubLine, RiMediumLine, RiMailLine } from 'react-icons/ri';
import styles from './Footer.module.css';

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/yourusername',
    icon: RiGithubLine,
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@yourusername',
    icon: RiMediumLine,
  },
  {
    label: 'Email',
    href: 'mailto:you@email.com',
    icon: RiMailLine,
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.socials}>
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={styles.socialLink}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} Imesh Munasinghe. Built with React & Vite.
        </p>
      </div>
    </footer>
  );
}

export default Footer;