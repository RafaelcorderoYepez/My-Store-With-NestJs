import { Module } from '@nestjs/common';

import { OrdersController } from './controllers/orders.controller';
import { OrderDetailsController } from './controllers/orderDetails.controller';

import { OrdersService } from './services/orders.service';
import { OrderDetailsService } from './services/orderDetails.service';

@Module({
  controllers: [OrdersController, OrderDetailsController],
  providers: [OrdersService, OrderDetailsService],
  exports: [OrdersService],
})
export class OperationsModule {}
