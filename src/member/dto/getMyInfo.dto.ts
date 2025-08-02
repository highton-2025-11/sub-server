import { ApiProperty } from '@nestjs/swagger';
import { Member } from '../entities/member.entity';

export class GetMyInfoRequest {
  @ApiProperty()
  userId: number;
}

export class GetMyInfoResponse {
  @ApiProperty()
  ok: boolean;

  @ApiProperty()
  user?: Member;
}