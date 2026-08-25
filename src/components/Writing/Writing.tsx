import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiPenNibLine } from 'react-icons/ri';
import { articles } from '../../data/posts';
import styles from './Writing.module.css';

function Writing() {
  // Show only the latest 3 articles in a grid on the homepage
  const featuredArticles = articles.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Blogs</h2>
        <p className={styles.subtitle}>Check out my latest blog posts</p>
      </div>
      
      <div className={styles.grid}>
        {featuredArticles.map((article, idx) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className={styles.cardWrapper}
          >
            <div className={styles.card}>
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.imageBlock}
                aria-label={`Read ${article.title}`}
              >
                {article.image ? (
                  <img src={article.image} alt={article.title} className={styles.image} />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <span className={styles.imageText}>No Header Image</span>
                  </div>
                )}
              </a>
              <div className={styles.contentBlock}>
                <h3 className={styles.title}>{article.title}</h3>
                <p className={styles.description}>{article.description}</p>
                
                <div className={styles.metaInfo}>
                  <span className={styles.date}>{article.date}</span>
                </div>
              </div>
                
              <div className={styles.footer}>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                  aria-label={`Read ${article.title} on ${article.platform || 'Medium'} (opens in a new tab)`}
                >
                  <RiPenNibLine size={16} />
                  {article.platform || 'Medium'}
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Link to="/writing" className={styles.moreLink}>
        View More Blogs &rarr;
      </Link>
    </section>
  );
}

export default Writing;