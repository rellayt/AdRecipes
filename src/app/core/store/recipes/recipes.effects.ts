import { Observable, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { RECIPE_ADD_ERROR, RECIPE_ADDED } from '../../config/snackbar.config';
import { TypedAction } from '@ngrx/store/src/models';
import {
  CreateRecipe,
  CreateRecipeFailure,
  CreateRecipeSuccess,
  GetAllRecipes,
  GetAllRecipesFailure,
  GetAllRecipesSuccess,
  GetDetailedRecipe,
  GetDetailedRecipeFailure,
  GetDetailedRecipeSuccess,
  GetLatestRecipes,
  GetLatestRecipesFailure,
  GetLatestRecipesSuccess,
  GetPersonalRecipes,
  GetPersonalRecipesFailure,
  GetPersonalRecipesSuccess,
} from './recipes.actions';
import { Recipe, RecipeEntry } from '../../models/recipes.model';
import { RecipesService } from '../../services/recipes.service';
import { SnackBarService } from '../../../shared/services/snackbar.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class RecipesEffects {
  constructor(
    private actions$: Actions,
    private snackbarService: SnackBarService,
    private recipesService: RecipesService,
    private cookieService: CookieService
  ) {}

  create: Observable<TypedAction<string>> = createEffect(() =>
    this.actions$.pipe(
      ofType(CreateRecipe),
      map(({ payload }) => payload),
      filter(Boolean),
      switchMap(({ image, ...recipe }: RecipeEntry) => {
        return this.recipesService.create(recipe, image).pipe(
          tap(() => this.snackbarService.open(RECIPE_ADDED)),
          map((recipe: Recipe) => CreateRecipeSuccess({ recipe })),
          catchError((error) => {
            this.snackbarService.open(RECIPE_ADD_ERROR);
            return of(CreateRecipeFailure({ error: error }));
          })
        );
      })
    )
  );

  getAll: Observable<TypedAction<string>> = createEffect(() =>
    this.actions$.pipe(
      ofType(GetAllRecipes),
      filter(Boolean),
      switchMap(() => {
        return this.recipesService.get().pipe(
          map((recipes: Recipe[]) => GetAllRecipesSuccess({ recipes })),
          catchError((error) => {
            return of(GetAllRecipesFailure({ error: error }));
          })
        );
      })
    )
  );

  getLatest: Observable<TypedAction<string>> = createEffect(() =>
    this.actions$.pipe(
      ofType(GetLatestRecipes),
      filter(Boolean),
      switchMap(() => {
        return this.recipesService.get().pipe(
          map((recipes: Recipe[]) => GetLatestRecipesSuccess({ recipes })),
          catchError((error) => {
            return of(GetLatestRecipesFailure({ error: error }));
          })
        );
      })
    )
  );

  getPersonalRecipes: Observable<TypedAction<string>> = createEffect(() =>
    this.actions$.pipe(
      ofType(GetPersonalRecipes),
      filter(Boolean),
      switchMap(() => {
        return this.recipesService.get().pipe(
          map((recipes: Recipe[]) => {
            const userId = this.cookieService.get('userId');
            return GetPersonalRecipesSuccess({ recipes, userId });
          }),
          catchError((error) => {
            return of(GetPersonalRecipesFailure({ error: error }));
          })
        );
      })
    )
  );

  getDetailedRecipe: Observable<TypedAction<string>> = createEffect(() =>
    this.actions$.pipe(
      ofType(GetDetailedRecipe),
      filter(Boolean),
      map(({ id }) => id),
      switchMap((id) => {
        return this.recipesService.findById(id).pipe(
          map((recipe: Recipe) => GetDetailedRecipeSuccess({ recipe })),
          catchError((error) => {
            return of(GetDetailedRecipeFailure({ error: error }));
          })
        );
      })
    )
  );
}
