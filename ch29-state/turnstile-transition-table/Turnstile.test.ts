import { Turnstile, TurnstileEvent, TurnstileState } from './Turnstile';
import { TurnstileController } from './TurnstileController';

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
    expect(t.state).toBe(TurnstileState.LOCKED);
  });

  test('coin in locked state', () => {
    t.event(TurnstileEvent.COIN);
    expect(t.state).toBe(TurnstileState.UNLOCKED);
    expect(controllerSpoof.unlock).toHaveBeenCalled();
  });

  test('coin in unlocked state', () => {
    t.state = TurnstileState.UNLOCKED;
    t.event(TurnstileEvent.COIN);
    expect(t.state).toBe(TurnstileState.UNLOCKED);
    expect(controllerSpoof.thankYou).toHaveBeenCalledTimes(1);
  });

  test('pass in locked state', () => {
    t.event(TurnstileEvent.PASS);
    expect(t.state).toBe(TurnstileState.LOCKED);
    expect(controllerSpoof.alarm).toHaveBeenCalled();
  });

  test('pass in unlocked state', () => {
    t.state = TurnstileState.UNLOCKED;
    t.event(TurnstileEvent.PASS);
    expect(t.state).toBe(TurnstileState.LOCKED);
    expect(controllerSpoof.lock).toHaveBeenCalled();
  });
});
