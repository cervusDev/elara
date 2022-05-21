import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { PROVIDER } from 'domain/user/constants/provider';
import { Custumer } from 'domain/custumer/entity/custumer.entity';
import { JwtService } from '@nestjs/jwt';
import { MessagesHelper } from 'domain/auth/constants/error'
import { ICustumerRepository } from 'domain/custumer/repository/custumers-repository';
import { PROVIDER as CUSTUMER } from 'domain/custumer/constants/provider'
export interface ICustumerAuth {
  sub: number;
  email: string;
  nome: string;
}

export interface IValidate {
  email: string;
  password: string;
}

@Injectable()
export class AuthUsecase {
  constructor(
    private readonly jwtService: JwtService,
    @Inject(CUSTUMER.REPOSITORY)
    private readonly custumerRepository: ICustumerRepository,
  ) {}

  public async login(custumer: Custumer) {
    const payload: ICustumerAuth = {
      sub: custumer.id,
      nome: custumer.name,
      email: custumer.email,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  public async ValidateUser({ email, password }: IValidate) {
    const custumer = await this.custumerRepository.findByEmail(email);

    if (!custumer) {
      return new BadRequestException(MessagesHelper.NOT_FOUND);
    }

    const isPasswordValid = compareSync(password, custumer.password);

    if (!isPasswordValid) {
      return new BadRequestException(MessagesHelper.PASSWORD);
    }

    return custumer;
  }
}
