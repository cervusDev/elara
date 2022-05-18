import { Repository } from 'src/share/abstract/repository';
import { User } from '../entity/user.entity';

export abstract class IUserRepository extends Repository<User> {
  public abstract findByEmail(email: string): Promise<User>;
  public abstract createUserAdmin(user: User): Promise<User>;
}
