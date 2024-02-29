import { Reader } from '../../Reader';

export abstract class Application {
  private isDone = false;
  abstract init(): void;
  abstract idle(): Promise<void>;
  abstract cleanup(): void;

  setDone(done: boolean) {
    this.isDone = done;
  }

  async run() {
    this.init();
    while (!this.isDone) {
      await this.idle();
    }
    this.cleanup();
  }
}

class FtocTemplateMethod extends Application {
  private reader!: Reader;

  init(): void {
    this.reader = new Reader();
  }

  async idle(): Promise<void> {
    const fahrString = await this.reader.readLine('enter fahrenheit: ');
    if (!fahrString) {
      this.setDone(true);
    } else {
      const fahr = parseFloat(fahrString);
      const celsius = ((fahr - 32) * 5) / 9;
      console.log(`F=${fahr}, C=${celsius.toFixed(2)}`);
    }
  }

  cleanup(): void {
    this.reader.close();
    process.exit(0);
  }
}

const ftocTemplateMethod = new FtocTemplateMethod();
ftocTemplateMethod.run();
