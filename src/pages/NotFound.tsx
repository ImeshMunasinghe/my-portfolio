import { motion } from 'framer-motion';
import { RiArrowLeftLine } from 'react-icons/ri';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <motion.div
      className={styles.page}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.code}>404</div>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.description}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <a href="/" className={styles.button}>
        <RiArrowLeftLine size={18} />
        Back to Home
      </a>
    </motion.div>
  );
}

export default NotFound;
