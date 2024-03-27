import { Shape } from '../Shape.ts';

export interface ShapeFactory {
  makeCircle(): Shape;
  makeSquare(): Shape;
}
