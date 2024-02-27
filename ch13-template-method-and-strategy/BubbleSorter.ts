export class BubbleSorter {
  static operations = 0;

  public static sort(array: number[]): number {
    this.operations = 0;

    if (array.length <= 1) {
      return this.operations;
    }

    for (let nextToLast = array.length - 2; nextToLast >= 0; nextToLast--) {
      for (let index = 0; index <= nextToLast; index++) {
        this.compareAndSwap(array, index);
      }
    }

    return this.operations;
  }

  private static swap(array: number[], index: number): void {
    const temp = array[index];
    array[index] = array[index + 1];
    array[index + 1] = temp;
  }

  private static compareAndSwap(array: number[], index: number): void {
    if (array[index] > array[index + 1]) {
      this.swap(array, index);
    }
    this.operations++;
  }
}

const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(BubbleSorter.sort(array)); // 55
console.log(array); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
