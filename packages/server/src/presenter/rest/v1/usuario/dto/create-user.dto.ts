import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { NotExists } from 'src/share/decorators/notExists.decorator';
import { Usuario } from 'src/domain/usuario/entity/usuarios.entity';

export class CreateUserDto implements Partial<Usuario> {
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
