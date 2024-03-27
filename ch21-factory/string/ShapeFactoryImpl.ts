import { Circle } from '../Circle';
import { Square } from '../Square';

export class ShapeFactoryImpl {
  make(type: string) {
    if (type === 'circle') {
      return new Circle();
    }
    if (type === 'square') {
      return new Square();
    }

    throw new Error('Unknown shape type');
  }
}
