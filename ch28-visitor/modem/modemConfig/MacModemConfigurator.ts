import { ErnieModem } from '../modem/ErnieModem';
import { HayesModem } from '../modem/HayesModem';
import { ModemVisitor } from '../modem/ModemVisitor';
import { ZoomModem } from '../modem/ZoomModem';

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
