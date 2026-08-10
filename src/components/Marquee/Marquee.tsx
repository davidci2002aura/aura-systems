import styles from './Marquee.module.css';

const Marquee: React.FC = () => {
  const items = [
    'Website-QuickFix',
    'Moderner Onepager',
    'Mobile Optimierung',
    'KI-Telefonservice',
    'E-Mail-Assistenten',
    'Wissenssysteme',
    'AI-native Operations',
    'Anfragen strukturieren',
    'Lokale Betriebe',
    'Feste Einstiegspreise',
    'Direkte Übergabe',
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
