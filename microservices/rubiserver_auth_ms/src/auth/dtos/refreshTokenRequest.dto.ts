import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class RefreshTokenRequestDto {
  @ApiProperty({
    example: "",
    description:
      "It is a credential used to obtain a new access token without requiring the user to re-enter their login credentials, typically used for longer-term authorization.",
  })
  @IsNotEmpty()
  readonly refreshToken: string;
}
