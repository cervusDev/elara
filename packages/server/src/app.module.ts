import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { PrismaModule } from 'infra/database/prisma/prisma.module';
import { PresenterModule } from 'presenter/presenter.module';
import { IocModule } from 'share/ioc/ioc.module';

@Global()
@Module({
  imports: [
    IocModule,
    HttpModule,
    PrismaModule,
    PresenterModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  exports: [HttpModule, IocModule],
})
export class AppModule {}
