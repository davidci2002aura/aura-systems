import { useEffect, useRef, useState } from 'react';

/**
 * FPS Monitoring Hook
 * Measures real-time frame rate for performance monitoring
 */
export const useFPS = () => {
  const [fps, setFps] = useState(60);
  const frameTimesRef = useRef<number[]>([]);
  const lastTimeRef = useRef(performance.now());

  useEffect(() => {
    let rafId: number;

    const measureFPS = () => {
      const now = performance.now();
      const delta = now - lastTimeRef.current;
      lastTimeRef.current = now;

      // Store frame times for averaging
      frameTimesRef.current.push(delta);
      if (frameTimesRef.current.length > 60) {
        frameTimesRef.current.shift();
      }

      // Calculate average FPS over last 60 frames
      const avgFrameTime =
        frameTimesRef.current.reduce((a, b) => a + b, 0) /
        frameTimesRef.current.length;

      const currentFps = Math.round(1000 / avgFrameTime);
      setFps(currentFps);

      rafId = requestAnimationFrame(measureFPS);
    };

    rafId = requestAnimationFrame(measureFPS);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return fps;
};
