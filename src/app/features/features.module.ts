import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PersonalRecipesComponent } from './personal-recipes/personal-recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    RecipeListComponent,
    AddRecipeComponent,
    RecipeDetailsComponent,
    PersonalRecipesComponent,
  ],
  imports: [SharedModule],
  providers: [],
})
export class FeaturesModule {}