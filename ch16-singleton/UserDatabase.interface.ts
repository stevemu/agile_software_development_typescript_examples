import { User } from './User.class';

export interface UserDatabase {
  writeUser(user: User): void;
  readUser(username: string): User | undefined;
}
