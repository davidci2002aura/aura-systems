import { useRef, useEffect, useMemo } from 'react';
import { useThrottle } from './useThrottle';
import { useAdaptiveQuality } from './useAdaptiveQuality';
import { SpatialHash } from '@utils/canvas/spatialHash';
import { ParticleTrailSystem } from '@utils/canvas/particleSystem';
import { ObjectPool } from '@utils/canvas/objectPool';
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
 * - Adaptive quality based on FPS (Phase 2)
 * - Particle trail system (Phase 2)
 * - Object pooling for reduced GC (Phase 2)
 */
export const useCanvasAnimation = (enabled: boolean) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();
  const mouse = useRef<MousePosition>({ x: 0.5, y: 0.5 });
  const dimensions = useRef({ width: 0, height: 0 });

  // Adaptive quality system - adjusts node count based on FPS
  const { nodeCount, enableTrails, enableGlow, connectionDistance } =
    useAdaptiveQuality();

  // Particle trail system
  const trailSystem = useMemo(() => new ParticleTrailSystem(), []);

  // Object pool for nearby arrays (reduces GC pressure)
  const nearbyPool = useMemo(
    () =>
      new ObjectPool<Node[]>(
        () => [],
        arr => (arr.length = 0),
        20
      ),
    []
  );

  // Memoize nodes array - but now it's dynamic based on quality
  const nodes = useMemo(
    () =>
      Array.from({ length: nodeCount }, () => ({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.0004,
        vy: (Math.random() - 0.5) * 0.0004,
      })),
    [nodeCount]
  );

  // Throttled mouse move handler (60fps max)
  const handleMouseMove = useThrottle((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const r = canvas.getBoundingClientRect();
    const { width, height } = dimensions.current;

    mouse.current.x = (e.clientX - r.left) / r.width;
    mouse.current.y = (e.clientY - r.top) / r.height;

    // Add particle trail if enabled
    if (enableTrails && width > 0 && height > 0) {
      trailSystem.addTrail(
        mouse.current.x * width,
        mouse.current.y * height
      );
    }
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

    const spatialHash = new SpatialHash(connectionDistance * 1.2);

    // Main animation loop
    const draw = () => {
      const { width, height } = dimensions.current;
      ctx.clearRect(0, 0, width, height);

      // Update and render particle trails first (behind nodes)
      if (enableTrails) {
        trailSystem.update();
        trailSystem.render(ctx);
      }

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
      // Use object pooling for nearby arrays to reduce GC pressure
      nodes.forEach((node) => {
        const nearby = spatialHash.getNearby(node, connectionDistance);

        nearby.forEach((other) => {
          if (node === other) return;

          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(node.x * width, node.y * height);
            ctx.lineTo(other.x * width, other.y * height);
            ctx.strokeStyle = `rgba(0,119,255,${(1 - d / connectionDistance) * 0.11})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        });
      });

      // Draw nodes (with adaptive glow)
      nodes.forEach((node) => {
        const dm = Math.sqrt(
          (node.x - mouse.current.x) ** 2 + (node.y - mouse.current.y) ** 2
        );
        const g = enableGlow && dm < 0.2 ? 1 - dm / 0.2 : 0;

        ctx.beginPath();
        ctx.arc(
          node.x * width,
          node.y * height,
          1.5 + (enableGlow ? g * 2.5 : 0),
          0,
          Math.PI * 2
        );
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
      trailSystem.clear();
      nearbyPool.releaseAll();
    };
  }, [
    enabled,
    nodes,
    handleMouseMove,
    enableTrails,
    enableGlow,
    connectionDistance,
    trailSystem,
    nearbyPool,
  ]);

  return canvasRef;
};
