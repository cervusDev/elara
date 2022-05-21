import { Provider } from '@nestjs/common';
import { PROVIDER } from 'domain/custumer/constants/provider';
import { CustumerPrismaRepository } from 'infra/database/prisma/repository/custumer';

export const CustumerRepository: Provider = {
  provide: PROVIDER.REPOSITORY,
  useClass: CustumerPrismaRepository,
};

export const custumerRepositories = [
  CustumerRepository,
];
