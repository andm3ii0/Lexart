import { Model, Schema, model, models } from 'mongoose';
import IMessages, { Message } from '../Interfaces/IMessages';
import User from '../Domains/User';

class MessagesODM<T> {
    private schema: Schema;
    private model: Model<T>;

    constructor() {
        const messageSchema = new Schema<Message>({
            isUser: { type: Boolean, required: true },
            text: { type: String, required: true },
            date: { type: Date, required: true },
        })

        const schema = new Schema<IMessages>({
            user: { type: String, required: true },
            messages: { type: [messageSchema], required: true },
        });

        this.schema = schema;
        this.model = models["Messages"] || model("Messages", this.schema);
    }

    public async get(id: string): Promise<T[]> {
        return this.model.find({ id: id });
    }

    public async create(user: User): Promise<T> {
        return this.model.create({
            user: user.getId(),
            messages: [],
        });
    }

    public async update(id: string, message: Message): Promise<T | null> {
        const options = { new: true };
        return this.model.findOneAndUpdate({ user: id }, { $push: { messages: message } }, options);
    }
}

export default MessagesODM;
