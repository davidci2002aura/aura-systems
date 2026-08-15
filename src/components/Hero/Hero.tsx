import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <div className={styles.badge}><i /> Ravensburg · Websites · AI-native Systeme</div>
        <h1 className={styles.title}>Digitale Systeme,<br /><span>die Arbeit abnehmen.</span></h1>
        <p className={styles.description}>Aura Systems verbindet hochwertige Websites, klare Automatisierung und kontrollierte KI zu Lösungen, die im Alltag wirklich funktionieren.</p>
        <div className={styles.ctaButtons}>
          <a href="/kontakt" className={styles.primaryButton}>Projekt besprechen <span>→</span></a>
          <a href="/atlas" className={styles.secondaryButton}>Atlas erleben</a>
        </div>
        <div className={styles.proofLine}><span>Eigene Prototypen</span><span>Klare Freigaben</span><span>Konten bleiben bei Ihnen</span></div>
      </div>

      <div className={styles.systemStage} aria-label="Aura Systems verbindet Website, Anfragen, KI und menschliche Freigabe">
        <div className={styles.stageTop}><span>LIVE SYSTEM MAP</span><b><i /> CONTROLLED</b></div>
        <div className={styles.systemMap}>
          <div className={`${styles.node} ${styles.nodeWebsite}`}><span>01</span><small>WEBSITE</small><strong>Klare digitale<br />Anlaufstelle</strong><i>ONLINE</i></div>
          <div className={`${styles.node} ${styles.nodeInbox}`}><span>02</span><small>ANFRAGEN</small><strong>Informationen<br />strukturiert</strong><i>ERFASST</i></div>
          <div className={styles.core}><div><b>A</b><span>AURA</span><small>ORCHESTRATION</small></div></div>
          <div className={`${styles.node} ${styles.nodeAi}`}><span>03</span><small>KI-VERARBEITUNG</small><strong>Entwurf und<br />Prüfung</strong><i>VORBEREITET</i></div>
          <div className={`${styles.node} ${styles.nodeHuman}`}><span>04</span><small>FREIGABE</small><strong>Der Mensch<br />entscheidet</strong><i>BEREIT</i></div>
          <svg className={styles.connections} viewBox="0 0 800 520" aria-hidden="true"><path d="M168 138 C290 138 300 230 400 260"/><path d="M632 138 C510 138 500 230 400 260"/><path d="M168 390 C290 390 300 295 400 260"/><path d="M632 390 C510 390 500 295 400 260"/></svg>
        </div>
        <div className={styles.stageFoot}><span>Website</span><b>→</b><span>Daten</span><b>→</b><span>KI</span><b>→</b><span>Freigabe</span><b>→</b><span>Wirkung</span></div>
      </div>
    </section>
  );
};

export default Hero;
