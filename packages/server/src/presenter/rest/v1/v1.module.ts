import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { v1Module } from '../constants';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    UsuarioModule,
    RouterModule.forRoutes(v1Module),
  ],
})
export class V1Module {}
