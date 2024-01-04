import { Module } from '@nestjs/common';
import { AshlandBridgeModule } from './ashland-bridge/ashland-bridge.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    AshlandBridgeModule,
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
  ],
})
export class AppModule {}
