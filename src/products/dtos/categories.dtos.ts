import { IsString, IsUrl, IsNotEmpty } from 'class-validator';

import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateCategoriesDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty()
  @IsString()
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}
export class UpdateCategoriesDto extends PartialType(CreateCategoriesDto) {}
