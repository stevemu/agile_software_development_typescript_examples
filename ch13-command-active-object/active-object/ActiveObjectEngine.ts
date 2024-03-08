import { Command } from './Command';

export class ActiveObjectEngine {
  private commandQueue: Command[] = [];

  public addCommand(command: Command) {
    this.commandQueue.push(command);
  }

  public run() {
    while (this.commandQueue.length > 0) {
      const command = this.commandQueue.shift();
      command!.execute();
    }
  }
}
