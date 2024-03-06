import { Reader } from '../../ch14-template-method-and-strategy/Reader.ts';

interface Command {
  do(): Promise<void>;
  undo(): void;
}

export interface Circle {
  circleId: number;
  x: number;
  y: number;
  radius: number;
}

export interface Ui {
  drawShapes(shapes: Circle[]): void;
}

export class DrawCircleCommand implements Command {
  private circleId!: number;

  constructor(
    private shapes: Circle[] = [],
    private reader: Reader,
    private ui: Ui,
  ) {}

  async do() {
    const x = await this.reader.readLine('Enter the x coordinate: ');
    const y = await this.reader.readLine('Enter the y coordinate: ');
    const radius = await this.reader.readLine('Enter the radius: ');

    const circle: Circle = {
      circleId: this.shapes.length + 1,
      x: parseInt(x, 10),
      y: parseInt(y, 10),
      radius: parseInt(radius, 10),
    };

    this.circleId = circle.circleId;

    this.shapes.push(circle);

    this.ui.drawShapes(this.shapes);
  }

  undo() {
    const index = this.shapes.findIndex((shape) => shape.circleId === this.circleId);
    this.shapes.splice(index, 1);
  }
}
