export abstract class BubbleSorter {
  private operations = 0;
  length = 0;

  doSort() {
    if (this.length <= 1) {
      return this.operations;
    }

    for (let nextToLast = this.length - 2; nextToLast >= 0; nextToLast--) {
      for (let index = 0; index <= nextToLast; index++) {
        if (this.outOfOrder(index)) {
          this.swap(index);
        }
        this.operations++;
      }
    }

    return this.operations;
  }

  abstract swap(index: number): void;
  abstract outOfOrder(index: number): boolean;
}

export class NumberBubbleSorter extends BubbleSorter {
  private array: number[] = [];

  sort(arr: number[]): number {
    this.array = arr;
    this.length = this.array.length;
    return this.doSort();
  }

  swap(index: number): void {
    const temp = this.array[index];
    this.array[index] = this.array[index + 1];
    this.array[index + 1] = temp;
  }

  outOfOrder(index: number): boolean {
    return this.array[index] > this.array[index + 1];
  }
}

export class StringBubbleSorter extends BubbleSorter {
  private array: string[] = [];

  sort(arr: string[]): number {
    this.array = arr;
    this.length = this.array.length;
    return this.doSort();
  }

  swap(index: number): void {
    const temp = this.array[index];
    this.array[index] = this.array[index + 1];
    this.array[index + 1] = temp;
  }

  outOfOrder(index: number): boolean {
    return this.array[index] > this.array[index + 1];
  }
}

const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sorter = new NumberBubbleSorter();
console.log(sorter.sort(array)); // 55
console.log(array); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

const stringArray = ['long-word', 'super-long-word', 'a', 'b', 'c', 'd', 'e', 'z'];
const stringSorter = new StringBubbleSorter();
console.log(stringSorter.sort(stringArray)); // 21
console.log(stringArray);
