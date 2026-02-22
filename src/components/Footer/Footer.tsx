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
      <div className={styles.container}>
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
            <div>Tel: 017691336194</div>
            <div>davidci2002@gmail.com</div>
            <div style={{ marginTop: '0.4rem' }}>aura-systems.de</div>
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
      </div>

      <div className={styles.bottom}>
        <span>© 2025 AURA Neural Architecture. All rights reserved.</span>
        <span>v2.0.0</span>
      </div>
    </footer>
  );
};

export default Footer;
