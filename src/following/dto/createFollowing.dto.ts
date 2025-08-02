import { ApiProperty } from '@nestjs/swagger';

export class CreateFollowingRequest {
  @ApiProperty({ description: 'following을 생성하는 유저의 이름' })
  from: string;

  @ApiProperty({ description: 'following을 받는 유저의 이름' })
  to: string;
}

export class CreateFollowingResponse {
  @ApiProperty()
  ok: boolean;
}