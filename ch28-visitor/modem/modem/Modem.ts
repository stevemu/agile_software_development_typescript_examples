import { ModemVisitor } from './ModemVisitor';

export interface Modem {
  dial(pno: string): void;
  hangUp(): void;
  send(data: string): void;
  receive(): string;
  accept(visitor: ModemVisitor): void;
}
