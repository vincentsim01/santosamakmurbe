import { Product } from './../../generated/prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
// import {AuthController} from '../auth/auth.controller';
// import { PrismaClient } from '@prisma/client';
// import * as bcrypt from 'bcryptjs';
import {UpdateProductDto} from './dto/update-product';

@Injectable()
export class ProductsRepository {
  constructor(private prisma: PrismaService) {}     

    async createProduct(data: { name: string; description: string; imageUrl: string; categoryId: string; vendorId: string }) {
    return this.prisma.product.create({
      data: {
      name: data.name,
      description: data.description,
      imageUrl: data.imageUrl,
      categoryId: data.categoryId,
      vendorId: data.vendorId,
      },
    });
  }


    /**
   * Get all products for a specific category name
   * @param categoryName - e.g. "Traditional"
   */
//   async findAllByCategory(categoryName: string) {
//     console.log("categoryName is "+categoryName)
//     return this.prisma.product.findMany({
//       where: {
//         categories: {
//           some: {
//             category: {
//               name: {
//                 equals: categoryName,
//                 mode: 'insensitive', // case-insensitive search
//               },
//             },
//           },
//         },
//       },
//       include: {
//         categories: {
//           include: {
//             category: true, // include full category info
//           },
//         },
//       },
//     });
//   }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: string) {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  

  update(id: string, data: UpdateProductDto) {
    return this.prisma.product.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
    // await this.authController.loginUser({email: data.email, password: data.password});

  findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

}