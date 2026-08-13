import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>

      <div className={styles.badge}>
        AI-native Systeme · Websites · Ravensburg
      </div>

      <h1 className={styles.title}>
        <span>Digitale Systeme,</span>
        <span className={styles.subtitle}>die mitdenken und entlasten.</span>
      </h1>

      <p className={styles.description}>
        Hochwertige Websites, KI-Assistenten und klare Automatisierungen für lokale Betriebe.
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

      <div className={styles.productStage}>
        <figure
          className={styles.systemFilm}
          aria-label="Website, KI und Automatisierung greifen als ein digitales System ineinander"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/aura-systems-flow-poster.png"
            aria-hidden="true"
          >
            <source src="/aura-systems-flow.mp4" type="video/mp4" />
          </video>
          <img
            className={styles.systemPoster}
            src="/aura-systems-flow-poster.png"
            alt="Helle Glasmodule für Website, KI und Automatisierung, die präzise ineinandergreifen"
          />
          <div className={styles.systemSteps} aria-hidden="true">
            <span><i>01</i> Website</span>
            <b>→</b>
            <span><i>02</i> KI</span>
            <b>→</b>
            <span><i>03</i> Automation</span>
          </div>
          <figcaption>
            <strong>Ein System statt einzelner Insellösungen.</strong>
            <a href="/automatisierung">Zusammenspiel entdecken&nbsp; ↗</a>
          </figcaption>
        </figure>
      </div>

    </section>
  );
};

export default Hero;
