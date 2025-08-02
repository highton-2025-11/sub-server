import { Controller } from '@nestjs/common';
import { MemberService } from './member.service';

@Controller('message')
export class MemberController {
  constructor(private readonly demoService: MemberService) {}

  getHello(): string {
    return this.demoService.getHello();
  }
}
