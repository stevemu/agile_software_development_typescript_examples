import { PiecePart } from './PiecePart';
import { XMLPartExtension } from './XMLPartExtension';

export class XMLPiecePartExtension implements XMLPartExtension {
  constructor(private piecePart: PiecePart) {}

  getXMLElement(): string {
    return `<PiecePart>
  <PartNumber>${this.piecePart.getPartNumber()}</PartNumber>
  <Description>${this.piecePart.getDescription()}</Description>
  <Cost>${this.piecePart.getCost()}</Cost>
</PiecePart>`;
  }
}
