import { useRef } from 'react';
import { useCanvasAnimation } from '@hooks/useCanvasAnimation';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';
import RippleButton from '../RippleButton/RippleButton';
import styles from './Hero.module.css';

interface HeroProps {
  introGone: boolean;
}

const Hero: React.FC<HeroProps> = ({ introGone }) => {
  const heroRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(heroRef, { threshold: 0.1 });
  const canvasRef = useCanvasAnimation(isVisible && introGone);

  return (
    <section ref={heroRef} className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />

      <div
        className={styles.badge}
        style={{
          opacity: introGone ? 1 : 0,
        }}
      >
        Websites · Reparaturen · Automatisierung · 2026
      </div>

      <h1
        className={styles.title}
        style={{
          opacity: introGone ? 1 : 0,
        }}
      >
        <span className="shimmer-text">AURA</span>
        <span className={styles.subtitle}>Digital Systems</span>
      </h1>

      <p
        className={styles.description}
        style={{
          opacity: introGone ? 1 : 0,
        }}
      >
        Klare Websites und kleine Automatisierungen für lokale Betriebe.
        <br />
        Verständlich geplant. Hochwertig umgesetzt. Kontrollierbar übergeben.
      </p>

      <div
        className={styles.ctaButtons}
        style={{
          opacity: introGone ? 1 : 0,
        }}
      >
        <RippleButton href="#kontakt" className={styles.primaryButton}>
          Kostenlose Kurzprüfung →
        </RippleButton>
        <RippleButton href="#preise" className={styles.secondaryButton}>
          Pakete ansehen
        </RippleButton>
      </div>

      <div className={styles.productStage} style={{ opacity: introGone ? 1 : 0 }} aria-label="Aura Systems Leistungsübersicht">
        <div className={`${styles.productCard} ${styles.productCardWebsite}`}>
          <div className={styles.windowBar}><i /><i /><i /><span>ihre-website.de</span></div>
          <div className={styles.websitePreview}>
            <small>KLARER EINSTIEG</small>
            <strong>In Sekunden<br />verstanden.</strong>
            <div><span>Leistung</span><span>Vertrauen</span><span>Kontakt</span></div>
          </div>
        </div>
        <div className={`${styles.productCard} ${styles.productCardCall}`}>
          <small>ANRUF · NICHT ERREICHBAR</small>
          <div className={styles.callOrb}>AI</div>
          <strong>Anliegen<br />aufgenommen</strong>
          <span>Zusammenfassung bereit ↗</span>
        </div>
        <div className={`${styles.productCard} ${styles.productCardFlow}`}>
          <small>ANFRAGE-FLOW</small>
          {['Eingang', 'Struktur', 'Entscheidung'].map((item, index) => <div key={item}><i>{index + 1}</i><span>{item}</span><b>{index === 2 ? '✓' : '→'}</b></div>)}
        </div>
      </div>

    </section>
  );
};

export default Hero;
