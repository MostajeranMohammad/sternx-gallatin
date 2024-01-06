import { Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { GrpcMethod } from '@nestjs/microservices';
import { TaskEntity } from './task.entity';
import {
  CreateTaskRequest,
  CreateTaskResponse,
  DeleteTaskRequest,
  DeleteTaskResponse,
  GetAllTasksRequest,
  GetAllTasksResponse,
  Task,
  UpdateTaskRequest,
  UpdateTaskResponse,
} from 'src/proto/interfaces';
@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @GrpcMethod('TasksService', 'CreateTask')
  async CreateTask(data: CreateTaskRequest): Promise<CreateTaskResponse> {
    const result = await this.tasksService.create(data);

    return <CreateTaskResponse>{
      task: <Task>{
        id: result.id,
        title: result.title,
        description: result.description,
        parentTaskId: result.parentId,
        createdAt: result.createdAt.toISOString(),
      },
    };
  }

  @GrpcMethod('TasksService', 'UpdateTask')
  async UpdateTask(data: UpdateTaskRequest): Promise<UpdateTaskResponse> {
    const result = await this.tasksService.update(data.id, <TaskEntity>{
      title: data.title,
      description: data.description,
      parentId: data.parentTaskId,
    });

    return <UpdateTaskResponse>{
      task: <Task>{
        id: result.id,
        title: result.title,
        description: result.description,
        parentTaskId: result.parentId,
        createdAt: result.createdAt.toISOString(),
        updatedAt: result.updatedAt.toISOString(),
      },
    };
  }

  @GrpcMethod('TasksService', 'DeleteTask')
  async DeleteTask(data: DeleteTaskRequest): Promise<DeleteTaskResponse> {
    const result = await this.tasksService.remove(data.id);

    return <DeleteTaskResponse>{
      task: <Task>{
        id: result.id,
        title: result.title,
        description: result.description,
        parentTaskId: result.parentId,
        createdAt: result.createdAt.toISOString(),
        updatedAt: result.updatedAt.toISOString(),
      },
    };
  }

  @GrpcMethod('TasksService', 'GetAllTasks')
  async GetAllTasks(data: GetAllTasksRequest): Promise<GetAllTasksResponse> {
    const result = await this.tasksService.findAll(
      (data.pageNumber - 1) * data.pageSize,
      data.pageSize,
    );

    return <GetAllTasksResponse>{
      tasks: result.map((task) => {
        return <Task>{
          id: task.id,
          title: task.title,
          description: task.description,
          parentTaskId: task.parentId,
          createdAt: task.createdAt.toISOString(),
          updatedAt: task.updatedAt.toISOString(),
        };
      }),
    };
  }
}
