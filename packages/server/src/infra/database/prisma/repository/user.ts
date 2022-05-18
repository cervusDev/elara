import { Injectable } from '@nestjs/common';
import { hashSync } from 'bcrypt';
import { User } from 'domain/user/entity/user.entity';
import { IUserRepository } from 'domain/user/repository/users-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UserPrismaRepository implements Partial<IUserRepository> {
  constructor(private readonly prisma: PrismaService) {}

  public async findByEmail(email: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  public async createUserAdmin({ password, ...rest }: User): Promise<User> {
    return this.prisma.user.create({
      data: {
        ...rest,
        admin: true,
        password: hashSync(password, 10),
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
