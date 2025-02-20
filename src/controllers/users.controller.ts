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

import { UsersService  } from '../services/users.service';
import { CreateUsersDto, UpdateUsersDto } from '../dtos/users.dtos';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  // User list paginated by query

  @Get()
  getQuery(@Query('limit') limit = 25, @Query('offset') offset = 0) {
    return this.usersService.findQuery(limit, offset);
  }

  // User for Id
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  // create an user
  @Post()
  create(@Body() payload: CreateUsersDto) {
    return this.usersService.create(payload);
  }

  // update an user
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateUsersDto,
  ) {
    return this.usersService.update(id, payload);
  }

  // delete an user
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
