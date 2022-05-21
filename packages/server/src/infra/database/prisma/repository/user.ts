import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { hashSync } from 'bcrypt';
import { User } from 'domain/user/entity/user.entity';
import { IUserRepository } from 'domain/user/repository/users-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserPrismaRepository implements Partial<IUserRepository> {
  constructor(private readonly prisma: PrismaService) {}

  public async findByEmail(email: string): Promise<User> {
    return this.prisma.user.findFirst({ where: { email } });
  }

  public async createUserAdmin({ password, ...rest }: User): Promise<User> {
    const data = {
      admin: true,
      password: hashSync(password, 10),
      ...rest,
    } as Prisma.UserUncheckedCreateInput

    return this.prisma.user.create({ data })
  }

  public async create({ password, admin, ...rest }: User): Promise<User> {
    const data = {
      password: hashSync(password, 10),
      admin: false,
      ...rest,
    } as Prisma.UserUncheckedCreateInput

    return this.prisma.user.create({ data })
  }

  public async findByCustumerId(custumerId: number): Promise<User[]> {
    return this.prisma.user.findMany({ 
      where: {
        custumerId
      }
    })
  }
}
//   UsersPermissions: {
//     connect: {
//       id: 1,
//     },
//   },
//   UsersRoles: {
//     connect: {
//       id: 1,
//     },
//   },
// },
