/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { User } from 'domain/user/entity/user.entity';
import { IUserRepository } from 'domain/user/repository/users-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserPrismaRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaService) {}

  public async findByEmail(email: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  public create(data: User): Promise<User> {
    throw new Error('Method not implemented.');
  }

  public update(id: number, data: Partial<User>): Promise<User> {
    throw new Error('Method not implemented.');
  }

  public find(id: number): Promise<User> {
    throw new Error('Method not implemented.');
  }

  public all(): Promise<User[]> {
    throw new Error('Method not implemented.');
  }

  public delete(id: number): Promise<void> {
    throw new Error('Method not implemented.');
  }

  public createMany?(data: User[], args?: never): Promise<User[]> {
    throw new Error('Method not implemented.');
  }
}
