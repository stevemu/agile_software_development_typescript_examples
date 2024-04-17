import { Modem } from './Modem';

export class HayesModem implements Modem {
  private phoneNumber: string = '';
  private volumn: number = 0;

  dial(phoneNumber: string): void {
    this.phoneNumber = phoneNumber;
  }

  setVolume(volume: number): void {
    this.volumn = volume;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  getVolume(): number {
    return this.volumn;
  }
}
