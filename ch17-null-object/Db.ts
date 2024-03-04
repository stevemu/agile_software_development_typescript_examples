import { Employee, NullEmployee } from './Employee';

export class Db {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getEmployee(name: string): Employee {
    return new NullEmployee();
  }
}
