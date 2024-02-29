import { Reader } from '../../Reader';
import { Application } from './Application';
import { ApplicationRunner } from './ApplicationRunner';

export class FtoCStrategy implements Application {
  private reader!: Reader;
  private isDone = false;

  init(): void {
    this.reader = new Reader();
  }

  async idle(): Promise<void> {
    const fahrString = await this.reader.readLine('enter fahrenheit: ');
    if (!fahrString) {
      this.isDone = true;
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

  done(): boolean {
    return this.isDone;
  }
}

const app = new ApplicationRunner();
app.run(new FtoCStrategy());
