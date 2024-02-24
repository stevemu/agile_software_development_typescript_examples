import { Shape } from './shape';

export const drawAllShapes = (shapes: Shape[]) => {
  shapes.sort((a, b) => {
    if (a.preceeds(b)) {
      return -1;
    }
    return 1;
  });

  shapes.forEach((shape) => {
    shape.draw();
  });
};
