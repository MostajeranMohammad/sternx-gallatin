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
@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @GrpcMethod('TasksService', 'CreateTask')
  CreateTask(data: CreateTaskRequest): CreateTaskResponse.AsObject {
    console.log(data.toObject());

    return <CreateTaskResponse.AsObject>{
      task: <Task.AsObject>{
        description: 'test',
        id: '1',
        title: 'test',
        parenttaskid: '1',
        createdat: new Date(),
      },
    };
  }

  @GrpcMethod('TasksService', 'UpdateTask')
  UpdateTask(data: UpdateTaskRequest): UpdateTaskResponse.AsObject {
    console.log(data.toObject());

    return <UpdateTaskResponse.AsObject>{
      task: <Task.AsObject>{
        description: 'test',
        id: '1',
        title: 'test',
        parenttaskid: '1',
        createdat: new Date(),
      },
    };
  }

  @GrpcMethod('TasksService', 'DeleteTask')
  DeleteTask(data: DeleteTaskRequest): DeleteTaskResponse.AsObject {
    console.log(data.toObject());

    return <DeleteTaskResponse.AsObject>{
      task: <Task.AsObject>{
        description: 'test',
        id: '1',
        title: 'test',
        parenttaskid: '1',
        createdat: new Date(),
      },
    };
  }

  @GrpcMethod('TasksService', 'GetAllTasks')
  GetAllTasks(data: GetAllTasksRequest): GetAllTasksResponse.AsObject {
    console.log(data.toObject());

    return <GetAllTasksResponse.AsObject>{
      tasksList: [
        <Task.AsObject>{
          description: 'test',
          id: '1',
          title: 'test',
          parenttaskid: '1',
          createdat: new Date(),
        },
      ],
    };
  }
}
