import { Injectable, NotFoundException } from '@nestjs/common';

import { Category } from '../entities/categories.entity';
import {
  CreateCategoriesDto,
  UpdateCategoriesDto,
} from '../dtos/categories.dtos';

@Injectable()
export class CategoriesService {
  private counterId = 1;
  private categories: Category[] = [
    {
      id: 1,
      name: 'Initial category',
      description: 'Description for Initial category',
      image: 'http://image01.images.com',
    },
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const category = this.categories.find((item) => item.id === id);
    if (!category) {
      return new NotFoundException(`category ${id} not found`);
    }
    return category;
  }

  findQuery(limit: number, offset: number) {
    const categories = this.categories;
    if (!categories) {
      return new NotFoundException(`No categories found with this criteria`);
    }
    return {
      offset: offset,
      limit: limit,
      categories,
    };
  }

  create(payload: CreateCategoriesDto) {
    this.counterId = this.counterId + 1;
    const newCategory = {
      id: this.counterId,
      ...payload,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  update(id: number, payload: UpdateCategoriesDto) {
    const categoryIndex = this.categories.findIndex((item) => item.id === id);
    const category = this.categories[categoryIndex];
    if (categoryIndex === -1) {
      return new NotFoundException(`category ${id} not found`);
    } else {
      this.categories[categoryIndex] = {
        ...category,
        ...payload,
      };
      return {
        message: 'category updated',
        record: this.categories[categoryIndex],
      };
    }
  }

  delete(id: number) {
    const categoryIndex = this.categories.findIndex((item) => item.id === id);
    const category = this.categories[categoryIndex];
    if (categoryIndex === -1) {
      return new NotFoundException(`category ${id} not found`);
    } else {
      this.categories.splice(categoryIndex, 1);
      return {
        message: 'category deleted',
        record: category,
      };
    }
  }
}
