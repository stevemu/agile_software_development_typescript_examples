export interface Employee {
  isTimeToPay(): boolean;
  pay(): void;
}

export class NullEmployee implements Employee {
  isTimeToPay(): boolean {
    return false;
  }

  pay(): void {
    // Do nothing
  }
}
