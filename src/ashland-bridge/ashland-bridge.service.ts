import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AshlandBridgeService {
  constructor(
    @Inject('ASHLAND_SERVICE') private ashlandServiceClient: ClientProxy,
  ) {
    setInterval(async () => {
      await this.sendLog();
      console.log('sent');
    }, 1000);
  }

  async sendLog() {
    this.ashlandServiceClient.send('logs', <
      {
        action: string;
        timestamp: Date;
        message: string;
      }
    >{
      action: 'test',
      timestamp: new Date(),
      message: 'test message',
    });
  }
}
