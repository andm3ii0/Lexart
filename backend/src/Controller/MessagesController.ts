import { NextFunction, Request, Response } from 'express';
import IMessages from '../Interfaces/IMessages';
import MessageService from '../Services/MessagesService';

class MessagesController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MessageService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MessageService();
  }

  async get() {
    const user: string = this.req.params.user;
    try {
      const messages = await this.service.get(user)
      return this.res.status(200).json({ messages: messages?.getMessages() })
    } catch (error) {
      this.next(error as Error)
    }
  }

  async create() {
    const userMessages: IMessages = {
      user: this.req.body.user.id,
      messages: this.req.body.messages
    }
    console.log(userMessages);

    try {
      await this.service.create(userMessages)
      return this.res.status(201).end()
    } catch (err) {
      this.next(err as Error)
    }
  }

}

export default MessagesController;