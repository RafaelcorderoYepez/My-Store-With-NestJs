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

import { CustomersService } from '../services/customers.service';
import { CreateCustomersDto, UpdateCustomersDto } from '../dtos/customers.dtos';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  // customer list paginated by query

  @Get()
  getQuery(@Query('limit') limit = 25, @Query('offset') offset = 0) {
    return this.customersService.findQuery(limit, offset);
  }

  // Customer for Id
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.findOne(id);
  }

  // create a customer
  @Post()
  create(@Body() payload: CreateCustomersDto) {
    return this.customersService.create(payload);
  }

  // update a customer
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCustomersDto,
  ) {
    return this.customersService.update(id, payload);
  }

  // delete a customer
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.customersService.delete(id);
  }
}
