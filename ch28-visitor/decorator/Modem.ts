export interface Modem {
  dial(phoneNumber: string): void;
  setVolume(volume: number): void;
  getPhoneNumber(): string;
  getVolume(): number;
}
