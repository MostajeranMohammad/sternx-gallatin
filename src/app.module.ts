import { Module } from '@nestjs/common';
import { AshlandBridgeModule } from './ashland-bridge/ashland-bridge.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './tasks/task.entity';

@Module({
  imports: [
    AshlandBridgeModule,
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    TasksModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: parseInt(configService.get('POSTGRES_PORT'), 10),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        entities: [TaskEntity],
        synchronize: true,
      }),
    }),
  ],
})
export class AppModule {}
