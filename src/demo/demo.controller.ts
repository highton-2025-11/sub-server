import { Controller } from '@nestjs/common';
import { DemoService } from './demo.service';

@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  getHello(): string {
    return this.demoService.getHello();
  }
}
