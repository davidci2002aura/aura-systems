import { useEffect, useState } from 'react';
import styles from './Intro.module.css';

interface IntroProps {
  onComplete: () => void;
}

const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [introPhase, setIntroPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setIntroPhase(1), 200);
    const t2 = setTimeout(() => setIntroPhase(2), 1800);
    const t3 = setTimeout(() => setIntroPhase(3), 2800);
    const t4 = setTimeout(() => onComplete(), 3600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const introLetters = ['A', 'U', 'R', 'A'];

  return (
    <div
      className={styles.intro}
      style={{
        opacity: introPhase >= 3 ? 0 : 1,
        pointerEvents: introPhase >= 3 ? 'none' : 'auto',
      }}
    >
      <div
        className={styles.systemText}
        style={{ opacity: introPhase >= 1 ? 1 : 0 }}
      >
        System v2.4 — Initializing
      </div>

      <div className={styles.lettersContainer}>
        {introLetters.map((letter, i) => (
          <span
            key={i}
            className={styles.letter}
            style={{
              transform: introPhase >= 1 ? 'translateY(0)' : 'translateY(110%)',
              opacity: introPhase >= 1 ? 1 : 0,
              transitionDelay: `${i * 0.07}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      <div
        className={styles.divider}
        style={{
          transform: introPhase >= 1 ? 'scaleX(1)' : 'scaleX(0)',
          opacity: introPhase >= 1 ? 1 : 0,
        }}
      />

      <div
        className={styles.loadedText}
        style={{ opacity: introPhase >= 2 ? 1 : 0 }}
      >
        Neural Architecture · Loaded
      </div>
    </div>
  );
};

export default Intro;
