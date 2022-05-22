import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { ITasksRepository } from 'domain/task/repository/tasks.repository'
import { Task } from "domain/task/entities/tasks.entity";
@Injectable()
export class TaskPrismaRepository implements Partial<ITasksRepository> {
  constructor(private readonly prisma: PrismaService) {}

  public async findByUserId(userId: number): Promise<Task[]> {
    return this.prisma.task.findMany({
      where: {
        userId,
      },
      include: {
        User: {
          select: {
            name: true
          }
        }
      }
    });
  }

  public async create(data: Task): Promise<Task> {
    return this.prisma.task.create({
      data,
    });
  }

  public update(id: number, data: Partial<Task>): Promise<Task> {
    return this.prisma.task.update({
      where: {
        id,
      },
      data,
    })
  }

  public async delete(id: number): Promise<void> {
    await this.prisma.task.delete({
      where: {
        id,
      },
    })
  }

}