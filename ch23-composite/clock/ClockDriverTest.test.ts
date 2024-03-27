import { ClockDriver } from './ClockDriver';
import { MockTimeSink } from './MockTimeSink';
import { MockTimeSource } from './MockTimeSource';

describe('ClockDriverTest', () => {
  it('test time change', () => {
    const source = new MockTimeSource();
    const sink = new MockTimeSink();
    const driver = new ClockDriver(source, sink);

    source.setTime(3, 4, 5);
    expect(sink.getHours()).toBe(3);
    expect(sink.getMinutes()).toBe(4);
    expect(sink.getSeconds()).toBe(5);

    source.setTime(7, 8, 9);
    expect(sink.getHours()).toBe(7);
    expect(sink.getMinutes()).toBe(8);
    expect(sink.getSeconds()).toBe(9);
  });
});
