import { ApiProperty } from '@nestjs/swagger';

export class ResponseDTO {
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
}
