import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from './user.dto';
import { ResponseDTO } from 'src/infra/shared/dtos/response.dto';

export class NewUserResponseDTO extends ResponseDTO {
  @ApiProperty({
    description: 'The created user data',
  })
  readonly user: UserDto;
}
