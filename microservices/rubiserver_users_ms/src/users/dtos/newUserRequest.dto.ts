import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class NewUserRequestDTO {
  @ApiProperty({
    description: "User's name that has created his account",
    example: 'Mateus Teixeira',
    nullable: false,
    maxLength: 50,
  })
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @ApiProperty({
    description: "User's email that has created his account.",
    example: 'mateus@corp.com',
    nullable: false,
    maxLength: 50,
  })
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(60)
  email: string;

  @ApiProperty({
    description: "User's password used to authenticate his session.",
    example: '123Abc',
    nullable: false,
    minLength: 6,
  })
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @ApiProperty({
    description:
      'The password confirmation must match the password to ensure the user has not made any mistakes.',
    example: '123Abc',
    nullable: false,
  })
  @IsNotEmpty()
  confirmationPassword: string;

  @ApiProperty({
    description:
      "The code identifies the user's role, granting access that is restricted to specific roles.",
    example: 1,
    nullable: false,
  })
  @IsNotEmpty()
  roleId: number;
}
