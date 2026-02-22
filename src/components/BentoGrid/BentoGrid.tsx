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
          Ihre Vorteile.
          <br />
          <span className={styles.light}>Messbar.</span>
        </h2>

        <div className={styles.grid}>
          {/* Big card - Neural Operations */}
          <div className={styles.bigCard}>
            <BentoCard
              tag="01 — Neural Operations"
              title="n8n Automation Workflows"
              desc="Verbinden Sie Ihre Tools zu einem autonomen Organismus. CRM, E-Mail, Marketing — alles fließt nahtlos."
              accent
            >
              <div className={styles.workflowList}>
                {[
                  ['blue', 'Email Inbound · AI Classify'],
                  ['purple', 'GPT-4o Analysis · Route'],
                  ['green', 'CRM Update · Slack Notify'],
                  ['orange', 'Report Generate · Send'],
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
            tag="02 — Performance"
            title="Blitzschnell."
            desc="Ladezeiten unter 1 Sekunde."
            stat="0.8s"
            statLabel="avg. load time"
          />
          <BentoCard
            tag="03 — SEO"
            title="Lighthouse 100."
            desc="Technisch perfekt. Semantisch präzise."
            stat="100"
            statLabel="Lighthouse Score"
            statColor="#22c55e"
          />

          <BentoCard
            tag="04 — Voice Agent"
            title="24/7 Vocal Identity"
            desc="Mehrsprachige KI-Telefonie. Vollständig in Ihre Systeme integriert."
            purple
          />
          <BentoCard
            tag="05 — Conversion"
            title="Design, das verkauft."
            desc="Jedes Element auf Conversion optimiert. A/B getestet."
            stat="+38%"
            statLabel="Conversion Rate"
          />
          <BentoCard
            tag="06 — KI Support"
            title="AI Ecosystem."
            desc="Chatbots, die echte Probleme lösen. In jeder Sprache."
            stat="24/7"
            statLabel="System Online"
          />

          {/* Neural Core I */}
          <BentoCard
            tag="07 — Neural Core I"
            title="Agent Swarm."
            desc="Autonome KI-Agenten erledigen komplexe Aufgaben parallel."
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
              tag="08 — Neural Core II"
              title="Data Synapse Processing."
              desc="Live-Verarbeitung unstrukturierter Unternehmensdaten mit präziser LLM-Technologie."
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
                <div className={styles.streamLabel}>LIVE STREAM</div>
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
