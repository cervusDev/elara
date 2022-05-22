import { STATE } from "@prisma/client";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class TaskDto {
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  state: STATE;

  @IsNumber()
  @IsNotEmpty()
  userId: number;
}