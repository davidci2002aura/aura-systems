import { useState, useCallback, memo, ReactNode } from 'react';
import styles from './BentoGrid.module.css';

interface BentoCardProps {
  tag: string;
  title: string;
  desc: string;
  stat?: string;
  statLabel?: string;
  statColor?: string;
  accent?: boolean;
  purple?: boolean;
  children?: ReactNode;
}

const BentoCard: React.FC<BentoCardProps> = memo(
  ({ tag, title, desc, stat, statLabel, statColor, accent, purple, children }) => {
    const [hov, setHov] = useState(false);

    const handleMouseEnter = useCallback(() => setHov(true), []);
    const handleMouseLeave = useCallback(() => setHov(false), []);

    const cardClassName = `${styles.bentoCard} ${accent ? styles.accent : ''} ${
      purple ? styles.purple : ''
    } ${hov ? styles.hover : ''}`;

    return (
      <div
        className={cardClassName}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`${styles.tag} ${purple ? styles.tagPurple : ''}`}>
          {tag}
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.desc}>{desc}</div>
        {children}
        {stat && (
          <div className={styles.stats}>
            <div className={styles.statValue} style={{ color: statColor }}>
              {stat}
            </div>
            <div className={styles.statLabel}>{statLabel}</div>
          </div>
        )}
      </div>
    );
  }
);

BentoCard.displayName = 'BentoCard';

export default BentoCard;
