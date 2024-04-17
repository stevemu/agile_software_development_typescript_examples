import { Modem } from './Modem';

export class LoudDialModem implements Modem {
  constructor(private modem: Modem) {}

  dial(phoneNumber: string): void {
    this.modem.setVolume(11);
    this.modem.dial(phoneNumber);
    console.log('Dialing...');
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
