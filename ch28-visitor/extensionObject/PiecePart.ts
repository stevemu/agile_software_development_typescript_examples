import { CSVPiecePartExtension } from './CSVPiecePartExtension';
import { JsonPiecePartExtension } from './JsonPiecePartExtension';
import { Part } from './Part';
import { XMLPiecePartExtension } from './XMLPiecePartExtension';

export class PiecePart extends Part {
  private partNumber: string;
  private description: string;
  private cost: number;

  constructor(partNumber: string, description: string, cost: number) {
    super();
    this.partNumber = partNumber;
    this.description = description;
    this.cost = cost;
    this.addExtension('XML', new XMLPiecePartExtension(this));
    this.addExtension('JSON', new JsonPiecePartExtension(this));
    this.addExtension('CSV', new CSVPiecePartExtension(this));
  }

  public getPartNumber(): string {
    return this.partNumber;
  }

  public getDescription(): string {
    return this.description;
  }

  public getCost(): number {
    return this.cost;
  }
}
