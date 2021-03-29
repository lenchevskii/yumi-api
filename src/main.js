const { NestFactory } = require('@nestjs/core');
const { YumiModule } = require('./yumi.module');

async function bootstrap() {
  const app = await NestFactory.create(YumiModule);
  await app.listen(3000);
}
bootstrap();
