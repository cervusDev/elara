import { Inject, Injectable } from "@nestjs/common";
import { Usecase } from "share/abstract/usecase";
import { PROVIDER } from "../constants/provider";
import { Task } from "../entities/tasks.entity";
import { ITasksRepository } from "../repository/tasks.repository";

@Injectable()
export class CreateTaskByUserUsecase implements Usecase<Task> {
  constructor (
    @Inject(PROVIDER.REPOSITORY)
    private readonly taskRepository: ITasksRepository
  ) {}
  
  public async execute(input: Task): Promise<Task> {
    return await this.taskRepository.create(input);
  }
}