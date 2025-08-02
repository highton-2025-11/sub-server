import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginRequest } from './dto/login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';
import { Repository } from 'typeorm';
import { GetMyInfoRequest } from './dto/getMyInfo.dto';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private readonly members: Repository<Member>,
  ) {}

  async login(req: LoginRequest): Promise<Member> {
    if (req == null || req.username == null || req.password == null) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid Body',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    const user = await this.members.findOne({
      where: {
        username: req.username,
        password: req.password,
      },
    });
    if (user == null) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'User not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return user;
  }

  async getMyInfo(req: GetMyInfoRequest): Promise<Member> {
    if (req == null || req.userId == null) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid Body',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    const user = await this.members.findOne({ where: { id: req.userId } });
    if (user == null) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'User not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return user;
  }
}
