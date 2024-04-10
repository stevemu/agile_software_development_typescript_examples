import { Modem } from './Modem';
import { ModemVisitor } from './ModemVisitor';

export class HayesModem implements Modem {
  public dial(pno: string): void {
    console.log(`Hayes modem dialing number ${pno}`);
  }
  public hangUp(): void {
    console.log('Hayes modem hanging up');
  }
  public send(data: string): void {
    console.log(`Hayes modem sending data: ${data}`);
  }
  public receive(): string {
    return 'Hayes modem received data';
  }
  public accept(visitor: ModemVisitor): void {
    visitor.visitHayes(this);
  }

  configurationString: string | null = null;
}
