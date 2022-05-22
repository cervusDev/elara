import { Inject, Injectable } from "@nestjs/common";
import { Usecase } from "share/abstract/usecase";
import { PROVIDER } from "../constants/provider";
import { ITasksRepository } from "../repository/tasks.repository";

@Injectable()
export class DeleteTaskByUserUsecase implements Usecase<number, void> {
  constructor(
    @Inject(PROVIDER.REPOSITORY)
    private readonly taskRepository: ITasksRepository
  ) {}
  
  public async execute(taskId: number): Promise<void> {
    await this.taskRepository.delete(taskId);
  }
}