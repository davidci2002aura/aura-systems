import styles from './BentoGrid.module.css';

const services = [
  { number:'01', tag:'Websites & Webanwendungen', title:'Ein digitaler Auftritt, der ruhig überzeugt.', text:'Von der gezielten Reparatur bis zur individuellen Website: schnell, mobil und so strukturiert, dass Besucher verstehen, vertrauen und Kontakt aufnehmen.', href:'/websites', cta:'Websites ansehen', points:['Strategie & Struktur','Design & Entwicklung','Mobil & technische Basis'], visual:'website' },
  { number:'02', tag:'Automatisierung & Assistenten', title:'Weniger Handarbeit. Mehr Klarheit im Ablauf.', text:'Anfragen, Rückrufe, Dokumente und wiederkehrende Aufgaben werden kontrolliert vorbereitet – mit festen Grenzen und menschlicher Freigabe.', href:'/automatisierung', cta:'Automatisierung ansehen', points:['Prozessaufnahme','Pilot mit Testdaten','Kontrollierte Übergabe'], visual:'flow' },
  { number:'03', tag:'AI-native Systeme', title:'KI als Teil des Prozesses – nicht als Spielerei.', text:'Individuelle Oberflächen verbinden Daten, KI-Verarbeitung, Entscheidung und Nachweis zu einem verständlichen operativen System.', href:'/atlas', cta:'Atlas als Beispiel', points:['Human-in-the-loop','Nachvollziehbare Entscheidungen','Messbare Wirkung'], visual:'atlas' },
];

const BentoGrid: React.FC = () => <section id="leistungen" className={styles.section}>
  <div className={styles.heading}><span>Leistungen</span><h2>Drei Wege zu einem<br /><em>besseren digitalen System.</em></h2><p>Der Einstieg richtet sich nach dem tatsächlichen Problem – nicht nach einem möglichst großen Paket.</p></div>
  <div className={styles.grid}>{services.map(service=><article className={styles.card} key={service.number}>
    <header><span>{service.number}</span><b>{service.tag}</b></header>
    <div className={styles.visual} data-visual={service.visual}>
      {service.visual==='website'&&<div className={styles.siteVisual}><span>aurasystems.ltd</span><strong>Ein klarer Auftritt.</strong><div><i/><i/><i/></div></div>}
      {service.visual==='flow'&&<div className={styles.flowVisual}>{['Anfrage','Struktur','Freigabe'].map((item,index)=><div key={item}><i>{index+1}</i><span>{item}</span><b>{index===2?'✓':'→'}</b></div>)}</div>}
      {service.visual==='atlas'&&<div className={styles.atlasVisual}><header><b>A</b><span>ATLAS</span><i/></header><div><span>APPROVAL INBOX</span><strong>4 Entscheidungen</strong><small>Human review required</small></div></div>}
    </div>
    <h3>{service.title}</h3><p>{service.text}</p>
    <ul>{service.points.map(point=><li key={point}>✓ {point}</li>)}</ul>
    <a href={service.href}>{service.cta}<span>↗</span></a>
  </article>)}</div>
</section>;

export default BentoGrid;
