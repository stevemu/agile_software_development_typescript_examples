import { Singleton } from './Singleton';

describe('Singleton', () => {
  it('should return the same instance', () => {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();
    expect(instance1).toBe(instance2);
  });
});
