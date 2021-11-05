import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { FirebaseAuthService } from '../../database/services/firebase-auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, FirebaseAuthService],
})
export class AuthModule {}
