import { RiArrowRightUpLine } from 'react-icons/ri';
import styles from './Writing.module.css';

interface Article {
  title: string;
  date: string;
  readTime: string;
  href: string;
}

const articles: Article[] = [
  {
    title: 'Your First Article Title Here',
    date: 'May 2026',
    readTime: '5 min read',
    href: 'https://medium.com/@yourusername',
  },
  {
    title: 'Your Second Article Title Here',
    date: 'Apr 2026',
    readTime: '4 min read',
    href: 'https://medium.com/@yourusername',
  },
  {
    title: 'Your Third Article Title Here',
    date: 'Mar 2026',
    readTime: '6 min read',
    href: 'https://medium.com/@yourusername',
  },
];

function Writing() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Writing</h2>
      <ul className={styles.list}>
        {articles.map(article => (
          <li key={article.title}>
            <a
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.row}
            >
              <span className={styles.title}>{article.title}</span>
              <span className={styles.meta}>
                <span className={styles.date}>{article.date}</span>
                <span className={styles.dot}>·</span>
                <span className={styles.readTime}>{article.readTime}</span>
                <RiArrowRightUpLine className={styles.arrow} size={16} />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Writing;