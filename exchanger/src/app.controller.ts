import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @MessagePattern('notifications')
  getNotifications(){
    return this.appService.getNotification(); 
  }
// getNotifications(@Payload() data: number[], @Ctx() context: RedisContext) {
//   console.log(`Channel: ${context.getChannel()}`);
// }
  
}
