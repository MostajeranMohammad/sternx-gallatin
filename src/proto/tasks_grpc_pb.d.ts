// GENERATED CODE -- DO NOT EDIT!

// package: tasks
// file: src/proto/tasks.proto

import * as src_proto_tasks_pb from "../../src/proto/tasks_pb";
import * as grpc from "grpc";

interface ITasksServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createTask: grpc.MethodDefinition<src_proto_tasks_pb.CreateTaskRequest, src_proto_tasks_pb.CreateTaskResponse>;
  updateTask: grpc.MethodDefinition<src_proto_tasks_pb.UpdateTaskRequest, src_proto_tasks_pb.UpdateTaskResponse>;
  deleteTask: grpc.MethodDefinition<src_proto_tasks_pb.DeleteTaskRequest, src_proto_tasks_pb.DeleteTaskResponse>;
  getAllTasks: grpc.MethodDefinition<src_proto_tasks_pb.GetAllTasksRequest, src_proto_tasks_pb.GetAllTasksResponse>;
}

export const TasksServiceService: ITasksServiceService;

export interface ITasksServiceServer extends grpc.UntypedServiceImplementation {
  createTask: grpc.handleUnaryCall<src_proto_tasks_pb.CreateTaskRequest, src_proto_tasks_pb.CreateTaskResponse>;
  updateTask: grpc.handleUnaryCall<src_proto_tasks_pb.UpdateTaskRequest, src_proto_tasks_pb.UpdateTaskResponse>;
  deleteTask: grpc.handleUnaryCall<src_proto_tasks_pb.DeleteTaskRequest, src_proto_tasks_pb.DeleteTaskResponse>;
  getAllTasks: grpc.handleUnaryCall<src_proto_tasks_pb.GetAllTasksRequest, src_proto_tasks_pb.GetAllTasksResponse>;
}

export class TasksServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createTask(argument: src_proto_tasks_pb.CreateTaskRequest, callback: grpc.requestCallback<src_proto_tasks_pb.CreateTaskResponse>): grpc.ClientUnaryCall;
  createTask(argument: src_proto_tasks_pb.CreateTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<src_proto_tasks_pb.CreateTaskResponse>): grpc.ClientUnaryCall;
  createTask(argument: src_proto_tasks_pb.CreateTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<src_proto_tasks_pb.CreateTaskResponse>): grpc.ClientUnaryCall;
  updateTask(argument: src_proto_tasks_pb.UpdateTaskRequest, callback: grpc.requestCallback<src_proto_tasks_pb.UpdateTaskResponse>): grpc.ClientUnaryCall;
  updateTask(argument: src_proto_tasks_pb.UpdateTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<src_proto_tasks_pb.UpdateTaskResponse>): grpc.ClientUnaryCall;
  updateTask(argument: src_proto_tasks_pb.UpdateTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<src_proto_tasks_pb.UpdateTaskResponse>): grpc.ClientUnaryCall;
  deleteTask(argument: src_proto_tasks_pb.DeleteTaskRequest, callback: grpc.requestCallback<src_proto_tasks_pb.DeleteTaskResponse>): grpc.ClientUnaryCall;
  deleteTask(argument: src_proto_tasks_pb.DeleteTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<src_proto_tasks_pb.DeleteTaskResponse>): grpc.ClientUnaryCall;
  deleteTask(argument: src_proto_tasks_pb.DeleteTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<src_proto_tasks_pb.DeleteTaskResponse>): grpc.ClientUnaryCall;
  getAllTasks(argument: src_proto_tasks_pb.GetAllTasksRequest, callback: grpc.requestCallback<src_proto_tasks_pb.GetAllTasksResponse>): grpc.ClientUnaryCall;
  getAllTasks(argument: src_proto_tasks_pb.GetAllTasksRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<src_proto_tasks_pb.GetAllTasksResponse>): grpc.ClientUnaryCall;
  getAllTasks(argument: src_proto_tasks_pb.GetAllTasksRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<src_proto_tasks_pb.GetAllTasksResponse>): grpc.ClientUnaryCall;
}
