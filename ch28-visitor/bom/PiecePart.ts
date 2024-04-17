import { Part } from './Part';
import { PartVisitor } from './PartVisitor';

export class PiecePart implements Part {
  constructor(
    private partNumber: string,
    private description: string,
    private cost: number,
  ) {}

  accept(visitor: PartVisitor): void {
    visitor.visitPiecePart(this);
  }

  getPartNumber(): string {
    return this.partNumber;
  }

  getDescription(): string {
    return this.description;
  }

  getCost(): number {
    return this.cost;
  }
}
