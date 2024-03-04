import { Turnstile } from './Turnstile';

describe('Turnstile', () => {
  beforeEach(() => {
    const t = new Turnstile();
    t.reset();
  });

  test('reset', () => {
    const t1 = new Turnstile();
    t1.locked = false;
    t1.alarm = true;
    t1.reset();
    expect(t1.locked).toBe(true);
    expect(t1.alarm).toBe(false);
  });

  test('initial state', () => {
    const t = new Turnstile();
    expect(t.locked).toBe(true);
    expect(t.alarm).toBe(false);
  });

  test('coin', () => {
    const t = new Turnstile();
    t.coin();
    const t1 = new Turnstile();
    expect(t1.locked).toBe(false);
    expect(t1.alarm).toBe(false);
    expect(t1.coins).toBe(1);
  });

  test('coin and pass', () => {
    const t = new Turnstile();
    t.coin();
    t.pass();
    const t1 = new Turnstile();
    expect(t1.locked).toBe(true);
    expect(t1.alarm).toBe(false);
    expect(t1.coins).toBe(1);
  });

  test('two coins', () => {
    const t = new Turnstile();
    t.coin();
    t.coin();
    const t1 = new Turnstile();
    expect(t1.locked).toBe(false);
    expect(t1.alarm).toBe(false);
    expect(t1.coins).toBe(1);
    expect(t1.refunds).toBe(1);
  });

  test('pass', () => {
    const t = new Turnstile();
    t.pass();
    const t1 = new Turnstile();
    expect(t1.locked).toBe(true);
    expect(t1.alarm).toBe(true);
  });

  test('cancel alarm', () => {
    const t = new Turnstile();
    t.pass();
    t.coin();

    const t1 = new Turnstile();
    expect(t1.locked).toBe(false);
    expect(t1.alarm).toBe(false);
  });

  test('two operations', () => {
    const t = new Turnstile();
    t.coin();
    t.pass();
    t.coin();

    expect(t.locked).toBe(false);
    expect(t.alarm).toBe(false);
    expect(t.coins).toBe(2);

    t.pass();

    expect(t.locked).toBe(true);
  });
});
