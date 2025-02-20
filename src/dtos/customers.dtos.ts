import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateCustomersDto {
  @IsString()
  @IsNotEmpty()
  readonly first_name: string;

  @IsString()
  @IsNotEmpty()
  readonly last_name: string;

  @IsString()
  @IsNotEmpty()
  readonly address: string;

  @IsString()
  @IsNotEmpty()
  readonly phone: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly status: string;
}
export class UpdateCustomersDto extends PartialType(CreateCustomersDto) {}
