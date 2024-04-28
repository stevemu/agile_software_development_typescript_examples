import { Turnstile } from './Turnstile';
import { TurnstileController } from './TurnstileController';
import { LockedTurnstileState, UnlockedTurnstileState } from './TurnstileState';

describe('turnstile', () => {
  let controllerSpoof: TurnstileController;
  let t: Turnstile;

  beforeEach(() => {
    controllerSpoof = {
      unlock: jest.fn(),
      lock: jest.fn(),
      alarm: jest.fn(),
      thankYou: jest.fn(),
    };
    t = new Turnstile(controllerSpoof);
  });

  test('init conditions', () => {
    expect(t.state).toBeInstanceOf(LockedTurnstileState);
  });

  test('coin in locked state', () => {
    t.coin();
    expect(t.state).toBeInstanceOf(UnlockedTurnstileState);
    expect(controllerSpoof.unlock).toHaveBeenCalled();
  });

  test('coin in unlocked state', () => {
    t.setUnlocked();
    t.coin();
    expect(t.state).toBeInstanceOf(UnlockedTurnstileState);
    expect(controllerSpoof.thankYou).toHaveBeenCalledTimes(1);
  });

  test('pass in locked state', () => {
    t.pass();
    expect(t.state).toBeInstanceOf(LockedTurnstileState);
    expect(controllerSpoof.alarm).toHaveBeenCalled();
  });

  test('pass in unlocked state', () => {
    t.setUnlocked();
    t.pass();
    expect(t.state).toBeInstanceOf(LockedTurnstileState);
    expect(controllerSpoof.lock).toHaveBeenCalled();
  });
});
