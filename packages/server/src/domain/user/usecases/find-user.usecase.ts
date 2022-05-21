import { Inject, Injectable } from "@nestjs/common"
import { Usecase } from "share/abstract/usecase"
import { PROVIDER } from "../constants/provider"
import { User } from "../entity/user.entity"
import { IUserRepository } from "../repository/users-repository"

interface IReq {
  custumerId: number
}

@Injectable()
export class FindByCustumerUsecase implements Usecase<IReq, User[]>{
  constructor (
    @Inject(PROVIDER.REPOSITORY)
    private readonly usuarioRepository: IUserRepository,
  ) {}

  public async execute({custumerId}: IReq): Promise<User[]> {
    return this.usuarioRepository.findByCustumerId(custumerId)
  }
}