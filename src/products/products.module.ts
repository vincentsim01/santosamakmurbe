import { Global,Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repository';
import { PrismaModule } from '../../prisma/prisma.module';

@Global()
@Module({
    imports: [PrismaModule], // ✅ 
  providers: [ProductsService, ProductsRepository],
  controllers: [ProductsController],
  exports: [ProductsService, ProductsRepository],
})
export class ProductsModule {}