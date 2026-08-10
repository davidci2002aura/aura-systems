import { motion } from 'framer-motion';
import BentoCard from './BentoCard';
import styles from './BentoGrid.module.css';

const BentoGrid: React.FC = () => {
  return (
    <section id="leistungen" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionTag}>
          <span className={styles.tagLine} /> Was wir bauen
        </div>
        <h2 className={styles.sectionTitle}>
          Websites. Automatisierung. KI.
          <br />
          <span className={styles.light}>Als System gedacht.</span>
        </h2>

        <motion.div
          className={styles.grid}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Big card - Neural Operations */}
          <div className={styles.bigCard}>
            <BentoCard
              tag="01 — AI-native Operations"
              title="Anfragen verstehen und kontrolliert weiterführen"
              desc="Formular-, E-Mail- oder Telefonanfragen werden geordnet, zusammengefasst und nach Freigabe an den richtigen nächsten Schritt übergeben."
              accent
            >
              <div className={styles.workflowList}>
                {[
                  ['blue', 'Anfrage kommt an'],
                  ['purple', 'Angaben werden strukturiert'],
                  ['green', 'Zusammenfassung wird erstellt'],
                  ['orange', 'Mensch entscheidet den nächsten Schritt'],
                ].map(([color, text]) => (
                  <div key={text} className={styles.workflowItem}>
                    <span className={`${styles.workflowDot} ${styles[color]}`} />
                    {text}
                  </div>
                ))}
              </div>
            </BentoCard>
          </div>

          <BentoCard
            tag="02 — Website QuickFix"
            title="Probleme gezielt lösen."
            desc="Bis zu drei klar abgegrenzte Fehler an einer bestehenden Website."
            stat="149 €"
            statLabel="fester Einstiegspreis"
          />
          <BentoCard
            tag="03 — Onepager"
            title="In Sekunden verstanden."
            desc="Leistungen, Vertrauen und Kontakt in einer klaren mobilen Seite."
            stat="790 €"
            statLabel="fester Einstiegspreis"
            statColor="#22c55e"
          />

          <BentoCard
            tag="04 — KI-Assistenten"
            title="Telefon, E-Mail und Wissen sinnvoll verbinden."
            desc="Begrenzte Assistenten bereiten Informationen vor, ohne sich als Mensch auszugeben oder ungeprüft zu entscheiden."
            purple
          />
          <BentoCard
            tag="05 — Übergabe"
            title="Ihre Konten bleiben Ihre."
            desc="Domain, Hosting und externe Dienste werden nachvollziehbar eingerichtet."
            stat="100%"
            statLabel="Zugriff beim Betrieb"
          />
          <BentoCard
            tag="06 — Betreuung"
            title="Kleine Änderungen inklusive."
            desc="Laufende Betreuung für den Onepager, monatlich kündbar."
            stat="79 €"
            statLabel="pro Monat"
          />

          <BentoCard
            tag="07 — AI-native Prinzip"
            title="KI ist Teil des Prozesses, nicht nur ein Chatfenster."
            desc="Datenquelle, Verarbeitung, Freigabe, Übergabe und Fehlerweg werden als zusammenhängendes System geplant."
            accent
          >
            <div className={styles.controlPanel}>
              {['Entwurf geprüft', 'Freigabe erteilt', 'Veröffentlichung'].map((item, index) => (
                <div key={item} className={styles.controlRow}>
                  <span>{index + 1}</span><b>{item}</b><i>{index < 2 ? 'Erledigt' : 'Bereit'}</i>
                </div>
              ))}
            </div>
          </BentoCard>

          <div className={styles.wideCard}>
            <BentoCard
              tag="08 — Betrieb & Optimierung"
              title="Nach dem Pilot messbar weiterentwickeln."
              desc="Nutzung, Fehler und Zeitersparnis werden geprüft. Erst danach folgen weitere Automatisierungen oder laufende AI-Operations-Betreuung."
              purple
            >
              <div className={styles.scopePanel}>
                <div><span>Im Angebot</span><strong>Leistung &amp; Zeitplan</strong></div>
                <div><span>Separat</span><strong>Hosting &amp; Fremdkosten</strong></div>
                <div><span>Vor Livegang</span><strong>Ihre Freigabe</strong></div>
              </div>
            </BentoCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
