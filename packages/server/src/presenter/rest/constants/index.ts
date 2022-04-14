import { Routes } from 'nest-router';
import { UsuarioModule } from '../v1/usuario/usuario.module';

export const v1Module: Routes = [
  {
    path: '/v1',
    children: [
      { path: 'usuarios', module: UsuarioModule },
    ],
  },
];
