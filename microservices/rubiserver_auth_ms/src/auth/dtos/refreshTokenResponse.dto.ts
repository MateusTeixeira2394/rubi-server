import { ApiProperty } from "@nestjs/swagger";

export class RefreshTokenResponseDto {
  @ApiProperty({
    example: "",
    description:
      "It is a credential that authorizes a user or application to access specific resources or services within a system for a limited period.",
  })
  readonly accessToken: string;
}
