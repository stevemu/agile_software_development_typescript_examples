import { ErnieModem } from './ErnieModem';
import { HayesModem } from './HayesModem';
import { ModemVisitor } from './ModemVisitor';
import { ZoomModem } from './ZoomModem';

export class MacModemConfigurator implements ModemVisitor {
  public visitHayes(m: HayesModem): void {
    m.configurationString = '1';
  }

  public visitZoom(m: ZoomModem) {
    m.configurationValue = 11;
  }

  public visitErnie(m: ErnieModem) {
    m.internalPattern = 'Mac is good';
  }
}
