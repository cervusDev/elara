export class User {
  id?: number;

  name: string;

  email: string;

  password: string;

  admin?: boolean;

  deletedAt?: Date;

  updatedAt?: Date;

  createdAt?: Date;
}
