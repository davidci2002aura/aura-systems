import { useState, useEffect } from 'react';

const getInitialMode = (): boolean => {
  try {
    // Check localStorage first
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) {
      return stored === 'true';
    }
  } catch (error) {
    console.error('localStorage access error:', error);
  }

  // Fall back to system preference
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  } catch (error) {
    console.error('matchMedia error:', error);
    return true; // Default to dark mode
  }
};

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState<boolean>(getInitialMode);

  useEffect(() => {
    // Apply theme to document immediately
    const root = document.documentElement;

    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }

    // Persist to localStorage
    try {
      localStorage.setItem('darkMode', String(isDark));
    } catch (error) {
      console.error('localStorage save error:', error);
    }

    // Force repaint to ensure CSS variables are applied
    void root.offsetHeight;
  }, [isDark]);

  const toggle = () => setIsDark(prev => !prev);

  return { isDark, toggle };
};
