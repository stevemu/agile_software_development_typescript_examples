import { logWithTimeElapsed } from './utils';

export class Timer {
  constructor() {}

  register(timeOut: number, timeOutId: number, timerClient: TimerClient) {
    // Set a timeout to call the timerClient.timeout method after timeOut milliseconds
    setTimeout(() => {
      timerClient.timeOut(timeOutId);
    }, timeOut);
  }
}

interface TimerClient {
  timeOut(id: number): void;
}

const timer = new Timer();

class TimedDoor implements Door, TimerClient {
  private isOpen = false;
  private timerId = 0;

  lock() {
    this.isOpen = false;
    logWithTimeElapsed('Door locked');
  }

  unlock() {
    this.isOpen = true;
    timer.register(2000, this.timerId++, this);
    logWithTimeElapsed('Door unlocked');
  }

  isDoorOpen() {
    return this.isOpen;
  }

  timeOut(timeOutId: number) {
    if (timeOutId === this.timerId - 1) {
      logWithTimeElapsed(`locking door due to timeout id ${timeOutId}`);
      this.lock();
      this.timerId = 0;
    }
  }
}

interface Door {
  lock(): void;
  unlock(): void;
  isDoorOpen(): boolean;
}

const timedDoor: Door = new TimedDoor();
timedDoor.unlock();

setTimeout(() => {
  timedDoor.lock();
  timedDoor.unlock();
}, 1000);
