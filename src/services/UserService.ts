import { getCustomRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';

export class UserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }
  async create(email: string) {
    let user = await this.userRepository.findOne({ email });

    if (!user) {
      user = this.userRepository.create({ email });
      await this.userRepository.save(user);
    }

    return user;
  }
}
