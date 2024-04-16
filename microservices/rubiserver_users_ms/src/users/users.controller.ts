import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
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
import { newUserRequestDTO } from './dtos/newUserRequest.dto';
import { NewUserResponseDTO } from './dtos/newUserResponse.dto';
import User from './models/user.model';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'It handles getting all users' })
  @ApiOkResponse({ type: [User] })
  public async findAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'It handles getting a user through his id' })
  @ApiOkResponse({ type: User })
  @ApiNotFoundResponse({ type: NotFoundException })
  @ApiBadRequestResponse({ type: ApiBadRequestResponse })
  public async findOne(@Param('id') id: string): Promise<User> {
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
    @Body() body: newUserRequestDTO,
  ): Promise<NewUserResponseDTO> {
    try {
      return await this.usersService.new(body);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'It handles deleting a user through his id ' })
  @ApiOkResponse({ type: User })
  @ApiNotFoundResponse({ type: NotFoundException })
  @ApiBadRequestResponse({ type: ApiBadRequestResponse })
  public async delete(@Param('id') id: string): Promise<DeleteUserResponseDTO> {
    try {
      return await this.usersService.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
