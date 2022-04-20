import { Provider } from '@nestjs/common';
import { PROVIDER } from 'domain/user/constants/provider';
import { UserPrismaRepository } from 'infra/database/prisma/repository/user';

export const UsuariosRepository: Provider = {
  provide: PROVIDER.USUARIOREPOSITORY,
  useClass: UserPrismaRepository,
};

export const usuarioRepositories = [
  UsuariosRepository,
];
