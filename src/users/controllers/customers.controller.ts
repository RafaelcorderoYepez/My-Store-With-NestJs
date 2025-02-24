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

import { CustomersService } from '../services/customers.service';
import { CreateCustomersDto, UpdateCustomersDto } from '../dtos/customers.dtos';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  // customer list paginated by query

  @Get()
  @ApiOperation({ summary: 'Customers list' })
  getQuery(@Query('limit') limit = 25, @Query('offset') offset = 0) {
    return this.customersService.findQuery(limit, offset);
  }

  // Customer for Id
  @Get(':id')
  @ApiOperation({ summary: 'Customer data by Customer Id' })
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.findOne(id);
  }

  // create a customer
  @Post()
  @ApiOperation({ summary: 'Create a Customer' })
  create(@Body() payload: CreateCustomersDto) {
    return this.customersService.create(payload);
  }

  // update a customer
  @Put(':id')
  @ApiOperation({ summary: 'Update a Customer' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCustomersDto,
  ) {
    return this.customersService.update(id, payload);
  }

  // delete a customer
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Customer' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.delete(id);
  }
}
