import { Module } from '@nestjs/common';
import { OrderitemsService } from './orderitems.service';
import { OrderitemsController } from './orderitems.controller';

@Module({
  providers: [OrderitemsService],
  controllers: [OrderitemsController]
})
export class OrderitemsModule {}
