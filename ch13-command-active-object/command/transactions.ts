export class Employee {
  constructor(
    private name: string,
    private address: string,
    private payClassification: PayClassification,
  ) {}
}

export interface PayClassification {
  calculatePay(): number;
}

class SalesReceipt {
  constructor(
    private date: Date,
    private amount: number,
  ) {}
}

export class CommissionedClassification implements PayClassification {
  constructor(
    private basePay: number,
    private commissionRate: number,
    private salesReceipts: SalesReceipt[],
  ) {}

  calculatePay(): number {
    return 0;
  }
}

class TimeCard {
  constructor(
    private date: Date,
    private hours: number,
  ) {}
}

export class HourlyClassification implements PayClassification {
  constructor(
    private hourlyRate: number,
    private timeCards: TimeCard[],
  ) {}

  calculatePay(): number {
    return 0;
  }
}

export class SalariedClassification implements PayClassification {
  constructor(private monthlyPay: number) {}

  calculatePay(): number {
    return 0;
  }
}

interface Transaction {
  validate(): void;
  execute(): void;
}

class Db implements AddEmployeeTransactionDb {
  private static instance: Db = new Db();

  public getInstance(): Db {
    return Db.instance;
  }

  saveEmployee(employee: Employee): void {
    console.log('Employee saved');
  }
}

interface AddEmployeeTransactionDb {
  saveEmployee(employee: Employee): void;
}

export class AddEmployeeTransaction implements Transaction {
  constructor(
    private name: string,
    private address: string,
    private payClassification: PayClassification,
    private db: AddEmployeeTransactionDb,
  ) {}

  validate(): void {
    if (this.name === '') {
      throw new Error('Name is required');
    }
  }

  execute(): void {
    this.validate();
    const employee = new Employee(this.name, this.address, this.payClassification);
    this.db.saveEmployee(employee);
  }
}

const addEmployeeTransaction = new AddEmployeeTransaction(
  'Bob',
  '123 Main St',
  new SalariedClassification(1000),
  new Db().getInstance(),
);

addEmployeeTransaction.execute();
