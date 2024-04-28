import { PartExtension } from './PartExtension';

export interface JsonPartExtension extends PartExtension {
  getJson(): unknown;
}
