import { Inject, Injectable } from "@nestjs/common";
import { Usecase } from "share/abstract/usecase";
import { PROVIDER } from "../constants/provider";
import { Task } from "../entities/tasks.entity";
import { ITasksRepository } from "../repository/tasks.repository";

interface IReq {
  taskId: number,
  task: Task
}

@Injectable()
export class UpdateTaskByUserUsecase implements Usecase<IReq, Task> {
  constructor(
    @Inject(PROVIDER.REPOSITORY)
    private readonly taskRepository: ITasksRepository
  ) { }

  public async execute({ taskId, task }: IReq): Promise<Task> {
    return this.taskRepository.update(taskId, { ...task }) 
  }
}