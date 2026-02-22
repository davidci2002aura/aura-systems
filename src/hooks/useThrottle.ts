import { useRef, useCallback } from 'react';

/**
 * Throttle a callback function to prevent excessive calls
 * @param callback Function to throttle
 * @param delay Minimum time between calls in milliseconds
 * @returns Throttled function
 */
export const useThrottle = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): T => {
  const lastRun = useRef(Date.now());

  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();
      if (now - lastRun.current >= delay) {
        callback(...args);
        lastRun.current = now;
      }
    },
    [callback, delay]
  ) as T;
};
