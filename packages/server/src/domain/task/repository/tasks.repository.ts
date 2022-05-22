import { Repository } from 'share/abstract/repository'
import { Task } from '../entities/tasks.entity';

export abstract class ITasksRepository extends Repository<Task> {
  public abstract findByUserId(userId: number): Promise<Task[]>
}