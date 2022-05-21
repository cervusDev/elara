import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { LocalGuard } from 'domain/auth/guards/local.guard';
import { AuthUsecase } from 'domain/auth/usecases/auth.usecase';
import { Custumer } from 'domain/custumer/entity/custumer.entity';
import { CreateCustumerUseCase } from 'domain/custumer/usecases/create-custumer';
import { CreateCustumerDto } from './dto/create-custumer.dto';

@Controller()
export class CustumerController {
  constructor(
    private readonly authusecase: AuthUsecase,
    private readonly custumerUsecase: CreateCustumerUseCase
  ) {}
  
  @UseGuards(LocalGuard)
  @Post('session')
  public async login(@Req() req: any) {
    return this.authusecase.login(req.user);
  }

  @Post()
  public async create(@Body() input: CreateCustumerDto): Promise<Custumer> {
    return this.custumerUsecase.execute(input);
  }
}
