import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { FirebaseService } from '../../database/services/firebase.service';
import { UsersService } from '../users/users.service';

const collectionNameToken = { provide: 'collectionName', useValue: 'recipes' };

@Module({
  controllers: [RecipesController],
  providers: [
    RecipesService,
    FirebaseService,
    collectionNameToken,
    UsersService,
  ],
  exports: [collectionNameToken],
})
export class RecipesModule {}
