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

import { BrandsService } from '../services/brands.service';
import { CreateBrandsDto, UpdateBrandsDto } from '../dtos/brands.dtos';

@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}
  // brands list paginated by query

  @Get()
  @ApiOperation({ summary: 'Brands list' })
  getQuery(
    @Query('limit', ParseIntPipe) limit = 25,
    @Query('offset', ParseIntPipe) offset = 0,
  ) {
    return this.brandsService.findQuery(limit, offset);
  }

  // Brand for Id
  @Get(':id')
  @ApiOperation({ summary: 'Brand data by Brand Id' })
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.brandsService.findOne(id);
  }

  // create a brand
  @Post()
  @ApiOperation({ summary: 'Create a Brand' })
  create(@Body() payload: CreateBrandsDto) {
    return this.brandsService.create(payload);
  }

  // create a brand
  @Put(':id')
  @ApiOperation({ summary: 'Update a Brand' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateBrandsDto,
  ) {
    return this.brandsService.update(id, payload);
  }

  // delete a brand
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Brand' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.brandsService.delete(id);
  }
}
