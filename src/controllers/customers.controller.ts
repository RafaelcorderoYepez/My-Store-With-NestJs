import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  // customer list paginated by query

  @Get()
  getQuery(
    @Query('limit') limit = 25,
    @Query('offset') offset = 0,
  ): {
    message: string;
    detail: { limit: string; offset: string };
  } {
    return {
      message: `Customers list`,
      detail: {
        limit: `${limit}`,
        offset: `${offset}`,
      },
    };
  }

  // Customers filtered
  @Get('filter')
  getFilter() {
    return { Response: `I am a Customer filter` };
  }

  // Customer for Id
  @Get(':id')
  getOne(@Param('id') id: string) {
    return { Response: `Id: ${id}` };
  }

  // create a customer
  @Post()
  create(@Body() payload: any) {
    return {
      message: 'to create a customer',
      payload: payload
    };
  }

  // update a customer
  @Put(':id')
  update(@Param('id') id: any, @Body() payload: any) {
    return {
      message: 'to update a customer',
      id: id,
      payload: payload
    };
  }

  // delete a customer
  @Delete(':id')
  delete(@Param('id') id: any) {
    return {
      message: 'to delete a customer',
      id: id
    };
  }
}
