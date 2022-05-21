import { Custumer } from 'domain/custumer/entity/custumer.entity'
export class User {
  id?: number;
  
  name: string;
  
  email: string;
  
  password: string;
  
  custumerId?: number;
  
  Custumer?: Custumer

  admin?: boolean;

  deletedAt?: Date;

  updatedAt?: Date;

  createdAt?: Date;
}
