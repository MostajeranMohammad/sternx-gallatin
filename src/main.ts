import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'tasks',
      protoPath: join(__dirname, 'proto/tasks.proto'),
      url: `0.0.0.0:${process.env.GRPC_PORT}`,
    },
  });

  await app.listen();
}
bootstrap();
