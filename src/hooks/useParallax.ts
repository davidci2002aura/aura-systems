import { useScroll, useTransform } from 'framer-motion';

/**
 * Parallax Scroll Hook
 * Creates parallax movement based on scroll position
 * @param distance - Distance to move in pixels (can be negative)
 */
export const useParallax = (distance = 100) => {
  const { scrollY } = useScroll();

  // Transform scroll position to parallax offset
  // scrollY 0-1000 -> offset 0-distance
  const y = useTransform(scrollY, [0, 1000], [0, distance]);

  return y;
};
