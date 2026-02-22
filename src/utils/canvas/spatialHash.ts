import { Node } from './types';

/**
 * Spatial Hash data structure for efficient neighbor finding
 * Reduces connection checks from O(n²) to O(n)
 */
export class SpatialHash {
  private cellSize: number;
  private grid: Map<string, Node[]>;

  constructor(cellSize: number) {
    this.cellSize = cellSize;
    this.grid = new Map();
  }

  /**
   * Generate a hash key for a grid cell
   */
  private hash(x: number, y: number): string {
    const col = Math.floor(x / this.cellSize);
    const row = Math.floor(y / this.cellSize);
    return `${col},${row}`;
  }

  /**
   * Insert a node into the spatial hash
   */
  insert(node: Node): void {
    const key = this.hash(node.x, node.y);
    if (!this.grid.has(key)) {
      this.grid.set(key, []);
    }
    this.grid.get(key)!.push(node);
  }

  /**
   * Get all nodes within radius of the given node
   * Only checks nearby cells instead of all nodes
   */
  getNearby(node: Node, radius: number): Node[] {
    const nearby: Node[] = [];
    const cellsToCheck = Math.ceil(radius / this.cellSize);

    const centerKey = this.hash(node.x, node.y);
    const [col, row] = centerKey.split(',').map(Number);

    // Check all cells within range
    for (let i = -cellsToCheck; i <= cellsToCheck; i++) {
      for (let j = -cellsToCheck; j <= cellsToCheck; j++) {
        const key = `${col + i},${row + j}`;
        const cells = this.grid.get(key);
        if (cells) {
          nearby.push(...cells);
        }
      }
    }

    return nearby;
  }

  /**
   * Clear the entire grid (called before each frame)
   */
  clear(): void {
    this.grid.clear();
  }
}
