import { Module } from '@nestjs/common';

import { CustomersController } from './controllers/customers.controller';
import { UsersController } from './controllers/users.controller';

import { CustomersService } from './services/customers.service';
import { UsersService } from './services/users.service';

import { OperationsModule } from '../operations/operations.module';

@Module({
  imports: [OperationsModule],
  controllers: [CustomersController, UsersController],
  providers: [CustomersService, UsersService],
})
export class UsersModule {}
