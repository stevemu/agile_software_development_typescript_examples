import { TurnstileController } from './TurnstileController';

export enum TurnstileState {
  LOCKED,
  UNLOCKED,
}

export enum TurnstileEvent {
  COIN,
  PASS,
}

export class Turnstile {
  constructor(private controller: TurnstileController) {}

  public state = TurnstileState.LOCKED;

  public event(event: TurnstileEvent): void {
    switch (this.state) {
      case TurnstileState.LOCKED:
        if (event === TurnstileEvent.COIN) {
          this.state = TurnstileState.UNLOCKED;
          this.controller.unlock();
        } else {
          this.controller.alarm();
        }
        break;
      case TurnstileState.UNLOCKED:
        if (event === TurnstileEvent.PASS) {
          this.state = TurnstileState.LOCKED;
          this.controller.lock();
        } else {
          this.controller.thankYou();
        }
        break;
    }
  }
}
