import { Module } from '@nestjs/common';
import { PaymentmethodService } from './paymentmethod.service';
import { PaymentmethodController } from './paymentmethod.controller';

@Module({
  providers: [PaymentmethodService],
  controllers: [PaymentmethodController]
})
export class PaymentmethodModule {}
