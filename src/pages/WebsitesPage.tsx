import Footer from '../components/Footer/Footer';
import styles from './Pages.module.css';

const offers = [
  { num:'01', name:'Website-QuickFix', description:'Bestehende Seiten reparieren, ohne gleich alles neu zu bauen.', price:'ab 149 €', includes:['Mobilansicht','Kontaktweg','Funktionscheck'] },
  { num:'02', name:'Landingpage', description:'Eine fokussierte Seite für Angebot, Kampagne oder neue Leistung.', price:'ab 490 €', includes:['Klare Botschaft','Eine Zielhandlung','Mobile Umsetzung'] },
  { num:'03', name:'Onepager', description:'Der vollständige kleine Auftritt – klar, schnell und mobil gedacht.', price:'ab 790 €', includes:['Seitenstruktur','Leistungen','Kontakt'] },
  { num:'04', name:'Unternehmenswebsite', description:'Mehrere Seiten für Leistungen, Team, Karriere und Vertrauen.', price:'ab 1.490 €', includes:['Mehrere Seiten','Navigationssystem','Erweiterbare Basis'] },
  { num:'05', name:'Website Plus', description:'Buchung, Mehrsprachigkeit, geschützte Inhalte oder Schnittstellen.', price:'nach Umfang', includes:['Buchung','Schnittstellen','Sonderfunktionen'] },
  { num:'06', name:'Webanwendung', description:'Individuelle Portale, Dashboards und interne Werkzeuge.', price:'nach Konzept', includes:['Nutzerabläufe','Datenansicht','Individuelle Logik'] },
];

const WebsitesPage: React.FC = () => (
  <>
    <main className={styles.page}>
      <section className={styles.pageHero}>
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}>Websites &amp; Webanwendungen</span>
          <h1>Von der ersten Seite bis zum digitalen System.</h1>
          <p>Wir entwickeln nicht nur Onepager. Aura Systems baut klare Unternehmenswebsites und individuelle Weblösungen, die mit Ihrem Betrieb wachsen können.</p>
          <div className={styles.heroActions}>
            <a className={styles.primaryAction} href="/kontakt">Projekt besprechen <span>→</span></a>
            <a className={styles.textAction} href="#website-stufen">Möglichkeiten ansehen ↓</a>
          </div>
        </div>
        <div className={styles.architecture} aria-label="Beispiel einer Website-Architektur">
          <div className={styles.archTop}><span>PROJEKTSTRUKTUR</span><b>Unternehmenswebsite</b><i>Bereit zur Planung</i></div>
          <div className={styles.siteMap}>
            <div className={styles.rootNode}>Startseite<small>Zentrale Orientierung</small></div>
            <div className={styles.connector} />
            <div className={styles.childNodes}>
              {['Leistungen', 'Über uns', 'Projekte', 'Karriere', 'Kontakt'].map((item, index) => <div key={item}><span>0{index + 1}</span><b>{item}</b><i>→</i></div>)}
            </div>
          </div>
          <div className={styles.archFoot}><span>Mobil optimiert</span><span>Eigene Domain</span><span>Erweiterbar</span></div>
        </div>
      </section>

      <section id="website-stufen" className={styles.offerSection}>
        <div className={styles.sectionLead}><span>Passender Umfang</span><h2>Nicht größer als nötig.<br />Nicht kleiner als sinnvoll.</h2><p>Der Umfang folgt dem echten Ziel – nicht einem starren Paket.</p></div>
        <div className={styles.offerGrid}>
          {offers.map(({num, name, description, price, includes}) => (
            <article key={name} className={styles.offerCard}>
              <span>{num}</span><h3>{name}</h3><p>{description}</p><ul>{includes.map(item=><li key={item}>{item}</li>)}</ul><div><strong>{price}</strong><a href="/kontakt">Anfragen →</a></div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.qualitySection}>
        <div><span>01</span><h3>Struktur vor Dekoration</h3><p>Besucher erkennen Angebot, Vertrauen und nächsten Schritt ohne Suchen.</p></div>
        <div><span>02</span><h3>Mobil zuerst gedacht</h3><p>Navigation, Formulare und Inhalte werden für echte kleine Displays geplant.</p></div>
        <div><span>03</span><h3>Sauber übergeben</h3><p>Domain, Hosting und Zugänge bleiben nachvollziehbar in Ihrem Besitz.</p></div>
      </section>

      <section className={styles.largeCta}><span>Ihr nächster digitaler Schritt</span><h2>Wir klären zuerst, was wirklich gebraucht wird.</h2><a href="/kontakt">Unverbindliche Kurzprüfung <b>→</b></a></section>
    </main>
    <Footer />
  </>
);

export default WebsitesPage;
