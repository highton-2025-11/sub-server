import { Body, Controller, Post } from '@nestjs/common';
import { FollowingService } from './following.service';
import { CreateFollowingRequest, CreateFollowingResponse } from './dto/createFollowing.dto';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('following')
export class FollowingController {
  constructor(private readonly followService: FollowingService) {}

  @Post('/create')
  @ApiCreatedResponse({ type: CreateFollowingResponse })
  createFollowing(
    @Body() req: CreateFollowingRequest,
  ): Promise<CreateFollowingResponse> {
    return this.followService.createFollowing(req);
  }
}
