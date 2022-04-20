import { User } from 'domain/user/entity/user.entity';
import { IUserRepository } from 'domain/user/repository/users-repository';
import { InMemoryRepository } from '.';

export class UsuarioRepositoryInMemmory extends InMemoryRepository<User> implements IUserRepository {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findByEmail(email: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
}
