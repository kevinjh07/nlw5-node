import { getCustomRepository, Repository } from 'typeorm';
import { Settings as Setting } from '../entities/Setting';
import { SettingsRepository } from '../repositories/SettingsRepiository';

export class SettingsService {
  private settingsRepository: Repository<Setting>;

  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }

  async create(chat: boolean, username: string) {
    const userAlreadyExists = await this.settingsRepository.findOne({
      username,
    });

    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }

    const settings = this.settingsRepository.create({
      chat,
      username,
    });

    await this.settingsRepository.save(settings);

    return settings;
  }
}
