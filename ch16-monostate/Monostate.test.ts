import { Monostate } from './Monostate';

describe('Monostate', () => {
  it('should create multiple instances', () => {
    const m1 = new Monostate();
    m1.x = 10;
    const m2 = new Monostate();
    expect(m2.x).toBe(10);
  });
});
