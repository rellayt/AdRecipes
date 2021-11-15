import { createReducer, on } from '@ngrx/store';
import { Recipe } from '../../models/recipes.model';
import {
  CreateRecipe,
  CreateRecipeFailure,
  CreateRecipeSuccess,
  GetAllRecipes,
  GetAllRecipesFailure,
  GetAllRecipesSuccess,
  GetDetailedRecipeFailure,
  GetDetailedRecipeSuccess,
  GetLatestRecipes,
  GetLatestRecipesFailure,
  GetLatestRecipesSuccess,
  GetPersonalRecipes,
  GetPersonalRecipesFailure,
  GetPersonalRecipesSuccess,
} from './recipes.actions';

export interface RecipeState {
  myRecipes: Recipe[];
  allRecipes: Recipe[];
  errorMessage: string | null;
  latestRecipes: Recipe[] | null;
  detailedRecipe: Recipe | null;
  personalRecipes: Recipe[] | null;
  recipesProcessing: boolean;
}

export const initialState: RecipeState = {
  myRecipes: [],
  allRecipes: [],
  errorMessage: null,
  latestRecipes: [],
  detailedRecipe: null,
  personalRecipes: [],
  recipesProcessing: false,
};

const recipesReducerInternal = createReducer(
  initialState,
  on(
    CreateRecipe,
    GetAllRecipes,
    GetLatestRecipes,
    GetPersonalRecipes,
    (state) => {
      return { ...state, recipesProcessing: true };
    }
  ),
  on(CreateRecipeSuccess, (state, { recipe }) => {
    return { ...state, recipesProcessing: false, detailedRecipe: recipe };
  }),
  on(GetAllRecipesSuccess, GetLatestRecipesSuccess, (state, { recipes }) => {
    const latestRecipes = [...recipes]
      .sort(
        (firstRecipe, secondRecipe) =>
          secondRecipe.createdAt.getTime() - firstRecipe.createdAt.getTime()
      )
      .slice(0, 3);
    return {
      ...state,
      recipesProcessing: false,
      latestRecipes,
      allRecipes: recipes,
    };
  }),
  on(
    CreateRecipeFailure,
    GetAllRecipesFailure,
    GetLatestRecipesFailure,
    GetDetailedRecipeFailure,
    GetPersonalRecipesFailure,
    (state, { error }) => {
      return { ...state, errorMessage: error };
    }
  ),
  on(GetPersonalRecipesSuccess, (state, { recipes, userId }) => {
    const personalRecipes = recipes.filter(({ userId: id }) => id === userId);
    return {
      ...state,
      recipesProcessing: false,
      personalRecipes,
    };
  }),
  on(GetDetailedRecipeSuccess, (state, { recipe }) => {
    return {
      ...state,
      detailedRecipe: recipe,
    };
  })
);

export function recipesReducer(state, action) {
  return recipesReducerInternal(state, action);
}
