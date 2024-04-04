import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MaxLength } from "class-validator";

export default class LoginBodyDTO {
  @ApiProperty({
    description: "User's email that has created his account",
    example: "user@corp.com",
    nullable: false,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    description: "User's password to authenticate his session",
    example: "abc123",
    nullable: false,
    type: "string",
    maxLength: 6,
  })
  @MaxLength(6)
  @IsNotEmpty()
  password: string;
}
