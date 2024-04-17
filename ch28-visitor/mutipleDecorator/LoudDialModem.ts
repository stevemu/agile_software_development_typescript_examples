import { Modem } from '../decorator/Modem';
import { ModemDecorator } from './ModemDecorator';

export class LoudDialModem extends ModemDecorator {
  constructor(modem: Modem) {
    super(modem);
  }

  dial(phoneNumber: string): void {
    this.modem.setVolume(11);
    this.modem.dial(phoneNumber);
    console.log('Dialing...');
  }
}
