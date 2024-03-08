import { Reader } from '../../ch14-template-method-and-strategy/Reader.ts';
import { Shape, Circle } from './shape.ts';

interface Command {
  do(): Promise<void>;
  undo(): void;
}

export interface DrawCircleCommandUi {
  drawShapes(shapes: Shape[]): void;
}

export class DrawCircleCommand implements Command {
  private circleId!: number;

  constructor(
    private shapes: Shape[] = [],
    private reader: Reader,
    private ui: DrawCircleCommandUi,
  ) {}

  async do() {
    const x = await this.reader.readLine('Enter the x coordinate: ');
    const y = await this.reader.readLine('Enter the y coordinate: ');
    const radius = await this.reader.readLine('Enter the radius: ');
    const color = await this.reader.readLine('Enter the color: ');

    const circle = new Circle(
      this.shapes.length + 1,
      color,
      parseInt(x, 10),
      parseInt(y, 10),
      parseInt(radius, 10),
    );

    this.circleId = circle.id;

    this.shapes.push(circle);

    this.ui.drawShapes(this.shapes);
  }

  undo() {
    const index = this.shapes.findIndex((shape) => shape.id === this.circleId);
    this.shapes.splice(index, 1);

    this.ui.drawShapes(this.shapes);
  }
}
