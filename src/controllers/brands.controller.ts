import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  // brands list paginated by query

  @Get()
  getQuery(
    @Query('limit') limit = 25,
    @Query('offset') offset = 0,
    @Query('categoryId') categoryId: number,
  ): {
    message: string;
    detail: { limit: string; offset: string; categoryId: string };
  } {
    return {
      message: `Brands list`,
      detail: {
        limit: `${limit}`,
        offset: `${offset}`,
        categoryId: `${categoryId}`,
      },
    };
  }

  // brands filtered
  @Get('filter')
  getFilter() {
    return { Response: `I am a brand filter` };
  }

  // Brand for Id
  @Get(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id') id: any) {
    return { Response: `Id: ${id}` };
  }

  // Brands for categories
  @Get(':id/categories/:categoryId')
  getByCategory(
    @Param('id') id: string,
    @Param('categoryId') categoryId: string,
  ) {
    return { params: { BrandId: `${id}`, categoryId: `${categoryId}` } };
  }

  // create a brand
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'to create a brand',
      payload: payload
    };
  }

  // create a brand
  @Put(':id')
  update(@Param('id') id: any, @Body() payload: any) {
    return {
      message: 'to update a brand',
      id: id,
      payload: payload
    };
  }

  // delete a brand
  @Delete(':id')
  delete(@Param('id') id: any) {
    return {
      message: 'to delete a brand',
      id: id
    };
  }
}
