import { Assembly } from './Assembly';
import { Part } from './Part';

export interface PartVisitor {
  visitAssembly(assembly: Assembly): void;
  visitPiecePart(part: Part): void;
}
