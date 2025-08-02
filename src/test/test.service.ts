import { Injectable } from '@nestjs/common';
import { StatusResponse } from './dto/status.dto';

@Injectable()
export class TestService {
  getStatus(): StatusResponse {
    return {
      ok: true,
      message: 'NestJS 정상 작동 중입니다.',
    };
  }
}
