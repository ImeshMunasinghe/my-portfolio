import { useEffect, useState } from 'react';
import styles from './Loader.module.css';

function Loader() {
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHiding(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.overlay} ${hiding ? styles.hiding : ''}`} aria-hidden="true">
      <div className={styles.content}>
        <div className={styles.monogram}>IM</div>
        <div className={styles.name}>Imesh Munasinghe</div>
        <div className={styles.bar}>
          <div className={styles.barFill} />
        </div>
      </div>
    </div>
  );
}

export default Loader;
