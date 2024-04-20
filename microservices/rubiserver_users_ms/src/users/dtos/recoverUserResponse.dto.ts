import { ApiProperty } from '@nestjs/swagger';
import { ResponseDTO } from 'src/infra/shared/dtos/response.dto';
import { UserDto } from './user.dto';

export class RecoverUserResponseDTO extends ResponseDTO {
  @ApiProperty({
    description: "The recovered user's data",
  })
  readonly user: UserDto;
}
