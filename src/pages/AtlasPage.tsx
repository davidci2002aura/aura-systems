import styles from './AtlasPage.module.css';

const atlasDemo = '/atlas/demo';

const AtlasPage: React.FC = () => (
  <main className={styles.page}>
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <span>ATLAS / Operational Intelligence</span>
        <h1>Aus Anfragen werden <em>klare Entscheidungen.</em></h1>
        <p>Ein eigener Aura-Systems-Produktprototyp für Unternehmen, die wiederkehrende Anfragen prüfen, Antworten vorbereiten und Entscheidungen nachvollziehbar dokumentieren möchten.</p>
        <div><a href="#system">System ansehen ↓</a><a href={atlasDemo}>Interaktive Demo →</a></div>
      </div>
      <div className={styles.screen} aria-label="ATLAS Inbox Produktoberfläche">
        <header><b>A</b><strong>ATLAS</strong><span>SHADOW MODE</span><i /></header>
        <aside><b>Inbox</b><span>Automation Fit</span><span>Ledger</span><span>Impact</span></aside>
        <section><small>APPROVAL INBOX</small><h2>Vier Vorgänge brauchen Klarheit.</h2><div className={styles.stats}><article><span>HEUTE GEPRÜFT</span><b>27</b></article><article><span>ZEIT ZURÜCK</span><b>6,4 h</b></article></div><div className={styles.work}><div><small>ANFRAGE</small><strong>400 × Artikel 7814</strong><span>Preis · Marge · Bestand · Lieferzeit</span></div><article><small>ATLAS EMPFIEHLT</small><strong>Antwort freigeben</strong><p>Der Vorschlag liegt innerhalb der hinterlegten Regeln.</p><button type="button">Freigeben</button></article></div></section>
      </div>
    </section>

    <section className={styles.principle} id="system"><span>Produktprinzip</span><h2>KI arbeitet vor.<br /><em>Der Mensch entscheidet.</em></h2><div><p>ATLAS ist kein autonomer E-Mail-Bot. Das System führt verstreute Informationen zusammen, zeigt die Entscheidungsgrundlage und wartet an der richtigen Stelle auf eine menschliche Freigabe.</p><dl><div><dt>Typ</dt><dd>Interaktiver Produktprototyp</dd></div><div><dt>Fokus</dt><dd>Anfrage · Angebot · Auftrag</dd></div><div><dt>Modus</dt><dd>Human-in-the-loop</dd></div></dl></div></section>

    <section className={styles.flow}><div className={styles.heading}><span>01 / Systemlogik</span><h2>Vom Eingang zur <em>nachvollziehbaren Wirkung.</em></h2></div><div className={styles.flowGrid}>{[['01','IN','Eingang','Anfrage und Anhänge werden als Vorgang erfasst.'],['02','CHECK','Prüfung','Fakten, Regeln und Abweichungen werden zusammengeführt.'],['03','HUMAN','Freigabe','Ein Mensch bestätigt, bearbeitet oder verwirft den Vorschlag.'],['04','LOG','Nachweis','Entscheidung und Kontext landen nachvollziehbar im Ledger.']].map(([n,tag,title,text])=><article key={n}><span>{n}</span><i>{tag}</i><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className={styles.modules}><div className={styles.heading}><span>02 / Produktmodule</span><h2>Vier Ansichten. <em>Ein operatives System.</em></h2></div><div className={styles.moduleGrid}><article className={styles.feature}><span>APPROVAL INBOX</span><h3>Nur Entscheidungen, die wirklich Aufmerksamkeit brauchen.</h3><div><p><b>MM</b> 400 × Artikel 7814 <i>92</i></p><p><b>KL</b> Liefertermin Auftrag 10482 <i>88</i></p><p><b>BI</b> Preisabweichung RE-8821 <i>84</i></p></div></article><article><span>AUTOMATION FIT</span><h3>Wiederholbare Arbeit erkennen.</h3><p>Abläufe werden nach Volumen, Regelklarheit und möglichem Zeitgewinn priorisiert.</p><strong>88 / 100</strong></article><article><span>DECISION LEDGER</span><h3>Jede Freigabe bleibt erklärbar.</h3><p>Vorschlag, Änderung und Entscheidung werden mit ihrem Kontext dokumentiert.</p><strong>100 % nachvollziehbar</strong></article></div></section>

    <section className={styles.boundaries}><div><span>03 / Ehrlicher Stand</span><h2>Was die Demo zeigt – und <em>was noch nicht.</em></h2></div><div><article><b>✓</b><h3>Interaktiver Frontend-Prototyp</h3><p>Inbox, Filter, Antwortbearbeitung, Entscheidungen und lokale Verlaufsdaten sind demonstrierbar.</p></article><article><b>✓</b><h3>Realistische Systemlogik</h3><p>Der Ablauf zeigt eine plausible Human-in-the-loop-Lösung für operative Entscheidungen.</p></article><article><b>–</b><h3>Noch keine produktive Integration</h3><p>Unternehmen, Vorgänge und Kennzahlen sind Demodaten. E-Mail, ERP und CRM sind nicht live angebunden.</p></article><article><b>–</b><h3>Kein autonomer Versand</h3><p>Der Prototyp sendet keine Nachrichten und trifft keine rechtsverbindlichen Entscheidungen.</p></article></div></section>

    <section className={styles.cta}><span>ATLAS / Öffentliche Produktdemo</span><h2>Den Ablauf selbst <em>durchspielen.</em></h2><p>Vorgang öffnen, Fakten prüfen, Antwort bearbeiten und eine kontrollierte Entscheidung dokumentieren.</p><div><a href={atlasDemo}>Demo öffnen →</a><a href="/kontakt">Ähnliches System besprechen</a></div><small>Eigener Produktprototyp · keine Kundenreferenz · Demodaten · kein autonomer Versand</small></section>
  </main>
);

export default AtlasPage;
