import { JsonPartExtension } from './JsonPartExtension';
import { PiecePart } from './PiecePart';

export class JsonPiecePartExtension implements JsonPartExtension {
  constructor(private piecePart: PiecePart) {}

  getJson(): PiecePartJson {
    return {
      partNumber: this.piecePart.getPartNumber(),
      description: this.piecePart.getDescription(),
      cost: this.piecePart.getCost(),
    };
  }
}

export interface PiecePartJson {
  partNumber: string;
  description: string;
  cost: number;
}
