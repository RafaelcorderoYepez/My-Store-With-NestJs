import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  // Orders list paginated by query

  @Get()
  getQuery(
    @Query('limit') limit = 25,
    @Query('offset') offset = 0,
    @Query('userId') userId: number,
  ): {
    message: string;
    detail: { limit: string; offset: string; userId: string };
  } {
    return {
      message: `Orders list`,
      detail: {
        limit: `${limit}`,
        offset: `${offset}`,
        userId: `${userId}`,
      },
    };
  }

  // Orders filtered
  @Get('filter')
  getFilter() {
    return { Response: `I am a Order filter` };
  }

  // Order for Id
  @Get(':id')
  getOne(@Param('id') id: string) {
    return { Response: `Id: ${id}` };
  }

  // Orders for users
  @Get(':id/users/:userId')
  getByUser(@Param('id') id: string, @Param('userId') userId: string) {
    return { params: { OrderId: `${id}`, UserId: `${userId}` } };
  }

  // create an order
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'to create an order',
      payload: payload
    };
  }

  // create an order
  @Put(':id')
  update(@Param('id') id: any, @Body() payload: any) {
    return {
      message: 'to update an order',
      id: id,
      payload: payload
    };
  }

  // delete an order
  @Delete(':id')
  delete(@Param('id') id: any) {
    return {
      message: 'to delete an order',
      id: id
    };
  }
}
