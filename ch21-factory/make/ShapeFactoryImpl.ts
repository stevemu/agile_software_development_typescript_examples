import { Circle } from '../Circle.ts';
import { Shape } from '../Shape.ts';
import { ShapeFactory } from './ShapeFactory.ts';
import { Square } from '../Square.ts';

export class ShapeFactoryImpl implements ShapeFactory {
  makeCircle(): Shape {
    return new Circle();
  }

  makeSquare(): Shape {
    return new Square();
  }
}
