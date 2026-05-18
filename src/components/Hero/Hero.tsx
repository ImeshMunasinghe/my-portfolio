import styles from './Hero.module.css';
import avatar from '../../assets/avatar.jpg';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.eyebrow}>Available for work</div>
        <h1 className={styles.name}>Imesh Munasinghe</h1>
        <p className={styles.role}>
          Software Engineer & lifelong learner building thoughtful digital experiences.
        </p>
        <div className={styles.links}>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="GitHub (opens in a new tab)"
          >
            GitHub
          </a>
          <a
            href="https://medium.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label="Medium (opens in a new tab)"
          >
            Medium
          </a>
          <a
            href="mailto:you@email.com"
            className={styles.link}
          >
            Email
          </a>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img
          src={avatar}
          alt="Your Name"
          className={styles.avatar}
        />
      </div>
    </section>
  );
}

export default Hero;