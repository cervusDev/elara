/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller, Post, Req, UseGuards,
} from '@nestjs/common';
import { User } from 'domain/user/entity/user.entity';
import { LocalGuard } from 'domain/auth/guards/local.guard';
import { AuthUsecase } from 'domain/auth/usecases/auth.usecase';
import { CreateUserAdminUsecase } from 'domain/user/usecases/create-user-admin';
import { JwtGuard } from 'domain/auth/guards/jwt.guard';
import { CreateUserDto } from './dto/create-user.dto';

@UseGuards(JwtGuard)
@Controller()
export class UserController {
  constructor(
    private readonly authusecase: AuthUsecase,
    private readonly createUserAdminUsecase: CreateUserAdminUsecase,
  ) {}

  @Post('session')
  public async login(@Req() req: any) {
    return this.authusecase.login(req.user);
  }

  public async createAdmin(@Body() input: CreateUserDto): Promise<User> {
    return this.createUserAdminUsecase.execute(input);
  }
}
