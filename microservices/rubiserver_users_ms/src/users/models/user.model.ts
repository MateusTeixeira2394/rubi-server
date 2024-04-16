import { ApiProperty } from '@nestjs/swagger';

export default class User {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description:
      "The user's ID is formed using a randomly generated UUID (Universally Unique ID) to prevent potential conflicts and enhance security.",
    type: 'string',
    maxLength: 60,
    nullable: true,
  })
  id?: string;

  @ApiProperty({
    example: "User's name",
    description: 'Message response',
    type: 'string',
    maxLength: 50,
    nullable: false,
  })
  name: string;

  @ApiProperty({
    example: "User's email",
    description: '',
    type: 'string',
    maxLength: 50,
    nullable: false,
  })
  email: string;

  @ApiProperty({
    example: '$2a$10$6jLv7ftymCL2IgdzEI4Y.eLo8/vZjcUvemsUDFYLc98nZho4x3aZO',
    description:
      "It is the user's password one-way encrypted to protect the user password content from unauthorized access",
    type: 'string',
    maxLength: 36,
    nullable: false,
  })
  hashedPassword?: string;

  @ApiProperty({
    description:
      "The code identifies the user's role, granting access that is restricted to specific roles.",
    example: 1,
    nullable: false,
  })
  roleId: number;
}
