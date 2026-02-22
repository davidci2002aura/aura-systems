import { useState, useCallback, memo, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { use3DTilt } from '../../hooks/use3DTilt';
import { useScrollReveal } from '../../hooks/useScrollReveal';
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
    const { tiltProps } = use3DTilt(10);
    const { ref, isInView } = useScrollReveal();

    // Combine handlers to avoid conflicts
    const handleMouseEnter = useCallback(() => setHov(true), []);
    const handleMouseLeave = useCallback(() => {
      setHov(false);
      // Call tilt's onMouseLeave handler
      if (tiltProps.onMouseLeave) {
        tiltProps.onMouseLeave();
      }
    }, [tiltProps]);

    const handleMouseMove = useCallback(
      (e: React.MouseEvent<HTMLElement>) => {
        // Call tilt's onMouseMove handler
        if (tiltProps.onMouseMove) {
          tiltProps.onMouseMove(e);
        }
      },
      [tiltProps]
    );

    const cardClassName = `${styles.bentoCard} ${accent ? styles.accent : ''} ${
      purple ? styles.purple : ''
    } ${hov ? styles.hover : ''}`;

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={cardClassName}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        style={tiltProps.style}
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
      </motion.div>
    );
  }
);

BentoCard.displayName = 'BentoCard';

export default BentoCard;
