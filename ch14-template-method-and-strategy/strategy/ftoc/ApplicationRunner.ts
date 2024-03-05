import { Application } from './Application.js';

export class ApplicationRunner {
  async run(application: Application) {
    application.init();
    while (!application.done()) {
      await application.idle();
    }
    application.cleanup();
  }
}
