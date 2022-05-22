import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { CreateUserUsecase } from 'domain/user/usecases/create-user.usecase';
import { FindByCustumerUsecase } from 'domain/user/usecases/find-user.usecase';
import { DeleteUsersUsecase } from 'domain/user/usecases/delete-users.usecase';

@Module({
  controllers: [UserController],
  providers: [CreateUserUsecase, FindByCustumerUsecase, DeleteUsersUsecase],
})
export class UserModule {}
