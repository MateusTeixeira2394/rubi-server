import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import User from "src/users/models/user.model";
import { UsersService } from "src/users/users.service";
import {
  ACCESS_TOKEN_EXPIRATION,
  MESSAGE_EXCEPTION_UNAUTHORIZED,
  MESSAGE_INVALID_REFRESH_TOKEN,
  MESSAGE_SUCCESS,
  REFRESH_TOKEN_EXPIRATION,
} from "./auth.constants";
import { RefreshTokenRequestDto } from "./dtos/refreshTokenRequest.dto";
import { RefreshTokenResponseDto } from "./dtos/refreshTokenResponse.dto";
import { SignInDTO } from "./dtos/signIn.dto";
import SignInResponseDTO from "./dtos/signInResponse.dto";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  public async signIn({
    email,
    password,
  }: SignInDTO): Promise<SignInResponseDTO> {
    const user: User = await this.usersService.findOne(email);

    if (user.hashedPassword !== password)
      throw new UnauthorizedException(MESSAGE_EXCEPTION_UNAUTHORIZED);

    try {
      return {
        message: MESSAGE_SUCCESS,
        accessToken: this.generateAccessToken(user),
        refreshToken: this.generateRefreshToken(user),
      };
    } catch (error) {
      throw error;
    }
  }

  public async refresh({
    refreshToken,
  }: RefreshTokenRequestDto): Promise<RefreshTokenResponseDto> {
    try {
      const user: User = this.jwtService.verify<User>(refreshToken);

      return {
        accessToken: this.generateAccessToken(user),
      };
    } catch (error) {
      throw new UnauthorizedException(MESSAGE_INVALID_REFRESH_TOKEN);
    }
  }

  private generateAccessToken({ id, name, email, roleId }: User): string {
    return this.jwtService.sign(
      { id, name, email, roleId },
      { expiresIn: ACCESS_TOKEN_EXPIRATION }
    );
  }

  private generateRefreshToken({ id, name, email, roleId }: User): string {
    return this.jwtService.sign(
      { id, name, email, roleId },
      { expiresIn: REFRESH_TOKEN_EXPIRATION }
    );
  }
}
