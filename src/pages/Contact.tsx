import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { RiMailLine, RiPhoneLine, RiMapPinLine, RiUserLine, RiMessage2Line, RiSendPlaneFill, RiCheckboxCircleLine, RiErrorWarningLine } from 'react-icons/ri';
import styles from './Contact.module.css';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

// ⚠️ Replace these with your actual EmailJS credentials from https://emailjs.com
const EMAILJS_SERVICE_ID = 'service_tw5nk6h';
const EMAILJS_TEMPLATE_ID = 'template_bcmoi3v';
const EMAILJS_PUBLIC_KEY = '3PYjEYGLPTjTRw3ah';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay }
});

function Contact() {
  useDocumentTitle('Contact');
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const isFormValid = name.trim() !== '' && email.trim() !== '' && message.trim() !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid || !formRef.current) return;
    setIsSubmitting(true);
    setError('');

    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, { publicKey: EMAILJS_PUBLIC_KEY });
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
      setTimeout(() => setIsSubmitted(false), 6000);
    } catch {
      setError('Something went wrong. Please try emailing me directly at imesh7lk@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.section}>
      <motion.div className={styles.header} {...fadeUp(0)}>
        <h2 className={styles.heading}>Get In Touch</h2>
        <p className={styles.subtitle}>
          Thinking about a new project, a problem to solve, or just want to connect? Let's do it!
        </p>
      </motion.div>

      <div className={styles.container}>
        <motion.div className={styles.infoCard} {...fadeUp(0.1)}>
          <h3 className={styles.cardTitle}>Contact Information</h3>
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <div className={styles.iconWrapper}><RiMailLine size={20} /></div>
              <div>
                <div className={styles.itemLabel}>Email</div>
                <a href="mailto:imesh7lk@gmail.com" className={styles.itemValue}>imesh7lk@gmail.com</a>
              </div>
            </li>
            <li className={styles.infoItem}>
              <div className={styles.iconWrapper}><RiPhoneLine size={20} /></div>
              <div>
                <div className={styles.itemLabel}>Phone</div>
                <div className={styles.itemValue}>+94 76 363 5147</div>
              </div>
            </li>
            <li className={styles.infoItem}>
              <div className={styles.iconWrapper}><RiMapPinLine size={20} /></div>
              <div>
                <div className={styles.itemLabel}>Location</div>
                <div className={styles.itemValue}>Sri Lanka</div>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div className={styles.formCard} {...fadeUp(0.2)}>
          <h3 className={styles.cardTitle}>Send Me a Message</h3>

          {isSubmitted ? (
            <div className={styles.successMessage}>
              <RiCheckboxCircleLine className={styles.successIcon} size={48} />
              <h4 className={styles.successTitle}>Message Sent!</h4>
              <p className={styles.successText}>
                Thank you for reaching out. I'll get back to you shortly.
              </p>
            </div>
          ) : (
            <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Your Name</label>
                <div className={styles.inputWrapper}>
                  <RiUserLine className={styles.inputIcon} size={18} />
                  <input type="text" id="name" name="from_name" className={styles.input}
                    placeholder="Enter your full name" value={name}
                    onChange={(e) => setName(e.target.value)} disabled={isSubmitting} />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Your Email</label>
                <div className={styles.inputWrapper}>
                  <RiMailLine className={styles.inputIcon} size={18} />
                  <input type="email" id="email" name="from_email" className={styles.input}
                    placeholder="Enter your email address" value={email}
                    onChange={(e) => setEmail(e.target.value)} disabled={isSubmitting} />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Your Message</label>
                <div className={styles.inputWrapper}>
                  <RiMessage2Line className={styles.inputIcon} size={18} />
                  <textarea id="message" name="message" className={styles.textarea}
                    placeholder="Tell me about your project or just say hello!"
                    rows={4} value={message}
                    onChange={(e) => setMessage(e.target.value)} disabled={isSubmitting} />
                </div>
              </div>

              {error && (
                <div className={styles.errorMessage}>
                  <RiErrorWarningLine size={18} />
                  <span>{error}</span>
                </div>
              )}

              <button type="submit"
                className={`${styles.submitButton} ${isFormValid && !isSubmitting ? styles.submitButtonActive : ''}`}
                disabled={!isFormValid || isSubmitting}>
                <RiSendPlaneFill size={18} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;


