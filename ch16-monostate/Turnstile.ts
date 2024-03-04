export class Turnstile {
  private static locked = true;
  private static alarm = false;
  private static coins = 0;
  private static refunds = 0;
  protected static state: Turnstile;
  protected static lockedState: Turnstile;
  protected static unlockedState: Turnstile;

  constructor(createState: boolean = true) {
    if (createState) {
      Turnstile.state = new LockedTurnstile();
      Turnstile.lockedState = new LockedTurnstile();
      Turnstile.unlockedState = new UnlockedTurnstile();
    }
  }

  reset() {
    Turnstile.state = Turnstile.lockedState;
    Turnstile.locked = true;
    Turnstile.alarm = false;
    Turnstile.coins = 0;
    Turnstile.refunds = 0;
  }

  get locked() {
    return Turnstile.locked;
  }

  set locked(shouldLock: boolean) {
    Turnstile.locked = shouldLock;
  }

  get alarm() {
    return Turnstile.alarm;
  }

  set alarm(shouldSound: boolean) {
    Turnstile.alarm = shouldSound;
  }

  coin() {
    Turnstile.state.coin();
  }

  pass() {
    Turnstile.state.pass();
  }

  deposit() {
    Turnstile.coins++;
  }

  get coins() {
    return Turnstile.coins;
  }

  get refunds() {
    return Turnstile.refunds;
  }

  refund() {
    Turnstile.refunds++;
  }
}

export class UnlockedTurnstile extends Turnstile {
  constructor() {
    super(false);
  }

  coin() {
    this.refund();
  }

  pass() {
    this.locked = true;
    Turnstile.state = Turnstile.lockedState;
  }
}

export class LockedTurnstile extends Turnstile {
  constructor() {
    super(false);
  }

  coin() {
    Turnstile.state = Turnstile.unlockedState;
    this.locked = false;
    this.alarm = false;
    this.deposit();
  }

  pass() {
    this.alarm = true;
  }
}
