import { HayesModem } from './HayesModem';
import { LoudDialModem } from './LoudDialModem';

describe('Decorator Pattern', () => {
  it('create modem', () => {
    const modem = new HayesModem();
    expect(modem.getPhoneNumber()).toBe('');
    expect(modem.getVolume()).toBe(0);
    modem.dial('123456789');
    expect(modem.getVolume()).toBe(0);
    expect(modem.getPhoneNumber()).toBe('123456789');
  });

  it('create loud dial modem', () => {
    const modem = new HayesModem();
    const ldm = new LoudDialModem(modem);
    expect(ldm.getPhoneNumber()).toBe('');
    expect(ldm.getVolume()).toBe(0);

    ldm.dial('123456789');
    expect(ldm.getVolume()).toBe(11);
    expect(ldm.getPhoneNumber()).toBe('123456789');
  });
});
