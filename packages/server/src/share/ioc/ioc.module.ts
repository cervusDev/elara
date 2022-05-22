import { Module } from '@nestjs/common';
import { custumerRepositories } from './provider/custumer.provider';
import { tasksRepositories } from './provider/task.provider';
import { usuarioRepositories } from './provider/user.provider';

@Module({
  providers: [...usuarioRepositories, ...custumerRepositories, ...tasksRepositories],
  exports: [...usuarioRepositories, ...custumerRepositories, ...tasksRepositories],
})
export class IocModule {}
