import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const columns = [
    {
      title: 'Navigation',
      links: ['Leistungen', 'Prozess', 'Preise', 'FAQ', 'Kontakt'],
    },
    {
      title: 'Rechtliches',
      links: ['Impressum', 'Datenschutz', 'AGB'],
    },
    {
      title: 'Kontakt',
      links: ['Termin buchen'],
    },
  ];

  return (
    <footer className={styles.footer}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className={styles.brand}>
          <div className={styles.logoText}>AURA</div>
          <div className={styles.logoSubtext}>Neural Architecture</div>
          <p className={styles.brandDescription}>
            Premium Web Solutions für ambitionierte Unternehmen. Schnell.
            Skalierbar. Sichtbar.
          </p>
          <div className={styles.contactInfo}>
            <div>Inhaber: David Lamberts</div>
            <div>Am Bergle 28, 88284 Schlier</div>
            <div>
              Tel:{' '}
              <a href="tel:+4917691336194" className={styles.contactLink}>
                017691336194
              </a>
            </div>
            <div>
              <a
                href="mailto:david.lamberts@aurasystems.ltd"
                className={styles.contactLink}
              >
                david.lamberts@aurasystems.ltd
              </a>
            </div>
            <div style={{ marginTop: '0.4rem' }}>
              <a
                href="https://aura-systems.de"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                aura-systems.de
              </a>
            </div>
            <div style={{ marginTop: '0.4rem' }}>
              <a
                href="https://www.instagram.com/aura_sytems/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                @aura_sytems
              </a>
            </div>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title} className={styles.column}>
            <div className={styles.columnTitle}>{col.title}</div>
            <ul className={styles.linkList}>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className={styles.link}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      <div className={styles.bottom}>
        <span>© 2025 AURA Neural Architecture. All rights reserved.</span>
        <span>v2.0.0</span>
      </div>
    </footer>
  );
};

export default Footer;
