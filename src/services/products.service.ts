import { Injectable, NotFoundException } from '@nestjs/common';

import { Product } from '../entities/product.entity';
import { CreateProductsDto, UpdateProductsDto } from '../dtos/products.dtos';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 01',
      description: 'Description product 01',
      price: 122,
      stock: 10,
      image: 'http://image01.images.com',
      brand: 1,
      category: 1,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      return new NotFoundException(`Product ${id} not found`);
    }
    return product;
  }

  findQuery(limit: number, offset: number, brand: number, category: number) {
    const products = this.products.filter(
      (item) => item.brand === brand && item.category === category,
    );
    if (!products) {
      return new NotFoundException(`No Products found with this criteria`);
    }
    return products;
  }

  create(payload: CreateProductsDto) {
    this.counterId = this.counterId + 1;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductsDto) {
    const productIndex = this.products.findIndex((item) => item.id === id);
    const product = this.products[productIndex];
    if (productIndex === -1) {
      return new NotFoundException(`Product ${id} not found`);
    } else {
      this.products[productIndex] = {
        ...product,
        ...payload,
      };
      return {
        message: 'Product updated',
        record: this.products[productIndex],
      };
    }
  }

  delete(id: number) {
    const productIndex = this.products.findIndex((item) => item.id === id);
    const product = this.products[productIndex];
    if (productIndex === -1) {
      return new NotFoundException(`Product ${id} not found`);
    } else {
      this.products.splice(productIndex, 1);
      return {
        message: 'Product deleted',
        record: product,
      };
    }
  }
}
