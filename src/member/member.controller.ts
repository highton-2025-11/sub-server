import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { MemberService } from './member.service';
import { LoginRequest, LoginResponse } from './dto/login.dto';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { GetMyInfoRequest, GetMyInfoResponse } from './dto/getMyInfo.dto';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post('/login')
  @ApiCreatedResponse({ type: LoginResponse })
  login(@Body() req: LoginRequest): Promise<LoginResponse> {
    return this.memberService.login(req);
  }

  @Get()
  @ApiCreatedResponse({ type: GetMyInfoResponse })
  getMyInfo(@Query() req: GetMyInfoRequest): Promise<GetMyInfoResponse> {
    return this.memberService.getMyInfo(req);
  }
}
