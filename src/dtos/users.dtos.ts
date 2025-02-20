import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class CreateUsersDto {
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly recoveryToken: string;
}
export class UpdateUsersDto extends PartialType(CreateUsersDto) {}
