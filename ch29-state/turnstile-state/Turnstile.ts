import { TurnstileController } from './TurnstileController';
import { LockedTurnstileState, TurnstileState, UnlockedTurnstileState } from './TurnstileState';

export class Turnstile {
  private static lockedState = new LockedTurnstileState();
  private static unlockedState = new UnlockedTurnstileState();
  public state: TurnstileState = Turnstile.lockedState;

  constructor(private action: TurnstileController) {}

  public coin(): void {
    this.state.coin(this);
  }

  public pass(): void {
    this.state.pass(this);
  }

  public setLocked(): void {
    this.state = Turnstile.lockedState;
  }

  public setUnlocked(): void {
    this.state = Turnstile.unlockedState;
  }

  public isLocked(): boolean {
    return this.state instanceof LockedTurnstileState;
  }

  public isUnlocked(): boolean {
    return this.state instanceof UnlockedTurnstileState;
  }

  public thankyou(): void {
    this.action.thankYou();
  }

  public alarm(): void {
    this.action.alarm();
  }

  public lock(): void {
    this.action.lock();
  }

  public unlock(): void {
    this.action.unlock();
  }
}
