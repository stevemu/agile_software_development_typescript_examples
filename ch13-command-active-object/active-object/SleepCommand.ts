import { ActiveObjectEngine } from './ActiveObjectEngine';
import { Command } from './Command';

export class SleepCommand implements Command {
  private started = false;
  private startTime = 0;

  constructor(
    private sleepTime: number,
    private engine: ActiveObjectEngine,
    private wakeupCommand: Command,
  ) {}

  execute(): void {
    const currentTime = Date.now();
    if (!this.started) {
      this.started = true;
      this.startTime = currentTime;
      this.engine.addCommand(this);
    } else if (currentTime - this.startTime < this.sleepTime) {
      this.engine.addCommand(this);
    } else {
      this.engine.addCommand(this.wakeupCommand);
    }
  }
}
