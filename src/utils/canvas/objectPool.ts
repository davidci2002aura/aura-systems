/**
 * Object Pool for Performance Optimization
 * Reduces garbage collection by reusing objects
 */

export class ObjectPool<T> {
  private available: T[] = [];
  private inUse: T[] = [];
  private factory: () => T;
  private reset: (obj: T) => void;

  constructor(factory: () => T, reset: (obj: T) => void, initialSize = 10) {
    this.factory = factory;
    this.reset = reset;

    // Pre-allocate objects
    for (let i = 0; i < initialSize; i++) {
      this.available.push(factory());
    }
  }

  /**
   * Get an object from the pool (reuse if available, create new if needed)
   */
  acquire(): T {
    const obj = this.available.pop() || this.factory();
    this.inUse.push(obj);
    return obj;
  }

  /**
   * Return an object to the pool for reuse
   */
  release(obj: T) {
    const index = this.inUse.indexOf(obj);
    if (index !== -1) {
      this.inUse.splice(index, 1);
      this.reset(obj);
      this.available.push(obj);
    }
  }

  /**
   * Return all in-use objects to the pool
   */
  releaseAll() {
    this.inUse.forEach(obj => {
      this.reset(obj);
      this.available.push(obj);
    });
    this.inUse = [];
  }

  /**
   * Get pool statistics (for debugging)
   */
  getStats() {
    return {
      available: this.available.length,
      inUse: this.inUse.length,
      total: this.available.length + this.inUse.length,
    };
  }
}
