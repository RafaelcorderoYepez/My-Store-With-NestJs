import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateCustomersDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly first_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly last_name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly address: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly phone: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly status: string;
}
export class UpdateCustomersDto extends PartialType(CreateCustomersDto) {}
