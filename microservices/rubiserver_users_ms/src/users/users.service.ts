import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import User from './models/user.model';
import { NewUserResponseDTO } from './dtos/newUserResponse.dto';
import { newUserRequestDTO } from './dtos/newUserRequest.dto';
import * as bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { DeleteUserResponseDTO } from './dtos/deleteUserResponse.dto';

@Injectable()
export class UsersService {
  private readonly users: User[] = [];

  public async findAll(): Promise<User[]> {
    return await this.users.map((user) => {
      delete user.hashedPassword;
      return user;
    });
  }

  public async findById(id: string): Promise<User> {
    const user: User = await this.users.find(
      (currentUser) => currentUser.id === id,
    );

    if (!user) throw new NotFoundException('No user has found');

    return user;
  }

  public async new({
    name,
    email,
    confirmationPassword,
    password,
    roleId,
  }: newUserRequestDTO): Promise<NewUserResponseDTO> {
    if (password !== confirmationPassword) {
      throw new BadRequestException(
        'The confirmation password does not match the entered password',
      );
    }

    try {
      const saltRounds: number = 10;
      const hashedPassword: string = await bcrypt.hash(password, saltRounds);

      const user: User = {
        id: uuidv4(),
        name,
        email,
        roleId,
        hashedPassword,
      };

      this.users.push(user);

      return {
        message: 'User has successfully created.',
        statusCode: 200,
        user,
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  public async delete(id: string): Promise<DeleteUserResponseDTO> {
    try {
      const index: number = this.users.findIndex(
        (currrentUser) => currrentUser.id === id,
      );

      if (index === -1) throw new NotFoundException('No user was found');

      const user: User = this.users.splice(index, 1)[0];

      return {
        message: 'User was successfully deleted',
        statusCode: 200,
        user,
      };
    } catch (error) {
      throw error;
    }
  }
}
