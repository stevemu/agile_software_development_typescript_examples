import { CSVAssemblyExtension } from './CSVAssemblyExtension';
import { Part } from './Part';
import { XMLAssemblyExtension } from './XMLAssemblyExtension';

export class Assembly extends Part {
  private partNumber: string;
  private description: string;
  private parts: Part[] = [];

  constructor(partNumber: string, description: string) {
    super();
    this.partNumber = partNumber;
    this.description = description;
    this.addExtension('XML', new XMLAssemblyExtension(this));
    this.addExtension('CSV', new CSVAssemblyExtension(this));
  }

  public getPartNumber(): string {
    return this.partNumber;
  }

  public getDescription(): string {
    return this.description;
  }

  public add(part: Part): void {
    this.parts.push(part);
  }

  public getParts(): Part[] {
    return this.parts;
  }
}
