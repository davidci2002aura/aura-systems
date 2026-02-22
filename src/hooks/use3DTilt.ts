import { useCallback, useState, MouseEvent } from 'react';

/**
 * 3D Tilt Effect Hook
 * Creates perspective tilt based on mouse position
 * @param intensity - Maximum tilt angle in degrees (default: 15)
 */
export const use3DTilt = (intensity = 15) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate tilt angles
      const tiltX = ((y - centerY) / centerY) * intensity;
      const tiltY = ((x - centerX) / centerX) * intensity * -1;

      setTilt({ x: tiltX, y: tiltY });
    },
    [intensity]
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  const style = {
    transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  return {
    tiltProps: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      style,
    },
  };
};
