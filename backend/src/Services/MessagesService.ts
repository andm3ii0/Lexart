import Messages from '../Domains/Messages';
import User from '../Domains/User';
import IMessages, { Message } from '../Interfaces/IMessages';
import IUser from '../Interfaces/IUser';
import MessagesODM from '../Models/MessagesODM';
import UserODM from '../Models/UserODM';

class MessageService {
    private createMessagesDomain(user: User | null, messages: Message[] | null): Messages | null {
        if (user && messages) {
            return new Messages(user, messages);
        }
        return null;
    }

    public async get(user: string) {
        const messagesDomain: MessagesODM<IMessages> = new MessagesODM<IMessages>()
        const userDomain = new UserODM<IUser>();
        const userData: IUser[] | null = await userDomain.getByName(user)
        if (!userData) {
            throw new Error("Usuario não encontrado!")
        }

        const userObj = new User(userData[0])
        let messages = await messagesDomain.get(userObj.getId() as string);

        if (messages.length == 0) {
            await messagesDomain.create(userObj)
            messages = await messagesDomain.get(userObj.getId() as string);
        }
        
        return this.createMessagesDomain(userObj, messages[0].messages)
    }

    public async create(input: IMessages) {
        const userDomain = new UserODM<IUser>();
        const messagesDomain: MessagesODM<IMessages> = new MessagesODM<IMessages>()

        const user: IUser[] = await userDomain.get(input.user)
        if (!user) {
            throw new Error("Usuario não encontrado!")
        }

        const messages = await messagesDomain.get(input.user)

        const userObj = new User(user[0])

        if (messages.length == 0) {
            await messagesDomain.create(userObj)
        }
        const promisses: Promise<IMessages | null>[] = input.messages.map(async (message) => messagesDomain.update(input.user, message))

        await Promise.all(promisses);
        return
    }
}

export default MessageService
