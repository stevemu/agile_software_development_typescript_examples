import { ErnieModem } from './ErnieModem';
import { HayesModem } from './HayesModem';
import { ZoomModem } from './ZoomModem';

export interface ModemVisitor {
  visitHayes(hayes: HayesModem): void;
  visitZoom(Zoom: ZoomModem): void;
  visitErnie(ernie: ErnieModem): void;
}
