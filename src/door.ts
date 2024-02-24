interface TimerClient {
  timeout(id: number): void;
}

class Timer {
  constructor() {}

  register(timeOut: number, timeOutId: number, timerClient: TimerClient) {
    // Set a timeout to call the timerClient.timeout method after timeOut milliseconds
    setTimeout(() => {
      timerClient.timeout(timeOutId);
    }, timeOut);
  }
}

interface Door {
  lock(): void;
  unlock(): void;
  isDoorOpen(): boolean;
}

class TimedDoor implements Door {
  private isOpen = false;

  lock() {
    this.isOpen = false;
  }

  unlock() {
    this.isOpen = true;
  }

  isDoorOpen() {
    return this.isOpen;
  }

  doorTimedOut(id: number) {
    console.log(`Timer ${id} has expired`);
  }
}

class DoorTimerAdapter implements TimerClient {
  constructor(private timedDoor: TimedDoor) {}

  timeout(id: number) {
    this.timedDoor.doorTimedOut(id);
  }
}

const timer = new Timer();
const timedDoor = new TimedDoor();
const doorTimerAdapter = new DoorTimerAdapter(timedDoor);
timer.register(1000, 1, doorTimerAdapter);
timer.register(1000, 2, doorTimerAdapter);
