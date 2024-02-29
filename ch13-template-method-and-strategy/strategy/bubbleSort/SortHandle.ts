export interface SortHandle {
  length: number;
  setArray(arr: number[]): void;
  swap(index: number): void;
  outOfOrder(index: number): boolean;
}
