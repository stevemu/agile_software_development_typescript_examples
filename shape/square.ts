import { Point, Shape } from './shape';

export class Square extends Shape {
  constructor(
    public itsSide: number,
    public itsTopLeft: Point,
  ) {
    super();
  }

  draw(): void {
    console.log(
      `Drawing a square at (${this.itsTopLeft.x}, ${this.itsTopLeft.y}) with side ${this.itsSide}`,
    );
  }
}
