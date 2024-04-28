import { CSVPartExtension } from './CSVPartExtension';
import { PiecePart } from './PiecePart';

export class CSVPiecePartExtension implements CSVPartExtension {
  constructor(private piecePart: PiecePart) {}

  getCSVText(): string {
    return (
      this.piecePart.getPartNumber() +
      ',' +
      this.piecePart.getDescription() +
      ',' +
      this.piecePart.getCost()
    );
  }
}
