import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthUsecase } from 'domain/auth/usecases/auth.usecase';
import { JWT } from 'domain/auth/constants/jwt';
import { CreateUserAdminUsecase } from 'domain/user/usecases/create-user-admin';
import { UserController } from './user.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      privateKey: JWT.SECRET,
      signOptions: { expiresIn: '86400s' },
    }),
  ],
  controllers: [UserController],
  providers: [
    AuthUsecase,
    CreateUserAdminUsecase,
  ],
})
export class UserModule {}
