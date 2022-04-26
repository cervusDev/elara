import { User } from 'domain/user/entity/user.entity';
import { IUserRepository } from 'domain/user/repository/users-repository';
import { InMemoryRepository } from '.';

export class UsuarioRepositoryInMemmory extends InMemoryRepository<User> implements Partial<IUserRepository> {}
