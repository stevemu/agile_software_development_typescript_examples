import { Shape } from '../Shape.ts';
import { ShapeFactoryImpl } from './ShapeFactoryImpl.ts';

const shapeFactory = new ShapeFactoryImpl();
const circle: Shape = shapeFactory.makeCircle();
const square: Shape = shapeFactory.makeSquare();
console.log(circle);
console.log(square);
