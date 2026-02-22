import { useFPS } from './useFPS';
import { useEffect, useState } from 'react';

/**
 * Quality levels for adaptive rendering
 */
export type QualityLevel = 'low' | 'medium' | 'high';

/**
 * Adaptive Quality Hook
 * Automatically adjusts rendering quality based on device performance
 */
export const useAdaptiveQuality = () => {
  const fps = useFPS();
  const [quality, setQuality] = useState<QualityLevel>('high');

  useEffect(() => {
    // Add hysteresis to prevent flickering between states
    // Only change quality if FPS is consistently low/high
    if (fps < 30 && quality !== 'low') {
      setQuality('low');
    } else if (fps >= 30 && fps < 50 && quality !== 'medium') {
      setQuality('medium');
    } else if (fps >= 50 && quality !== 'high') {
      setQuality('high');
    }
  }, [fps, quality]);

  return {
    quality,
    fps,
    // Adaptive settings based on quality level
    nodeCount: quality === 'low' ? 30 : quality === 'medium' ? 50 : 70,
    enableTrails: quality !== 'low',
    enableGlow: quality === 'high',
    connectionDistance: quality === 'low' ? 0.1 : 0.13,
    maxConnections: quality === 'low' ? 3 : quality === 'medium' ? 5 : 10,
  };
};
