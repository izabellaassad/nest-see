import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Gera a instância de uma aplicação
  const app = await NestFactory.create(AppModule);
  // Aplica o listen para abrir na porta 3000
  await app.listen(3000);
}
bootstrap();
