import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  // Category list paginated by query

  @Get()
  getQuery(
    @Query('limit') limit = 25,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ): {
    message: string;
    detail: { limit: string; offset: string; brand: string };
  } {
    return {
      message: `Categories list`,
      detail: { limit: `${limit}`, offset: `${offset}`, brand: `${brand}` },
    };
  }

  // categories filtered
  @Get('filter')
  getFilter() {
    return { Response: `I am a Category filter` };
  }

  // Category for Id
  @Get(':id')
  getOne(@Param('id') id: string) {
    return { Response: `Id: ${id}` };
  }

  // categories for Brands
  @Get(':id/brands/:brandId')
  getByBrand(@Param('id') id: string, @Param('brandId') brandId: string) {
    return { params: { CategoryId: `${id}`, BrandId: `${brandId}` } };
  }

  // create a category
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'to create a category',
      payload: payload,
    };
  }

  // update a category
  @Put(':id')
  update(@Param('id') id: any, @Body() payload: any) {
    return {
      message: 'to update a category',
      id: id,
      payload: payload
    };
  }

  // delete a category
  @Delete(':id')
  delete(@Param('id') id: any) {
    return {
      message: 'to delete a category',
      id: id
    };
  }
}
