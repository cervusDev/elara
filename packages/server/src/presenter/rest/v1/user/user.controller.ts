import {
  Body,
  Controller, Get, Post, Param, Delete
} from '@nestjs/common';
import { User } from 'domain/user/entity/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserUsecase } from 'domain/user/usecases/create-user.usecase';
import { FindByCustumerUsecase } from 'domain/user/usecases/find-user.usecase';
import { DeleteUsersUsecase } from 'domain/user/usecases/delete-users.usecase';

@Controller()
export class UserController {
  constructor(
    private readonly createUserUsecase: CreateUserUsecase,
    private readonly findByCustumerUsecase: FindByCustumerUsecase,
    private readonly deleteUserUsecase: DeleteUsersUsecase,
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

  @Delete('/:id')
  public async delete(@Param('id') userId: number): Promise<void> {
    await this.deleteUserUsecase.execute(userId);
  }
}
