import { useState, useEffect, useRef } from 'react';
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
    href: 'https://www.linkedin.com/in/imeshmunasinghe/',
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
  const [isScrolling, setIsScrolling] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, 1500); // Keep visible for 1.5 seconds after scrolling stops
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <footer className={`${styles.footer} ${isScrolling ? styles.visible : styles.hidden}`}>
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