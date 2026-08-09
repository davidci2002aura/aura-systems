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
          Konkrete Lösungen.
          <br />
          <span className={styles.light}>Klein startbar.</span>
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
              tag="01 — Geführter Ablauf"
              title="Anfragen sauber vorsortieren"
              desc="Formular-, E-Mail- oder Telefonanfragen landen mit den nötigen Angaben in einem nachvollziehbaren Ablauf."
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
            stat="590 €"
            statLabel="fester Einstiegspreis"
            statColor="#22c55e"
          />

          <BentoCard
            tag="04 — KI-Telefonservice"
            title="Rückruf statt verpasster Anfrage."
            desc="Ein begrenzter Pilot nimmt Name, Nummer, Anliegen und Rückrufzeit auf, wenn niemand abnimmt."
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
            stat="59 €"
            statLabel="pro Monat"
          />

          {/* Neural Core I */}
          <BentoCard
            tag="07 — Kontrollpunkt"
            title="Der Mensch entscheidet."
            desc="Automatisierungen starten mit klaren Grenzen und einem überprüfbaren Ergebnis."
            accent
          >
            <div className={styles.agentSwarm}>
              <div className={styles.scanline} />
              <div className={styles.agentDots}>
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={styles.agentDot}
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Neural Core II */}
          <div className={styles.wideCard}>
            <BentoCard
              tag="08 — Transparenz"
              title="Keine erfundenen Erfolgszahlen."
              desc="Arbeitsproben sind als Konzepte gekennzeichnet. Umfang, Fremdkosten und Risiken werden vor dem Start getrennt benannt."
              purple
            >
              <div className={styles.dataStream}>
                <div className={styles.streamGrid} />
                {[40, 85, 45, 100, 60, 90, 50, 75, 40, 65, 30, 80].map((h, i) => (
                  <div
                    key={i}
                    className={styles.streamBar}
                    style={{
                      height: `${h}%`,
                      animationDelay: `${i * 0.15}s`,
                    }}
                  />
                ))}
                <div className={styles.streamLabel}>CLEAR SCOPE</div>
              </div>
            </BentoCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
