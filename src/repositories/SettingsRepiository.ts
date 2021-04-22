import { EntityRepository, Repository } from 'typeorm';
import { Settings } from '../entities/Setting';

@EntityRepository(Settings)
export class SettingsRepository extends Repository<Settings> {}
