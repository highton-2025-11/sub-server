import { Member } from '../entities/member.entity';
import { ApiProperty } from '@nestjs/swagger';

export class LoginRequest {
  @ApiProperty({ example: 'kwon' })
  username: string;
  @ApiProperty({ example: '1234' })
  password: string;
}
