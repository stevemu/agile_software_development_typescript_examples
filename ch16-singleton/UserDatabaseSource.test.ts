import { User } from './User.class';
import { UserDatabaseSource } from './UserDatabaseSource';

describe('UserDatabaseSource', () => {
  it('should throw an error when writing a user with no username', () => {
    const userDatabase = new UserDatabaseSource();
    const user = new User();
    expect(() => userDatabase.writeUser(user)).toThrow('Username is required');
  });
});
