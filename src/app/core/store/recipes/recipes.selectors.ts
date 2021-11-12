import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RecipeState } from './recipes.reducer';

export const RecipesFeature = createFeatureSelector('recipes');

export const selectLatestRecipes = createSelector(
  RecipesFeature,
  (recipeState: RecipeState) => recipeState,
  ({ latestRecipes }) => latestRecipes
);

export const selectAllRecipes = createSelector(
  RecipesFeature,
  (recipeState: RecipeState) => recipeState,
  ({ allRecipes }) => allRecipes
);

export const selectPersonalRecipes = createSelector(
  RecipesFeature,
  (recipeState: RecipeState) => recipeState,
  ({ personalRecipes }) => personalRecipes
);

export const selectDetailedRecipes = createSelector(
  RecipesFeature,
  (recipeState: RecipeState) => recipeState,
  ({ detailedRecipe }) => detailedRecipe
);
