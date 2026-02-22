/**
 * Particle Trail System
 * Creates smooth trailing effects following mouse movement
 */

export interface Trail {
  x: number;
  y: number;
  opacity: number;
  age: number;
  maxAge: number;
}

export class ParticleTrailSystem {
  private trails: Trail[] = [];
  private maxTrails = 50;
  private lastX = 0;
  private lastY = 0;
  private minDistance = 2; // Minimum pixel distance before adding new trail

  /**
   * Add a new trail point if mouse has moved enough
   * @param x - Canvas x coordinate (pixels)
   * @param y - Canvas y coordinate (pixels)
   */
  addTrail(x: number, y: number) {
    // Only add trail if mouse has moved enough (performance optimization)
    const dx = x - this.lastX;
    const dy = y - this.lastY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < this.minDistance) return;

    this.lastX = x;
    this.lastY = y;

    if (this.trails.length >= this.maxTrails) {
      this.trails.shift();
    }

    this.trails.push({
      x,
      y,
      opacity: 1,
      age: 0,
      maxAge: 30,
    });
  }

  /**
   * Update all trail points (age them)
   */
  update() {
    for (let i = this.trails.length - 1; i >= 0; i--) {
      const trail = this.trails[i];
      trail.age++;
      trail.opacity = 1 - trail.age / trail.maxAge;

      if (trail.age >= trail.maxAge) {
        this.trails.splice(i, 1);
      }
    }
  }

  /**
   * Render all trail segments
   * @param ctx - Canvas rendering context
   */
  render(ctx: CanvasRenderingContext2D) {
    if (this.trails.length < 2) return;

    this.trails.forEach((trail, i) => {
      if (i === 0) return;

      const prevTrail = this.trails[i - 1];

      ctx.beginPath();
      ctx.moveTo(prevTrail.x, prevTrail.y);
      ctx.lineTo(trail.x, trail.y);

      // Gradient from blue to cyan
      const gradient = ctx.createLinearGradient(
        prevTrail.x,
        prevTrail.y,
        trail.x,
        trail.y
      );
      gradient.addColorStop(0, `rgba(0, 119, 255, ${trail.opacity * 0.5})`);
      gradient.addColorStop(1, `rgba(0, 194, 255, ${trail.opacity * 0.3})`);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2 * trail.opacity;
      ctx.lineCap = 'round';
      ctx.stroke();
    });
  }

  /**
   * Clear all trails
   */
  clear() {
    this.trails = [];
  }

  /**
   * Get current trail count (for debugging)
   */
  getTrailCount() {
    return this.trails.length;
  }
}
