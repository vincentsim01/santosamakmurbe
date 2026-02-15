import { Module } from '@nestjs/common';
import { LogisticpartnersService } from './logisticpartners.service';
import { LogisticpartnersController } from './logisticpartners.controller';

@Module({
  providers: [LogisticpartnersService],
  controllers: [LogisticpartnersController]
})
export class LogisticpartnersModule {}
