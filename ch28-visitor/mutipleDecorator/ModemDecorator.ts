import { Modem } from '../decorator/Modem';

export class ModemDecorator implements Modem {
  constructor(protected modem: Modem) {}

  dial(phoneNumber: string): void {
    this.modem.dial(phoneNumber);
  }

  setVolume(volume: number): void {
    this.modem.setVolume(volume);
  }

  getPhoneNumber(): string {
    return this.modem.getPhoneNumber();
  }

  getVolume(): number {
    return this.modem.getVolume();
  }
}
