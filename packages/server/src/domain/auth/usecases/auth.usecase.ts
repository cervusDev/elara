import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { PROVIDER } from 'domain/user/constants/provider';
import { User } from 'domain/user/entity/user.entity';
import { IUserRepository } from 'domain/user/repository/users-repository';
import { JwtService } from '@nestjs/jwt';

export interface IUserAuth {
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
    @Inject(PROVIDER.USUARIOREPOSITORY)
    private readonly userRepository: IUserRepository,
    private readonly jwtService: JwtService,
  ) {}

  public async login(user: User) {
    const payload: IUserAuth = {
      sub: user.id,
      email: user.email,
      nome: user.name,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  public async ValidateUser({ email, password }: IValidate) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      return new BadRequestException('Usuário não encontrado');
    }

    const isPasswordValid = compareSync(password, user.password);

    if (!isPasswordValid) {
      return new BadRequestException('senha inválida');
    }

    return user;
  }
}
