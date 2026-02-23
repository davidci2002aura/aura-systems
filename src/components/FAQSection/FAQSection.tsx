import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './FAQSection.module.css';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Wie lange dauert eine Website?',
      a: 'Ein Starter-Paket ist oft in 7–10 Tagen fertig, während komplexe Websites 3–6 Wochen benötigen.',
    },
    {
      q: 'Muss ich Inhalte selbst pflegen?',
      a: 'Nein. Wir übernehmen das komplett. Senden Sie uns Änderungswünsche – wir setzen diese professionell um.',
    },
    {
      q: 'Was passiert nach dem Launch?',
      a: 'Im Enterprise Paket sind 3 Monate Support inklusive. Danach bieten wir Wartungspakete an.',
    },
    {
      q: 'Bieten Sie Hosting an?',
      a: 'Wir richten Ihr Hosting komplett ein. Sie bleiben Vertragspartner – volle Kontrolle, keine Abhängigkeit.',
    },
  ];

  return (
    <section
      id="faq"
      className={styles.section}
      aria-labelledby="faq-heading"
    >
      <div className={styles.container}>
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className={styles.sectionTag}>
            <span className={styles.tagLine} /> FAQ
          </div>
          <h2 id="faq-heading" className={styles.sectionTitle}>
            Häufige
            <br />
            <span className={styles.light}>Fragen.</span>
          </h2>
          <p className={styles.description}>
            Ehrlich. Auf den Punkt. Ohne Marketingsprache.
          </p>
          <a href="#kontakt" className={styles.ctaButton}>
            Frage stellen →
          </a>
        </motion.div>

        <motion.dl
          className={styles.faqList}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
        >
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <dt>
                <button
                  className={styles.question}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span>{faq.q}</span>
                  <span
                    className={`${styles.icon} ${
                      openIndex === index ? styles.open : ''
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
              </dt>
              <dd
                id={`faq-answer-${index}`}
                className={`${styles.answer} ${
                  openIndex === index ? styles.open : ''
                }`}
                aria-labelledby={`faq-question-${index}`}
                style={{
                  maxHeight: openIndex === index ? '200px' : 0,
                  paddingBottom: openIndex === index ? '1.25rem' : 0,
                }}
              >
                {faq.a}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default FAQSection;
