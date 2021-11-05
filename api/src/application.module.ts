import { Module } from '@nestjs/common';
import { ApplicationController } from './application.controller';
import { FeaturesModule } from './features/features.module';

@Module({
  imports: [FeaturesModule],
  controllers: [ApplicationController],
})
export class ApplicationModule {}
