import { Modem } from './Modem';
import { ModemVisitor } from './ModemVisitor';

export class ErnieModem implements Modem {
  public dial(pno: string): void {
    console.log(`Ernie modem dialing number ${pno}`);
  }
  public hangUp(): void {
    console.log('Ernie modem hanging up');
  }
  public send(data: string): void {
    console.log(`Ernie modem sending data: ${data}`);
  }
  public receive(): string {
    return 'Ernie modem received data';
  }
  public accept(visitor: ModemVisitor): void {
    visitor.visitErnie(this);
  }

  internalPattern: string | null = null;
}
