import styles from './Marquee.module.css';

const Marquee: React.FC = () => {
  const items = [
    'Websites',
    'Webanwendungen',
    'Automatisierung',
    'KI-Assistenten',
    'AI-native Systeme',
    'Human-in-the-loop',
    'Ravensburg',
    'Klare Übergabe',
  ];

  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {[...Array(2)].flatMap((_, setIndex) =>
          items.map((text, i) => (
            <span key={`${setIndex}-${i}`} className={styles.item}>
              {text}
              <span className={styles.dot} />
            </span>
          ))
        )}
      </div>
    </div>
  );
};

export default Marquee;
