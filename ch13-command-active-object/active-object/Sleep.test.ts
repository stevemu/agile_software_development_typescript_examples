import { ActiveObjectEngine } from './ActiveObjectEngine';
import { Command } from './Command';
import { SleepCommand } from './SleepCommand';

class Wakeup implements Command {
  async execute(): Promise<void> {
    console.log('Wakeup');
  }
}

describe('Sleep', () => {
  it('should sleep for 1 second', async () => {
    const wakeup = new Wakeup();
    const e = new ActiveObjectEngine();
    const sleepCommand = new SleepCommand(1000, e, wakeup);
    e.addCommand(sleepCommand);
    const start = Date.now();
    e.run();
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(1000);
    expect(end - start).toBeLessThan(1100);
  });
});
