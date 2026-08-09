import Footer from '../components/Footer/Footer';
import styles from './Pages.module.css';

const useCases = [
  ['Anfragen', 'Formular, E-Mail oder Telefonanfrage landet mit den nötigen Angaben an einem Ort.'],
  ['Rückrufe', 'Name, Nummer und gewünschte Rückrufzeit werden strukturiert weitergegeben.'],
  ['Dokumente', 'Wiederkehrende Daten werden geprüft, sortiert und für den nächsten Schritt vorbereitet.'],
  ['Übergaben', 'Nach Freigabe werden Informationen an Kalender, Tabelle oder zuständige Person übergeben.'],
];

const AutomationPage: React.FC = () => (
  <>
    <main className={styles.page}>
      <section className={`${styles.pageHero} ${styles.automationHero}`}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Automatisierungen</span>
          <h1>Weniger Nacharbeit. Die Kontrolle bleibt.</h1>
          <p>Wir automatisieren klar begrenzte, wiederkehrende Abläufe. Entscheidungen mit Folgen bleiben beim Menschen.</p>
          <div className={styles.heroActions}><a className={styles.primaryAction} href="/kontakt">Ablauf prüfen lassen <span>→</span></a><a className={styles.textAction} href="#ablaeufe">Beispiele ansehen ↓</a></div>
        </div>
        <div className={styles.flowBoard}>
          <div className={styles.flowHeader}><span>ANFRAGE-FLOW</span><i>Kontrollierter Ablauf</i></div>
          <div className={styles.flowSteps}>
            <div><span>01</span><small>EINGANG</small><strong>Anfrage kommt an</strong></div>
            <b>→</b>
            <div><span>02</span><small>STRUKTUR</small><strong>Angaben werden geordnet</strong></div>
            <b>→</b>
            <div><span>03</span><small>FREIGABE</small><strong>Mensch entscheidet</strong></div>
          </div>
          <div className={styles.flowResult}><span>✓</span><div><small>ERGEBNIS</small><strong>Nachvollziehbare Übergabe statt Blackbox</strong></div></div>
        </div>
      </section>

      <section id="ablaeufe" className={styles.offerSection}>
        <div className={styles.sectionLead}><span>Typische Einsatzfälle</span><h2>Kleine Systeme mit<br />spürbarem Nutzen.</h2><p>Wir beginnen mit einem überprüfbaren Pilot, nicht mit einem unüberschaubaren Großprojekt.</p></div>
        <div className={styles.useCaseGrid}>{useCases.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><i>Prüfbarer Ausgang →</i></article>)}</div>
      </section>

      <section className={styles.phoneSection}>
        <div className={styles.phoneMock}>
          <div className={styles.phoneTop}><i /><span>Telefonservice</span><b>•••</b></div>
          <div className={styles.voiceOrb}>A</div>
          <small>ANRUF WIRD TRANSPARENT ANGENOMMEN</small>
          <h3>„Guten Tag, hier ist der digitale Telefonservice …“</h3>
          <div className={styles.transcript}><span>Erfasst</span><b>Name · Nummer · Rückrufzeit</b></div>
        </div>
        <div className={styles.phoneCopy}><span>KI-Telefon-Pilot</span><h2>Erst testen. Dann bewusst aktivieren.</h2><p>Der Pilot nimmt nur die vereinbarten Angaben auf, kennzeichnet sich transparent und wird vor einer Weiterleitung mit Beispieldaten geprüft.</p><ul><li>Keine erfundene menschliche Identität</li><li>Fremdkosten separat und sichtbar</li><li>Konten möglichst direkt beim Kunden</li><li>Datensparsame Gesprächsführung</li></ul><div><strong>ab 690 €</strong><small>plus Nutzung und optionale Betreuung</small></div></div>
      </section>

      <section className={styles.largeCta}><span>Ein konkreter Ablauf genügt</span><h2>Zeigen Sie uns die wiederkehrende Handarbeit.</h2><a href="/kontakt">Automatisierung prüfen <b>→</b></a></section>
    </main>
    <Footer />
  </>
);

export default AutomationPage;
