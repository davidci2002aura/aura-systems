import Footer from '../components/Footer/Footer';
import styles from './Pages.module.css';

const useCases = [
  { title:'Anfrage-Workflows', text:'Formular, E-Mail oder Telefonanfrage landet mit den nötigen Angaben an einem Ort.', input:'Formular · E-Mail', output:'Geordnete Anfrage' },
  { title:'KI-Telefonservice', text:'Anliegen, Kontaktdaten und Rückrufzeit werden transparent aufgenommen und zusammengefasst.', input:'Anruf', output:'Rückrufübersicht' },
  { title:'E-Mail-Assistent', text:'Wiederkehrende Nachrichten werden klassifiziert, zusammengefasst und als Antwortentwurf vorbereitet.', input:'Postfach', output:'Geprüfter Entwurf' },
  { title:'Dokumenten-Flows', text:'Freigegebene Dokumente werden ausgelesen, geprüft und für den nächsten Schritt strukturiert.', input:'PDF · Angaben', output:'Prüfbarer Datensatz' },
  { title:'Wissensassistent', text:'Ein interner Assistent beantwortet Fragen ausschließlich aus freigegebenen Unternehmensunterlagen.', input:'Wissen · Frage', output:'Belegte Antwort' },
  { title:'Systemübergaben', text:'Nach menschlicher Freigabe gehen Daten an Kalender, CRM, Tabelle oder zuständige Person.', input:'Freigabe', output:'Saubere Übergabe' },
];

const AutomationPage: React.FC = () => (
  <>
    <main className={styles.page}>
      <section className={`${styles.pageHero} ${styles.automationHero}`}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>AI-native Automatisierung</span>
          <h1>KI dort einsetzen, wo sie wirklich Arbeit abnimmt.</h1>
          <p>Wir verbinden bestehende Abläufe mit passenden KI- und Automatisierungsbausteinen. Kritische Entscheidungen und Veröffentlichungen bleiben kontrollierbar.</p>
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
        <div className={styles.sectionLead}><span>Typische Einsatzfälle</span><h2>Vom Einzelproblem zum<br />AI-native Betrieb.</h2><p>Wir beginnen mit einem überprüfbaren Pilot. Erst wenn Nutzen, Datenschutz und Fehlerwege stimmen, wird der Ablauf erweitert.</p></div>
        <div className={styles.useCaseGrid}>{useCases.map(({title,text,input,output}, index) => <article key={title}><div className={styles.caseTop}><span>0{index + 1}</span><i>LIVE FLOW</i></div><h3>{title}</h3><p>{text}</p><div className={styles.miniFlow}><span>{input}</span><b>→</b><strong>{output}</strong></div><a href="/kontakt">Ablauf prüfen <b>↗</b></a></article>)}</div>
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

      <section className={styles.largeCta}><span>Ein konkreter Ablauf genügt</span><h2>Wir finden den sinnvollsten ersten KI-Einsatz.</h2><a href="/kontakt">AI-native Potenzial prüfen <b>→</b></a></section>
    </main>
    <Footer />
  </>
);

export default AutomationPage;
