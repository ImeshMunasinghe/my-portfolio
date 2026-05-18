import { Link, NavLink } from "react-router-dom";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import styles from "./Header.module.css";

interface HeaderProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          your
        </Link>

        <NavLink
          to="/work"
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
          }
        >
          Work
        </NavLink>
        <NavLink
          to="/writing"
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
          }
        >
          Writing
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
          }
        >
          About
        </NavLink>

        <button
          className={styles.themeToggle}
          onClick={onToggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <RiMoonLine size={18} />
          ) : (
            <RiSunLine size={18} />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
