import styles from './BrandStory.module.css';

const BrandStory: React.FC = () => <>
  <section id="projekte" className={styles.projects}>
    <div className={styles.heading}><span>Eigenes Produktprojekt</span><h2>Nicht behauptet.<br /><em>Sondern gebaut.</em></h2><p>ATLAS zeigt als eigener, funktionsfähiger Prototyp, wie Aura digitale Systeme denkt und umsetzt.</p></div>
    <div className={styles.projectGrid}>
      <a href="/atlas" className={`${styles.project} ${styles.atlas}`}>
        <header><span>01 · EIGENER PRODUKTPROTOTYP</span><b>ATLAS ↗</b></header>
        <div className={styles.atlasScreen}><header><b>A</b><span>ATLAS INBOX</span><i>SHADOW MODE</i></header><aside><span>Inbox</span><span>Automation Fit</span><span>Ledger</span></aside><main><small>APPROVAL INBOX</small><strong>Entscheidungen<br />mit Kontext.</strong><div><i>MM</i><span>400 × Artikel 7814</span><b>96</b></div><div><i>KL</i><span>Liefertermin Auftrag 10482</span><b>93</b></div></main></div>
        <footer><div><h3>KI bereitet vor.<br />Menschen entscheiden.</h3><p>Interaktive Approval Inbox mit Faktenprüfung und Decision Ledger.</p></div><span>Case Study & Demo ansehen →</span></footer>
      </a>
    </div>
  </section>

  <section className={styles.about}>
    <div className={styles.aboutTitle}><span>Über Aura Systems</span><h2>Direkt. Neugierig.<br /><em>Verantwortungsvoll.</em></h2></div>
    <div className={styles.aboutCopy}><p>Aura Systems wird von mir, David Lamberts, in der Region Ravensburg aufgebaut. Ich entwickle Websites und digitale Systeme gemeinsam mit den Betrieben, die sie später einsetzen.</p><p>Ich erfinde keine Kundenerfolge. Stattdessen zeige ich funktionsfähige Prototypen, benenne offene Integrationen und teste neue Abläufe zuerst mit klaren Grenzen.</p><a href="/kontakt">Idee unverbindlich besprechen <span>→</span></a></div>
    <div className={styles.principles}><article><span>01</span><strong>Erst verstehen</strong><p>Problem, Nutzer und bestehender Ablauf kommen vor der Technik.</p></article><article><span>02</span><strong>Klein beweisen</strong><p>Ein prüfbarer Pilot zeigt Nutzen und Risiken vor dem Ausbau.</p></article><article><span>03</span><strong>Sauber übergeben</strong><p>Zugänge, Entscheidungen und laufende Kosten bleiben transparent.</p></article></div>
  </section>
</>;

export default BrandStory;
