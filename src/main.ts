import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SetupSwagger } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SetupSwagger(app);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
