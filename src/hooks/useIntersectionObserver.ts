import { useState, useEffect, RefObject } from 'react';

/**
 * Hook to detect if an element is visible in the viewport
 * Used to pause canvas animation when not visible
 * @param ref Reference to the element to observe
 * @param options IntersectionObserver options
 * @returns Boolean indicating if element is visible
 */
export const useIntersectionObserver = (
  ref: RefObject<HTMLElement>,
  options?: IntersectionObserverInit
): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isVisible;
};
