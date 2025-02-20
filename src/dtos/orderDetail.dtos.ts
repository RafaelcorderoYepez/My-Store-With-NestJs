import { IsString, IsNumber, IsPositive, IsNotEmpty } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateOrderDetailsDto {
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly sequence: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly orderNumber: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly product: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly quantity: number;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly unitPrice: number;

  @IsString()
  @IsNotEmpty()
  readonly status: string;
}

export class UpdateOrderDetailsDto extends PartialType(CreateOrderDetailsDto) {}
