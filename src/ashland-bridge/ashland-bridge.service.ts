import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AshlandBridgeService {
  constructor(
    @Inject('ASHLAND_SERVICE') private ashlandServiceClient: ClientProxy,
  ) {}
  /**
   * this method is used to send logs to ashland service
   * @param log
   */
  async sendLog(log: { action: string; timestamp: Date; message: string }) {
    this.ashlandServiceClient.emit('save-logs', log);
  }
}
