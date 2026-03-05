import { lazy, Suspense, useRef } from 'react';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';
import styles from './SplineScene.module.css';

const Spline = lazy(() => import('@splinetool/react-spline'));

// Default public Spline scene — replace with your own scene URL from app.spline.design
const DEFAULT_SCENE_URL =
  'https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode';

interface SplineSceneProps {
  sceneUrl?: string;
  className?: string;
}

const SplineScene: React.FC<SplineSceneProps> = ({
  sceneUrl = DEFAULT_SCENE_URL,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(containerRef, {
    threshold: 0.1,
    rootMargin: '200px',
  });

  return (
    <div ref={containerRef} className={`${styles.container} ${className}`}>
      {isVisible && (
        <Suspense
          fallback={<div className={styles.fallback} />}
        >
          <Spline scene={sceneUrl} className={styles.spline} />
        </Suspense>
      )}
    </div>
  );
};

export default SplineScene;
