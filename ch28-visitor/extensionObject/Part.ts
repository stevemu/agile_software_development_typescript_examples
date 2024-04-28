import { PartExtension } from './PartExtension';

export abstract class Part {
  protected extensions: Map<string, PartExtension> = new Map();

  public abstract getPartNumber(): string;
  public abstract getDescription(): string;

  public addExtension(extensionType: string, extension: PartExtension): void {
    this.extensions.set(extensionType, extension);
  }

  public getExtension(extensionType: string): PartExtension {
    const pe = this.extensions.get(extensionType);
    if (pe === undefined) {
      throw new Error('Extension not found');
    }
    return pe;
  }
}
