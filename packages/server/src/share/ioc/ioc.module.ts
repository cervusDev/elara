import { Module } from '@nestjs/common';
import { usuarioRepositories } from './provider/usuarios.provider';

@Module({
  providers: [...usuarioRepositories],
  exports: [...usuarioRepositories],
})
export class IocModule {}
