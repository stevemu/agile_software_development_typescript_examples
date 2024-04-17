import { PartVisitor } from './PartVisitor';

export interface Part {
  accept(visitor: PartVisitor): void;
  getPartNumber(): string;
  getDescription(): string;
}
