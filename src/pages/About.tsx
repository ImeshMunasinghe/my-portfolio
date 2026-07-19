import { motion } from 'framer-motion';
import styles from './About.module.css';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Skills from '../components/Skills/Skills';
import Timeline from '../components/Timeline/Timeline';
import Certifications from '../components/Certifications/Certifications';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
};

function About() {
  useDocumentTitle('About');
  return (
    <section className={styles.section}>
      <motion.h2
        className={styles.heading}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={0}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.p
        className={styles.bio}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={1}
        viewport={{ once: true }}
      >
        I am an Information Technology undergraduate passionately focused on building modern, high-performance web applications. I love taking ideas from a completely blank folder to a fully deployed product, focusing on clean architecture, type-safety, and seamless user experiences.

        Right now, I'm deep-diving into the full-stack ecosystem with React, TypeScript, and NestJS, while exploring how to integrate intelligent, agentic workflows and semantic search into real-world applications. Beyond writing code, I believe in documenting my learning journey and breaking down complex technical concepts through writing.

        When I’m not coding, you’ll probably find me exploring cloud foundations on AWS or experimenting with open-source automation tools.
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={2}
        viewport={{ once: true }}
      >
        <Timeline />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={3}
        viewport={{ once: true }}
      >
        <Skills />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        custom={4}
        viewport={{ once: true }}
      >
        <Certifications />
      </motion.div>
    </section>
  );
}

export default About;
