import { Injectable } from '@nestjs/common';
import { LoginRequest, LoginResponse } from './dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private readonly members: Repository<Member>,
  ) {}

  async login(req: LoginRequest): Promise<LoginResponse> {
    if (req.username == null || req.password == null) {
      return {
        ok: false,
      };
    }
    const user = await this.members.findOne({
      where: {
        username: req.username,
        password: req.password,
      },
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
}
