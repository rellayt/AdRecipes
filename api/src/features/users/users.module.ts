import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { FirebaseAuthService } from '../../database/services/firebase-auth.service';

@Module({
  providers: [UsersService, FirebaseAuthService],
})
export class UsersModule {}
