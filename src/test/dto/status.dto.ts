import { ApiProperty } from '@nestjs/swagger';

export class StatusResponse {
  @ApiProperty()
  ok: boolean;

  @ApiProperty()
  message: string;
}