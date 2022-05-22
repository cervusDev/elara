import { Provider } from "@nestjs/common";
import { PROVIDER } from "domain/task/constants/provider";
import { TaskPrismaRepository } from 'infra/database/prisma/repository/taks'

export const TasksRepository: Provider = {
  provide: PROVIDER.REPOSITORY,
  useClass: TaskPrismaRepository,
};

export const tasksRepositories = [
  TasksRepository,
];
