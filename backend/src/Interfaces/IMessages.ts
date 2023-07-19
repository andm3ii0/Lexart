export type Message = {
    isUser: boolean;
    text: string;
    date: Date;
};

interface IMessages {
    id?: string;
    user: string
    messages: Message[];
}

export default IMessages;