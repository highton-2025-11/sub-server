import { Injectable } from '@nestjs/common';
import { LoginRequest, LoginResponse } from './dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';
import { Repository } from 'typeorm';
import { GetMyInfoRequest, GetMyInfoResponse } from './dto/getMyInfo.dto';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private readonly members: Repository<Member>,
  ) {}

  async login(req: LoginRequest): Promise<LoginResponse> {
    if (req == null || req.username == null || req.password == null) {
      return {
        ok: false,
      };
    }
    const user = await this.members.findOne({
      where: {
        username: req.username,
        password: req.password,
      },
      relations: ['followings'],
    });
    if (user == null) {
      return {
        ok: false,
      };
    }
    return {
      ok: true,
      user,
    };
  }

  async getMyInfo(req: GetMyInfoRequest): Promise<GetMyInfoResponse> {
    if (req == null || req.userId == null) {
      return {
        ok: false,
      };
    }
    const user = await this.members.findOne({ where: { id: req.userId }, relations: ['followings'] });
    if (user == null) {
      return {
        ok: false,
      };
    }
    return {
      ok: true,
      user,
    };
  }
}
