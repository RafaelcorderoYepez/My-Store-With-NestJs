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
  @ApiOperation({ summary: 'Order Details list' })
  getQuery(
    @Query('limit') limit = 25,
    @Query('offset') offset = 0,
    @Query('order') order: number,
  ) {
    return this.orderDetailsService.findQuery(limit, offset, order);
  }

  // Order for Id
  @Get(':id')
  @ApiOperation({ summary: 'Order Detail data by Order Detail Id' })
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.orderDetailsService.findOne(id);
  }

  // create an order
  @Post()
  @ApiOperation({ summary: 'Create an Order Detail' })
  create(@Body() payload: CreateOrderDetailsDto) {
    return this.orderDetailsService.create(payload);
  }

  // create an order
  @Put(':id')
  @ApiOperation({ summary: 'Update an Order Detail' })
  @ApiOperation({ summary: 'Update an Order Detail' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateOrderDetailsDto,
  ) {
    return this.orderDetailsService.update(id, payload);
  }

  // delete an order
  @Delete(':id')
  @ApiOperation({ summary: 'Delete an Order Detail' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.orderDetailsService.delete(id);
  }
}
