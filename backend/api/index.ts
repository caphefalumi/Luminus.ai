import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';

let app;

async function bootstrap() {
  if (!app) {
    app = await NestFactory.create(AppModule);
    
    // Enable CORS
    app.enableCors({
      origin: true,
      credentials: true,
    });
    
    await app.init();
  }
  return app;
}

export default async (req, res) => {
  const server = await bootstrap();
  return server.getHttpAdapter().getInstance()(req, res);
};
