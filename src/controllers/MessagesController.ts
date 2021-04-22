import { Request, Response } from 'express';
import { MessageService } from '../services/MessageService';

const CREATED = 201;

export class MessagesController {
  async create(request: Request, response: Response) {
    const messageService = new MessageService();

    const message = await messageService.create(request.body);

    return response.status(CREATED).json(message);
  }

  async getByUser(request: Request, response: Response) {
    const messageService = new MessageService();

    const { user_id } = request.params;

    const messages = await messageService.getByUser(user_id);

    if (messages.length === 0) {
      return response.status(204).send();
    }

    return response.json(messages);
  }
}
