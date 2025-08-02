import { Member } from '../entities/member.entity';
import { ApiProperty } from '@nestjs/swagger';

export class LoginRequest {
  username: string;
  password: string;
}

export class LoginResponse {
  @ApiProperty()
  ok: boolean;

  @ApiProperty()
  user?: Member;
}