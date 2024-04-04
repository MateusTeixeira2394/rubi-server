import { ApiProperty } from "@nestjs/swagger";

export default class BadRequestDTO {
  @ApiProperty({
    description: "It is an array of error messages",
    example: [
      "password should not be empty",
      "password must be shorter than or equal to 6 characters",
    ],
    type: [String],
  })
  message: string[];

  @ApiProperty({
    description: "The HTTP error description",
    example: "Bad Request",
  })
  error: string;

  @ApiProperty({
    description: "HTTP Status code",
    example: 400,
  })
  statusCode: number;
}
