import { Reader } from '../../ch14-template-method-and-strategy/Reader.ts';
import { Box, Shape } from './shape.ts';

interface Command {
  do(): Promise<void>;
  undo(): void;
}

export interface DrawBoxCommandUi {
  drawShapes(shapes: Shape[]): void;
}

export class DrawBoxCommand implements Command {
  private boxId!: number;

  constructor(
    private shapes: Shape[] = [],
    private reader: Reader,
    private ui: DrawBoxCommandUi,
  ) {}

  async do() {
    const x = await this.reader.readLine('Enter the x coordinate: ');
    const y = await this.reader.readLine('Enter the y coordinate: ');
    const width = await this.reader.readLine('Enter the width: ');
    const height = await this.reader.readLine('Enter the height: ');
    const color = await this.reader.readLine('Enter the color: ');

    const box = new Box(
      this.shapes.length + 1,
      color,
      parseInt(x, 10),
      parseInt(y, 10),
      parseInt(width, 10),
      parseInt(height, 10),
    );

    this.boxId = box.id;

    this.shapes.push(box);

    this.ui.drawShapes(this.shapes);
  }

  undo() {
    const index = this.shapes.findIndex((shape) => shape.id === this.boxId);
    this.shapes.splice(index, 1);

    this.ui.drawShapes(this.shapes);
  }
}
