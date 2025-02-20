import { IsString, IsUrl, IsNotEmpty } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateCategoriesDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsString()
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}
export class UpdateCategoriesDto extends PartialType(CreateCategoriesDto) {}
