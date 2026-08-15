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
          <a href="/atlas">Projekt ansehen <span>→</span></a>
          <small>Interaktiver Prototyp · keine Kundenreferenz</small>
        </div>
      </div>

      <div className={styles.product} aria-label="Vorschau der ATLAS Approval Inbox">
        <header><b>A</b><strong>ATLAS</strong><span>SHADOW MODE</span><i /></header>
        <aside>
          <b>Inbox</b><span>Automation Fit</span><span>Ledger</span><span>Impact</span>
        </aside>
        <main>
          <div className={styles.productHead}><small>APPROVAL INBOX</small><strong>Entscheidungen mit Kontext.</strong></div>
          <div className={styles.metrics}><article><span>OFFEN</span><b>04</b></article><article><span>HEUTE GEPRÜFT</span><b>27</b></article></div>
          <div className={styles.case}>
            <div><small>ANFRAGE #10482</small><strong>400 × Artikel 7814</strong><span>Preis · Bestand · Lieferzeit geprüft</span></div>
            <article><span>ATLAS EMPFIEHLT</span><strong>Antwort freigeben</strong><p>Alle Werte liegen innerhalb der hinterlegten Regeln.</p><button type="button">Freigabe erforderlich</button></article>
          </div>
        </main>
      </div>
    </div>
  </section>
);

export default AtlasShowcase;
