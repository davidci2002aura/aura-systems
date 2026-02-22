import { useRef } from 'react';
import { useCanvasAnimation } from '@hooks/useCanvasAnimation';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';
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
        Premium Web Solutions · KI-gestützt · 2025
      </div>

      <h1
        className={styles.title}
        style={{
          opacity: introGone ? 1 : 0,
        }}
      >
        <span className="shimmer-text">AURA</span>
        <span className={styles.subtitle}>Neural Architecture</span>
      </h1>

      <p
        className={styles.description}
        style={{
          opacity: introGone ? 1 : 0,
        }}
      >
        Wir bauen digitale Erlebnisse, die konvertieren.
        <br />
        Atmosphärisch. Präzise. Skalierbar.
      </p>

      <div
        className={styles.ctaButtons}
        style={{
          opacity: introGone ? 1 : 0,
        }}
      >
        <a href="#kontakt" className={styles.primaryButton}>
          Kostenloses Erstgespräch →
        </a>
        <a href="#leistungen" className={styles.secondaryButton}>
          Mehr erfahren
        </a>
      </div>

      <div
        className={styles.scrollIndicator}
        style={{
          opacity: introGone ? 0.5 : 0,
        }}
      >
        <div className={styles.scrollLine} />
        <span className={styles.scrollText}>SCROLL</span>
      </div>
    </section>
  );
};

export default Hero;
