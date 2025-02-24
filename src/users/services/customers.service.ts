import { Injectable, NotFoundException } from '@nestjs/common';

import { Customer } from '../entities/customers.entity';
import { CreateCustomersDto, UpdateCustomersDto } from '../dtos/customers.dtos';

@Injectable()
export class CustomersService {
  private counterId = 1;
  private customers: Customer[] = [
    {
      id: 1,
      first_name: 'Customer First name',
      last_name: 'Customer Last name',
      address: 'Address for Initial customer',
      phone: '+56930865559',
      email: 'email@email.com',
      status: 'Active',
    },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    const customer = this.customers.find((item) => item.id === id);
    if (!customer) {
      return new NotFoundException(`customer ${id} not found`);
    }
    return customer;
  }

  findQuery(limit: number, offset: number) {
    const customers = this.customers;
    if (!customers) {
      return new NotFoundException(`No customers found with this criteria`);
    }
    return {
      offset: offset,
      limit: limit,
      customers,
    };
  }

  create(payload: CreateCustomersDto) {
    this.counterId = this.counterId + 1;
    const newCustomer = {
      id: this.counterId,
      ...payload,
    };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  update(id: number, payload: UpdateCustomersDto) {
    const customerIndex = this.customers.findIndex((item) => item.id === id);
    const customer = this.customers[customerIndex];
    if (customerIndex === -1) {
      return new NotFoundException(`customer ${id} not found`);
    } else {
      this.customers[customerIndex] = {
        ...customer,
        ...payload,
      };
      return {
        message: 'customer updated',
        record: this.customers[customerIndex],
      };
    }
  }

  delete(id: number) {
    const customerIndex = this.customers.findIndex((item) => item.id === id);
    const customer = this.customers[customerIndex];
    if (customerIndex === -1) {
      return new NotFoundException(`customer ${id} not found`);
    } else {
      this.customers.splice(customerIndex, 1);
      return {
        message: 'customer deleted',
        record: customer,
      };
    }
  }
}
