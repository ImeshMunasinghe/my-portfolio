import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiArrowLeftLine, RiPenNibLine } from 'react-icons/ri';
import { articles } from '../data/posts';
import styles from './AllWriting.module.css';

function AllWriting() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link to="/" className={styles.backHome}>
          <RiArrowLeftLine size={18} />
          Back to Home
        </Link>
        <h1 className={styles.heading}>All Writings</h1>
        <p className={styles.subtitle}>Articles on software architecture, frontend development, and computer graphics</p>
      </header>

      {/* Grid displaying the articles */}
      <div className={styles.grid}>
        {articles.map((article, idx) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className={styles.card}
          >
            <div className={styles.imageBlock}>
              {article.image ? (
                <img src={article.image} alt={article.title} className={styles.image} />
              ) : (
                <div className={styles.imagePlaceholder}>
                  <span className={styles.imageText}>No Header Image</span>
                </div>
              )}
            </div>
            <div className={styles.contentBlock}>
              <h3 className={styles.paperTitle}>{article.title}</h3>
              <p className={styles.description}>{article.description}</p>
              
              <div className={styles.metaInfo}>
                <span className={styles.pill}>{article.date}</span>
                <span className={styles.readTime}>{article.readTime}</span>
              </div>
              
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkButton}
                aria-label={`Read ${article.title} on ${article.platform || 'Medium'} (opens in a new tab)`}
              >
                <RiPenNibLine size={18} />
                Read on {article.platform || 'Medium'}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default AllWriting;
