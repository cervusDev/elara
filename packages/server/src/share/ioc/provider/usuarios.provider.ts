import { Provider } from '@nestjs/common';
import { PROVIDER } from 'domain/usuario/constants/provider';
import { UsuarioPrismaRepository } from 'infra/database/prisma/repository/usuario';

export const UsuariosRepository: Provider = {
  provide: PROVIDER.USUARIOREPOSITORY,
  useClass: UsuarioPrismaRepository,
};

export const usuarioRepositories = [
  UsuariosRepository,
];
