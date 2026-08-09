import { motion } from 'framer-motion';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const columns = [
    {
      title: 'Navigation',
      links: [
        ['Leistungen', '#leistungen'],
        ['Prozess', '#prozess'],
        ['Preise', '#preise'],
        ['FAQ', '#faq'],
        ['Kontakt', '#kontakt'],
      ],
    },
    {
      title: 'Rechtliches',
      links: [
        ['Impressum', '/impressum.html'],
        ['Datenschutz', '/datenschutz.html'],
        ['AGB', '/agb.html'],
      ],
    },
    {
      title: 'Kontakt',
      links: [['Projekt anfragen', '#kontakt']],
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
          <div className={styles.logoSubtext}>Digital Systems</div>
          <p className={styles.brandDescription}>
            Klare Websites, gezielte Reparaturen und kleine Automatisierungen
            für lokale Betriebe.
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
              {col.links.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className={styles.link}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      <div className={styles.bottom}>
        <span>© 2026 AURA SYSTEMS. Alle Rechte vorbehalten.</span>
        <span>Entwurfsstand 2.10</span>
      </div>
    </footer>
  );
};

export default Footer;
