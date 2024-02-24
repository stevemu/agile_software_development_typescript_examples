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

class DoorTimerAdapter implements TimerClient {
  constructor(private timedDoor: TimedDoor) {}

  timeOut(id: number) {
    this.timedDoor.doorTimedOut(id);
  }
}

const timer = new Timer();

class TimedDoor implements Door {
  private isOpen = false;
  private timerId = 0;

  lock() {
    this.isOpen = false;
    logWithTimeElapsed('Door locked');
  }

  unlock() {
    this.isOpen = true;

    const doorTimerAdapter = new DoorTimerAdapter(this);
    timer.register(2000, this.timerId++, doorTimerAdapter);
  }

  isDoorOpen() {
    return this.isOpen;
  }

  doorTimedOut(timeOutId: number) {
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

const timedDoor = new TimedDoor();
timedDoor.unlock();
setTimeout(() => {
  timedDoor.lock();
  timedDoor.unlock();
}, 1000);
