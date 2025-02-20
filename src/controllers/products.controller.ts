import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  //ParseIntPipe
} from '@nestjs/common';

import { ProductsService } from '../services/products.service';
import { ParseIntPipe } from '../common/parse-int.pipe';
import { CreateProductsDto, UpdateProductsDto } from '../dtos/products.dtos';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get()
  getAll() {
    return this.productsService.findAll();
  }
  // brands list paginated by query

  @Get()
  getQuery(
    @Query('limit', ParseIntPipe) limit = 25,
    @Query('offset', ParseIntPipe) offset = 0,
    @Query('brand', ParseIntPipe) brand: number,
    @Query('category', ParseIntPipe) category: number,
  ) {
    return this.productsService.findQuery(limit, offset, brand, category);
  }

  // products filtered
  @Get('filter')
  getFilter() {
    return { Response: `I am a filter` };
  }

  // Product for Id
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
    // return { Response: `Id: ${id}` };
  }

  // Product for categories
  @Get(':id/categories/:categoryId')
  getByCategory(
    @Param('id', ParseIntPipe) id: number,
    @Param('categoryId', ParseIntPipe) categoryId: number,
  ) {
    return { params: { ProductId: `${id}`, CategoryId: `${categoryId}` } };
  }

  // Product for brands
  @Get(':id/brands/:brandId')
  getByBrand(
    @Param('id', ParseIntPipe) id: number,
    @Param('brandId', ParseIntPipe) brandId: number,
  ) {
    return { params: { ProductId: `${id}`, BrandId: `${brandId}` } };
  }

  // create a product
  @Post()
  create(@Body() payload: CreateProductsDto) {
    return this.productsService.create(payload);
  }

  // update a product
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductsDto,
  ) {
    return this.productsService.update(id, payload);
  }

  // delete a product
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.delete(id);
  }
}
