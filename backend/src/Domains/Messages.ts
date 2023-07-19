import { Message } from "../Interfaces/IMessages";
import User from "./User";

class Messages {
    protected id: string | undefined;
    private user: string;
    private messages: Message[];

    constructor(user: User, messages: Message[]) {
        this.user = user.getId() as string;
        this.messages = [...messages];
    }

    public getId(): string | undefined {
        return this.id;
    }

    public getUser(): string {
        return this.user;
    }

    public getMessages(): Message[] {
        return this.messages;
    }

    public setMessages(message: Message): void {
        this.messages.push(message)
    }
}

export default Messages;