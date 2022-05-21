import { Inject, Injectable } from "@nestjs/common";
import { PROVIDER } from "../constants/provider";
import { User } from '../entity/user.entity'
import { IUserRepository } from "../repository/users-repository";
import { Usecase } from 'share/abstract/usecase'

@Injectable()
export class CreateUserUsecase implements Usecase<User>{
  constructor (
    @Inject(PROVIDER.REPOSITORY)
    private readonly usuarioRepository: IUserRepository,
  ) {}

  public async execute(input: User): Promise<User> {
    return this.usuarioRepository.create(input)
  }
}