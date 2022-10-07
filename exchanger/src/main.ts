import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Transport, MicroserviceOptions} from '@nestjs/microservices'

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3001);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.REDIS,
    options: {
      host: 'localhost',
      port: 6379,
    },
  });
  await app.listen()
}
bootstrap();
