export interface SortHandle {
  length: number;
  setArray(arr: unknown[]): void;
  swap(index: number): void;
  outOfOrder(index: number): boolean;
}
