import { Circle } from './undo.ts';
import { Ui } from './undo.ts';

export class UiImpl implements Ui {
  drawShapes(shapes: Circle[]) {
    drawShapes(shapes);
  }
}

function gotoXY(x: number, y: number) {
  process.stdout.write(`\x1b[${y};${x}H`);
}

function clearConsole() {
  process.stdout.write('\x1b[2J');
}

const drawCircleInConsole = (circle: Circle) => {
  gotoXY(circle.x, circle.y);

  const diameter = circle.radius * 2;
  const radiusSquared = circle.radius * circle.radius;

  for (let i = 0; i <= diameter; i++) {
    let row = ' ';
    if (i > 0) {
      row = ' '.repeat(circle.x);
    }
    for (let j = 0; j <= diameter; j++) {
      const distance = Math.pow(j - circle.radius, 2) + Math.pow(i - circle.radius, 2);
      if (distance <= radiusSquared) {
        row += '*';
      } else {
        row += ' ';
      }
    }
    console.log(row);
  }
};

const drawShapes = (shapes: Circle[]) => {
  clearConsole();
  shapes.forEach((shape) => {
    drawCircleInConsole(shape);
  });
};
