import { Body, Controller, Post } from "@nestjs/common";
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger";
import SignInDTO from "./dtos/signIn.dto";
import SignInResponseDTO from "./dtos/signInResponse.dto";
import SignInBadRequestResponseDto from "./dtos/signInBadRequestResponse.dto";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  @Post("signin")
  @ApiOperation({ summary: "It authenticates the users" })
  @ApiOkResponse({ type: SignInResponseDTO })
  @ApiBadRequestResponse({ type: SignInBadRequestResponseDto })
  public async login(@Body() body: SignInDTO): Promise<SignInResponseDTO> {
    console.log(body);
    return {
      message: "User successfully logged",
      accessToken: "",
      refreshToken: "",
    };
  }
}
