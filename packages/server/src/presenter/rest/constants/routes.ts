import { Routes } from 'nest-router';
import { CustumerModule } from '../v1/custumer/custumer.module';
import { UserModule } from '../v1/user/user.module';

export const v1Module: Routes = [
  {
    path: '/v1',
    children: [
      { path: 'users', module: UserModule },
      { path: 'custumers', module: CustumerModule }
    ],
  },
];
