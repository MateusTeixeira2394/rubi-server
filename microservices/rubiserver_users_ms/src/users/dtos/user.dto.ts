import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    example: '550e8400-e29b-41d4-a716-446655440000',
    description:
      "The user's ID is formed using a randomly generated UUID (Universally Unique ID) to prevent potential conflicts and enhance security.",
    type: 'string',
    maxLength: 60,
    nullable: true,
  })
  id: string;

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
    description:
      "The code identifies the user's role, granting access that is restricted to specific roles.",
    example: 1,
    nullable: false,
  })
  roleId: number;
}
