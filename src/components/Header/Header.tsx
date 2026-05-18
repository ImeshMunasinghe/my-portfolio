import { RiSunLine, RiMoonLine } from 'react-icons/ri';
import styles from './Header.module.css';

interface HeaderProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          your.name
        </a>

        <nav className={styles.nav}>
          <a href="#work" className={styles.navLink}>Work</a>
          <a href="#writing" className={styles.navLink}>Writing</a>
          <a href="#about" className={styles.navLink}>About</a>
        </nav>

        <button
          className={styles.themeToggle}
          onClick={onToggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <RiMoonLine size={18} /> : <RiSunLine size={18} />}
        </button>
      </div>
    </header>
  );
}

export default Header;