import { ApiProperty } from '@nestjs/swagger';
import User from '../models/user.model';

export class NewUserResponseDTO {
  @ApiProperty({
    example: 'User has successfully created.',
    description: 'Message response',
  })
  readonly message: string;

  @ApiProperty({
    example: 200,
    description: 'HTTP Status Code',
  })
  readonly statusCode: number;

  @ApiProperty({
    description: 'The created user data',
  })
  readonly user: User;
}
