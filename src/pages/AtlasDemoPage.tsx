import { useMemo, useState } from 'react';
import styles from './AtlasDemoPage.module.css';

type View = 'inbox' | 'automation' | 'ledger';
type Action = 'Freigegeben' | 'Bearbeitet' | 'Abgelehnt';

type Case = {
  id: number;
  initials: string;
  company: string;
  subject: string;
  type: string;
  time: string;
  score: number;
  urgent: boolean;
  message: string;
  reply: string;
  facts: Array<[string, string, string]>;
};

type Decision = { id: string; caseId: number; subject: string; company: string; action: Action; time: string };

const cases: Case[] = [
  { id:1, initials:'MM', company:'Müller Maschinenbau', subject:'400 × Artikel 7814, Ausführung B', type:'Angebotsanfrage', time:'09:42', score:96, urgent:true, message:'Für unsere Montagelinie benötigen wir 400 Stück des Artikels 7814, Ausführung B. Bitte senden Sie uns bis morgen um 14:00 Uhr ein Angebot inklusive Liefertermin und Staffelpreis.', reply:'Guten Tag Frau Neumann,\n\nvielen Dank für Ihre Anfrage. Gern bieten wir Ihnen 400 Stück Artikel 7814, Ausführung B, zum Staffelpreis von 18,40 € pro Stück an. Die Lieferung ist innerhalb von 12 Werktagen möglich. Das Angebot ist 30 Tage gültig.\n\nFreundliche Grüße', facts:[['Artikel','7814 · Ausführung B','Aus Anfrage erkannt'],['Menge','400 Stück','Aus Anfrage erkannt'],['Marge','24,6 %','Innerhalb der Freigabegrenze'],['Lieferzeit','12 Werktage','Demodaten · ERP-Abgleich']] },
  { id:2, initials:'KL', company:'Keller Logistik', subject:'Liefertermin für Auftrag 10482', type:'Lieferabweichung', time:'09:18', score:93, urgent:true, message:'Der Lieferant für Baugruppe 12 meldet drei Tage Verzug. Bitte prüfen Sie, ob der zugesagte Kundentermin gehalten werden kann, und informieren Sie uns heute.', reply:'Guten Tag,\n\nwir prüfen aktuell eine alternative Beschaffung, um den bestätigten Termin zu halten. Sie erhalten heute bis 16:00 Uhr eine verbindliche Rückmeldung.\n\nFreundliche Grüße', facts:[['Auftrag','10482','Demodaten · Auftrag'],['Abweichung','+3 Tage','Lieferantenmeldung'],['Alternative','Lieferant B','Als verfügbar markiert'],['Frist','Heute, 16:00','Aus Anfrage erkannt']] },
  { id:3, initials:'BI', company:'Brenner Industriebedarf', subject:'Preisabweichung auf Rechnung RE-8821', type:'Rechnungsprüfung', time:'08:57', score:98, urgent:false, message:'Bei Rechnung RE-8821 wurde ein nicht vereinbarter Expresszuschlag berechnet. Bitte klären und die Freigabe bis dahin stoppen.', reply:'Guten Tag,\n\nbei Rechnung RE-8821 weicht der Expresszuschlag in Höhe von 1.240 € von unserer Bestellung ab. Bitte senden Sie uns eine korrigierte Rechnung oder den zugehörigen Freigabenachweis.\n\nFreundliche Grüße', facts:[['Rechnung','RE-8821','Aus Dokument erkannt'],['Abweichung','+1.240 €','Demo-Drei-Wege-Abgleich'],['Bestellung','PO-44690','Demodaten · Einkauf'],['Regel','Zahlungsstopp','Abweichung über 500 €']] },
];

const initialDecisions: Decision[] = [
  { id:'D-1082', caseId:0, subject:'Nachfassmail Angebot Q-4802', company:'Roth Automation', action:'Freigegeben', time:'Heute, 09:31' },
  { id:'D-1081', caseId:0, subject:'Rabattgrenze bei Rahmenvertrag', company:'Fischer Technik', action:'Bearbeitet', time:'Heute, 08:46' },
];

export default function AtlasDemoPage() {
  const [view,setView] = useState<View>('inbox');
  const [filter,setFilter] = useState<'all'|'urgent'>('all');
  const [selectedId,setSelectedId] = useState(1);
  const [reply,setReply] = useState(cases[0].reply);
  const [editing,setEditing] = useState(false);
  const [decisions,setDecisions] = useState(initialDecisions);
  const [toast,setToast] = useState('');
  const selected = cases.find(item=>item.id===selectedId) ?? cases[0];
  const visibleCases = useMemo(()=>cases.filter(item=>filter==='all'||item.urgent),[filter]);

  const flash = (message:string) => { setToast(message); window.setTimeout(()=>setToast(''),2400); };
  const choose = (item:Case) => { setSelectedId(item.id); setReply(item.reply); setEditing(false); };
  const decide = (action:Action) => {
    setDecisions(current=>[{ id:`D-${1083+current.length}`, caseId:selected.id, subject:selected.subject, company:selected.company, action, time:'Gerade eben' },...current]);
    setEditing(false);
    flash(`${action}. Der Vorgang wurde im Decision Ledger dokumentiert.`);
  };

  return <main className={styles.app}>
    <header className={styles.topbar}><a href="/atlas" className={styles.brand}><b>A</b><span>ATLAS</span></a><div className={styles.status}><i /> Öffentliche Demo · Shadow Mode</div><a href="/" className={styles.aura}>Aura Systems ↗</a></header>
    <div className={styles.layout}>
      <aside className={styles.sidebar}><nav>{([['inbox','⌁','Inbox'],['automation','✦','Automation Fit'],['ledger','✓','Decision Ledger']] as const).map(([key,icon,label])=><button key={key} className={view===key?styles.active:''} onClick={()=>setView(key)}><i>{icon}</i><span>{label}</span>{key==='inbox'&&<b>3</b>}</button>)}</nav><div className={styles.shadow}><i>✦</i><div><b>Shadow Mode</b><p>Keine Nachricht wird versendet. Alle Aktionen bleiben in dieser Demo.</p></div></div><small>Eigener Prototyp · Demodaten</small></aside>
      <section className={styles.content}>
        {view==='inbox'&&<>
          <header className={styles.pageHead}><div><span>APPROVAL INBOX</span><h1>Guten Morgen, David.</h1><p>Drei Beispielvorgänge warten auf eine kontrollierte Entscheidung.</p></div><button onClick={()=>flash('Alle Demovorgänge wurden neu analysiert.')}>Vorgänge prüfen</button></header>
          <div className={styles.metrics}><article><span>HEUTE GEPRÜFT</span><strong>27</strong><small>12 mehr als gestern</small></article><article><span>ZEIT ZURÜCK</span><strong>6,4 h</strong><small>Demowert dieser Woche</small></article><article><span>HUMAN-IN-THE-LOOP</span><strong>100%</strong><small>Freigabe erforderlich</small></article></div>
          <div className={styles.review}>
            <section className={styles.inbox}><header><div><h2>Vorgänge</h2><span>{visibleCases.length} angezeigt</span></div><div><button className={filter==='all'?styles.selectedFilter:''} onClick={()=>setFilter('all')}>Alle</button><button className={filter==='urgent'?styles.selectedFilter:''} onClick={()=>setFilter('urgent')}>Dringend</button></div></header>{visibleCases.map(item=><button key={item.id} onClick={()=>choose(item)} className={`${styles.caseRow} ${selected.id===item.id?styles.selectedCase:''}`}><b>{item.initials}</b><span><strong>{item.company}</strong><small>{item.subject}</small><em>{item.type} · {item.time}</em></span><i>{item.score}</i></button>)}</section>
            <section className={styles.decision}><header><b>{selected.initials}</b><div><span>{selected.type}</span><h2>{selected.subject}</h2><small>{selected.company} · {selected.time}</small></div><i>{selected.score}% sicher</i></header><div className={styles.decisionGrid}><article><p>{selected.message}</p><h3>Erkannte Informationen</h3>{selected.facts.map(([label,value,source])=><div className={styles.fact} key={label}><span>{label}</span><strong>{value}</strong><small>{source}</small></div>)}</article><aside><span>ATLAS EMPFIEHLT</span><h3>Antwort prüfen und freigeben</h3><p>Die erkannten Werte liegen im Beispiel innerhalb der hinterlegten Regeln.</p><label htmlFor="atlas-reply">Antwortentwurf</label><textarea id="atlas-reply" value={reply} onChange={event=>setReply(event.target.value)} readOnly={!editing}/><small>{reply.length} Zeichen · wird nicht versendet</small><div><button onClick={()=>decide(editing?'Bearbeitet':'Freigegeben')}>Freigeben</button><button onClick={()=>setEditing(value=>!value)}>{editing?'Bearbeitung beenden':'Bearbeiten'}</button><button onClick={()=>decide('Abgelehnt')}>Ablehnen</button></div></aside></div></section>
          </div>
        </>}
        {view==='automation'&&<><header className={styles.pageHead}><div><span>AUTOMATION FIT</span><h1>Wo lohnt sich ein Pilot?</h1><p>Ein transparenter Demo-Score priorisiert wiederkehrende Arbeit.</p></div></header><div className={styles.fitList}>{[['Anfrage zu Angebot','143 Vorgänge','31 Std./Monat',88],['Rechnungsabweichungen','96 Vorgänge','18 Std./Monat',82],['Lieferabweichungen','58 Vorgänge','12 Std./Monat',74]].map(([title,volume,value,fit])=><article key={String(title)}><div><span>WORKFLOW</span><h2>{title}</h2><p>Volumen, Regelklarheit und menschliche Prüfpunkte wurden als Demodaten bewertet.</p><small>{volume} · {value}</small></div><strong>{fit}<i>/100</i></strong><button onClick={()=>flash(`Pilot für „${title}“ wurde als Demo vorbereitet.`)}>Pilot vorbereiten</button></article>)}</div></>}
        {view==='ledger'&&<><header className={styles.pageHead}><div><span>DECISION LEDGER</span><h1>Jede Entscheidung bleibt erklärbar.</h1><p>Neue Demo-Entscheidungen erscheinen sofort in dieser Liste.</p></div></header><div className={styles.ledger}><header><span>ID</span><span>Vorgang</span><span>Aktion</span><span>Zeit</span></header>{decisions.map(item=><article key={item.id}><b>{item.id}</b><span><strong>{item.subject}</strong><small>{item.company}</small></span><em data-action={item.action}>{item.action}</em><time>{item.time}</time></article>)}</div></>}
      </section>
    </div>
    {toast&&<div className={styles.toast}><b>✓</b>{toast}</div>}
  </main>;
}
