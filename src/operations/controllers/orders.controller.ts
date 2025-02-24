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

import { OrdersService } from '../services/orders.service';
import { CreateOrdersDto, UpdateOrdersDto } from '../dtos/orders.dtos';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}
  // Orders list paginated by query

  @Get()
  @ApiOperation({ summary: 'Orders list' })
  getQuery(
    @Query('limit') limit = 25,
    @Query('offset') offset = 0,
    @Query('customer') customer: number,
    @Query('user') user: number,
  ) {
    return this.ordersService.findQuery(limit, offset, customer, user);
  }

  // Order for Id
  @Get(':id')
  @ApiOperation({ summary: 'Order data by Order Id' })
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.findOne(id);
  }

  // create an order
  @Post()
  @ApiOperation({ summary: 'Create an Order' })
  create(@Body() payload: CreateOrdersDto) {
    return this.ordersService.create(payload);
  }

  // create an order
  @Put(':id')
  @ApiOperation({ summary: 'Update an Order' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateOrdersDto,
  ) {
    return this.ordersService.update(id, payload);
  }

  // delete an order
  @Delete(':id')
  @ApiOperation({ summary: 'Delete an Order' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.delete(id);
  }
}
