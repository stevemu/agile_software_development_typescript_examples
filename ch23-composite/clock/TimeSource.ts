import { ClockObserver } from './ClockObserver';

export interface TimeSource {
  setObserver(driver: ClockObserver): void;
}
