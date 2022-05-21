import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { User } from 'domain/user/entity/user.entity';

export class CreateUserDto implements Partial<User> {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNumber()
  @IsNotEmpty()
  custumerId: number;
}
