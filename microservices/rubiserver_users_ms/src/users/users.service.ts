import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';
import { DeleteUserResponseDTO } from './dtos/deleteUserResponse.dto';
import { NewUserRequestDTO } from './dtos/newUserRequest.dto';
import { NewUserResponseDTO } from './dtos/newUserResponse.dto';
import { UserDto } from './dtos/user.dto';
import UserEntity from './user.entity';
import { RecoverUserResponseDTO } from './dtos/recoverUserResponse.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  private readonly users: UserEntity[] = [];

  public async findAll(): Promise<UserDto[]> {
    const users: UserEntity[] = await this.usersRepository.find({
      where: { isActive: true },
    });

    return users.map<UserDto>(({ id, name, email, roleId }) => {
      return {
        id,
        name,
        email,
        roleId,
      };
    });
  }

  public async findById(idParam: string): Promise<UserDto> {
    const user: UserEntity = await this.usersRepository.findOneBy({
      id: idParam,
    });

    if (!user) throw new NotFoundException('No user has found');

    if (!user.isActive)
      throw new BadRequestException('User has been deactivated');

    const { id, name, email, roleId } = user;

    return {
      id,
      name,
      email,
      roleId,
    };
  }

  public async new({
    name,
    email,
    confirmationPassword,
    password,
    roleId,
  }: NewUserRequestDTO): Promise<NewUserResponseDTO> {
    if (password !== confirmationPassword) {
      throw new BadRequestException(
        'The confirmation password does not match the entered password',
      );
    }

    const user: UserEntity = await this.findByEmail(email);

    if (user) {
      throw new BadRequestException(
        'This email is already being used. Please, try another one.',
      );
    }

    try {
      const saltRounds: number = 10;
      const hashedPassword: string = await bcrypt.hash(password, saltRounds);

      const resp: UserEntity = await this.usersRepository.save({
        name,
        email,
        roleId,
        hashedPassword,
      });

      return {
        message: 'User has successfully created.',
        statusCode: 200,
        user: {
          id: resp.id,
          name: resp.name,
          email: resp.email,
          roleId: resp.roleId,
        },
      };
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  public async delete(id: string): Promise<DeleteUserResponseDTO> {
    try {
      const user: UserDto = await this.findById(id);

      this.usersRepository.save({ id, isActive: false });

      return {
        message: 'User was successfully deleted',
        statusCode: 200,
        user,
      };
    } catch (error) {
      throw error;
    }
  }

  public async recover(
    id: string,
    password: string,
  ): Promise<RecoverUserResponseDTO> {
    try {
      const user: UserEntity = await this.usersRepository.findOneBy({ id });

      if (!user) throw new NotFoundException('No user has found');

      if (user.isActive)
        throw new BadRequestException('User is already activated');

      const passwordMatched: boolean = await bcrypt.compare(
        password,
        user.hashedPassword,
      );

      console.log('passwordMatched', passwordMatched);

      if (!passwordMatched) throw new BadRequestException('Wrong password');

      this.usersRepository.save({ id, isActive: true });

      return {
        message: 'User has successfully recovered',
        statusCode: 200,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          roleId: user.roleId,
        },
      };
    } catch (error) {
      return error;
    }
  }

  private findByEmail(email: string): Promise<UserEntity | null> {
    return this.usersRepository.findOneBy({ email });
  }
}
