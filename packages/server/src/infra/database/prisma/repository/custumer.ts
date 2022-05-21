import { Injectable } from "@nestjs/common";
import { hashSync } from "bcrypt";
import { Custumer } from "domain/custumer/entity/custumer.entity";
import { ICustumerRepository } from "domain/custumer/repository/custumers-repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class CustumerPrismaRepository implements Partial<ICustumerRepository> {
  constructor (private readonly prisma: PrismaService) {}

  public async create({ password, ...rest }: Custumer): Promise<Custumer> {
    return this.prisma.custumer.create({ 
      data: {
        password: hashSync(password, 10),
        ...rest
      }
     })
  }

  public async findByEmail(email: string): Promise<Custumer> {
    return this.prisma.custumer.findFirst({ where: { email } })
  }
}