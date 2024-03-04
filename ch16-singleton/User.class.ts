export class User {
  constructor() {}
  private username: string = '';

  public setUsername(username: string): void {
    this.username = username;
  }

  getUsername(): string {
    return this.username;
  }
}
