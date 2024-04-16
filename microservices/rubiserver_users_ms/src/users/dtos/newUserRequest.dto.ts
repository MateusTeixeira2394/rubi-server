import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class newUserRequestDTO {
  @ApiProperty({
    description: "User's name that has created his account",
    example: 'Mateus Teixeira',
    nullable: false,
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: "User's email that has created his account.",
    example: 'mateus@corp.com',
    nullable: false,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: "User's password used to authenticate his session.",
    example: '123Abc',
    nullable: false,
  })
  @IsNotEmpty()
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
