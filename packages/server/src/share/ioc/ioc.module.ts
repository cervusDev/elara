import { Module } from '@nestjs/common';
import { custumerRepositories } from './provider/custumer.provider';
import { usuarioRepositories } from './provider/user.provider';

@Module({
  providers: [...usuarioRepositories, ...custumerRepositories],
  exports: [...usuarioRepositories, ...custumerRepositories],
})
export class IocModule {}
