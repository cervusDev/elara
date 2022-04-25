import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from 'share/abstract/usecase';
import { User } from '../entity/user.entity';
import { IUserRepository } from '../repository/users-repository';

@Injectable()
export class CreateUserAdminUsecase implements Usecase<User> {
  constructor(
    @Inject()
    private readonly usuarioRepository: IUserRepository,
  ) {}

  public async execute(input: User): Promise<User> {
    return this.usuarioRepository.create(input);
  }
}
