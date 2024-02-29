import { SortHandle } from './SortHandle.ts';

export class NumberSortHandle implements SortHandle {
  private array: number[] = [];

  setArray(arr: number[]): void {
    this.array = arr;
  }

  get length(): number {
    return this.array.length;
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
