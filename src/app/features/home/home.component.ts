import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootState } from '../../core/store/root.state';
import { RecipeTile } from '../../shared/components/recipe-tile/recipe-tile.component';
import { Observable } from 'rxjs';
import { selectLatestRecipes } from '../../core/store/recipes/recipes.selectors';
import { GetLatestRecipes } from '../../core/store/recipes/recipes.actions';
import { Recipe } from '../../core/models/recipes.model';
import { filter, map } from 'rxjs/operators';
import { parseToRecipeTiles } from '../../core/utility/parse-to-recipe-tiles';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  latestRecipes$: Observable<RecipeTile[]> = this.store
    .select(selectLatestRecipes)
    .pipe(
      filter(Boolean),
      map((recipes: Recipe[]) =>
        recipes.map((recipe) => parseToRecipeTiles(recipe))
      )
    );

  constructor(private store: Store<RootState>) {}

  ngOnInit(): void {
    this.store.dispatch(GetLatestRecipes());
  }
}
