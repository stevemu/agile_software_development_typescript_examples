import { Turnstile } from './Turnstile';

export interface TurnstileState {
  coin(t: Turnstile): void;
  pass(t: Turnstile): void;
}

export class LockedTurnstileState implements TurnstileState {
  coin(t: Turnstile): void {
    t.setUnlocked();
    t.unlock();
  }

  pass(t: Turnstile): void {
    t.alarm();
  }
}

export class UnlockedTurnstileState implements TurnstileState {
  coin(t: Turnstile): void {
    t.thankyou();
  }

  pass(t: Turnstile): void {
    t.setLocked();
    t.lock();
  }
}
