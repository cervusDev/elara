/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Controller, Post, Req, UseGuards,
} from '@nestjs/common';
import { User } from 'domain/user/entity/user.entity';
import { LocalGuard } from 'domain/auth/guards/local.guard';
import { AuthUsecase } from 'domain/auth/usecases/auth.usecase';

@UseGuards(LocalGuard)
@Controller()
export class UserController {
  constructor(private readonly authusecase: AuthUsecase) {}

  @Post('session')
  public async login(@Req() req: any) {
    return this.authusecase.login(req.user);
  }

  public create?(...args: any): Promise<User> {
    throw new Error('Method not implemented.');
  }

  public all?(...args: any): Promise<User[]> {
    throw new Error('Method not implemented.');
  }

  public find?(...args: any): Promise<User> {
    throw new Error('Method not implemented.');
  }

  public patch?(...args: any): Promise<User> {
    throw new Error('Method not implemented.');
  }

  public delete?(...args: any): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
