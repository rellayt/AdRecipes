import * as auth from './auth/auth.reducer';
import * as recipes from './recipes/recipes.reducer';

export interface RootState {
  auth: auth.AuthState;
  recipes: recipes.RecipeState;
}
