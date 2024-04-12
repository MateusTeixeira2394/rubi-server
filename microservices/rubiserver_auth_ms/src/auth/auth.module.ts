import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersModule } from "src/users/users.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: "this_secret_must_be_imported_from_environment_variable",
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
