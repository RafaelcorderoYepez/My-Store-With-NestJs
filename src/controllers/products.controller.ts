import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  // brands list paginated by query

  @Get()
  getQuery(
    @Query('limit') limit = 25,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
    @Query('category') category: string,
  ): {
    message: string;
    detail: { limit: string; offset: string; brand: string; category: string };
  } {
    return {
      message: `Products list`,
      detail: {
        limit: `${limit}`,
        offset: `${offset}`,
        brand: `${brand}`,
        category: `${category}`,
      },
    };
  }

  // products filtered
  @Get('filter')
  getFilter() {
    return { Response: `I am a filter` };
  }

  // Product for Id
  @Get(':id')
  getOne(@Param('id') id: string) {
    return { Response: `Id: ${id}` };
  }

  // Product for categories
  @Get(':id/categories/:categoryId')
  getByCategory(
    @Param('id') id: string,
    @Param('categoryId') categoryId: string,
  ) {
    return { params: { ProductId: `${id}`, CategoryId: `${categoryId}` } };
  }

  // Product for brands
  @Get(':id/brands/:brandId')
  getByBrand(@Param('id') id: string, @Param('brandId') brandId: string) {
    return { params: { ProductId: `${id}`, BrandId: `${brandId}` } };
  }

  // create a product
  @Post()
  create(@Body() payload:any) {
    return {
      message: 'to create a product',
      payload: payload
    };
  }

  // update a product
  @Put(':id')
  update(@Param('id') id: any, @Body() payload:any) {
    return {
      message: 'to update a product',
      id: id,
      payload: payload
    };
  }

  // delete a product
  @Delete(':id')
  delete(@Param('id') id: any) {
    return {
      message: 'to delete a product',
      id: id
    };
  }
}
