import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';
import { v1Module } from '../constants';

@Module({
  imports: [
    RouterModule.forRoutes(v1Module),
  ],
})
export class V1Module {}
