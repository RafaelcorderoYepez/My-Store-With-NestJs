import {
  IsString,
  IsNumber,
  IsPositive,
  IsUrl,
  IsNotEmpty,
} from 'class-validator';

import { PartialType } from '@nestjs/mapped-types'

export class CreateBrandsDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsUrl()
  @IsNotEmpty()
  readonly logo: string;

}
export class UpdateBrandsDto extends PartialType(CreateBrandsDto) {}
