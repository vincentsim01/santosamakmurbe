import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ItemsModule } from './items/items.module';
import { CategoriesService } from './categories/categories.service';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesModule } from './categories/categories.module';
import { ConfigModule } from '@nestjs/config';
import { VendorsModule } from './vendors/vendors.module';
import { PaymentmethodModule } from './paymentmethod/paymentmethod.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { OrderitemsModule } from './orderitems/orderitems.module';
import { LogisticpartnersModule } from './logisticpartners/logisticpartners.module';
import { TransationModule } from './transation/transation.module';
import { TransactionModule } from './transaction/transaction.module';


@Module({
  imports: [
     ConfigModule.forRoot({
      isGlobal: true,   // makes it available everywhere
      envFilePath: '.env', // optional (default is .env)
    }),
    
    UsersModule, ItemsModule, CategoriesModule, VendorsModule, PaymentmethodModule, ProductsModule, OrdersModule, OrderitemsModule, LogisticpartnersModule, TransationModule, TransactionModule],
  controllers: [AppController, CategoriesController],
  providers: [AppService, CategoriesService],
})
export class AppModule {}
