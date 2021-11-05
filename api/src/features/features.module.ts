import { Module } from '@nestjs/common';
import { RecipesModule } from './recipes/recipes.module';
import { DatabaseModule } from '../database/database.module';
import { FirebaseService } from '../database/services/firebase.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DatabaseModule, RecipesModule, AuthModule, UsersModule],
  controllers: [],
  providers: [FirebaseService],
})
export class FeaturesModule {}
