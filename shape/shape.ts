export interface Point {
  x: number;
  y: number;
}

export abstract class Shape {
  abstract draw(): void;

  static orderTable = ['Circle', 'Square'];

  preceeds(shape: Shape) {
    const thisTypeIndex = Shape.orderTable.indexOf(this.constructor.name);
    const shapeTypeIndex = Shape.orderTable.indexOf(shape.constructor.name);

    return thisTypeIndex < shapeTypeIndex;
  }
}
