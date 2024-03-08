export interface Shape {
  id: number;
  color: string;
  x: number;
  y: number;
}

export class Circle implements Shape {
  constructor(
    public id: number,
    public color: string,
    public x: number,
    public y: number,
    public radius: number,
  ) {}
}

export class Box implements Shape {
  constructor(
    public id: number,
    public color: string,
    public x: number,
    public y: number,
    public width: number,
    public height: number,
  ) {}
}
