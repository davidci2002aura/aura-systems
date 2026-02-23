import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ProcessSection.module.css';

const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Anfrage & Briefing',
      desc: 'Senden Sie uns Ihre Anforderungen digital. Wir analysieren Ihr Potenzial und erstellen ein erstes Konzept.',
      time: 'Dauer: 30 Min',
    },
    {
      num: '02',
      title: 'Strategie & Konzept',
      desc: 'Maßgeschneidertes Konzept mit Seitenstruktur, Designrichtung und technischer Architektur.',
      time: 'Dauer: 2–3 Tage',
    },
    {
      num: '03',
      title: 'Design & Prototyping',
      desc: 'Interaktive Prototypen. Wir iterieren gemeinsam, bis das Design exakt Ihrer Vorstellung entspricht.',
      time: 'Dauer: 3–5 Tage',
    },
    {
      num: '04',
      title: 'Entwicklung & Launch',
      desc: 'Sauberer Code, tägliche Updates und ein stressfreier Launch inkl. Analytics.',
      time: 'Dauer: 1–3 Wochen',
    },
  ];

  const milestones = [
    'Zieldefinition & Briefing',
    'Design-Prototyp freigegeben',
    'Entwicklung abgeschlossen',
    'Live gegangen · 🎉',
  ];

  return (
    <section
      id="prozess"
      className={styles.section}
    >
      <div className={styles.container}>
        <div className={styles.sectionTag}>
          <span className={styles.tagLine} /> So arbeiten wir
        </div>
        <h2 className={styles.sectionTitle}>
          In 4 Schritten
          <br />
          <span className={styles.light}>zum Ziel.</span>
        </h2>

        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className={styles.stepsList}>
            {steps.map((step, i) => (
              <div
                key={i}
                onClick={() => setActiveStep(i)}
                className={`${styles.stepItem} ${
                  activeStep === i ? styles.active : ''
                }`}
              >
                <div className={styles.stepNum}>{step.num}</div>
                <div>
                  <div className={styles.stepTitle}>{step.title}</div>
                  <p className={styles.stepDesc}>{step.desc}</p>
                  <div className={styles.stepTime}>{step.time}</div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.visual}>
            <div className={styles.terminalHeader}>
              <div className={styles.dots}>
                {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
                  <div key={c} className={styles.dot} style={{ background: c }} />
                ))}
              </div>
              <span className={styles.filename}>project.config.ts</span>
            </div>

            <div className={styles.codeBlock}>
              <div className={styles.code}>
                <span className={styles.comment}>
                  // Neural Architecture Config
                </span>
                <br />
                <span className={styles.keyword}>const</span> project = {'{'}
                <br />
                &nbsp;&nbsp;client:{' '}
                <span className={styles.string}>"Ihr Unternehmen"</span>,
                <br />
                &nbsp;&nbsp;lighthouse:{' '}
                <span className={styles.number}>100</span>,
                <br />
                &nbsp;&nbsp;loadTime:{' '}
                <span className={styles.string}>"0.8s"</span>,
                <br />
                &nbsp;&nbsp;aiEnabled:{' '}
                <span className={styles.boolean}>true</span>,
                <br />
                &nbsp;&nbsp;status:{' '}
                <span className={styles.function}>fn</span>.
                <span className={styles.method}>live</span>()
                <br />
                {'}'}
              </div>

              {milestones.map((milestone, i) => (
                <div key={i} className={styles.milestone}>
                  <div className={styles.checkmark}>
                    <svg width="7" height="7" fill="none" stroke="#22c55e" strokeWidth="2.5">
                      <path d="M1 4l2 2 4-4" />
                    </svg>
                  </div>
                  {milestone}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
