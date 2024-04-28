import { Assembly } from './Assembly';
import { XMLPartExtension } from './XMLPartExtension';

export class XMLAssemblyExtension implements XMLPartExtension {
  constructor(private assembly: Assembly) {}

  getXMLElement(): string {
    return `<Assembly>
  <PartNumber>${this.assembly.getPartNumber()}</PartNumber>
  <Description>${this.assembly.getDescription()}</Description>
  <Parts>
${this.assembly
  .getParts()
  .map((part) => (part.getExtension('XML') as XMLAssemblyExtension).getXMLElement())
  .join('\n')}
  </Parts>
</Assembly>`;
  }
}
