import { IsString, IsNumber, IsPositive, IsNotEmpty } from 'class-validator';

import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateOrderDetailsDto {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly sequence: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly orderNumber: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly product: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly quantity: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly unitPrice: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly status: string;
}

export class UpdateOrderDetailsDto extends PartialType(CreateOrderDetailsDto) {}
