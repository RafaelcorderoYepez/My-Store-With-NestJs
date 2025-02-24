import { Injectable, NotFoundException } from '@nestjs/common';

import { Order } from '../entities/orders.entity';
import { CreateOrdersDto, UpdateOrdersDto } from '../dtos/orders.dtos';

@Injectable()
export class OrdersService {
  private counterId = 1;
  private counterOrderNumber = 1;
  private orders: Order[] = [
    {
      id: 1,
      orderNumber: this.counterOrderNumber,
      orderDate: '01-01-2025',
      amount: 150,
      customer: 1,
      user: 1,
      status: 'Pending',
    },
  ];

  findAll() {
    return this.orders;
  }

  findOne(id: number) {
    const order = this.orders.find((item) => item.id === id);
    if (!order) {
      return new NotFoundException(`Order ${id} not found`);
    }
    return order;
  }

  findQuery(limit: number, offset: number, customer: number, user: number) {
    const orders = this.orders;
    if (!orders) {
      return new NotFoundException(`No orders found with this criteria`);
    }
    return {
      offset: offset,
      limit: limit,
      customer: customer,
      user: user,
      orders,
    };
  }

  create(payload: CreateOrdersDto) {
    this.counterId = this.counterId + 1;
    this.counterOrderNumber = this.counterOrderNumber + 1;
    const newOrder = {
      id: this.counterId,
      ...payload,
    };
    this.orders.push(newOrder);
    return newOrder;
  }

  update(id: number, payload: UpdateOrdersDto) {
    const orderIndex = this.orders.findIndex((item) => item.id === id);
    const order = this.orders[orderIndex];
    if (orderIndex === -1) {
      return new NotFoundException(`Order ${id} not found`);
    } else {
      this.orders[orderIndex] = {
        ...order,
        ...payload,
      };
      return {
        message: 'Order updated',
        record: this.orders[orderIndex],
      };
    }
  }

  delete(id: number) {
    const orderIndex = this.orders.findIndex((item) => item.id === id);
    const order = this.orders[orderIndex];
    if (orderIndex === -1) {
      return new NotFoundException(`order ${id} not found`);
    } else {
      this.orders.splice(orderIndex, 1);
      return {
        message: 'Order deleted',
        record: order,
      };
    }
  }
}
