import IUser from "../Interfaces/IUser";

class User {
  protected id: string | undefined;
  private name: string;
  private password: string;

  constructor(user: IUser) {
    this.id = user.id;
    this.name = user.name;
    this.password = user.password;
  }

  public getId(): string | undefined {
    return this.id;
  }

  public getname(): string {
    return this.name;
  }

  public getPassword(): string {
    return this.password;
  }
}

export default User;