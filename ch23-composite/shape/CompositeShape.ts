import { Shape } from './Shape';

export class CompositeShape implements Shape {
  private shapes: Shape[] = [];

  add(shape: Shape): void {
    this.shapes.push(shape);
  }

  draw(): void {
    this.shapes.forEach((shape) => shape.draw());
  }
}
