import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RiSunLine, RiMoonLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import styles from "./Header.module.css";

interface HeaderProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

function Header({ theme, onToggleTheme }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("");
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger when section crosses the middle of the screen
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sectionIds = ["hero", "about", "work", "writing", "contact"];
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isHomePage]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <a href={isHomePage ? "#hero" : "/#hero"} className={styles.logo} onClick={closeMobileMenu}>
            IMESH <span className={styles.logoBold}>MUNASINGHE</span>
          </a>
        </div>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ""}`}>
          <a
            href={isHomePage ? "#about" : "/#about"}
            className={`${styles.navLink} ${activeSection === "about" ? styles.activeNavLink : ""}`}
            onClick={closeMobileMenu}
          >
            About
          </a>
          <a
            href={isHomePage ? "#work" : "/#work"}
            className={`${styles.navLink} ${activeSection === "work" ? styles.activeNavLink : ""}`}
            onClick={closeMobileMenu}
          >
            Projects
          </a>
          <a
            href={isHomePage ? "#writing" : "/#writing"}
            className={`${styles.navLink} ${activeSection === "writing" ? styles.activeNavLink : ""}`}
            onClick={closeMobileMenu}
          >
            Articles
          </a>
          <a
            href={isHomePage ? "#contact" : "/#contact"}
            className={`${styles.navLink} ${activeSection === "contact" ? styles.activeNavLink : ""}`}
            onClick={closeMobileMenu}
          >
            Contact
          </a>

          <button
            className={styles.themeToggle}
            onClick={() => {
              onToggleTheme();
              closeMobileMenu();
            }}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <RiMoonLine size={20} />
            ) : (
              <RiSunLine size={20} />
            )}
          </button>
        </nav>

        <div className={styles.mobileRight}>
          <button
            className={styles.themeToggle}
            onClick={onToggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <RiMoonLine size={20} /> : <RiSunLine size={20} />}
          </button>
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <RiCloseLine size={24} /> : <RiMenu3Line size={24} />}
          </button>
        </div>
      </div>

      {/* Full-screen mobile nav overlay */}
      <nav className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ""}`}>
        <a href={isHomePage ? "#about" : "/#about"} className={styles.mobileNavLink} onClick={closeMobileMenu}>About</a>
        <a href={isHomePage ? "#work" : "/#work"} className={styles.mobileNavLink} onClick={closeMobileMenu}>Projects</a>
        <a href={isHomePage ? "#writing" : "/#writing"} className={styles.mobileNavLink} onClick={closeMobileMenu}>Articles</a>
        <a href={isHomePage ? "#contact" : "/#contact"} className={styles.mobileNavLink} onClick={closeMobileMenu}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
