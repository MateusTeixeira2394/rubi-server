import {
  Body,
  Controller,
  NotFoundException,
  Post,
  UnauthorizedException,
} from "@nestjs/common";
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from "@nestjs/swagger";
import { BadRequestDTO } from "../infra/shared/dto/badRequest.dto";
import { AuthService } from "./auth.service";
import { SignInDTO } from "./dtos/signIn.dto";
import SignInResponseDTO from "./dtos/signInResponse.dto";
import { RefreshTokenResponseDto } from "./dtos/refreshTokenResponse.dto";
import { RefreshTokenRequestDto } from "./dtos/refreshTokenRequest.dto";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("signin")
  @ApiOperation({ summary: "It authenticates the users" })
  @ApiOkResponse({ type: SignInResponseDTO })
  @ApiUnauthorizedResponse({
    type: UnauthorizedException,
  })
  @ApiNotFoundResponse({ type: NotFoundException })
  @ApiBadRequestResponse({ type: BadRequestDTO })
  public async login(@Body() body: SignInDTO): Promise<SignInResponseDTO> {
    try {
      return await this.authService.signIn(body);
    } catch (error: any) {
      throw error;
    }
  }

  @Post("refresh")
  @ApiOperation({
    summary:
      "It updates the user's session with a refresh token, avoiding him from sign in again",
  })
  @ApiOkResponse({ type: RefreshTokenResponseDto })
  @ApiUnauthorizedResponse({
    type: UnauthorizedException,
  })
  @ApiBadRequestResponse({ type: BadRequestDTO })
  public async refresh(
    @Body() body: RefreshTokenRequestDto
  ): Promise<RefreshTokenResponseDto> {
    try {
      return this.authService.refresh(body);
    } catch (error) {
      throw error;
    }
  }
}
