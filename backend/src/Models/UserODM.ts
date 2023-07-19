import { Model, Schema, model, models } from 'mongoose';
import IUser from '../Interfaces/IUser';

class UserODM<T> {
  private schema: Schema;
  private model: Model<T>;

  constructor() {
    const schema = new Schema<IUser>({
      name: { type: String, required: true },
      password: { type: String, required: true },
    });
    this.schema = schema;
    this.model = models["User"] || model("User", this.schema);
  }

  public async getLogin(user: IUser): Promise<T[] | null> {
    return this.model.find({ name: user.name, password: user.password });
  }

  public async get(id: string) {
    return this.model.find({ _id: id });
  }

  public async getByName(name: string): Promise<T[] | null> {
    return this.model.find({ name })
  }

  public async create(user: T): Promise<T> {
    return this.model.create(user);
  }
}

export default UserODM;