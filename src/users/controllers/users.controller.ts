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

import { UsersService } from '../services/users.service';
import { CreateUsersDto, UpdateUsersDto } from '../dtos/users.dtos';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  // User list paginated by query

  @Get()
  @ApiOperation({ summary: 'Users list' })
  getQuery(@Query('limit') limit = 25, @Query('offset') offset = 0) {
    return this.usersService.findQuery(limit, offset);
  }

  // User for Id
  @Get(':id')
  @ApiOperation({ summary: 'User data by User Id' })
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  // User for Id
  @Get(':id/orders')
  @ApiOperation({ summary: 'Orders list by User Id' })
  getOrder(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOrderByUser(id);
  }

  // create an user
  @Post()
  @ApiOperation({ summary: 'Create an User' })
  create(@Body() payload: CreateUsersDto) {
    return this.usersService.create(payload);
  }

  // update an user
  @Put(':id')
  @ApiOperation({ summary: 'Update an User' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateUsersDto,
  ) {
    return this.usersService.update(id, payload);
  }

  // delete an user
  @Delete(':id')
  @ApiOperation({ summary: 'Delete an User' })
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
