import { DrawBoxCommandUi } from './DrawBoxCommand.js';
import { DrawCircleCommandUi } from './DrawCircleCommand.js';
import { Shape, Circle, Box } from './shape.js';

export interface ConsoleUiCharWriter {
  gotoXY(x: number, y: number): void;
  write(text: string, color: string): void;
  clearConsole(): void;
}

export class ConsoleUi implements DrawCircleCommandUi, DrawBoxCommandUi {
  constructor(private charWriter: ConsoleUiCharWriter) {}

  drawShapes(shapes: Shape[]) {
    this.charWriter.clearConsole();
    shapes.forEach((shape) => {
      if (shape instanceof Circle) {
        this.drawCircleInConsole(shape);
      } else if (shape instanceof Box) {
        this.drawBoxInConsole(shape);
      }
    });
    process.stdout.write('\n');
  }

  drawCircleInConsole = (circle: Circle) => {
    this.charWriter.gotoXY(circle.x, circle.y);

    const radiusSquared = circle.radius * circle.radius;

    for (let y = -circle.radius; y <= circle.radius; y++) {
      for (let x = -circle.radius; x <= circle.radius; x++) {
        const distanceSquared = x * x + y * y;
        this.charWriter.gotoXY(circle.x + x, circle.y + y);
        if (distanceSquared <= radiusSquared) {
          this.charWriter.write('*', circle.color);
        } else {
          this.charWriter.write(' ', circle.color);
        }
      }
    }
  };

  drawBoxInConsole(box: Box) {
    this.charWriter.gotoXY(box.x, box.y);

    for (let y = 0; y < box.height; y++) {
      for (let x = 0; x < box.width; x++) {
        this.charWriter.gotoXY(box.x + x, box.y + y);
        if (y === 0 || y === box.height - 1 || x === 0 || x === box.width - 1) {
          this.charWriter.write('*', box.color);
        } else {
          this.charWriter.write(' ', box.color);
        }
      }
    }
  }
}
