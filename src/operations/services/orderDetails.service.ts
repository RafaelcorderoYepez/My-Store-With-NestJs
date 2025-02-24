import { Injectable, NotFoundException } from '@nestjs/common';

import { OrderDetail } from '../entities/orderDetails.entity';
import {
  CreateOrderDetailsDto,
  UpdateOrderDetailsDto,
} from '../dtos/orderDetail.dtos';

@Injectable()
export class OrderDetailsService {
  private counterId = 1;
  private counterOrderDetailSequenceNumber = 1;
  private orderDetails: OrderDetail[] = [
    {
      id: 1,
      sequence: this.counterOrderDetailSequenceNumber,
      orderNumber: 1,
      product: 1,
      quantity: 1,
      unitPrice: 1,
      status: 'Pending',
    },
  ];

  findAll() {
    return this.orderDetails;
  }

  findOne(id: number) {
    const orderDetail = this.orderDetails.find((item) => item.id === id);
    if (!orderDetail) {
      return new NotFoundException(`Order Detail ${id} not found`);
    }
    return orderDetail;
  }

  findQuery(limit: number, offset: number, order: number) {
    const orderDetails = this.orderDetails;
    if (!orderDetails) {
      return new NotFoundException(`No order details found with this criteria`);
    }
    return {
      offset: offset,
      limit: limit,
      order: order,
      orderDetails,
    };
  }

  create(payload: CreateOrderDetailsDto) {
    this.counterId = this.counterId + 1;
    this.counterOrderDetailSequenceNumber =
      this.counterOrderDetailSequenceNumber + 1;
    const newOrder = {
      id: this.counterId,
      ...payload,
    };
    this.orderDetails.push(newOrder);
    return newOrder;
  }

  update(id: number, payload: UpdateOrderDetailsDto) {
    const orderDetailIndex = this.orderDetails.findIndex(
      (item) => item.id === id,
    );
    const orderDetail = this.orderDetails[orderDetailIndex];
    if (orderDetailIndex === -1) {
      return new NotFoundException(`Order ${id} not found`);
    } else {
      this.orderDetails[orderDetailIndex] = {
        ...orderDetail,
        ...payload,
      };
      return {
        message: 'Order updated',
        record: this.orderDetails[orderDetailIndex],
      };
    }
  }

  delete(id: number) {
    const orderDetailIndex = this.orderDetails.findIndex(
      (item) => item.id === id,
    );
    const orderDetail = this.orderDetails[orderDetailIndex];
    if (orderDetailIndex === -1) {
      return new NotFoundException(`order Detail${id} not found`);
    } else {
      this.orderDetails.splice(orderDetailIndex, 1);
      return {
        message: 'Order Detail deleted',
        record: orderDetail,
      };
    }
  }
}
