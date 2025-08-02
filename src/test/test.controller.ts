import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';
import { StatusResponse } from './dto/status.dto';
import { ApiCreatedResponse } from '@nestjs/swagger';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  @ApiCreatedResponse({ type: StatusResponse })
  getStatus(): StatusResponse {
    return this.testService.getStatus();
  }
}
