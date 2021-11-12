import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { RootState } from '../../core/store/root.state';
import { Store } from '@ngrx/store';
import { GetDetailedRecipe } from '../../core/store/recipes/recipes.actions';
import { selectDetailedRecipes } from '../../core/store/recipes/recipes.selectors';
import { Observable } from 'rxjs';
import { Recipe } from '../../core/models/recipes.model';

@UntilDestroy()
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe$: Observable<Recipe> = this.store.select(selectDetailedRecipes);

  constructor(
    private store: Store<RootState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(untilDestroyed(this))
      .subscribe(({ id }) => this.store.dispatch(GetDetailedRecipe({ id })));
  }
}
