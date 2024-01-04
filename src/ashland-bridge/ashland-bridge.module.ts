import { Module } from '@nestjs/common';
import { AshlandBridgeService } from './ashland-bridge.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    ClientsModule.registerAsync([
      {
        name: 'ASHLAND_SERVICE',
        useFactory: (configService: ConfigService) => ({
          transport: Transport.NATS,
          options: {
            servers: [
              `nats://${configService.get('NATS_HOST')}:${configService.get(
                'NATS_PORT',
              )}`,
            ],
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  providers: [AshlandBridgeService],
  exports: [AshlandBridgeService],
})
export class AshlandBridgeModule {}
