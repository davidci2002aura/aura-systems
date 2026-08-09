import RippleButton from '../RippleButton/RippleButton';
import styles from './Hero.module.css';

interface HeroProps {
  introGone: boolean;
}

const Hero: React.FC<HeroProps> = ({ introGone }) => {
  return (
    <section className={styles.hero}>

      <div
        className={styles.badge}
        style={{
          opacity: introGone ? 1 : 0,
        }}
      >
        Websites · Reparaturen · Automatisierung · 2026
      </div>

      <h1
        className={styles.title}
        style={{
          opacity: introGone ? 1 : 0,
        }}
      >
        <span>AURA</span>
        <span className={styles.subtitle}>Digital Systems</span>
      </h1>

      <p
        className={styles.description}
        style={{
          opacity: introGone ? 1 : 0,
        }}
      >
        Klare Websites und kleine Automatisierungen für lokale Betriebe.
        <br />
        Verständlich geplant. Hochwertig umgesetzt. Kontrollierbar übergeben.
      </p>

      <div
        className={styles.ctaButtons}
        style={{
          opacity: introGone ? 1 : 0,
        }}
      >
        <RippleButton href="#kontakt" className={styles.primaryButton}>
          Kostenlose Kurzprüfung →
        </RippleButton>
        <RippleButton href="#preise" className={styles.secondaryButton}>
          Pakete ansehen
        </RippleButton>
      </div>

      <div className={styles.productStage} style={{ opacity: introGone ? 1 : 0 }} aria-label="Aura Systems Leistungsübersicht">
        <div className={`${styles.productCard} ${styles.productCardWebsite}`}>
          <div className={styles.windowBar}><i /><i /><i /><span>Aura Projektvorschau</span></div>
          <div className={styles.websitePreview}>
            <small>WEBSITE · KLAR STRUKTURIERT</small>
            <strong>Ein Auftritt,<br />der ruhig überzeugt.</strong>
            <div><span>01&nbsp; Leistungen</span><span>02&nbsp; Vertrauen</span><span>03&nbsp; Kontakt</span></div>
          </div>
        </div>
        <div className={`${styles.productCard} ${styles.productCardCall}`}>
          <small>ANFRAGE · ERFASST</small>
          <div className={styles.callOrb}><span>✓</span></div>
          <strong>Alles Wichtige<br />auf einen Blick</strong>
          <span>Name · Anliegen · Rückrufzeit</span>
        </div>
        <div className={`${styles.productCard} ${styles.productCardFlow}`}>
          <small>ANFRAGE-FLOW</small>
          {['Eingang', 'Struktur', 'Entscheidung'].map((item, index) => <div key={item}><i>{index + 1}</i><span>{item}</span><b>{index === 2 ? '✓' : '→'}</b></div>)}
        </div>
      </div>

    </section>
  );
};

export default Hero;
