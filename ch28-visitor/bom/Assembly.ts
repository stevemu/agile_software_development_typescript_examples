import { Part } from './Part';
import { PartVisitor } from './PartVisitor';

export class Assembly implements Part {
  private parts: Part[] = [];

  constructor(
    private partNumber: string,
    private description: string,
  ) {}

  addPart(part: Part): void {
    this.parts.push(part);
  }

  getParts(): Part[] {
    return this.parts;
  }

  accept(visitor: PartVisitor): void {
    visitor.visitAssembly(this);
    this.parts.forEach((part) => part.accept(visitor));
  }

  getPartNumber(): string {
    return this.partNumber;
  }

  getDescription(): string {
    return this.description;
  }
}
