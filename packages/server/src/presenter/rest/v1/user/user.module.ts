import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUsecase } from 'domain/user/usecases/create-user.usecase';
import { FindByCustumerUsecase } from 'domain/user/usecases/find-user.usecase';

@Module({
  controllers: [UserController],
  providers: [CreateUserUsecase, FindByCustumerUsecase],
})
export class UserModule {}
