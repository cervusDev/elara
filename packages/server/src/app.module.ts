import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HttpModule,
  ],
  exports: [HttpModule],
})
export class AppModule {}
