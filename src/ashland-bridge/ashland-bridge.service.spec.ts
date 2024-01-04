import { Test, TestingModule } from '@nestjs/testing';
import { AshlandBridgeService } from './ashland-bridge.service';

describe('AshlandBridgeService', () => {
  let service: AshlandBridgeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AshlandBridgeService],
    }).compile();

    service = module.get<AshlandBridgeService>(AshlandBridgeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
