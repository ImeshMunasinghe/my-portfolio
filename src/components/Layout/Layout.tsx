import Header from "../Header/Header";
import styles from "./Layout.module.css";
import Footer from '../Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import CursorSpotlight from '../CursorSpotlight/CursorSpotlight';

interface LayoutProps {
  children: React.ReactNode;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

function Layout({ children, theme, onToggleTheme }: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <CursorSpotlight />
      <Header theme={theme} onToggleTheme={onToggleTheme} />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Layout;
