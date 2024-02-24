import { Circle } from './circle';
import { drawAllShapes } from './drawAllShapes';
import { Shape } from './shape';
import { Square } from './square';

const shapes: Shape[] = [new Square(5, { x: 20, y: 20 }), new Circle(5, { x: 10, y: 10 })];

drawAllShapes(shapes);
