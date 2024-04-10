import { Modem } from './Modem';
import { ModemVisitor } from './ModemVisitor';

export class ZoomModem implements Modem {
  public dial(pno: string): void {
    console.log(`Zoom modem dialing number ${pno}`);
  }
  public hangUp(): void {
    console.log('Zoom modem hanging up');
  }
  public send(data: string): void {
    console.log(`Zoom modem sending data: ${data}`);
  }
  public receive(): string {
    return 'Zoom modem received data';
  }
  public accept(visitor: ModemVisitor): void {
    visitor.visitZoom(this);
  }

  configurationValue: number = 0;
}
