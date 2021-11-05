import { Global, Module } from '@nestjs/common';
import { FirebaseModule } from 'nestjs-firebase';
import { SERVICE_ACCOUNT } from './config/firebase-config';

@Global()
@Module({
  imports: [
    FirebaseModule.forRoot({
      googleApplicationCredential: SERVICE_ACCOUNT,
    }),
  ],
  providers: [],
})
export class DatabaseModule {}
