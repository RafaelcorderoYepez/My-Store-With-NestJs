import { IsString, IsUrl, IsNotEmpty } from 'class-validator';

import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateBrandsDto {
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
  readonly logo: string;
}
export class UpdateBrandsDto extends PartialType(CreateBrandsDto) {}
