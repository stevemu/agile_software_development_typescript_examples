import { NumberSortHandle } from './NumberSortHandle.ts';
import { SortHandle } from './SortHandle.ts';

export class BubbleSorter {
  constructor(private sortHandle: SortHandle) {}

  sort(arr: unknown[]): number {
    this.sortHandle.setArray(arr);
    const length = this.sortHandle.length;
    let operations = 0;

    if (length <= 1) {
      return operations;
    }

    for (let nextToLast = length - 2; nextToLast >= 0; nextToLast--) {
      for (let index = 0; index <= nextToLast; index++) {
        if (this.sortHandle.outOfOrder(index)) {
          this.sortHandle.swap(index);
        }
        operations++;
      }
    }

    return operations;
  }
}

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sorter = new BubbleSorter(new NumberSortHandle());
sorter.sort(arr);
console.log(arr);
