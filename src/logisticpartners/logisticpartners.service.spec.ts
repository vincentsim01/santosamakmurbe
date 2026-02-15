import { Test, TestingModule } from '@nestjs/testing';
import { LogisticpartnersService } from './logisticpartners.service';

describe('LogisticpartnersService', () => {
  let service: LogisticpartnersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogisticpartnersService],
    }).compile();

    service = module.get<LogisticpartnersService>(LogisticpartnersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
