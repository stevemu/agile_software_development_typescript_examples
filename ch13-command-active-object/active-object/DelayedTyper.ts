import { ActiveObjectEngine } from './ActiveObjectEngine.ts';
import { Command } from './Command.ts';
import { SleepCommand } from './SleepCommand.ts';

export class DelayedTyper implements Command {
  private static stop = false;
  private static engine: ActiveObjectEngine = new ActiveObjectEngine();

  constructor(
    private delay: number,
    private message: string,
  ) {}

  static main() {
    DelayedTyper.engine.addCommand(new DelayedTyper(100, '1'));
    DelayedTyper.engine.addCommand(new DelayedTyper(300, '3'));
    DelayedTyper.engine.addCommand(new DelayedTyper(500, '5'));
    DelayedTyper.engine.addCommand(new DelayedTyper(700, '7'));

    class StopCommand implements Command {
      execute(): void {
        DelayedTyper.stop = true;
      }
    }

    DelayedTyper.engine.addCommand(new SleepCommand(2000, DelayedTyper.engine, new StopCommand()));
    DelayedTyper.engine.run();
  }

  execute() {
    process.stdout.write(this.message);

    if (!DelayedTyper.stop) {
      this.delayAndRepeat();
    }
  }

  private delayAndRepeat(): void {
    DelayedTyper.engine.addCommand(new SleepCommand(this.delay, DelayedTyper.engine, this));
  }
}

DelayedTyper.main();
