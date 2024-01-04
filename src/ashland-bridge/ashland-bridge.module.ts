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
          transport: Transport.RMQ,
          options: {
            urls: [
              `amqp://${configService.get(
                'RABBIT_MQ_HOST',
              )}:${configService.get('RABBIT_MQ_PORT')}`,
            ],
            queue: configService.get('RABBIT_MQ_LOGS_QUEUE_NAME'),
            queueOptions: {
              durable: false,
            },
          },
        }),
        inject: [ConfigService],
      },
    ]),
  ],
  providers: [AshlandBridgeService],
})
export class AshlandBridgeModule {}
