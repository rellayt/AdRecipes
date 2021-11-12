import { authReducer } from './auth/auth.reducer';
import { AuthEffects } from './auth/auth.effects';
import { RecipesEffects } from './recipes/recipes.effects';
import { recipesReducer } from './recipes/recipes.reducer';

export const appReducer = {
  auth: authReducer,
  recipe: recipesReducer,
};

export const appEffects = [AuthEffects, RecipesEffects];
