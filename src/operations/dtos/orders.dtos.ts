import { IsString, IsNumber, IsPositive, IsNotEmpty } from 'class-validator';

import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateOrdersDto {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly orderNumber: number;

  @ApiProperty()
  @IsString()
  readonly orderDate: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly amount: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly customer: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  readonly user: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly status: string;
}
export class UpdateOrdersDto extends PartialType(CreateOrdersDto) {}
