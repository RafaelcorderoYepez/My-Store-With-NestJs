import { IsString, IsNotEmpty } from 'class-validator';

import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateUsersDto {
  @ApiProperty({ description: "User's username" })
  @IsString()
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ description: "User's password" })
  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ description: "User's name" })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ description: "User's recovery token for password changing" })
  @IsString()
  readonly recoveryToken: string;

  @ApiProperty({ description: "User's refresh token for new token" })
  @IsString()
  readonly refreshToken: string;
}
export class UpdateUsersDto extends PartialType(CreateUsersDto) {}
