import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getNotification(){
    const data = "welcome to notifications"
    console.log("welcome to notifications")
    return data; 
  }
}
