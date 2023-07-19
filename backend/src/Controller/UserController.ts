import { NextFunction, Request, Response } from 'express';
import IUser from '../Interfaces/IUser';
import UserService from '../Services/UserSevice';

class UserController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: UserService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new UserService();
  }

  async login() {
    const userData: IUser = {
      name: this.req.body.name,
      password: this.req.body.password
    };

    console.log(userData);


    try {
      const user = await this.service.getLogin(userData);
      return this.res.status(200).json({ id: user?.getId(), name: user?.getname() })
    } catch {
      return this.res.status(400).json({ message: "Incorrect password" })
    }
  }

  async get() {
    const user: string = this.req.params.user
    try {
      const userFromServer = await this.service.get(user)
      return this.res.status(200).json(userFromServer)
    } catch (error) {
      return this.res.status(404).json({ message: "User not found" })
    }
  }

  async create() {
    const user: IUser = {
      name: this.req.body.name,
      password: this.req.body.password
    }
    try {
      const newUser = await this.service.create(user)
      return this.res.status(201).json({ id: newUser?.getId(), name: newUser?.getname() })
    } catch (err) {
      this.next(err as Error)
    }
  }

}

export default UserController;