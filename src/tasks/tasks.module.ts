import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import { AshlandBridgeModule } from 'src/ashland-bridge/ashland-bridge.module';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity]), AshlandBridgeModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
