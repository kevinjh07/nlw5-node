import { Request, Response } from 'express';
import { SettingsService } from '../services/SettingsService';

const CREATED = 201;
const UNPROCESSABLE_ENTITY = 422;

export class SettingsController {
  async create(request: Request, response: Response) {
    const settingsService = new SettingsService();

    const { chat, username } = request.body;

    try {
      const settings = await settingsService.create(chat, username);
      return response.status(CREATED).json(settings);
    } catch (error) {
      return response.status(UNPROCESSABLE_ENTITY).json({ message: error.message });
    }
  }
}
