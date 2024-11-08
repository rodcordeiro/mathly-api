import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDTO {

  @ApiProperty({ required: false })
  username: string;
}
