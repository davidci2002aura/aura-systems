import { memo } from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '../../hooks/useParallax';
import styles from './BackgroundSystem.module.css';

const BackgroundSystem: React.FC = () => {
  // Parallax offsets for each orb (different distances for depth)
  const y1 = useParallax(50);
  const y2 = useParallax(-30);
  const y3 = useParallax(80);

  const orbs = [
    {
      width: 600,
      height: 600,
      color: 'rgba(0,119,255,0.06)',
      top: '-8%',
      left: '-12%',
      animation: 'orbFloat1 25s ease-in-out infinite',
      parallaxY: y1,
    },
    {
      width: 400,
      height: 400,
      color: 'rgba(168,85,247,0.05)',
      top: '35%',
      right: '-8%',
      animation: 'orbFloat2 30s ease-in-out infinite',
      parallaxY: y2,
    },
    {
      width: 500,
      height: 500,
      color: 'rgba(0,194,255,0.04)',
      bottom: '5%',
      left: '15%',
      animation: 'orbFloat3 20s ease-in-out infinite',
      parallaxY: y3,
    },
  ];

  return (
    <div className={styles.background}>
      {/* Isometric grid */}
      <div className={styles.grid} />

      {/* Grain texture */}
      <div className={styles.grain} />

      {/* Floating orbs with parallax */}
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={styles.orb}
          style={{
            width: orb.width,
            height: orb.height,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            top: orb.top,
            left: orb.left,
            right: orb.right,
            bottom: orb.bottom,
            animation: orb.animation,
            y: orb.parallaxY,
          }}
        />
      ))}

      {/* Vignette */}
      <div className={styles.vignette} />
    </div>
  );
};

export default memo(BackgroundSystem);
