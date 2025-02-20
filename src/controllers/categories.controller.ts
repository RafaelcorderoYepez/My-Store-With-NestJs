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

import { CategoriesService } from '../services/categories.service';
import {
  CreateCategoriesDto,
  UpdateCategoriesDto,
} from '../dtos/categories.dtos';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}
  // Category list paginated by query

  @Get()
  getQuery(
    @Query('limit', ParseIntPipe) limit = 25,
    @Query('offset', ParseIntPipe) offset = 0,
  ) {
    console.log('getQuery');
    return this.categoriesService.findQuery(limit, offset);
  }

  // Category for Id
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    console.log('getOne');
    return this.categoriesService.findOne(id);
  }

  // create a category
  @Post()
  create(@Body() payload: CreateCategoriesDto) {
    return this.categoriesService.create(payload);
  }

  // update a category
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCategoriesDto,
  ) {
    return this.categoriesService.update(id, payload);
  }

  // delete a category
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.categoriesService.delete(id);
  }
}
