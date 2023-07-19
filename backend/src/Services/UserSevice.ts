import User from '../Domains/User';
import IUser from '../Interfaces/IUser';
import UserODM from '../Models/UserODM';

class UserService {
  private createUserDomain(user: IUser | null): User | null {
    if (user) {
      return new User(user);
    }
    return null;
  }

  async getLogin(userData: IUser) {
    const userODM = new UserODM<IUser>()
    const userFromServer = await userODM.getLogin(userData)

    if (!userFromServer || userFromServer?.length === 0) {
      throw new Error("Incorrect password")
    }

    return this.createUserDomain(userFromServer[0])
  }

  async get(user: string) {
    const userODM = new UserODM<IUser>()
    const userFromServer = await userODM.getByName(user)
    if (!userFromServer || userFromServer?.length === 0) {
      throw new Error("User not found")
    }

    return this.createUserDomain(userFromServer[0])
  }

  async create(input: IUser): Promise<User | null> {
    const userODM = new UserODM<IUser>()
    const newUser = await userODM.create(
      input
    )
    if (!newUser) {
      throw new Error('Some fields are missing');
    }
    return this.createUserDomain(newUser)
  }
}

export default UserService