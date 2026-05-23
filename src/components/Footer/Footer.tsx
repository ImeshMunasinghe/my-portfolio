import { RiGithubLine, RiMediumLine, RiMailLine, RiLinkedinLine } from 'react-icons/ri';
import styles from './Footer.module.css';

const socials = [
  {
    label: 'Email',
    href: 'mailto:imesh7lk@gmail.com',
    icon: RiMailLine,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/ImeshMunasinghe',
    icon: RiLinkedinLine,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ImeshMunasinghe',
    icon: RiGithubLine,
  },
  {
    label: 'Medium',
    href: 'https://medium.com/@ImeshM',
    icon: RiMediumLine,
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p>Copyright &copy; {new Date().getFullYear()} Imesh</p>
          <p>All Rights Reserved.</p>
        </div>
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
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;