import { ErnieModem } from './ErnieModem';
import { HayesModem } from './HayesModem';
import { UnixModemConfigurator } from './UnixModemConfigurator';
import { ZoomModem } from './ZoomModem';

describe('ModemVisitor', () => {
  test('should configure a Hayes modem', () => {
    const modem = new HayesModem();
    const configurator = new UnixModemConfigurator();
    modem.accept(configurator);
    expect(modem.configurationString).toBe('&s1=4&D=3');
  });

  test('should configure a Zoom modem', () => {
    const modem = new ZoomModem();
    const configurator = new UnixModemConfigurator();
    modem.accept(configurator);
    expect(modem.configurationValue).toBe(42);
  });

  test('should configure an Ernie modem', () => {
    const modem = new ErnieModem();
    const configurator = new UnixModemConfigurator();
    modem.accept(configurator);
    expect(modem.internalPattern).toBe('C is too slow');
  });
});
