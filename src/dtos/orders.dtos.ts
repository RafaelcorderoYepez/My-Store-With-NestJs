import {
  IsString,
  IsNumber,
  IsPositive,
  IsNotEmpty,
  IsDate,
} from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateOrdersDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly orderNumber: number;

  @IsDate()
  @IsNotEmpty()
  readonly orderDate: Date;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly amount: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly customer: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly user: number;

  @IsString()
  @IsNotEmpty()
  readonly status: string;
}
export class UpdateOrdersDto extends PartialType(CreateOrdersDto) {}
