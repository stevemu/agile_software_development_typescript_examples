import { Db } from './Db';
import { NullEmployee } from './Employee';

describe('db', () => {
  it('should return null if no user found', () => {
    const user = Db.getEmployee('unknown');
    expect(user.isTimeToPay()).toBeFalsy();
    expect(user).toBeInstanceOf(NullEmployee);
  });
});
