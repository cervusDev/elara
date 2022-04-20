import { Routes } from 'nest-router';
import { UserModule } from '../v1/user/user.module';

export const v1Module: Routes = [
  {
    path: '/v1',
    children: [
      { path: 'usuarios', module: UserModule },
    ],
  },
];
