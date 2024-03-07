import { ConsoleUiCharWriter } from './ConsoleUi';

export class CharWriter implements ConsoleUiCharWriter {
  clearConsole(): void {
    process.stdout.write('\x1b[2J');
  }

  gotoXY(x: number, y: number): void {
    process.stdout.write(`\x1b[${y};${x}H`);
  }

  write(char: string, color: string): void {
    process.stdout.write(wrapWithColorEscapeCodes(color, char));
  }
}

function wrapWithColorEscapeCodes(color: string, char: string) {
  if (color === 'red') {
    return `\x1b[31m${char}\x1b[0m`;
  } else if (color === 'green') {
    return `\x1b[32m${char}\x1b[0m`;
  }
  return char;
}
