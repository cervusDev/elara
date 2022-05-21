import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JWT } from 'domain/auth/constants/jwt';
import { JwtStrategy } from 'domain/auth/strategies/jwt.strategy';
import { LocalStrategy } from 'domain/auth/strategies/local.strategy';
import { AuthUsecase } from 'domain/auth/usecases/auth.usecase';
import { CreateCustumerUseCase } from 'domain/custumer/usecases/create-custumer';
import { CustumerController } from './custumer.controller';


@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      privateKey: JWT.SECRET,
      signOptions: { expiresIn: '86400s' },
    }),
  ],
  controllers: [CustumerController],
  providers: [
    JwtStrategy,
    AuthUsecase, 
    LocalStrategy, 
    CreateCustumerUseCase,
  ],
})
export class CustumerModule {}
