import { motion } from 'framer-motion';
import { RiHome4Line } from 'react-icons/ri';
import styles from './NotFound.module.css';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

function NotFound() {
  useDocumentTitle('404 | Not Found');
  return (
    <motion.div
      className={styles.page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.glitchWrapper}>
        <div className={styles.code} data-text="404">404</div>
      </div>
      <motion.h1 
        className={styles.title}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Looks like you're lost in space
      </motion.h1>
      <motion.p 
        className={styles.description}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
      </motion.p>
      <motion.a 
        href="/" 
        className={styles.button}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <RiHome4Line size={20} />
        Back to Earth
      </motion.a>
    </motion.div>
  );
}

export default NotFound;
