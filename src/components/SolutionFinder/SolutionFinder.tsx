import { useState } from 'react';
import styles from './SolutionFinder.module.css';

type Goal = 'repair' | 'website' | 'automation';

const solutions: Record<Goal, {
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  price: string;
  note: string;
  items: string[];
}> = {
  repair: {
    label: 'Bestehende Seite verbessern',
    eyebrow: 'Website-QuickFix',
    title: 'Kleine Fehler. Sauber gelöst.',
    description: 'Passend, wenn die Website grundsätzlich funktioniert, aber einzelne Stellen Kunden ausbremsen.',
    price: '149 €',
    note: 'einmalig · bis zu 3 klar definierte Reparaturen',
    items: ['Mobilansicht prüfen', 'Kontaktweg verbessern', 'Fehler nachvollziehbar beheben'],
  },
  website: {
    label: 'Neue Website starten',
    eyebrow: 'Moderner Onepager',
    title: 'Ein klarer Auftritt für Ihr Angebot.',
    description: 'Für lokale Betriebe, deren Leistungen online schnell verstanden und direkt angefragt werden sollen.',
    price: '790 €',
    note: 'einmalig · inklusive mobiler Umsetzung',
    items: ['Individuelle Seitenstruktur', 'Leistungen, Vertrauen und Kontakt', 'Vorschau vor Veröffentlichung'],
  },
  automation: {
    label: 'Anfragen automatisieren',
    eyebrow: 'Automatisierungs-Pilot',
    title: 'Weniger Nacharbeit bei neuen Anfragen.',
    description: 'Ein begrenzter Test für wiederkehrende Abläufe – zum Beispiel Anfrage-Erfassung oder Rückrufvorbereitung.',
    price: 'ab 390 €',
    note: 'einmalig · Fremdkosten werden separat ausgewiesen',
    items: ['Ablauf und Grenzen festlegen', 'Test mit Beispieldaten', 'Kontrollierte Freigabe'],
  },
};

const SolutionFinder: React.FC = () => {
  const [goal, setGoal] = useState<Goal>('website');
  const solution = solutions[goal];

  return (
    <section id="finder" className={styles.section} aria-labelledby="finder-title">
      <div className={styles.container}>
        <div className={styles.intro}>
          <span className={styles.kicker}>Schnelle Orientierung</span>
          <h2 id="finder-title">Was soll sich für Sie verbessern?</h2>
          <p>Wählen Sie ein Ziel. Sie sehen sofort einen sinnvollen, überschaubaren Einstieg.</p>
        </div>

        <div className={styles.finder}>
          <div className={styles.choices} role="tablist" aria-label="Projektziel auswählen">
            {(Object.keys(solutions) as Goal[]).map((key, index) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={goal === key}
                className={goal === key ? styles.activeChoice : ''}
                onClick={() => setGoal(key)}
              >
                <span>0{index + 1}</span>
                <strong>{solutions[key].label}</strong>
                <i aria-hidden="true">→</i>
              </button>
            ))}
          </div>

          <div className={styles.result} role="tabpanel" aria-live="polite">
            <div className={styles.resultTop}>
              <span>{solution.eyebrow}</span>
              <div className={styles.status}><i /> Sinnvoller Einstieg</div>
            </div>
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
            <ul>
              {solution.items.map((item) => <li key={item}><span>✓</span>{item}</li>)}
            </ul>
            <div className={styles.resultBottom}>
              <div><strong>{solution.price}</strong><small>{solution.note}</small></div>
              <a href="/kontakt">Unverbindlich besprechen <span>→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionFinder;
