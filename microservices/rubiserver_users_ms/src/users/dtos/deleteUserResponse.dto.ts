import { ApiProperty } from '@nestjs/swagger';
import { ResponseDTO } from 'src/infra/shared/dtos/response.dto';
import { UserDto } from './user.dto';

export class DeleteUserResponseDTO extends ResponseDTO {
  @ApiProperty({
    description: "The deleted user's data",
  })
  readonly user: UserDto;
}
