import { ClockObserver } from './ClockObserver';
import { TimeSource } from './TimeSource';

export class MockTimeSink implements ClockObserver {
  private hours: number = 0;
  private minutes: number = 0;
  private seconds: number = 0;

  constructor(private source: TimeSource) {}

  update(): void {
    this.hours = this.source.getHours();
    this.minutes = this.source.getMinutes();
    this.seconds = this.source.getSeconds();
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
