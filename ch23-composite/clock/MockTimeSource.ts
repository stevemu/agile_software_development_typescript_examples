import { ClockObserver } from './ClockObserver';
import { TimeSource } from './TimeSource';

export class MockTimeSource implements TimeSource {
  private observer!: ClockObserver;

  setObserver(observer: ClockObserver): void {
    this.observer = observer;
  }

  setTime(hours: number, minutes: number, seconds: number): void {
    this.observer.update(hours, minutes, seconds);
  }
}
