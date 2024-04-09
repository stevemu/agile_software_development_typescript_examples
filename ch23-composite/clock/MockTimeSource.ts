import { TimeSource } from './TimeSource';
import { Subject } from './Subject';

export class MockTimeSource extends Subject implements TimeSource {
  private hours: number = 0;
  private minutes: number = 0;
  private seconds: number = 0;

  setTime(hours: number, minutes: number, seconds: number): void {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.notifyObservers();
  }

  getHours(): number {
    return this.hours;
  }

  getMinutes(): number {
    return this.minutes;
  }

  getSeconds(): number {
    return this.seconds;
  }
}
