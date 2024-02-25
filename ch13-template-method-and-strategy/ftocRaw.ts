import { Reader } from './Reader';

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
  process.exit(0);
}

main();
