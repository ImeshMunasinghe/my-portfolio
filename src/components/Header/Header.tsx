import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiSunLine, RiMoonLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import styles from "./Header.module.css";

interface HeaderProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

function Header({ theme, onToggleTheme }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
          Imesh Munasinghe
        </Link>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ""}`}>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
            }
            onClick={closeMobileMenu}
          >
            Work
          </NavLink>
          <NavLink
            to="/writing"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
            }
            onClick={closeMobileMenu}
          >
            Writing
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`
            }
            onClick={closeMobileMenu}
          >
            About
          </NavLink>

          <button
            className={styles.themeToggle}
            onClick={() => {
              onToggleTheme();
              closeMobileMenu();
            }}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <RiMoonLine size={18} />
            ) : (
              <RiSunLine size={18} />
            )}
          </button>
        </nav>

        <button 
          className={styles.mobileMenuButton} 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Header;
