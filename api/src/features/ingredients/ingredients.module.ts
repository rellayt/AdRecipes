import { Module } from '@nestjs/common';
import { FirebaseService } from '../../database/services/firebase.service';
import { IngredientsService } from './ingredients.service';

const collectionNameToken = {
  provide: 'collectionName',
  useValue: 'ingredients',
};

@Module({
  providers: [IngredientsService, FirebaseService, collectionNameToken],
  exports: [collectionNameToken],
})
export class RecipesModule {}
