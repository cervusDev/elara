import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { Task } from "domain/task/entities/tasks.entity";
import { CreateTaskByUserUsecase } from "domain/task/usecases/create-task-by-user.usecase";
import { DeleteTaskByUserUsecase } from "domain/task/usecases/delete-task-by-user.usecase";
import { FindTaskByUserUsecase } from "domain/task/usecases/find-task-by-user.usecase";
import { UpdateTaskByUserUsecase } from "domain/task/usecases/update-task-by-user.usecasse";
import { TaskDto } from "./dto/task.dto";

@Controller()
export class TaskController {
  constructor(
    private createTaskByUserUsecase: CreateTaskByUserUsecase,
    private findTaskByUserUsecase: FindTaskByUserUsecase,
    private updateTaskByUserUsecase: UpdateTaskByUserUsecase,
    private deleteTaskByUserUsecase: DeleteTaskByUserUsecase,
  ) {}

  @Post()
  public async create(@Body() input: TaskDto): Promise<Task> {
    return this.createTaskByUserUsecase.execute(input);
  }

 @Get('/:userId')
  public async findByUser(
    @Param('userId') userId: number,
  ): Promise<Task[]> {
    return this.findTaskByUserUsecase.execute({ userId });
  }
  
  @Patch('/:id')
  public async update(@Param('id') taskId: number, @Body() task: TaskDto): Promise<Task> {
    return this.updateTaskByUserUsecase.execute({ taskId, task });
  }
  
  @Delete('/:id')
  public async delete(@Param('id') taskId: number): Promise<void> {
    await this.deleteTaskByUserUsecase.execute(taskId);
  }
}