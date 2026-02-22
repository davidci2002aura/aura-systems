import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * Scroll Reveal Hook
 * Detects when element enters viewport
 * @param once - Only trigger once (default: true)
 * @param amount - Amount of element that must be visible (0-1, default: 0.3)
 */
export const useScrollReveal = (once = true, amount = 0.3) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return { ref, isInView };
};
