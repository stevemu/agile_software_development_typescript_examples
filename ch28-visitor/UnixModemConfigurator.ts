import { ErnieModem } from './ErnieModem';
import { HayesModem } from './HayesModem';
import { ModemVisitor } from './ModemVisitor';
import { ZoomModem } from './ZoomModem';

export class UnixModemConfigurator implements ModemVisitor {
  public visitHayes(m: HayesModem): void {
    m.configurationString = '&s1=4&D=3';
  }

  public visitZoom(m: ZoomModem) {
    m.configurationValue = 42;
  }

  public visitErnie(m: ErnieModem) {
    m.internalPattern = 'C is too slow';
  }
}
