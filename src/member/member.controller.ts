import { Body, Controller, Post } from '@nestjs/common';
import { MemberService } from './member.service';
import { LoginRequest, LoginResponse } from './dto/login.dto';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post('/login')
  @ApiCreatedResponse({ type: LoginResponse })
  login(@Body() req: LoginRequest): Promise<LoginResponse> {
    return this.memberService.login(req);
  }
}
