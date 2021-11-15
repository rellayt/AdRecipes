import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { RecipesModule } from './recipes/recipes.module';
import { DatabaseModule } from '../database/database.module';
import { FirebaseService } from '../database/services/firebase.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JwtTokenMiddleware } from '../middlewares/jwt-token.middleware';
import { JwtTokenService } from './auth/jwt-token.service';
import { CoreModule } from '../../../src/app/core/core.module';

@Module({
  imports: [DatabaseModule, CoreModule, RecipesModule, AuthModule, UsersModule],
  controllers: [],
  providers: [FirebaseService, JwtTokenService],
})
export class FeaturesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(JwtTokenMiddleware)
      .forRoutes({ path: 'recipes', method: RequestMethod.POST }, 'auth/me');
  }
}
