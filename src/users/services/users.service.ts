import { Injectable, NotFoundException } from '@nestjs/common';

import { User } from '../entities/users.entity';
import { CreateUsersDto, UpdateUsersDto } from '../dtos/users.dtos';

import { OrdersService } from '../../operations/services/orders.service';

@Injectable()
export class UsersService {
  constructor(private ordersService: OrdersService) {}

  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      username: 'Initial username',
      password: 'Initial password',
      name: 'Initial name',
      recoveryToken: ' ',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === id);
    if (!user) {
      return new NotFoundException(`user ${id} not found`);
    }
    return user;
  }

  findOrderByUser(id: number) {
    const user = this.findOne(id);
    if (!user) {
      return new NotFoundException(`user ${id} not found`);
    }
    const ordersByUser = this.ordersService.findAll();
    return {
      user: user,
      orders: ordersByUser.filter((value) => value.user === id),
    };
  }

  findQuery(limit: number, offset: number) {
    const users = this.users;
    if (!users) {
      return new NotFoundException(`No users found with this criteria`);
    }
    return {
      offset: offset,
      limit: limit,
      users,
    };
  }

  create(payload: CreateUsersDto) {
    this.counterId = this.counterId + 1;
    const newUser = {
      id: this.counterId,
      ...payload,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, payload: UpdateUsersDto) {
    const userIndex = this.users.findIndex((item) => item.id === id);
    const user = this.users[userIndex];
    if (userIndex === -1) {
      return new NotFoundException(`user ${id} not found`);
    } else {
      this.users[userIndex] = {
        ...user,
        ...payload,
      };
      return {
        message: 'user updated',
        record: this.users[userIndex],
      };
    }
  }

  delete(id: number) {
    const userIndex = this.users.findIndex((item) => item.id === id);
    const user = this.users[userIndex];
    if (userIndex === -1) {
      return new NotFoundException(`user ${id} not found`);
    } else {
      this.users.splice(userIndex, 1);
      return {
        message: 'User deleted',
        record: user,
      };
    }
  }
}
