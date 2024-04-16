import { ApiProperty } from '@nestjs/swagger';
import User from '../models/user.model';
import { NewUserResponseDTO } from './newUserResponse.dto';

export class DeleteUserResponseDTO extends NewUserResponseDTO {
  @ApiProperty({
    description: "The deleted user's data",
  })
  readonly user: User;
}
