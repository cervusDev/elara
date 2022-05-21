import { PartialType } from '@nestjs/mapped-types';
import { CreateCustumerDto } from './create-custumer.dto';

export class UpdateCustumerDto extends PartialType(CreateCustumerDto) {}
