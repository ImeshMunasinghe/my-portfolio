import { useEffect, useRef, useState } from 'react';
import styles from './CursorSpotlight.module.css';

function CursorSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Disable on touch devices
    const checkMobile = () => setIsMobile(window.matchMedia('(hover: none)').matches);
    checkMobile();

    const onMouseMove = (e: MouseEvent) => {
      if (!spotRef.current) return;
      spotRef.current.style.left = `${e.clientX}px`;
      spotRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isMobile) return null;

  return <div ref={spotRef} className={styles.spotlight} aria-hidden="true" />;
}

export default CursorSpotlight;
