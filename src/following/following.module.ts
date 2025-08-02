import { Module } from '@nestjs/common';
import { FollowingService } from './following.service';
import { FollowingController } from './following.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Following } from './entities/following.entity';
import { Member } from '../member/entities/member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Following, Member])],
  controllers: [FollowingController],
  providers: [FollowingService],
})
export class FollowingModule {}
