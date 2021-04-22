import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

const CREATED = 201;

export class UsersController {
  async create(request: Request, response: Response) {
    const userService = new UserService();

    const { email } = request.body;

    const user = await userService.create(email);

    return response.status(CREATED).json(user);
  }
}
