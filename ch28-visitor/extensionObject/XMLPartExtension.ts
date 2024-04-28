import { PartExtension } from './PartExtension';

export interface XMLPartExtension extends PartExtension {
  getXMLElement(): string;
}
