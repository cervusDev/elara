import { Inject, Injectable } from "@nestjs/common";
import { Usecase } from "share/abstract/usecase";
import { PROVIDER } from "../constants/provider";
import { IUserRepository } from "../repository/users-repository";

@Injectable()
export class DeleteUsersUsecase implements Usecase<number, void> {
  constructor (
    @Inject(PROVIDER.REPOSITORY)
    private readonly userRepository: IUserRepository
  ) {}

  public async execute(userId: number): Promise<void> {
    await this.userRepository.delete(userId);
  }
}