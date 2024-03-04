import { User } from './User.class';
import { UserDatabase } from './UserDatabase.interface';

export class UserDatabaseSource implements UserDatabase {
  private static instance: UserDatabaseSource = new UserDatabaseSource();

  public getInstance(): UserDatabaseSource {
    return UserDatabaseSource.instance;
  }

  writeUser(user: User): void {
    if (user.getUsername() === '') {
      throw new Error('Username is required');
    }
    throw new Error('Method not implemented.');
  }

  readUser(username: string): User | undefined {
    throw new Error('Method not implemented.');
  }
}
