import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { v1Module } from '../constants/routes';
import { CustumerModule } from './custumer/custumer.module';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    CustumerModule,
    TaskModule,
    RouterModule.forRoutes(v1Module),
  ],
})
export class V1Module {}
