import { Repository } from 'src/share/abstract/repository';
import { User } from '../entity/user.entity';

export interface IUserRepository extends Repository<User> {
  findByEmail(email: string): Promise<User>;
  createUserAdmin(user: User): Promise<User>;
}
