import { Injectable } from '@nestjs/common';
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

  async createFollowing(
    req: CreateFollowingRequest,
  ): Promise<CreateFollowingResponse> {
    if (
      req == null ||
      req.from == null ||
      req.to == null ||
      req.from == req.to
    ) {
      return {
        ok: false,
      };
    }
    const fromMember = await this.members.findOne({
      where: { username: req.from },
    });
    const toMember = await this.members.findOne({
      where: { username: req.to },
    });
    if (fromMember == null || toMember == null) {
      return { ok: false };
    }
    const isExist = await this.followings.exists({
      where: { from: fromMember, to: toMember },
    });
    if (isExist) {
      return { ok: false };
    }
    const newFollowing = new Following();
    newFollowing.from = fromMember;
    newFollowing.to = toMember;
    await this.followings.save(newFollowing);
    return {
      ok: true,
    };
  }
}
