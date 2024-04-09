import { MockTimeSink } from './MockTimeSink';
import { MockTimeSource } from './MockTimeSource';

describe('ClockDriverTest', () => {
  let source: MockTimeSource;
  let sink: MockTimeSink;

  beforeEach(() => {
    source = new MockTimeSource();
    sink = new MockTimeSink(source);
    source.registerObserver(sink);
  });

  it('test time change', () => {
    source.setTime(3, 4, 5);
    assertSinkEquals(sink, 3, 4, 5);

    source.setTime(7, 8, 9);
    assertSinkEquals(sink, 7, 8, 9);
  });

  it('test multiple observers', () => {
    const sink2 = new MockTimeSink(source);
    source.registerObserver(sink2);

    source.setTime(12, 13, 14);
    assertSinkEquals(sink, 12, 13, 14);
    assertSinkEquals(sink2, 12, 13, 14);
  });
});

const assertSinkEquals = (sink: MockTimeSink, hours: number, minutes: number, seconds: number) => {
  expect(sink.getHours()).toBe(hours);
  expect(sink.getMinutes()).toBe(minutes);
  expect(sink.getSeconds()).toBe(seconds);
};
