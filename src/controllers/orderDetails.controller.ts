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

import { OrderDetailsService } from '../services/orderDetails.service';
import {
  CreateOrderDetailsDto,
  UpdateOrderDetailsDto,
} from '../dtos/orderDetail.dtos';

@Controller('orderDetails')
export class OrderDetailsController {
  constructor(private orderDetailsService: OrderDetailsService) {}
  // OrderDetails list paginated by query

  @Get()
  getQuery(
    @Query('limit') limit = 25,
    @Query('offset') offset = 0,
    @Query('order') order: number,
  ) {
    return this.orderDetailsService.findQuery(limit, offset, order);
  }

  // Order for Id
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.orderDetailsService.findOne(id);
  }

  // create an order
  @Post()
  create(@Body() payload: CreateOrderDetailsDto) {
    return this.orderDetailsService.create(payload);
  }

  // create an order
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateOrderDetailsDto,
  ) {
    return this.orderDetailsService.update(id, payload);
  }

  // delete an order
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.orderDetailsService.delete(id);
  }
}
