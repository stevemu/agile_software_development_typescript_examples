import { Assembly } from './Assembly';
import { CSVPartExtension } from './CSVPartExtension';
import { PiecePart } from './PiecePart';

export class CSVAssemblyExtension implements CSVPartExtension {
  constructor(private assembly: Assembly) {}

  public getCSVText(): string {
    let csvText = '';
    csvText += this.assembly.getPartNumber() + ',';
    csvText += this.assembly.getDescription() + '\n';
    for (const part of this.assembly.getParts() as PiecePart[]) {
      csvText += part.getPartNumber() + ',';
      csvText += part.getDescription() + ',';
      csvText += part.getCost() + '\n';
    }
    return csvText;
  }
}
