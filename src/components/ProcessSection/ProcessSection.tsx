import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ProcessSection.module.css';

const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Anfrage & Briefing',
      desc: 'Ein Link und eine kurze Beschreibung reichen. Wir prüfen das sichtbare Problem und sagen ehrlich, ob ein kleiner Fix genügt.',
      time: 'Dauer: 30 Min',
    },
    {
      num: '02',
      title: 'Strategie & Konzept',
      desc: 'Sie erhalten einen verständlichen Umfang, einen festen Preis und einen realistischen Termin vor dem Start.',
      time: 'Dauer: 2–3 Tage',
    },
    {
      num: '03',
      title: 'Design & Prototyping',
      desc: 'Bei Websites entsteht eine prüfbare Vorschau. Automatisierungen laufen zuerst mit Testdaten und klaren Grenzen.',
      time: 'Dauer: 3–5 Tage',
    },
    {
      num: '04',
      title: 'Entwicklung & Launch',
      desc: 'Nach Ihrer Freigabe wird die Lösung übergeben oder veröffentlicht. Konten und Zugänge bleiben nachvollziehbar.',
      time: 'Termin: laut Angebot',
    },
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
              <button
                type="button"
                key={i}
                onClick={() => setActiveStep(i)}
                className={`${styles.stepItem} ${
                  activeStep === i ? styles.active : ''
                }`}
                aria-pressed={activeStep === i}
              >
                <div className={styles.stepNum}>{step.num}</div>
                <div>
                  <div className={styles.stepTitle}>{step.title}</div>
                  <p className={styles.stepDesc}>{step.desc}</p>
                  <div className={styles.stepTime}>{step.time}</div>
                </div>
              </button>
            ))}
          </div>

          <div className={styles.visual}>
            <div className={styles.projectHeader}>
              <div>
                <small>PROJEKTÜBERSICHT</small>
                <strong>Ihr digitaler Auftritt</strong>
              </div>
              <span>Schritt {activeStep + 1} von {steps.length}</span>
            </div>
            <div className={styles.projectBody}>
              <div className={styles.progressMeta}><span>Fortschritt</span><b>{activeStep + 1} von {steps.length} Schritten</b></div>
              <div className={styles.progressTrack}><i style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }} /></div>
              <div className={styles.activeStepSummary} aria-live="polite">
                <small>AKTIVER SCHRITT · {steps[activeStep].num}</small>
                <strong>{steps[activeStep].title}</strong>
                <p>{steps[activeStep].desc}</p>
                <span>{steps[activeStep].time}</span>
              </div>
              <div className={styles.deliverables}>
                {steps.map((step, index) => (
                  <button
                    type="button"
                    key={step.num}
                    className={index === activeStep ? styles.selectedDeliverable : ''}
                    onClick={() => setActiveStep(index)}
                  >
                    <span>{index <= activeStep ? '✓' : step.num}</span>
                    <div><small>SCHRITT {step.num}</small><strong>{step.title}</strong></div>
                    <b>→</b>
                  </button>
                ))}
              </div>
              <div className={styles.ownershipNote}><span>✓</span><div><small>ÜBERGABE</small><strong>Domain und Zugänge bleiben bei Ihnen.</strong></div></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
