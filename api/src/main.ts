import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './application.module';
import { Logger } from '@nestjs/common';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './database/config/firebase-config';

async function bootstrap() {
  const appOptions = { cors: true };
  const app = await NestFactory.create(ApplicationModule, appOptions);
  initializeApp(firebaseConfig);
  app.setGlobalPrefix('api');
  const logger = new Logger('App');
  await app.listen(3000);
  logger.log('Application started on port 3000');
}

bootstrap().then();
