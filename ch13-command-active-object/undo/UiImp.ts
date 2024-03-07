import { DrawBoxCommandUi } from './DrawBoxCommand.js';
import { DrawCircleCommandUi } from './DrawCircleCommand.js';
import { Shape, Circle, Box } from './shape.js';

export class UiImp implements DrawCircleCommandUi, DrawBoxCommandUi {
  drawShapes(shapes: Shape[]) {
    clearConsole();
    shapes.forEach((shape) => {
      if (shape instanceof Circle) {
        drawCircleInConsole(shape);
      } else if (shape instanceof Box) {
        drawBoxInConsole(shape);
      }
    });
    process.stdout.write('\n');
  }
}

const drawCircleInConsole = (circle: Circle) => {
  gotoXY(circle.x, circle.y);

  const radiusSquared = circle.radius * circle.radius;

  for (let y = -circle.radius; y <= circle.radius; y++) {
    for (let x = -circle.radius; x <= circle.radius; x++) {
      const distanceSquared = x * x + y * y;
      gotoXY(circle.x + x, circle.y + y);
      if (distanceSquared <= radiusSquared) {
        process.stdout.write(wrapWithColorEscapeCodes(circle.color, '*'));
      } else {
        process.stdout.write(' ');
      }
    }
  }
};

function drawBoxInConsole(box: Box) {
  gotoXY(box.x, box.y);

  for (let y = 0; y < box.height; y++) {
    for (let x = 0; x < box.width; x++) {
      gotoXY(box.x + x, box.y + y);
      if (y === 0 || y === box.height - 1 || x === 0 || x === box.width - 1) {
        process.stdout.write(wrapWithColorEscapeCodes(box.color, '*'));
      } else {
        process.stdout.write(' ');
      }
    }
  }
}

function gotoXY(x: number, y: number) {
  process.stdout.write(`\x1b[${y};${x}H`);
}

function clearConsole() {
  process.stdout.write('\x1b[2J');
}

function wrapWithColorEscapeCodes(color: string, text: string) {
  if (color === 'red') {
    return `\x1b[31m${text}\x1b[0m`;
  } else if (color === 'green') {
    return `\x1b[32m${text}\x1b[0m`;
  }
  return text;
}
