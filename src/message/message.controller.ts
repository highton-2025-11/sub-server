import { Controller } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly demoService: MessageService) {}

  getHello(): string {
    return this.demoService.getHello();
  }
}
