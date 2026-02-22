import { useRef, useEffect, useMemo } from 'react';
import { useThrottle } from './useThrottle';
import { SpatialHash } from '@utils/canvas/spatialHash';
import { Node, MousePosition } from '@utils/canvas/types';

/**
 * Optimized canvas animation hook
 * Performance improvements:
 * - ResizeObserver instead of setting canvas size every frame
 * - Spatial hashing for O(n) instead of O(n²) complexity
 * - Throttled mouse events (16ms = 60fps max)
 * - Memoized node array
 * - Device pixel ratio for sharp rendering
 * - Only runs when enabled (via Intersection Observer)
 */
export const useCanvasAnimation = (enabled: boolean) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();
  const mouse = useRef<MousePosition>({ x: 0.5, y: 0.5 });
  const dimensions = useRef({ width: 0, height: 0 });

  // Memoize nodes array - created once, reused forever
  const nodes = useMemo(
    () =>
      Array.from({ length: 70 }, () => ({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.0004,
        vy: (Math.random() - 0.5) * 0.0004,
      })),
    []
  );

  // Throttled mouse move handler (60fps max)
  const handleMouseMove = useThrottle((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const r = canvas.getBoundingClientRect();
    mouse.current.x = (e.clientX - r.left) / r.width;
    mouse.current.y = (e.clientY - r.top) / r.height;
  }, 16);

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Resize Observer for efficient canvas sizing
    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];
      const { width, height } = entry.contentRect;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      dimensions.current = { width, height };
    });

    resizeObserver.observe(canvas);
    window.addEventListener('mousemove', handleMouseMove);

    const spatialHash = new SpatialHash(0.15);

    // Main animation loop
    const draw = () => {
      const { width, height } = dimensions.current;
      ctx.clearRect(0, 0, width, height);

      spatialHash.clear();

      // Update node positions and build spatial hash
      nodes.forEach((n: Node) => {
        n.x += n.vx;
        n.y += n.vy;

        // Bounce off walls
        if (n.x < 0 || n.x > 1) n.vx *= -1;
        if (n.y < 0 || n.y > 1) n.vy *= -1;

        // Mouse attraction
        const dx = mouse.current.x - n.x;
        const dy = mouse.current.y - n.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 0.18) {
          n.vx += dx * 0.00002;
          n.vy += dy * 0.00002;
        }

        spatialHash.insert(n);
      });

      // Draw connections using spatial hash (O(n) instead of O(n²))
      nodes.forEach((node) => {
        const nearby = spatialHash.getNearby(node, 0.13);

        nearby.forEach((other) => {
          if (node === other) return;

          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < 0.13) {
            ctx.beginPath();
            ctx.moveTo(node.x * width, node.y * height);
            ctx.lineTo(other.x * width, other.y * height);
            ctx.strokeStyle = `rgba(0,119,255,${(1 - d / 0.13) * 0.11})`; // 0.11 = half of 0.22 to avoid double-drawing
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach((node) => {
        const dm = Math.sqrt(
          (node.x - mouse.current.x) ** 2 + (node.y - mouse.current.y) ** 2
        );
        const g = dm < 0.2 ? 1 - dm / 0.2 : 0;

        ctx.beginPath();
        ctx.arc(node.x * width, node.y * height, 1.5 + g * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,${119 + g * 80},255,${0.25 + g * 0.55})`;
        ctx.fill();
      });

      animationFrameId.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [enabled, nodes, handleMouseMove]);

  return canvasRef;
};
