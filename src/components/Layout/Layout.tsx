import Header from "../Header/Header";
import styles from "./Layout.module.css";
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

function Layout({ children, theme, onToggleTheme }: LayoutProps) {
  return (
    <div className={styles.wrapper}>
      <Header theme={theme} onToggleTheme={onToggleTheme} />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
