import { Assembly } from './Assembly';
import { Part } from './Part';
import { PartVisitor } from './PartVisitor';
import { PiecePart } from './PiecePart';

export class PartCountVisitor implements PartVisitor {
  private count: Map<string, number> = new Map();
  private pieceCount = 0;

  visitAssembly(assembly: Assembly): void {}

  visitPiecePart(part: PiecePart): void {
    this.pieceCount++;
    const pn = part.getPartNumber();
    const count = this.count.get(pn) || 0;
    this.count.set(pn, count + 1);
  }

  getPartNumberCount(): number {
    return this.count.size;
  }

  getCountForPartNumber(partNumber: string): number {
    return this.count.get(partNumber) || 0;
  }

  getPieceCount(): number {
    return this.pieceCount;
  }
}
