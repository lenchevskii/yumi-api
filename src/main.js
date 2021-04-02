import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const { PORT } = require('dotenv').config().parsed;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => console.log(`Server listen on port: ${PORT}`));
}
bootstrap();
