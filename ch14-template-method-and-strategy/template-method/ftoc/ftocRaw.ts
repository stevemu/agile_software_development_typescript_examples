import { Reader } from '../../Reader.ts';

async function main() {
  const reader = new Reader();
  let done = false;

  while (!done) {
    const fahrString = await reader.readLine('enter fahrenheit: ');
    if (!fahrString) {
      done = true;
    } else {
      const fahr = parseFloat(fahrString);
      const celsius = ((fahr - 32) * 5) / 9;
      console.log(`F=${fahr}, C=${celsius.toFixed(2)}`);
    }
  }

  console.log('finished');
  reader.close();
  process.exit(0);
}

main();
