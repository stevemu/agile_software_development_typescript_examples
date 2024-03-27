import { ClockObserver } from './ClockObserver';
import { TimeSink } from './TimeSink';
import { TimeSource } from './TimeSource';

export class ClockDriver implements ClockObserver {
  constructor(
    private source: TimeSource,
    private sink: TimeSink,
  ) {
    source.setObserver(this);
  }

  update(hours: number, minutes: number, seconds: number): void {
    this.sink.setTime(hours, minutes, seconds);
  }
}
