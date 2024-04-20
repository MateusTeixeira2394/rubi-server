import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { DeleteUserResponseDTO } from './dtos/deleteUserResponse.dto';
import { NewUserRequestDTO } from './dtos/newUserRequest.dto';
import { NewUserResponseDTO } from './dtos/newUserResponse.dto';
import { RecoverUserRequestDTO } from './dtos/recoverUserRequest.dto';
import { RecoverUserResponseDTO } from './dtos/recoverUserResponse.dto';
import { UserDto } from './dtos/user.dto';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'It handles getting all users' })
  @ApiOkResponse({ type: [UserDto] })
  public async findAll(): Promise<UserDto[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'It handles getting a user through his id' })
  @ApiOkResponse({ type: UserDto })
  @ApiNotFoundResponse({ type: NotFoundException })
  @ApiBadRequestResponse({ type: ApiBadRequestResponse })
  public async findOne(@Param('id') id: string): Promise<UserDto> {
    try {
      return await this.usersService.findById(id);
    } catch (error) {
      throw error;
    }
  }

  @Post()
  @ApiOperation({ summary: 'It handles creating a new user' })
  @ApiOkResponse({ type: NewUserResponseDTO })
  @ApiNotFoundResponse({ type: NotFoundException })
  @ApiBadRequestResponse({ type: ApiBadRequestResponse })
  public async new(
    @Body() body: NewUserRequestDTO,
  ): Promise<NewUserResponseDTO> {
    try {
      return await this.usersService.new(body);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'It handles deleting a user through his id ' })
  @ApiOkResponse({ type: DeleteUserResponseDTO })
  @ApiNotFoundResponse({ type: NotFoundException })
  @ApiBadRequestResponse({ type: ApiBadRequestResponse })
  public async delete(@Param('id') id: string): Promise<DeleteUserResponseDTO> {
    try {
      return await this.usersService.delete(id);
    } catch (error) {
      throw error;
    }
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'It handles recovering a user through his id and password',
  })
  @ApiOkResponse({ type: DeleteUserResponseDTO })
  @ApiNotFoundResponse({ type: NotFoundException })
  @ApiBadRequestResponse({ type: ApiBadRequestResponse })
  public async recover(
    @Param('id') id: string,
    @Body() { password }: RecoverUserRequestDTO,
  ): Promise<RecoverUserResponseDTO> {
    try {
      return await this.usersService.recover(id, password);
    } catch (error) {
      throw error;
    }
  }
}
