import { Module } from '@nestjs/common';
import { usuarioRepositories } from './provider/user.provider';

@Module({
  providers: [...usuarioRepositories],
  exports: [...usuarioRepositories],
})
export class IocModule {}
