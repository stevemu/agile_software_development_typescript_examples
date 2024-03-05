export interface Command {
  do(): void;
}

export class Relay {
  on(): void {
    console.log('Relay On');
  }

  off(): void {
    console.log('Relay Off');
  }
}

export class RelayOnCommand implements Command {
  constructor(private receiver: Relay) {}

  do(): void {
    this.receiver.on();
  }
}

class Clutch {
  on(): void {
    console.log('Cluch On');
  }

  off(): void {
    console.log('Cluch Off');
  }
}

export class ClutchOnCommand implements Command {
  constructor(private receiver: Clutch) {}

  do(): void {
    this.receiver.on();
  }
}

export class ClutchOffCommand implements Command {
  constructor(private receiver: Clutch) {}

  do(): void {
    this.receiver.off();
  }
}

export class Sensor {
  private command: Command;

  constructor(command: Command) {
    this.command = command;
  }

  public paperReachedPoint1(): void {
    this.command.do();
  }
}

const cluch = new Clutch();
const cluchOnCommand = new ClutchOnCommand(cluch);
const sensor = new Sensor(cluchOnCommand);
sensor.paperReachedPoint1();
