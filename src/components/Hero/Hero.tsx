import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.eyebrow}>Available for work</div>
      <h1 className={styles.name}>Imesh Munasinghe</h1>
      <p className={styles.role}>
        Software Engineer & lifelong learner building thoughtful digital experiences.
      </p>
      <div className={styles.links}>
        <a
          href="https://github.com/ImeshMunasinghe"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          GitHub
        </a>
        <a
          href="https://medium.com/@ImeshM"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Medium
        </a>
        <a
          href="mailto:imesh7lk@gmail.com"
          className={styles.link}
        >
          Email
        </a>
      </div>
    </section>
  );
}

export default Hero;