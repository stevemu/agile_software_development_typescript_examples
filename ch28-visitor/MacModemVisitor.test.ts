import { ErnieModem } from './ErnieModem';
import { HayesModem } from './HayesModem';
import { MacModemConfigurator } from './MacModemConfigurator';
import { ZoomModem } from './ZoomModem';

describe('ModemVisitor', () => {
  test('should configure a Hayes modem', () => {
    const modem = new HayesModem();
    const configurator = new MacModemConfigurator();
    modem.accept(configurator);
    expect(modem.configurationString).toBe('1');
  });

  test('should configure a Zoom modem', () => {
    const modem = new ZoomModem();
    const configurator = new MacModemConfigurator();
    modem.accept(configurator);
    expect(modem.configurationValue).toBe(11);
  });

  test('should configure an Ernie modem', () => {
    const modem = new ErnieModem();
    const configurator = new MacModemConfigurator();
    modem.accept(configurator);
    expect(modem.internalPattern).toBe('Mac is good');
  });
});
