// import { UpdateUserDto } from './../users/dto/update-user-dto';
import { ProductsService } from './products.service';
import { Controller , Get, Param, Post, Body, UseGuards, Patch, Delete} from '@nestjs/common';
// import { RolesGuard } from '../auth/guards/roles.guard';
import { UpdateProductDto } from './dto/update-product';
// import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
// import { Roles } from 'src/auth/decorators/roles.decorator';
// import { OwnershipGuard } from 'src/auth/guards/ownership.guard';
// import { Roles } from '../auth/guards/roles.guard';
// import { Role } from 'src/auth/decorators/roles.decorator';


@Controller('products')
// @UseGuards(JwtAuthGuard)

export class ProductsController {
    constructor(private readonly productService:ProductsService){}


    @Get()
    getAllProducts(){
        return this.productService.getAllProducts();
    }

    // @Get('category/:name')
    // async getProductsByCategory(@Param('name') name: string) {
    // return this.productService.getProductsByCategory(name);
    // }

    // @UseGuards(JwtAuthGuard )
    @Get(':id')
    getProduct(@Param('id') id:string){
        return this.productService.getProductById(id);
    }
    // @UseGuards(JwtAuthGuard, RolesGuard, OwnershipGuard)
    // @Roles(Role.ADMIN)
    @Patch(':id')
    updateProduct(@Param('id') id:string, @Body() data: UpdateProductDto){
        return this.productService.update(id, data);
    }
    // @UseGuards(JwtAuthGuard, RolesGuard, OwnershipGuard)
    // @Roles(Role.ADMIN)
    @Delete(':id')
    deleteProduct(@Param('id') id:string){
        return this.productService.delete(id);
    }
    // @UseGuards(JwtAuthGuard, RolesGuard)
    // @Roles(Role.ADMIN)
    @Post('createproduct')
    createProduct(
        @Body() body:{
            // id:number,
            name:string,
            description:string,
            imageUrl:string,
            categoryId:string,
            vendorId:string,

        },
    ){
        return this.productService.createProduct(body);
    }

}