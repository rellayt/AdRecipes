import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { RootState } from '../../core/store/root.state';
import { Store } from '@ngrx/store';
import { GetDetailedRecipe } from '../../core/store/recipes/recipes.actions';
import { selectDetailedRecipes } from '../../core/store/recipes/recipes.selectors';
import { Observable } from 'rxjs';
import { Recipe } from '../../core/models/recipes.model';
import { map } from 'rxjs/operators';
import { isNil } from '../../core/utility/is-null-or-undefined';

@UntilDestroy()
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe$: Observable<Recipe> = this.store.select(selectDetailedRecipes).pipe(
    map((recipe: Recipe) => ({
      ...recipe,
      preparingSteps: RecipeDetailsComponent.parsePreparingSteps(
        recipe?.preparingSteps
      ),
    }))
  );

  constructor(
    private store: Store<RootState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(untilDestroyed(this))
      .subscribe(({ id }) => this.store.dispatch(GetDetailedRecipe({ id })));
  }

  private static parsePreparingSteps(
    value: string[] | string | undefined
  ): string[] {
    return isNil(value) || typeof value === 'string' ? [] : value;
  }
}
