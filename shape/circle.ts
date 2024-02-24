import { Shape, Point } from './shape';

export class Circle extends Shape {
  constructor(
    public itsRadius: number,
    public itsCenter: Point,
  ) {
    super();
  }

  draw(): void {
    console.log(
      `Drawing a circle at (${this.itsCenter.x}, ${this.itsCenter.y}) with radius ${this.itsRadius}`,
    );
  }
}
