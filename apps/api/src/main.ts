/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import {Logger, ValidationPipe} from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import {ConfigService} from "./app/config/config.service";

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import helmet from 'helmet';





async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  if (!ConfigService.isProduction()) {
    const config = new DocumentBuilder()
      .setTitle('NestJs Backend Api')
      .setDescription('The nestjs swagger')
      .setVersion('1.0')
      .addBearerAuth()
      .addTag('Swagger')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('doc', app, document);
  }
  app.use(
    helmet({
      contentSecurityPolicy: false,
    }),
  );
  app.enableCors({ credentials: true, origin: true });

  const configurationService = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(configurationService.expressPort);

  Logger.log(`🚀 Application is running on: http://localhost: ${configurationService.expressPort}`);


}

(async () => {
  try {
    await bootstrap();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();


