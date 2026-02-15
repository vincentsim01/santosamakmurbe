import { Test, TestingModule } from '@nestjs/testing';
import { LogisticpartnersController } from './logisticpartners.controller';

describe('LogisticpartnersController', () => {
  let controller: LogisticpartnersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogisticpartnersController],
    }).compile();

    controller = module.get<LogisticpartnersController>(LogisticpartnersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
