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

  public async validate(email: string, password: string) {
    const user = await this.authService.ValidateUser({ email, password });

    if (!user) {
      throw new UnauthorizedException(MessagesHelper.PASSWORD_OR_EMAIL_INVALID);
    }

    return user;
  }
}
