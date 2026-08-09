import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>

      <div className={styles.badge}>
        Websites · Automatisierung · Ravensburg
      </div>

      <h1 className={styles.title}>
        <span>Digitale Systeme,</span>
        <span className={styles.subtitle}>die ruhig überzeugen.</span>
      </h1>

      <p className={styles.description}>
        Hochwertige Websites und klare Automatisierungen für lokale Betriebe.
        <br />
        Durchdacht geplant. Präzise umgesetzt. Sauber übergeben.
      </p>

      <div className={styles.ctaButtons}>
        <a href="/kontakt" className={styles.primaryButton}>
          Projekt besprechen <span>→</span>
        </a>
        <a href="/websites" className={styles.secondaryButton}>
          Lösungen entdecken
        </a>
      </div>

      <div className={styles.productStage} aria-label="Aura Systems Leistungsübersicht">
        <a className={`${styles.productCard} ${styles.productCardWebsite}`} href="/websites" aria-label="Websites und Webanwendungen entdecken">
          <div className={styles.windowBar}><i /><i /><i /><span>Websites entdecken&nbsp; ↗</span></div>
          <div className={styles.websitePreview}>
            <small>WEBSITE · KLAR STRUKTURIERT</small>
            <strong>Ein Auftritt,<br />der ruhig überzeugt.</strong>
            <div><span>01&nbsp; Leistungen</span><span>02&nbsp; Vertrauen</span><span>03&nbsp; Kontakt</span></div>
          </div>
        </a>
        <a className={`${styles.productCard} ${styles.productCardCall}`} href="/automatisierung" aria-label="KI-Telefonservice entdecken">
          <small>ANFRAGE · ERFASST</small>
          <div className={styles.callOrb}><span>✓</span></div>
          <strong>Alles Wichtige<br />auf einen Blick</strong>
          <span>Name · Anliegen · Rückrufzeit</span>
        </a>
        <a className={`${styles.productCard} ${styles.productCardFlow}`} href="/automatisierung" aria-label="Automatisierungsabläufe entdecken">
          <small>ANFRAGE-FLOW</small>
          {['Eingang', 'Struktur', 'Entscheidung'].map((item, index) => <div key={item}><i>{index + 1}</i><span>{item}</span><b>{index === 2 ? '✓' : '→'}</b></div>)}
        </a>
      </div>

    </section>
  );
};

export default Hero;
