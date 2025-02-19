import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  // User list paginated by query

  @Get()
  getQuery(
    @Query('limit') limit = 25,
    @Query('offset') offset = 0,
  ): {
    message: string;
    detail: { limit: string; offset: string };
  } {
    return {
      message: `Users list`,
      detail: {
        limit: `${limit}`,
        offset: `${offset}`,
      },
    };
  }

  // Users filtered
  @Get('filter')
  getFilter() {
    return { Response: `I am a User filter` };
  }

  // User for Id
  @Get(':id')
  getOne(@Param('id') id: string) {
    return { Response: `UserId: ${id}` };
  }

  // create an user
  @Post()
  create(@Body() payload:any) {
    return {
      message: 'to create an user',
      payload: payload
    };
  }

  // update an user
  @Put(':id')
  update(@Param('id') id: any, @Body() payload:any) {
    return {
      message: 'to update an user',
      id: id,
      payload: payload
    };
  }

  // delete an user
  @Delete(':id')
  delete(@Param('id') id: any) {
    return {
      message: 'to delete an user',
      id: id
    };
  }
}
