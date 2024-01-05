import { Controller } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { GrpcMethod } from '@nestjs/microservices';
import {
  CreateTaskRequest,
  CreateTaskResponse,
  DeleteTaskRequest,
  GetAllTasksRequest,
  GetAllTasksResponse,
  Task,
  UpdateTaskRequest,
  UpdateTaskResponse,
  DeleteTaskResponse,
} from 'src/proto/tasks_pb';
import { TaskEntity } from './task.entity';
@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @GrpcMethod('TasksService', 'CreateTask')
  async CreateTask(
    data: CreateTaskRequest,
  ): Promise<CreateTaskResponse.AsObject> {
    const result = await this.tasksService.create(data.toObject());

    return <CreateTaskResponse.AsObject>{
      task: <Task.AsObject>{
        id: result.id,
        title: result.title,
        description: result.description,
        parenttaskid: result.parentId,
        createdat: result.createdAt,
      },
    };
  }

  @GrpcMethod('TasksService', 'UpdateTask')
  async UpdateTask(
    data: UpdateTaskRequest,
  ): Promise<UpdateTaskResponse.AsObject> {
    const result = await this.tasksService.update(data.getId(), <TaskEntity>{
      title: data.getTitle(),
      description: data.getDescription(),
      parentId: data.getParenttaskid(),
    });

    return <UpdateTaskResponse.AsObject>{
      task: <Task.AsObject>{
        id: result.id,
        title: result.title,
        description: result.description,
        parenttaskid: result.parentId,
        createdat: result.createdAt,
        updatedat: result.updatedAt,
      },
    };
  }

  @GrpcMethod('TasksService', 'DeleteTask')
  async DeleteTask(
    data: DeleteTaskRequest,
  ): Promise<DeleteTaskResponse.AsObject> {
    const result = await this.tasksService.remove(data.getId());

    return <DeleteTaskResponse.AsObject>{
      task: <Task.AsObject>{
        id: result.id,
        title: result.title,
        description: result.description,
        parenttaskid: result.parentId,
        createdat: result.createdAt,
        updatedat: result.updatedAt,
      },
    };
  }

  @GrpcMethod('TasksService', 'GetAllTasks')
  async GetAllTasks(
    data: GetAllTasksRequest,
  ): Promise<GetAllTasksResponse.AsObject> {
    const result = await this.tasksService.findAll(
      (data.getPageNumber() - 1) * data.getPageSize(),
      data.getPageSize(),
    );

    return <GetAllTasksResponse.AsObject>{
      tasksList: result.map((task) => {
        return <Task.AsObject>{
          id: task.id,
          title: task.title,
          description: task.description,
          parenttaskid: task.parentId,
          createdat: task.createdAt,
          updatedat: task.updatedAt,
        };
      }),
    };
  }
}
