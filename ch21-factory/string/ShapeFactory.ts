import { Shape } from '../Shape';

export interface ShapeFactory {
  make(type: string): Shape;
}
