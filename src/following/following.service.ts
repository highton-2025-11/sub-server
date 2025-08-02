import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Following } from './entities/following.entity';
import { CreateFollowingRequest, CreateFollowingResponse } from './dto/createFollowing.dto';
import { Member } from '../member/entities/member.entity';

@Injectable()
export class FollowingService {
  constructor(
    @InjectRepository(Following)
    private readonly followings: Repository<Following>,
    @InjectRepository(Member)
    private readonly members: Repository<Member>,
  ) {}

  async createFollowing(req: CreateFollowingRequest) {
    if (
      req == null ||
      req.from == null ||
      req.to == null ||
      req.from == req.to
    ) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Invalid Body',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    const fromMember = await this.members.findOne({
      where: { username: req.from },
    });
    const toMember = await this.members.findOne({
      where: { username: req.to },
    });
    if (fromMember == null || toMember == null) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'User not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    const isExist = await this.followings.exists({
      where: { from: fromMember, to: toMember },
    });
    if (isExist) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Already followed',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    const newFollowing = new Following();
    newFollowing.from = fromMember;
    newFollowing.to = toMember;
    await this.followings.save(newFollowing);
  }
}
