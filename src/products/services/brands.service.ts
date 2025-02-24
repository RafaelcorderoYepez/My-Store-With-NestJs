import { Injectable, NotFoundException } from '@nestjs/common';

import { Brand } from '../entities/brands.entity';
import { CreateBrandsDto, UpdateBrandsDto } from '../dtos/brands.dtos';

@Injectable()
export class BrandsService {
  private counterId = 1;
  private brands: Brand[] = [
    {
      id: 1,
      name: 'Initial Brand',
      description: 'Description for Initial Brand',
      logo: 'http://image01.images.com',
    },
  ];

  findAll() {
    return this.brands;
  }

  findOne(id: number) {
    const brand = this.brands.find((item) => item.id === id);
    if (!brand) {
      return new NotFoundException(`brand ${id} not found`);
    }
    return brand;
  }

  findQuery(limit: number, offset: number) {
    const brands = this.brands;
    if (!brands) {
      return new NotFoundException(`No brands found with this criteria`);
    }
    return {
      offset: offset,
      limit: limit,
      brands,
    };
  }

  create(payload: CreateBrandsDto) {
    this.counterId = this.counterId + 1;
    const newBrand = {
      id: this.counterId,
      ...payload,
    };
    this.brands.push(newBrand);
    return newBrand;
  }

  update(id: number, payload: UpdateBrandsDto) {
    const brandIndex = this.brands.findIndex((item) => item.id === id);
    const brand = this.brands[brandIndex];
    if (brandIndex === -1) {
      return new NotFoundException(`brand ${id} not found`);
    } else {
      this.brands[brandIndex] = {
        ...brand,
        ...payload,
      };
      return {
        message: 'brand updated',
        record: this.brands[brandIndex],
      };
    }
  }

  delete(id: number) {
    const brandIndex = this.brands.findIndex((item) => item.id === id);
    const brand = this.brands[brandIndex];
    if (brandIndex === -1) {
      return new NotFoundException(`brand ${id} not found`);
    } else {
      this.brands.splice(brandIndex, 1);
      return {
        message: 'brand deleted',
        record: brand,
      };
    }
  }
}
