import styles from './PricingSection.module.css';

const offers = [
  { number:'01', name:'Gezielter Einstieg', price:'ab 149 €', note:'klar abgegrenzter Umfang', text:'Für ein konkretes Problem, einen kleinen Website-Fix oder eine erste Prozessanalyse.', items:['Problem und Ziel kurz prüfen','Fester Umfang vor dem Start','Funktionsprüfung und Übergabe'], cta:'Einstieg anfragen' },
  { number:'02', name:'Individuelle Website', price:'nach Umfang', note:'statt künstlichem Einheitspaket', text:'Für Betriebe, die Struktur, Gestaltung und technische Umsetzung aus einer Hand benötigen.', items:['Strategie und Seitenstruktur','Individuelles responsives Design','Entwicklung, Test und Übergabe'], cta:'Website besprechen', featured:true },
  { number:'03', name:'Automatisierung & KI', price:'Pilot nach Analyse', note:'Fremdkosten immer separat', text:'Für wiederkehrende Arbeit, die kontrolliert geprüft und schrittweise automatisiert werden soll.', items:['Prozess und Datenwege aufnehmen','Pilot mit Testdaten und Freigaben','Auswertung vor dem Ausbau'], cta:'Prozess prüfen lassen' },
];

const PricingSection: React.FC = () => <section id="preise" className={styles.section}>
  <div className={styles.heading}><span>Investition</span><h2>Ein klarer Einstieg.<br /><em>Kein Paket um jeden Preis.</em></h2><p>Vor dem Start stehen Umfang, Termin, Fremdkosten und offene Punkte verständlich im Angebot.</p></div>
  <div className={styles.grid}>{offers.map(offer=><article className={`${styles.card} ${offer.featured?styles.featured:''}`} key={offer.number}>
    <header><span>{offer.number}</span>{offer.featured&&<b>SINNVOLLER WEBSITE-START</b>}</header>
    <div className={styles.name}>{offer.name}</div><strong className={styles.price}>{offer.price}</strong><small>{offer.note}</small><p>{offer.text}</p>
    <ul>{offer.items.map(item=><li key={item}><i>✓</i>{item}</li>)}</ul><a href="/kontakt">{offer.cta}<span>→</span></a>
  </article>)}</div>
  <div className={styles.note}><span>Transparent kalkuliert</span><p>Hosting, Telefonnummern, KI-Nutzung, Lizenzen und andere Fremddienste sind nicht versteckt im Preis. Sie werden vorab benannt und laufen möglichst über Ihre eigenen Konten.</p></div>
</section>;

export default PricingSection;
