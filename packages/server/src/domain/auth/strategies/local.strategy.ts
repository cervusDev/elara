import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { MessagesHelper } from 'domain/auth/constants/error';
import { AuthUsecase } from 'domain/auth/usecases/auth.usecase';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthUsecase) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string) {
    const custumer = await this.authService.ValidateUser({ email, password });

    if (!custumer) {
      throw new UnauthorizedException(MessagesHelper.INVALID);
    }

    return custumer;
  }
}
