import { ApiProperty } from "@nestjs/swagger";

export default class LoginResponseDTO {
  @ApiProperty({
    example: "user successfully logged",
    description: "Message response",
  })
  readonly message: string;

  @ApiProperty({
    example: "",
    description:
      "It is a credential that authorizes a user or application to access specific resources or services within a system for a limited period.",
  })
  readonly accessToken: string;

  @ApiProperty({
    example: "",
    description:
      "It is a credential used to obtain a new access token without requiring the user to re-enter their login credentials, typically used for longer-term authorization.",
  })
  readonly refreshToken: string;
}
