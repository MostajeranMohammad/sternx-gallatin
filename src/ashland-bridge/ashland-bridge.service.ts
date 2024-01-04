import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AshlandBridgeService {
  constructor(
    @Inject('ASHLAND_SERVICE') private ashlandServiceClient: ClientProxy,
  ) {}

  async sendLog(log: { action: string; timestamp: Date; message: string }) {
    this.ashlandServiceClient.emit('save-logs', log);
  }
}
