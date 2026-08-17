import { Link } from 'react-router-dom';
import styles from './AtlasShowcase.module.css';

const AtlasShowcase: React.FC = () => (
  <section className={styles.section} aria-labelledby="atlas-title">
    <div className={styles.shell}>
      <div className={styles.copy}>
        <span className={styles.eyebrow}>Eigenes Produktprojekt · ATLAS Inbox</span>
        <h2 id="atlas-title">KI bereitet vor.<br /><em>Menschen entscheiden.</em></h2>
        <p>
          ATLAS bündelt operative Anfragen, prüft Fakten und Regeln und legt einen
          nachvollziehbaren Antwortentwurf zur Freigabe vor.
        </p>
        <div className={styles.actions}>
          <Link to="/atlas">Projekt ansehen <span>→</span></Link>
          <Link to="/atlas/demo" className={styles.demoLink}>Demo direkt öffnen <span>↗</span></Link>
          <small>Interaktiver Prototyp · keine Kundenreferenz</small>
        </div>
      </div>

      <Link
        to="/atlas/demo"
        className={styles.product}
        aria-label="Interaktive ATLAS Approval Inbox öffnen"
      >
        <span className={styles.openHint}>Demo öffnen ↗</span>
        <header><b>A</b><strong>ATLAS</strong><span>SHADOW MODE</span><i /></header>
        <aside>
          <b>Inbox</b><span>Automation Fit</span><span>Ledger</span><span>Impact</span>
        </aside>
        <main>
          <div className={styles.productHead}><small>APPROVAL INBOX</small><strong>Entscheidungen mit Kontext.</strong></div>
          <div className={styles.metrics}><article><span>OFFEN</span><b>04</b></article><article><span>HEUTE GEPRÜFT</span><b>27</b></article></div>
          <div className={styles.case}>
            <div><small>ANFRAGE #10482</small><strong>400 × Artikel 7814</strong><span>Preis · Bestand · Lieferzeit geprüft</span></div>
            <article><span>ATLAS EMPFIEHLT</span><strong>Antwort freigeben</strong><p>Alle Werte liegen innerhalb der hinterlegten Regeln.</p><span className={styles.previewButton}>Interaktive Demo öffnen</span></article>
          </div>
        </main>
      </Link>
    </div>
  </section>
);

export default AtlasShowcase;
