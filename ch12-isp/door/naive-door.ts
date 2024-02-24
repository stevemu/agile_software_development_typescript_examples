import { logWithTimeElapsed } from './utils';

export class Timer {
  constructor() {}

  register(timeOut: number, timerClient: TimerClient) {
    // Set a timeout to call the timerClient.timeout method after timeOut milliseconds
    setTimeout(() => {
      timerClient.timeout();
    }, timeOut);
  }
}

interface TimerClient {
  timeout(): void;
}

export abstract class Door implements TimerClient {
  abstract lock(): void;
  abstract unlock(): void;
  abstract isDoorOpen(): boolean;
  timeout(): void {
    throw new Error('Not implemented');
  }
}

const timer = new Timer();

class TimedDoor extends Door {
  private isOpen = false;

  lock() {
    this.isOpen = false;
    logWithTimeElapsed('Door locked');
  }

  unlock() {
    this.isOpen = true;
    timer.register(2000, this);
  }

  isDoorOpen() {
    return this.isOpen;
  }

  timeout() {
    logWithTimeElapsed(`locking door due to timeout`);
    this.lock();
  }
}

export class WoodenDoor extends Door {
  lock() {
    logWithTimeElapsed('Wooden door locked');
  }

  unlock() {
    logWithTimeElapsed('Wooden door unlocked');
  }

  isDoorOpen() {
    return true;
  }
}

const timedDoor = new TimedDoor();
timedDoor.unlock();
