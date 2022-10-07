import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';


@Injectable()
export class AppService {
  constructor(@Inject('NOTIFICATIONS') private client: ClientProxy){}
  async publishEvent(){
    console.log("Emitted")
    return this.client.emit('notifications', {'id': "no0123", 'text': "Done successfully"})
  }
  
}
