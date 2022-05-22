import { Module } from '@nestjs/common';
import { CreateTaskByUserUsecase } from 'domain/task/usecases/create-task-by-user.usecase';
import { DeleteTaskByUserUsecase } from 'domain/task/usecases/delete-task-by-user.usecase';
import { FindTaskByUserUsecase } from 'domain/task/usecases/find-task-by-user.usecase';
import { UpdateTaskByUserUsecase } from 'domain/task/usecases/update-task-by-user.usecasse';
import { TaskController } from './task.controller';

@Module({
  controllers: [TaskController],
  providers: [
    CreateTaskByUserUsecase, 
    FindTaskByUserUsecase, 
    UpdateTaskByUserUsecase, 
    DeleteTaskByUserUsecase
  ],
})
export class TaskModule {}