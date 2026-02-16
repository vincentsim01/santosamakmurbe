// import { UpdateUserDto } from './../users/dto/update-user-dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdateProductDto } from './dto/update-product';

@Injectable()
export class ProductsService {
    constructor(private readonly productRepo: ProductsRepository, private readonly prisma: PrismaService){}

    getAllProducts(){
        return this.productRepo.findAll();
    }

      /**
   * Fetch all products by category
   * @param categoryName
   */
    // async getProductsByCategory(categoryName: string) {
    //     return this.productRepo.findAllByCategory(categoryName);
    // }

    getProductById(id:string){
        const product =  this.productRepo.findOne(id);
        if(!product) throw new NotFoundException('product not found');
        return product;
    }

    // findByEmail(email:string){
    //     const product =  this.productRepo.findByEmail(email);
    //     if(!product) throw new NotFoundException('product not found');
    //     return product;
    // }

    update(id: string, data: UpdateProductDto) {
    return this.productRepo.update(id, data);
    //   where: { id },
    //   data,
    };

    delete(id: string) {
    return this.productRepo.delete(id);
    //   where: { id },
    //   data,
    };
  

    createProduct(
        data:{
            // id:number,
            name: string,
            description: string,
            imageUrl: string,
            categoryId: string,
            vendorId: string,

        }
    ){
        return this.productRepo.createProduct(data);
    }
}