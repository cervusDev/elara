import { Inject, Injectable } from "@nestjs/common";
import { Usecase } from "share/abstract/usecase";
import { PROVIDER } from "../constants/provider";
import { Task } from "../entities/tasks.entity";
import { ITasksRepository } from "../repository/tasks.repository";

interface IReq {
  userId: number
}

@Injectable()
export class FindTaskByUserUsecase implements Usecase<IReq, Task[]>{
  constructor(
    @Inject(PROVIDER.REPOSITORY)
    private readonly taskRepository: ITasksRepository
  ) { }
  
  public async execute({ userId }: IReq): Promise<Task[]> {
    return this.taskRepository.findByUserId(userId);
  }
}