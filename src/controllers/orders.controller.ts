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

import { OrdersService } from '../services/orders.service';
import { CreateOrdersDto, UpdateOrdersDto } from '../dtos/orders.dtos';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}
  // Orders list paginated by query

  @Get()
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
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.findOne(id);
  }

  // create an order
  @Post()
  create(@Body() payload: CreateOrdersDto) {
    return this.ordersService.create(payload);
  }

  // create an order
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateOrdersDto,
  ) {
    return this.ordersService.update(id, payload);
  }

  // delete an order
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.delete(id);
  }
}
