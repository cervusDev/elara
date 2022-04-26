import { Inject, Injectable } from '@nestjs/common';
import { Usecase } from 'share/abstract/usecase';
import { PROVIDER } from '../constants/provider';
import { User } from '../entity/user.entity';
import { IUserRepository } from '../repository/users-repository';

@Injectable()
export class CreateUserAdminUsecase implements Usecase<User> {
  constructor(
    @Inject(PROVIDER.USUARIOREPOSITORY)
    private readonly usuarioRepository: IUserRepository,
  ) {}

  public async execute(input: User): Promise<User> {
    return this.usuarioRepository.create(input);
  }
}
