import { TurnstileController } from './TurnstileController';

export enum TurnstileState {
  LOCKED,
  UNLOCKED,
}

export enum TurnstileEvent {
  COIN,
  PASS,
}

interface Transition {
  state: TurnstileState;
  event: TurnstileEvent;
  newState: TurnstileState;
  action: () => void;
}

export class Turnstile {
  constructor(private controller: TurnstileController) {
    this.addTransition(TurnstileState.LOCKED, TurnstileEvent.COIN, TurnstileState.UNLOCKED, () => {
      this.controller.unlock();
    });
    this.addTransition(TurnstileState.LOCKED, TurnstileEvent.PASS, TurnstileState.LOCKED, () => {
      this.controller.alarm();
    });
    this.addTransition(
      TurnstileState.UNLOCKED,
      TurnstileEvent.COIN,
      TurnstileState.UNLOCKED,
      () => {
        this.controller.thankYou();
      },
    );
    this.addTransition(TurnstileState.UNLOCKED, TurnstileEvent.PASS, TurnstileState.LOCKED, () => {
      this.controller.lock();
    });
  }

  public state = TurnstileState.LOCKED;
  private transitions: Transition[] = [];

  addTransition(
    state: TurnstileState,
    event: TurnstileEvent,
    newState: TurnstileState,
    action: () => void,
  ) {
    this.transitions.push({ state, event, newState, action });
  }

  public event(event: TurnstileEvent): void {
    for (const transition of this.transitions) {
      if (transition.state === this.state && transition.event === event) {
        this.state = transition.newState;
        transition.action();
        return;
      }
    }
  }
}
