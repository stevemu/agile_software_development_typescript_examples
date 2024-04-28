import { PartExtension } from './PartExtension';

export interface CSVPartExtension extends PartExtension {
  getCSVText(): string;
}
