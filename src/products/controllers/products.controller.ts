import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  ParseIntPipe,
} from '@nestjs/common';

import { ApiOperation } from '@nestjs/swagger';

import { ProductsService } from '../services/products.service';
import { CreateProductsDto, UpdateProductsDto } from '../dtos/products.dtos';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  // brands list paginated by query

  @Get()
  @ApiOperation({ summary: 'Products list' })
  getQuery(
    @Query('limit', ParseIntPipe) limit = 25,
    @Query('offset', ParseIntPipe) offset = 0,
    @Query('brand', ParseIntPipe) brand: number,
    @Query('category', ParseIntPipe) category: number,
  ) {
    return this.productsService.findQuery(limit, offset, brand, category);
  }

  // Product for Id
  @Get(':id')
  @ApiOperation({ summary: 'Product data by Product Id' })
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  // // Product for categories
  // @Get(':id/categories/:categoryId')
  // @ApiOperation({ summary: 'C list by User Id' })
  // getByCategory(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Param('categoryId', ParseIntPipe) categoryId: number,
  // ) {
  //   return { params: { ProductId: `${id}`, CategoryId: `${categoryId}` } };
  // }

  // Product for brands
  // @Get(':id/brands/:brandId')
  // getByBrand(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Param('brandId', ParseIntPipe) brandId: number,
  // ) {
  //   return { params: { ProductId: `${id}`, BrandId: `${brandId}` } };
  // }

  // create a product
  @Post()
  @ApiOperation({ summary: 'Create a Product' })
  create(@Body() payload: CreateProductsDto) {
    return this.productsService.create(payload);
  }

  // update a product
  @Put(':id')
  @ApiOperation({ summary: 'Update a Product' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductsDto,
  ) {
    return this.productsService.update(id, payload);
  }

  // delete a product
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Product' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.delete(id);
  }
}
