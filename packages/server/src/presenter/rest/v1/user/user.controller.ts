import {
  Body,
  Controller, Get, Post, Query, Param
} from '@nestjs/common';
import { User } from 'domain/user/entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserUsecase } from 'domain/user/usecases/create-user.usecase';
import { FindByCustumerUsecase } from 'domain/user/usecases/find-user.usecase';

@Controller()
export class UserController {
  constructor(
    private readonly createUserUsecase: CreateUserUsecase,
    private readonly findByCustumerUsecase: FindByCustumerUsecase,
  ) {}

  @Post()
  public async create(@Body() input: CreateUserDto): Promise<User> {
    return this.createUserUsecase.execute(input);
  }

  @Get('/:custumerId')
  public async findByCustumer(
    @Param('custumerId') custumerId: number,
  ): Promise<User[]> {
    return this.findByCustumerUsecase.execute({custumerId});
  }
}
