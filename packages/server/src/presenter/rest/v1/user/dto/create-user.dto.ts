import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { NotExists } from 'src/share/decorators/notExists.decorator';
import { User } from 'domain/user/entity/user.entity';

export class CreateUserDto implements Partial<User> {
  @IsNumber()
  @IsNotEmpty()
  categoriaId: number;

  @IsNumber()
  @IsNotEmpty()
  clienteId: number;

  @NotExists({ table: 'usuarios', field: 'email' })
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
