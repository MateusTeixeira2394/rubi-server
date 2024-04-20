import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength } from 'class-validator';

export class RecoverUserRequestDTO {
  @ApiProperty({
    description: "User's password used to authenticate the recover request",
    example: '123Abc',
    nullable: false,
    minLength: 6,
  })
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
