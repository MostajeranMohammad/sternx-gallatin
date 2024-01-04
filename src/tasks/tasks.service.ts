import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './task.entity';
import { Repository } from 'typeorm';
import { AshlandBridgeService } from 'src/ashland-bridge/ashland-bridge.service';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private tasksRepository: Repository<TaskEntity>,
    private readonly ashlandBridgeService: AshlandBridgeService,
  ) {}

  async create(task: TaskEntity): Promise<TaskEntity> {
    const createdTask = await this.tasksRepository.save(task);
    this.ashlandBridgeService.sendLog({
      action: 'create task',
      timestamp: new Date(),
      message: 'task created, body: ' + JSON.stringify(task),
    });
    return createdTask;
  }

  findAll(skip: number, take: number): Promise<TaskEntity[]> {
    return this.tasksRepository.find({ skip, take });
  }

  async update(id: string, task: TaskEntity): Promise<TaskEntity> {
    const updatedTask = await this.tasksRepository
      .createQueryBuilder()
      .update(TaskEntity)
      .set(task)
      .where('id = :id', { id })
      .returning('*')
      .execute();

    this.ashlandBridgeService.sendLog({
      action: 'update task',
      timestamp: new Date(),
      message: 'task updated, body: ' + JSON.stringify({ id, ...task }),
    });

    return updatedTask.raw[0];
  }

  async remove(id: string): Promise<TaskEntity> {
    const updatedTask = await this.tasksRepository
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .returning('*')
      .execute();

    this.ashlandBridgeService.sendLog({
      action: 'delete task',
      timestamp: new Date(),
      message: 'task deleted, taskID: ' + id,
    });

    return updatedTask.raw[0];
  }
}
