import { Body, Controller, Post } from "@nestjs/common";
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import LoginBodyDTO from "./dtos/loginBody.dto";
import LoginResponseDTO from "./dtos/loginResponse.dto";
import LoginBadRequestResponseDto from "./dtos/loginBadRequestResponse.dto";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  @Post("login")
  @ApiOperation({ summary: "It authenticates the users" })
  @ApiOkResponse({ type: LoginResponseDTO })
  @ApiBadRequestResponse({ type: LoginBadRequestResponseDto })
  public async login(@Body() body: LoginBodyDTO): Promise<LoginResponseDTO> {
    console.log(body);
    return {
      message: "User successfully logged",
      accessToken: "",
      refreshToken: "",
    };
  }
}
