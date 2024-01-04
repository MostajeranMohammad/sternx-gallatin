import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import { AshlandBridgeModule } from 'src/ashland-bridge/ashland-bridge.module';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity]), AshlandBridgeModule],
})
export class TasksModule {}
