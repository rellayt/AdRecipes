import { createAction, props } from '@ngrx/store';
import { Recipe, RecipeEntry } from '../../models/recipes.model';

export const CreateRecipe = createAction(
  '[Recipe] Create',
  props<{ payload: RecipeEntry }>()
);

export const CreateRecipeSuccess = createAction(
  '[Recipe] Create Success',
  props<{ recipe: Recipe }>()
);

export const CreateRecipeFailure = createAction(
  '[Recipe] Create Failure',
  props<{ error: unknown }>()
);

export const GetAllRecipes = createAction('[Recipe] Get All Recipes');

export const GetAllRecipesSuccess = createAction(
  '[Recipe] Get All Recipes Success',
  props<{ recipes: Recipe[] }>()
);

export const GetAllRecipesFailure = createAction(
  '[Recipe] Get All Recipes Failure',
  props<{ error: unknown }>()
);

export const GetLatestRecipes = createAction('[Recipe] Get Latest Recipes');

export const GetLatestRecipesSuccess = createAction(
  '[Recipe] Get Latest Recipes Success',
  props<{ recipes: Recipe[] }>()
);

export const GetLatestRecipesFailure = createAction(
  '[Recipe] Get Latest Recipes Failure',
  props<{ error: unknown }>()
);

export const GetPersonalRecipes = createAction('[Recipe] Get Personal Recipes');

export const GetPersonalRecipesSuccess = createAction(
  '[Recipe] Get Personal Recipes Success',
  props<{ userId: string; recipes: Recipe[] }>()
);

export const GetPersonalRecipesFailure = createAction(
  '[Recipe] Get Personal Recipes Failure',
  props<{ error: unknown }>()
);

export const GetDetailedRecipe = createAction(
  '[Recipe] Get Detailed Recipe',
  props<{ id: string }>()
);

export const GetDetailedRecipeSuccess = createAction(
  '[Recipe] Get Detailed Recipe Success',
  props<{ recipe: Recipe }>()
);

export const GetDetailedRecipeFailure = createAction(
  '[Recipe] Get Detailed Recipe Failure',
  props<{ error: unknown }>()
);
