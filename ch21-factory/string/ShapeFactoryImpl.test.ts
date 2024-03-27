import { Circle } from '../Circle';
import { ShapeFactoryImpl } from './ShapeFactoryImpl';

describe('ShapeFactoryImpl', () => {
  it('make circle', () => {
    const shapeFactory = new ShapeFactoryImpl();
    const circle = shapeFactory.make('circle');
    expect(circle).toBeInstanceOf(Circle);
  });
});
