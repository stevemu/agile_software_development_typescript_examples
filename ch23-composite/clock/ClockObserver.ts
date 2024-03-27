export interface ClockObserver {
  update(hours: number, minutes: number, seconds: number): void;
}
