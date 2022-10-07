import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  publish(): any {
    return this.appService.publishEvent(); 
  }
}
