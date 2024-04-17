import { Assembly } from './Assembly';
import { PartVisitor } from './PartVisitor';
import { PiecePart } from './PiecePart';

export class ExplodedCostVisitor implements PartVisitor {
  private totalCost = 0;

  visitPiecePart(piecePart: PiecePart): void {
    this.totalCost += piecePart.getCost();
  }

  visitAssembly(assembly: Assembly): void {}

  getTotalCost(): number {
    return this.totalCost;
  }
}
