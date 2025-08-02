import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { MemberService } from './member.service';
import { LoginRequest } from './dto/login.dto';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { GetMyInfoRequest } from './dto/getMyInfo.dto';
import { Member } from './entities/member.entity';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post('/login')
  @ApiCreatedResponse({ type: Member })
  login(@Body() req: LoginRequest): Promise<Member> {
    return this.memberService.login(req);
  }

  @Get()
  @ApiCreatedResponse({ type: Member })
  getMyInfo(@Query() req: GetMyInfoRequest): Promise<Member> {
    return this.memberService.getMyInfo(req);
  }
}
